import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  Footprints,
  Play,
  Pause,
  Plus,
  Undo2,
  Clock,
  CheckCircle2,
  AlertCircle,
  History,
  TrendingUp,
  ChevronRight,
  ArrowLeft,
  Info,
  Heart,
  ShieldAlert,
  Sparkles,
  StopCircle,
  Trash2,
} from "lucide-react";

export type SessionStatus = "completed" | "incomplete" | "ended_early";

export interface KickSession {
  id: string;
  date: string;
  startTime: number;
  endTime: number;
  durationSeconds: number;
  movementCount: number;
  target: number;
  status: SessionStatus;
  movementTimestamps: number[];
  notes?: string;
}

interface ActiveSessionState {
  id: string;
  startTime: number;
  lastResumeTime: number;
  accumulatedActiveSeconds: number;
  isPaused: boolean;
  movementTimestamps: number[];
  target: number;
}

const STORAGE_ACTIVE_SESSION = "astrobaby_kick_active_session";
const STORAGE_SESSIONS_HISTORY = "astrobaby_kick_sessions_history";
const MAX_SESSION_SECONDS = 120 * 60; // 120 minutes = 7200s
const TARGET_MOVEMENTS = 10;

export default function KickCounterView() {
  const { i18n } = useTranslation();
  const isHindi = i18n.language === "hi";

  const [uiState, setUiState] = useState<
    "intro" | "active" | "completed" | "incomplete" | "ended_early" | "history" | "details"
  >("intro");

  const [activeSession, setActiveSession] = useState<ActiveSessionState | null>(null);
  const [currentDurationSeconds, setCurrentDurationSeconds] = useState(0);

  const [sessionsHistory, setSessionsHistory] = useState<KickSession[]>([]);
  const [selectedSession, setSelectedSession] = useState<KickSession | null>(null);
  const [lastFinishedSession, setLastFinishedSession] = useState<KickSession | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 1. Load History and Active Session on mount
  useEffect(() => {
    try {
      const savedHistory = localStorage.getItem(STORAGE_SESSIONS_HISTORY);
      if (savedHistory) {
        setSessionsHistory(JSON.parse(savedHistory));
      }

      const savedActive = localStorage.getItem(STORAGE_ACTIVE_SESSION);
      if (savedActive) {
        const parsed: ActiveSessionState = JSON.parse(savedActive);
        setActiveSession(parsed);

        let totalActive = parsed.accumulatedActiveSeconds;
        if (!parsed.isPaused) {
          const now = Date.now();
          const runningDelta = Math.floor((now - parsed.lastResumeTime) / 1000);
          totalActive += Math.max(0, runningDelta);
        }

        setCurrentDurationSeconds(totalActive);

        if (totalActive >= MAX_SESSION_SECONDS) {
          handleAutoTimeout(parsed, totalActive);
        } else {
          setUiState("active");
        }
      }
    } catch (e) {
      console.error("Failed to load kick counter storage:", e);
    }
  }, []);

  const saveHistoryToStorage = (updatedHistory: KickSession[]) => {
    setSessionsHistory(updatedHistory);
    try {
      localStorage.setItem(STORAGE_SESSIONS_HISTORY, JSON.stringify(updatedHistory));
    } catch (e) {
      console.error("Failed to save kick sessions history:", e);
    }
  };

  const saveActiveSessionToStorage = (session: ActiveSessionState | null) => {
    setActiveSession(session);
    try {
      if (session) {
        localStorage.setItem(STORAGE_ACTIVE_SESSION, JSON.stringify(session));
      } else {
        localStorage.removeItem(STORAGE_ACTIVE_SESSION);
      }
    } catch (e) {
      console.error("Failed to save active kick session:", e);
    }
  };

  // Timer Effect
  useEffect(() => {
    if (activeSession && !activeSession.isPaused && uiState === "active") {
      timerRef.current = setInterval(() => {
        const now = Date.now();
        const delta = Math.floor((now - activeSession.lastResumeTime) / 1000);
        const total = activeSession.accumulatedActiveSeconds + delta;

        setCurrentDurationSeconds(total);

        if (total >= MAX_SESSION_SECONDS) {
          handleAutoTimeout(activeSession, total);
        }
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeSession, uiState]);

  // Handlers
  const handleStartCounting = () => {
    const now = Date.now();
    const newSession: ActiveSessionState = {
      id: "kick_" + now,
      startTime: now,
      lastResumeTime: now,
      accumulatedActiveSeconds: 0,
      isPaused: false,
      movementTimestamps: [],
      target: TARGET_MOVEMENTS,
    };

    saveActiveSessionToStorage(newSession);
    setCurrentDurationSeconds(0);
    setUiState("active");
  };

  const handleRecordMovement = () => {
    if (!activeSession || activeSession.isPaused) return;

    const now = Date.now();
    const updatedTimestamps = [...activeSession.movementTimestamps, now];
    const newCount = updatedTimestamps.length;

    const updatedSession: ActiveSessionState = {
      ...activeSession,
      movementTimestamps: updatedTimestamps,
    };

    saveActiveSessionToStorage(updatedSession);

    if (newCount >= TARGET_MOVEMENTS) {
      finishSession(updatedSession, "completed");
    }
  };

  const handleUndoMovement = () => {
    if (!activeSession || activeSession.movementTimestamps.length === 0) return;

    const updatedTimestamps = activeSession.movementTimestamps.slice(0, -1);
    const updatedSession: ActiveSessionState = {
      ...activeSession,
      movementTimestamps: updatedTimestamps,
    };

    saveActiveSessionToStorage(updatedSession);
  };

  const handlePause = () => {
    if (!activeSession || activeSession.isPaused) return;

    const now = Date.now();
    const delta = Math.floor((now - activeSession.lastResumeTime) / 1000);
    const newAccumulated = activeSession.accumulatedActiveSeconds + delta;

    const updatedSession: ActiveSessionState = {
      ...activeSession,
      isPaused: true,
      accumulatedActiveSeconds: newAccumulated,
      lastResumeTime: now,
    };

    saveActiveSessionToStorage(updatedSession);
    setCurrentDurationSeconds(newAccumulated);
  };

  const handleResume = () => {
    if (!activeSession || !activeSession.isPaused) return;

    const now = Date.now();
    const updatedSession: ActiveSessionState = {
      ...activeSession,
      isPaused: false,
      lastResumeTime: now,
    };

    saveActiveSessionToStorage(updatedSession);
  };

  const handleEndEarly = () => {
    if (!activeSession) return;
    finishSession(activeSession, "ended_early");
  };

  const handleAutoTimeout = (session: ActiveSessionState, totalSeconds: number) => {
    const finalDuration = Math.min(totalSeconds, MAX_SESSION_SECONDS);
    const completedRecord: KickSession = {
      id: session.id,
      date: new Date(session.startTime).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      startTime: session.startTime,
      endTime: Date.now(),
      durationSeconds: finalDuration,
      movementCount: session.movementTimestamps.length,
      target: TARGET_MOVEMENTS,
      status: "incomplete",
      movementTimestamps: session.movementTimestamps,
      notes: "Auto-stopped at 120-minute maximum limit.",
    };

    const updatedHistory = [completedRecord, ...sessionsHistory];
    saveHistoryToStorage(updatedHistory);
    saveActiveSessionToStorage(null);
    setLastFinishedSession(completedRecord);
    setUiState("incomplete");
  };

  const finishSession = (session: ActiveSessionState, status: SessionStatus) => {
    const now = Date.now();
    let finalDuration = session.accumulatedActiveSeconds;
    if (!session.isPaused) {
      finalDuration += Math.floor((now - session.lastResumeTime) / 1000);
    }

    const completedRecord: KickSession = {
      id: session.id,
      date: new Date(session.startTime).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
      startTime: session.startTime,
      endTime: now,
      durationSeconds: finalDuration,
      movementCount: session.movementTimestamps.length,
      target: TARGET_MOVEMENTS,
      status: status,
      movementTimestamps: session.movementTimestamps,
    };

    const updatedHistory = [completedRecord, ...sessionsHistory];
    saveHistoryToStorage(updatedHistory);
    saveActiveSessionToStorage(null);
    setLastFinishedSession(completedRecord);

    if (status === "completed") {
      setUiState("completed");
    } else if (status === "ended_early") {
      setUiState("ended_early");
    } else {
      setUiState("incomplete");
    }
  };

  const handleDeleteHistoryItem = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const filtered = sessionsHistory.filter((s) => s.id !== id);
    saveHistoryToStorage(filtered);
    if (selectedSession?.id === id) setSelectedSession(null);
  };

  // Stats calculation
  const stats = useMemo(() => {
    const completedSessions = sessionsHistory.filter((s) => s.status === "completed");
    if (completedSessions.length === 0) {
      return {
        hasStats: false,
        avgMinutes: 0,
        completedCount: 0,
        totalSessions: sessionsHistory.length,
        trendNotice: null as string | null,
      };
    }

    const totalSeconds = completedSessions.reduce((acc, curr) => acc + curr.durationSeconds, 0);
    const avgSeconds = totalSeconds / completedSessions.length;
    const avgMinutes = Math.round(avgSeconds / 60);

    let trendNotice: string | null = null;
    if (completedSessions.length >= 2) {
      const latest = completedSessions[0];
      const previousSessions = completedSessions.slice(1);
      const prevAvgSeconds =
        previousSessions.reduce((acc, curr) => acc + curr.durationSeconds, 0) / previousSessions.length;

      if (latest.durationSeconds > prevAvgSeconds * 1.35 && latest.durationSeconds - prevAvgSeconds > 600) {
        trendNotice = isHindi
          ? "यह सत्र आपके हाल ही में रिकॉर्ड किए गए सत्रों की तुलना में अधिक समय में पूरा हुआ।"
          : "This session took longer than your recent recorded sessions.";
      }
    }

    return {
      hasStats: true,
      avgMinutes,
      completedCount: completedSessions.length,
      totalSessions: sessionsHistory.length,
      trendNotice,
    };
  }, [sessionsHistory, isHindi]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const count = activeSession?.movementTimestamps.length || 0;
  const progressPercent = Math.min(100, (count / TARGET_MOVEMENTS) * 100);

  return (
    <div className="flex flex-col h-full text-[#172554] font-sans">
      {/* ── Subheader Navigation Bar ── */}
      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-pink-100/90 px-0.5">
        <div className="flex items-center gap-1.5">
          {uiState !== "intro" && uiState !== "active" && (
            <button
              type="button"
              onClick={() => {
                if (activeSession) setUiState("active");
                else setUiState("intro");
              }}
              className="p-1 rounded-lg hover:bg-pink-50 text-[#172554] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-md bg-pink-50 border border-pink-200 flex items-center justify-center">
              <Footprints className="w-3 h-3 text-[#EA3484]" />
            </div>
            <h3 className="font-bold text-xs sm:text-sm text-[#172554] tracking-tight">
              {isHindi ? "गर्भस्थ शिशु किक काउंटर" : "Fetal Movement Counter"}
            </h3>
          </div>
        </div>

        {/* History Switcher Button */}
        <div className="flex items-center gap-1">
          {uiState !== "history" && uiState !== "details" ? (
            <button
              type="button"
              onClick={() => setUiState("history")}
              className="flex items-center gap-1 text-[11px] font-semibold text-[#EA3484] bg-pink-50/90 hover:bg-pink-100 px-2.5 py-1 rounded-lg border border-pink-200/80 transition-all cursor-pointer shadow-2xs"
            >
              <History className="w-3 h-3 text-[#EA3484]" />
              <span>{isHindi ? "इतिहास" : "History"} ({sessionsHistory.length})</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                if (activeSession) setUiState("active");
                else setUiState("intro");
              }}
              className="text-[11px] font-semibold text-white bg-gradient-to-r from-[#EA3484] to-[#F45B8A] px-2.5 py-1 rounded-lg shadow-2xs hover:opacity-95 transition-all cursor-pointer"
            >
              {activeSession ? (isHindi ? "सक्रिय सत्र" : "Active Session") : (isHindi ? "नया सत्र" : "New Session")}
            </button>
          )}
        </div>
      </div>

      {/* ── STATE 1: INTRODUCTION & SAFETY ADVICE ── */}
      {uiState === "intro" && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3"
        >
          {/* Main Hero Card */}
          <div className="bg-gradient-to-br from-[#FFF5F9] via-[#FFFDFE] to-[#FFF8FD] rounded-2xl p-4 border border-pink-200/80 text-center shadow-2xs">
            {/* Animated Icon Avatar */}
            <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-[#EA3484] via-[#F45B8A] to-[#F43F5E] text-white flex items-center justify-center mx-auto mb-2.5 shadow-md shadow-pink-500/20">
              <Footprints className="w-6 h-6" />
            </div>

            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#EA3484] bg-pink-50 px-2 py-0.5 rounded-full border border-pink-200 mb-1">
              <Sparkles className="w-2.5 h-2.5" />
              {isHindi ? "वैदिक व मातृत्व देखभाल" : "Vedic & Maternity Care"}
            </span>

            <h4 className="font-bold text-sm sm:text-base text-[#172554] tracking-tight mt-1">
              {isHindi ? "शिशु की हलचल (किक) ट्रैक करें" : "Track Baby's Daily Kicks"}
            </h4>
            <p className="text-xs text-[#475569] mt-1 leading-relaxed font-normal">
              {isHindi
                ? "आरामदायक स्थिति में बैठें या बाईं करवट लेटें। 10 हलचलें (किक्स, रोल्स, फ्लटर्स) महसूस होने तक समय दर्ज करें।"
                : "Lie comfortably on your left side or sit relaxed. Count until you record 10 distinct kicks, rolls, or flutter movements."}
            </p>

            {/* Target & Time Badges */}
            <div className="grid grid-cols-2 gap-2 mt-3 text-left">
              <div className="bg-white/95 rounded-xl p-2.5 border border-pink-100 shadow-2xs">
                <span className="text-[10px] text-[#475569] block font-medium">Standard Target</span>
                <span className="text-xs font-bold text-[#EA3484]">10 Movements</span>
              </div>
              <div className="bg-white/95 rounded-xl p-2.5 border border-pink-100 shadow-2xs">
                <span className="text-[10px] text-[#475569] block font-medium">Max Window</span>
                <span className="text-xs font-bold text-[#172554]">Up to 120 Mins</span>
              </div>
            </div>

            {/* Start Button */}
            <button
              type="button"
              onClick={handleStartCounting}
              className="mt-4 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#EA3484] via-[#F45B8A] to-[#EA3484] text-white text-xs font-bold shadow-md shadow-pink-500/25 hover:opacity-95 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isHindi ? "गिनती शुरू करें" : "Start Counting Movements"}</span>
            </button>
          </div>

          {/* Neutral Non-diagnostic Safety Guidance */}
          <div className="bg-pink-50/70 rounded-xl p-2.5 border border-pink-200/60 text-[11px] text-[#475569] flex items-start gap-2">
            <Info className="w-4 h-4 text-[#EA3484] shrink-0 mt-0.5" />
            <p className="leading-snug">
              {isHindi
                ? "यह टूल केवल आपकी व्यक्तिगत रिकॉर्डिंग के लिए है। किसी भी असामान्य बदलाव या चिंता के लिए हमेशा अपने डॉक्टर से परामर्श लें।"
                : "This feature logs self-reported movement data for personal tracking. Always consult your obstetrician if you have any concerns."}
            </p>
          </div>
        </motion.div>
      )}

      {/* ── STATE 2: ACTIVE / PAUSED COUNTING ── */}
      {uiState === "active" && activeSession && (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-3 flex-1 flex flex-col justify-between"
        >
          <div className="space-y-3">
            {/* Top Status & Progress Bar */}
            <div className="bg-white rounded-xl p-3 border border-pink-100 shadow-2xs">
              <div className="flex items-center justify-between text-xs mb-2">
                <div className="flex items-center gap-1.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${activeSession.isPaused ? "bg-amber-500" : "bg-[#EA3484] animate-pulse"}`} />
                  <span className="font-bold text-[#172554]">
                    {activeSession.isPaused ? (isHindi ? "सत्र रुका हुआ है (Paused)" : "Session Paused") : (isHindi ? "सत्र चालू है (Active)" : "Counting Active")}
                  </span>
                </div>

                {/* Live Timer Clock */}
                <div className="flex items-center gap-1 font-mono font-bold text-xs text-[#172554] bg-pink-50/80 border border-pink-200/80 px-2 py-0.5 rounded-md">
                  <Clock className="w-3 h-3 text-[#EA3484]" />
                  <span>{formatTime(currentDurationSeconds)}</span>
                </div>
              </div>

              {/* Progress Bar (AstroBaby Pink to Gold) */}
              <div className="w-full h-2.5 bg-pink-50 rounded-full overflow-hidden p-0.5 border border-pink-200/80">
                <div
                  className="h-full bg-gradient-to-r from-[#EA3484] via-[#F45B8A] to-[#F6C85F] rounded-full transition-all duration-300 shadow-xs"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[10px] text-[#475569] font-semibold mt-1.5">
                <span className="text-[#EA3484]">{count} of 10 movements logged</span>
                <span>Max 120:00</span>
              </div>
            </div>

            {/* BIG TAP BUTTON WITH ASTROBABY PINK GLOW */}
            <div className="py-2 flex flex-col items-center justify-center">
              <motion.button
                whileTap={{ scale: 0.92 }}
                disabled={activeSession.isPaused}
                onClick={handleRecordMovement}
                className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-full text-white flex flex-col items-center justify-center shadow-[0_14px_35px_rgba(234,52,132,0.38)] transition-all cursor-pointer ${
                  activeSession.isPaused
                    ? "bg-slate-400 opacity-60 cursor-not-allowed shadow-none"
                    : "bg-gradient-to-tr from-[#EA3484] via-[#F45B8A] to-[#F43F5E] hover:scale-105"
                }`}
              >
                <Plus className="w-7 h-7 stroke-[2.8]" />
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mt-0.5 text-pink-100">
                  {isHindi ? "+ हलचल दर्ज करें" : "+ Felt Movement"}
                </span>

                {/* Counter Badge */}
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#172554] text-white text-xs font-extrabold flex items-center justify-center border-2 border-white shadow-sm">
                  {count}
                </span>

                {/* Subtle Glow Ring */}
                {!activeSession.isPaused && (
                  <span className="absolute inset-0 rounded-full border-2 border-white/40 animate-ping opacity-30 pointer-events-none" />
                )}
              </motion.button>
            </div>

            {/* Undo Last Movement */}
            {count > 0 && (
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={handleUndoMovement}
                  className="flex items-center gap-1 text-[11px] font-semibold text-[#475569] hover:text-[#EA3484] bg-white hover:bg-pink-50 px-3 py-1 rounded-full border border-pink-200/80 shadow-2xs transition-colors cursor-pointer"
                >
                  <Undo2 className="w-3 h-3 text-[#EA3484]" />
                  <span>{isHindi ? "पिछला क्लिक पूर्ववत करें (Undo)" : "Undo Last Movement"}</span>
                </button>
              </div>
            )}
          </div>

          {/* Bottom Action Controls: Pause/Resume & End Early */}
          <div className="pt-2 border-t border-pink-100 grid grid-cols-2 gap-2">
            {activeSession.isPaused ? (
              <button
                type="button"
                onClick={handleResume}
                className="py-2 px-3 rounded-xl bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs hover:opacity-95 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isHindi ? "जारी रखें (Resume)" : "Resume"}</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={handlePause}
                className="py-2 px-3 rounded-xl bg-pink-50 hover:bg-pink-100 text-[#EA3484] border border-pink-200 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Pause className="w-3.5 h-3.5" />
                <span>{isHindi ? "रोकें (Pause)" : "Pause"}</span>
              </button>
            )}

            <button
              type="button"
              onClick={handleEndEarly}
              className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#172554] text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <StopCircle className="w-3.5 h-3.5 text-[#475569]" />
              <span>{isHindi ? "सत्र समाप्त करें" : "End Early"}</span>
            </button>
          </div>
        </motion.div>
      )}

      {/* ── STATE 3: COMPLETED SUCCESS VIEW ── */}
      {uiState === "completed" && lastFinishedSession && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3 text-center"
        >
          <div className="w-13 h-13 rounded-full bg-pink-50 border border-pink-200 text-[#EA3484] flex items-center justify-center mx-auto shadow-2xs">
            <CheckCircle2 className="w-7 h-7" />
          </div>

          <div>
            <h4 className="font-bold text-sm sm:text-base text-[#172554] tracking-tight">
              {isHindi ? "10 हलचलें सफलतापूर्वक दर्ज!" : "10 Movements Completed!"}
            </h4>
            <p className="text-xs text-[#475569] mt-0.5">
              {isHindi
                ? "आपका किक काउंट सत्र सफलतापूर्वक सहेजा गया।"
                : "Your movement session was successfully recorded."}
            </p>
          </div>

          {/* Results Summary Box */}
          <div className="bg-gradient-to-br from-[#FFF5F9] via-[#FFFCFE] to-[#FFF8FD] rounded-xl p-3.5 border border-pink-200/90 text-left space-y-2 shadow-2xs">
            <div className="flex justify-between items-center text-xs">
              <span className="text-[#475569] font-medium">{isHindi ? "कुल सक्रिय समय:" : "Total Active Time:"}</span>
              <span className="font-extrabold text-[#EA3484] text-sm font-mono">
                {formatTime(lastFinishedSession.durationSeconds)}
              </span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-[#475569] font-medium">{isHindi ? "दर्ज हलचलें:" : "Movements Count:"}</span>
              <span className="font-bold text-[#172554]">10 / 10 Target</span>
            </div>
          </div>

          {/* Trend Notice if detected */}
          {stats.trendNotice && (
            <div className="bg-amber-50/90 rounded-xl p-2.5 text-left border border-amber-200 text-[11px] text-amber-900 flex items-start gap-2">
              <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <p>{stats.trendNotice}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-2 flex gap-2">
            <button
              type="button"
              onClick={() => setUiState("history")}
              className="flex-1 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#172554] text-xs font-bold cursor-pointer"
            >
              {isHindi ? "इतिहास देखें" : "View History"}
            </button>
            <button
              type="button"
              onClick={() => setUiState("intro")}
              className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white text-xs font-bold hover:opacity-95 shadow-sm shadow-pink-500/20 cursor-pointer"
            >
              {isHindi ? "नया सत्र" : "New Session"}
            </button>
          </div>
        </motion.div>
      )}

      {/* ── STATE 4: INCOMPLETE (120m TIMEOUT) ── */}
      {uiState === "incomplete" && lastFinishedSession && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3 text-center"
        >
          <div className="w-13 h-13 rounded-full bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto shadow-2xs">
            <AlertCircle className="w-7 h-7" />
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#172554] tracking-tight">
              {isHindi ? "120 मिनट की अधिकतम अवधि समाप्त" : "120-Minute Maximum Reached"}
            </h4>
            <p className="text-xs text-[#475569] mt-0.5">
              Recorded {lastFinishedSession.movementCount} of 10 movements.
            </p>
          </div>

          {/* Calm healthcare guidance */}
          <div className="bg-amber-50/90 rounded-xl p-3 text-left border border-amber-200 text-[11px] text-amber-900 space-y-1">
            <p className="font-bold flex items-center gap-1 text-[#172554]">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>{isHindi ? "मातृत्व स्वास्थ्य मार्गदर्शन" : "Maternity Guidance"}</span>
            </p>
            <p className="leading-relaxed text-amber-900/90 font-normal">
              {isHindi
                ? "यदि शिशु की हलचल सामान्य से कम या भिन्न महसूस हो रही है, या आप चिंतित हैं, तो कृपया अपने स्वास्थ्य विशेषज्ञ/डॉक्टर के निर्देशों का पालन करें।"
                : "If movements feel significantly different from your baby's usual pattern, or if you feel concerned, please reach out to your healthcare provider."}
            </p>
          </div>

          <div className="pt-2 flex gap-2">
            <button
              type="button"
              onClick={() => setUiState("history")}
              className="flex-1 py-2 px-3 rounded-xl bg-slate-100 text-[#172554] text-xs font-bold cursor-pointer"
            >
              {isHindi ? "इतिहास" : "History"}
            </button>
            <button
              type="button"
              onClick={() => setUiState("intro")}
              className="flex-1 py-2 px-3 rounded-xl bg-[#172554] text-white text-xs font-bold cursor-pointer"
            >
              {isHindi ? "रीसेट करें" : "Reset Session"}
            </button>
          </div>
        </motion.div>
      )}

      {/* ── STATE 5: ENDED EARLY ── */}
      {uiState === "ended_early" && lastFinishedSession && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-3 text-center"
        >
          <div className="w-13 h-13 rounded-full bg-slate-100 text-[#172554] flex items-center justify-center mx-auto shadow-2xs">
            <StopCircle className="w-6 h-6" />
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#172554] tracking-tight">
              {isHindi ? "सत्र पहले समाप्त किया गया" : "Session Ended Early"}
            </h4>
            <p className="text-xs text-[#475569] mt-0.5">
              Saved {lastFinishedSession.movementCount} movements in {formatTime(lastFinishedSession.durationSeconds)}.
            </p>
          </div>

          <div className="pt-2 flex gap-2">
            <button
              type="button"
              onClick={() => setUiState("history")}
              className="flex-1 py-2 px-3 rounded-xl bg-slate-100 text-[#172554] text-xs font-bold cursor-pointer"
            >
              {isHindi ? "इतिहास" : "History"}
            </button>
            <button
              type="button"
              onClick={() => setUiState("intro")}
              className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white text-xs font-bold cursor-pointer"
            >
              {isHindi ? "नया सत्र" : "New Session"}
            </button>
          </div>
        </motion.div>
      )}

      {/* ── STATE 6: HISTORY & INSIGHTS ── */}
      {uiState === "history" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-3"
        >
          {/* Insights Header Card in AstroBaby palette */}
          {stats.hasStats && (
            <div className="bg-gradient-to-br from-[#FFF5F9] via-[#FFFCFE] to-[#FFF8FD] rounded-xl p-3 border border-pink-200/90 shadow-2xs">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#172554] flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5 text-[#EA3484]" />
                  {isHindi ? "औसत समय (10 हलचलें)" : "Avg Time to 10 Movements"}
                </span>
                <span className="font-extrabold text-[#EA3484] text-sm font-mono">
                  ~ {stats.avgMinutes} Mins
                </span>
              </div>
              <p className="text-[10px] text-[#475569] mt-0.5">
                Calculated from {stats.completedCount} completed {stats.completedCount === 1 ? "session" : "sessions"}
              </p>
            </div>
          )}

          {/* History List */}
          {sessionsHistory.length === 0 ? (
            <div className="bg-pink-50/40 rounded-xl p-6 text-center border border-pink-100">
              <Footprints className="w-8 h-8 text-pink-200 mx-auto mb-1.5" />
              <p className="text-xs font-bold text-[#172554]">
                {isHindi ? "कोई पुराना सत्र रिकॉर्ड नहीं है" : "No Past Sessions Recorded"}
              </p>
              <p className="text-[11px] text-[#475569] mt-0.5">
                Start your first kick counting session above.
              </p>
            </div>
          ) : (
            <div className="space-y-2 max-h-[300px] overflow-y-auto pr-0.5">
              {sessionsHistory.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedSession(item);
                    setUiState("details");
                  }}
                  className="bg-white rounded-xl p-2.5 border border-pink-100 hover:border-[#EA3484] hover:shadow-2xs transition-all cursor-pointer flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                        item.status === "completed"
                          ? "bg-pink-50 text-[#EA3484] border border-pink-200"
                          : item.status === "incomplete"
                          ? "bg-amber-50 text-amber-700 border border-amber-200"
                          : "bg-slate-100 text-[#172554]"
                      }`}
                    >
                      {item.movementCount}
                    </div>

                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-xs text-[#172554]">{item.date}</span>
                        <span
                          className={`text-[9px] px-1.5 py-0.2 rounded font-bold uppercase ${
                            item.status === "completed"
                              ? "bg-pink-50 text-[#EA3484]"
                              : item.status === "incomplete"
                              ? "bg-amber-50 text-amber-700"
                              : "bg-slate-100 text-[#475569]"
                          }`}
                        >
                          {item.status === "completed" ? "Completed" : item.status === "incomplete" ? "120m Timeout" : "Early"}
                        </span>
                      </div>
                      <p className="text-[10px] text-[#475569]">
                        {formatTime(item.durationSeconds)} • {item.movementCount}/{item.target} movements
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[#475569]">
                    <button
                      type="button"
                      onClick={(e) => handleDeleteHistoryItem(item.id, e)}
                      className="p-1 hover:text-red-500 transition-colors"
                      title="Delete record"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <ChevronRight className="w-4 h-4 text-pink-300" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      )}

      {/* ── STATE 7: SESSION DETAILS TIMELINE ── */}
      {uiState === "details" && selectedSession && (
        <motion.div
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-3"
        >
          <div className="bg-white rounded-xl p-3 border border-pink-100 shadow-2xs space-y-2">
            <div className="flex justify-between items-center border-b border-pink-100 pb-2">
              <div>
                <span className="font-bold text-xs text-[#172554]">{selectedSession.date}</span>
                <p className="text-[10px] text-[#475569]">
                  {new Date(selectedSession.startTime).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  selectedSession.status === "completed"
                    ? "bg-pink-50 text-[#EA3484] border border-pink-200"
                    : "bg-amber-50 text-amber-800 border border-amber-200"
                }`}
              >
                {selectedSession.status.toUpperCase()}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-pink-50/50 p-2 rounded-lg border border-pink-100">
                <span className="text-[10px] text-[#475569]">Duration</span>
                <p className="font-bold text-[#172554] font-mono">{formatTime(selectedSession.durationSeconds)}</p>
              </div>
              <div className="bg-pink-50/50 p-2 rounded-lg border border-pink-100">
                <span className="text-[10px] text-[#475569]">Movements</span>
                <p className="font-bold text-[#EA3484]">{selectedSession.movementCount} / {selectedSession.target}</p>
              </div>
            </div>

            {/* Individual Kick Timestamp Breakdown */}
            <div className="pt-2 border-t border-pink-100">
              <span className="text-[11px] font-bold text-[#172554] block mb-1.5">
                Movement Timeline Log ({selectedSession.movementTimestamps.length})
              </span>

              {selectedSession.movementTimestamps.length === 0 ? (
                <p className="text-[10px] text-[#475569]">No taps logged during this session.</p>
              ) : (
                <div className="space-y-1 max-h-[140px] overflow-y-auto pr-1">
                  {selectedSession.movementTimestamps.map((ts, idx) => {
                    const elapsedFromStart = Math.floor((ts - selectedSession.startTime) / 1000);
                    return (
                      <div
                        key={idx}
                        className="flex items-center justify-between text-[10px] bg-pink-50/60 px-2 py-1 rounded border border-pink-100/70"
                      >
                        <span className="font-bold text-[#EA3484]">Movement #{idx + 1}</span>
                        <span className="text-[#475569]">+{formatTime(elapsedFromStart)}</span>
                        <span className="text-[#172554] font-mono font-medium">
                          {new Date(ts).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setUiState("history")}
            className="w-full py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#172554] text-xs font-bold cursor-pointer transition-colors"
          >
            ← {isHindi ? "इतिहास पर वापस जाएं" : "Back to History"}
          </button>
        </motion.div>
      )}
    </div>
  );
}
