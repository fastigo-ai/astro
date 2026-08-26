import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  Calculator,
  CalendarHeart,
  Music,
  Footprints,
  Sparkles,
  X,
  ChevronRight,
  Wifi,
  Battery,
  Volume2,
  Play,
  RotateCcw,
  CheckCircle2,
  Heart,
  Sun,
  BookOpen,
  Info,
  Smartphone,
} from "lucide-react";
import KickCounterView from "@/components/tools/KickCounterView";
import PregnancyCalculatorView from "@/components/tools/PregnancyCalculatorView";
import PregnancyTrackerView from "@/components/tools/PregnancyTrackerView";
import GarbhSanskarJourneyView from "@/components/tools/GarbhSanskarJourneyView";

export interface ToolItem {
  id: string;
  titleEn: string;
  titleHi: string;
  subtitleEn: string;
  subtitleHi: string;
  badgeEn: string;
  badgeHi: string;
  color: string;
  bgGradient: string;
  icon: React.ComponentType<{ className?: string }>;
}

const TOOLS_CONFIG: ToolItem[] = [
  {
    id: "pregnancy-calculator",
    titleEn: "Pregnancy Calculator",
    titleHi: "गर्भावस्था कैलकुलेटर",
    subtitleEn: "Due Date & Trimester Milestones",
    subtitleHi: "प्रसव तिथि और तिमाही का अनुमान",
    badgeEn: "Due Date Calc",
    badgeHi: "नियत तिथि",
    color: "#EA3484",
    bgGradient: "from-[#EA3484] to-[#F43F5E]",
    icon: Calculator,
  },
  {
    id: "pregnancy-tracker",
    titleEn: "Pregnancy Tracker",
    titleHi: "गर्भावस्था ट्रैकर",
    subtitleEn: "Week by Week Baby Growth",
    subtitleHi: "सप्ताह-दर-सप्ताह शिशु विकास",
    badgeEn: "Baby Tracker",
    badgeHi: "शिशु ट्रैकर",
    color: "#8B5CF6",
    bgGradient: "from-[#8B5CF6] to-[#6366F1]",
    icon: CalendarHeart,
  },
  {
    id: "garbh-sanskar-journey",
    titleEn: "Garbh Sanskar Personalized Journey",
    titleHi: "गर्भ संस्कार व्यक्तिगत यात्रा",
    subtitleEn: "Daily Vedic Routine & Sattvic Plan",
    subtitleHi: "दैनिक वैदिक दिनचर्या व सात्विक प्लान",
    badgeEn: "Daily Journey",
    badgeHi: "दैनिक यात्रा",
    color: "#F59E0B",
    bgGradient: "from-[#F59E0B] to-[#D97706]",
    icon: Sparkles,
  },
  {
    id: "garbh-sanskar-music",
    titleEn: "Garbh Sanskar Music",
    titleHi: "गर्भ संस्कार संगीत",
    subtitleEn: "Healing Raagas for Fetal Brain",
    subtitleHi: "गर्भस्थ शिशु हेतु कल्याणकारी राग",
    badgeEn: "Raaga Therapy",
    badgeHi: "राग थेरेपी",
    color: "#EC4899",
    bgGradient: "from-[#EC4899] to-[#DB2777]",
    icon: Music,
  },
  {
    id: "kick-counter",
    titleEn: "Kick Counter",
    titleHi: "किक काउंटर",
    subtitleEn: "Track Fetal Kicks & Movements",
    subtitleHi: "शिशु की हलचल व किक्स ट्रैक करें",
    badgeEn: "Live Counter",
    badgeHi: "किक काउंटर",
    color: "#10B981",
    bgGradient: "from-[#10B981] to-[#059669]",
    icon: Footprints,
  },
];

export default function StickyLeftNavigation() {
  const { i18n } = useTranslation();
  const isHindi = i18n.language === "hi";

  const [isOpen, setIsOpen] = useState(false);
  const [activeToolId, setActiveToolId] = useState<string>("pregnancy-calculator");
  const [hoveredToolId, setHoveredToolId] = useState<string | null>(null);

  // Interactive dummy state for kick counter
  const [kickCount, setKickCount] = useState(4);
  const [isCounting, setIsCounting] = useState(false);
  const [kickTimer, setKickTimer] = useState(148); // seconds

  // Interactive dummy state for music player
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  // Interactive dummy state for calculator
  const [selectedCycle, setSelectedCycle] = useState(28);
  const [calculatedDueDate, setCalculatedDueDate] = useState("18 Nov 2026");

  // Interactive dummy state for pregnancy tracker
  const [selectedWeek, setSelectedWeek] = useState(20);

  // Timer effect for kick counter
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCounting) {
      interval = setInterval(() => {
        setKickTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCounting]);

  const activeTool = TOOLS_CONFIG.find((t) => t.id === activeToolId) || TOOLS_CONFIG[0];
  const ActiveIcon = activeTool.icon;

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const musicTracks = [
    { title: "Raag Yaman (Calmness & Joy)", duration: "24:15", mood: "Evening Sandhya" },
    { title: "Raag Bhairav (Morning Energy)", duration: "18:40", mood: "Pratah Kaal" },
    { title: "Garbh Gayatri Mantra", duration: "32:10", mood: "Divine Shield" },
    { title: "Bansuri & Veena Harmony", duration: "20:05", mood: "Relaxation" },
  ];

  const handleToolClick = (toolId: string) => {
    setActiveToolId(toolId);
    setIsOpen(true);
  };

  return (
    <aside aria-label="Quick Pregnancy Tools Widget" className="fixed bottom-0 left-0 right-0 w-full sm:w-auto sm:bottom-auto sm:left-5 sm:top-1/2 sm:-translate-y-1/2 sm:right-auto z-40 sm:z-50">
      {/* ── Responsive Dock: Full-Width 0-Padding Bottom Bar on Mobile / Sticky Vertical Pill on Desktop ── */}
      <div className="relative flex flex-row sm:flex-col items-center justify-around sm:justify-center w-full sm:w-auto bg-white/95 backdrop-blur-2xl border-t sm:border border-pink-200/90 shadow-[0_-4px_25px_rgba(234,52,132,0.12)] sm:shadow-[0_10px_35px_rgba(234,52,132,0.22)] rounded-none sm:rounded-3xl py-2 px-1 sm:p-2 gap-1 sm:gap-2.5 select-none transition-all duration-300">
        {/* 5 Tool Links */}
        {TOOLS_CONFIG.map((tool, idx) => {
          const Icon = tool.icon;
          const isHovered = hoveredToolId === tool.id;
          const isCurrentActive = isOpen && activeToolId === tool.id;

          return (
            <div
              key={tool.id}
              className="relative group flex items-center justify-center flex-1 sm:flex-none"
              onMouseEnter={() => setHoveredToolId(tool.id)}
              onMouseLeave={() => setHoveredToolId(null)}
            >
              <button
                type="button"
                onClick={() => handleToolClick(tool.id)}
                aria-label={isHindi ? tool.titleHi : tool.titleEn}
                className={`relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl transition-all duration-300 transform cursor-pointer group-hover:scale-105 active:scale-95 shadow-2xs ${
                  isCurrentActive
                    ? "ring-2 ring-[#EA3484] ring-offset-2 bg-gradient-to-tr from-[#EA3484] to-[#F45B8A] text-white shadow-[0_4px_14px_rgba(234,52,132,0.38)]"
                    : "bg-pink-50/80 hover:bg-pink-100/90 text-[#172554] hover:text-[#EA3484] border border-pink-200/70 hover:border-pink-300"
                }`}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:rotate-6" />
              </button>

              {/* Smooth Slide-out Tooltip */}
              <AnimatePresence>
                {isHovered && !isOpen && (
                  <motion.div
                    initial={{ opacity: 0, x: -10, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -10, scale: 0.95 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-full ml-3.5 z-50 pointer-events-none hidden sm:block"
                  >
                    <div className="bg-slate-900/95 text-white backdrop-blur-md px-3.5 py-2 rounded-xl shadow-xl border border-white/10 w-max max-w-[240px] text-left">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="px-1.5 py-0.5 rounded text-[8px] font-extrabold uppercase tracking-wide bg-[#EA3484] text-white">
                          {isHindi ? tool.badgeHi : tool.badgeEn}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-white leading-snug">
                        {isHindi ? tool.titleHi : tool.titleEn}
                      </p>
                      <p className="text-[11px] text-slate-300/90 mt-0.5 font-normal leading-tight">
                        {isHindi ? tool.subtitleHi : tool.subtitleEn}
                      </p>
                      <div className="mt-1.5 flex items-center gap-1 text-[10px] text-pink-300 font-semibold">
                        <span>{isHindi ? "मोबाइल व्यू खोलने के लिए क्लिक करें" : "Click to open Mobile view"}</span>
                        <ChevronRight className="w-3 h-3" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {/* Quick Phone Launcher Button */}
        <div className="flex items-center justify-center flex-1 sm:flex-none pl-1 sm:pl-0 sm:pt-1 border-l sm:border-l-0 sm:border-t border-pink-100/80">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-pink-50/80 hover:bg-pink-100/90 text-[#172554] hover:text-[#EA3484] border border-pink-200/70 hover:border-pink-300 flex items-center justify-center transition-all cursor-pointer shadow-2xs"
            title="Toggle Mobile Screen"
          >
            <Smartphone className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ── Compact Modern Mobile Phone-Shaped Popup (Just like Chat Contact) ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{
              type: "spring",
              damping: 26,
              stiffness: 320,
            }}
            className="fixed left-1/2 -translate-x-1/2 bottom-18 sm:bottom-auto sm:left-20 sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0 w-[calc(100vw-24px)] max-w-[325px] sm:w-[325px] max-h-[76vh] sm:max-h-[520px] overflow-hidden rounded-[26px] bg-white border-2 border-slate-900/10 shadow-[0_20px_50px_rgba(23,37,84,0.28)] flex flex-col z-50 text-[#172554] overscroll-contain"
          >
            {/* Phone Top Speaker & Status Notch (Dynamic Island) */}
            <div className="bg-[#172554] px-4 pt-2 pb-1.5 flex items-center justify-between text-white/80 text-[10px] select-none shrink-0 border-b border-slate-850">
              <span className="font-semibold text-white">9:41</span>
              {/* Dynamic Island Notch */}
              <div className="w-14 h-3 bg-slate-950/90 rounded-full flex items-center justify-center gap-1 px-1.5 shadow-inner">
                <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                <div className="w-5 h-0.5 bg-white/25 rounded-full" />
              </div>
              <div className="flex items-center gap-1">
                <Wifi className="w-2.5 h-2.5" />
                <Battery className="w-3 h-3 text-emerald-400" />
              </div>
            </div>

            {/* Header / Brand Profile (Navbar Theme Palette) */}
            <div className="relative bg-gradient-to-r from-pink-50/95 via-[#FFFDFE] to-pink-50/95 p-3 border-b border-pink-200/80 text-[#172554] shrink-0 shadow-2xs backdrop-blur-md">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close Tool Widget"
                className="absolute top-2.5 right-2.5 h-6.5 w-6.5 rounded-full bg-pink-100/90 hover:bg-pink-200 text-[#172554] hover:text-[#EA3484] flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-2.5">
                {/* Brand Logo without background */}
                <div className="relative flex-shrink-0 flex items-center">
                  <img
                    src="/images/logo.png"
                    alt="Astro Baby"
                    className="h-10 sm:h-11 w-auto max-w-[50px] object-contain drop-shadow-2xs"
                  />
                </div>

                {/* Profile Details */}
                <div className="pr-6">
                  <h3 className="font-bold text-sm text-[#172554] leading-tight flex items-center gap-1">
                    {isHindi ? activeTool.titleHi : activeTool.titleEn}
                    <Sparkles className="w-3.5 h-3.5 text-[#EA3484]" />
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-[#475569] mt-0.5">
                    <span className="px-2 py-0.5 rounded-full bg-pink-100/90 text-[#EA3484] border border-pink-200 text-[10px] font-bold">
                      {isHindi ? activeTool.badgeHi : activeTool.badgeEn}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Body (Scrollable with data-lenis-prevent) */}
            <div
              data-lenis-prevent
              className="p-3 overflow-y-auto space-y-2.5 bg-[#FFFCFE] flex-1 overscroll-contain touch-pan-y"
            >
              {/* 1. PREGNANCY CALCULATOR */}
              {activeToolId === "pregnancy-calculator" && (
                <PregnancyCalculatorView />
              )}

              {/* 2. PREGNANCY TRACKER */}
              {activeToolId === "pregnancy-tracker" && (
                <PregnancyTrackerView />
              )}

              {/* 3. GARBH SANSKAR JOURNEY */}
              {activeToolId === "garbh-sanskar-journey" && (
                <GarbhSanskarJourneyView />
              )}

              {/* 4. GARBH SANSKAR MUSIC */}
              {activeToolId === "garbh-sanskar-music" && (
                <div className="space-y-2.5">
                  <div className="bg-white rounded-xl p-3 border border-pink-100 shadow-2xs">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                      <span className="font-bold text-xs text-[#172554] flex items-center gap-1.5">
                        <Music className="w-3.5 h-3.5 text-[#EC4899]" />
                        {isHindi ? "432Hz राग थेरेपी" : "432Hz Raag Therapy"}
                      </span>
                      <span className="text-[10px] text-pink-700 font-bold bg-pink-50 px-2 py-0.5 rounded-full">
                        Brain Boost
                      </span>
                    </div>

                    {/* Audio Player Card */}
                    <div className="bg-gradient-to-br from-[#172554] to-[#2B1B4D] rounded-xl p-3 text-white shadow-xs">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#EA3484] to-[#F43F5E] flex items-center justify-center shadow-xs">
                            <Volume2 className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-xs text-white leading-tight">
                              {musicTracks[currentTrackIndex].title}
                            </h4>
                            <p className="text-[10px] text-pink-200">
                              {musicTracks[currentTrackIndex].mood}
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                          className="w-8 h-8 rounded-full bg-[#EA3484] text-white flex items-center justify-center hover:scale-105 transition-transform shadow-xs cursor-pointer"
                        >
                          {isPlayingMusic ? (
                            <span className="font-bold text-xs">❚❚</span>
                          ) : (
                            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                          )}
                        </button>
                      </div>

                      {/* Animated sound wave bars */}
                      <div className="flex items-center gap-1 h-5 justify-center py-0.5">
                        {[40, 70, 30, 90, 50, 80, 60, 100, 45, 85, 35, 75, 55].map((h, i) => (
                          <div
                            key={i}
                            className={`w-1 bg-pink-400 rounded-full transition-all duration-300 ${
                              isPlayingMusic ? "animate-pulse" : "opacity-40"
                            }`}
                            style={{ height: isPlayingMusic ? `${h}%` : "30%" }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Track list */}
                    <div className="mt-2 space-y-1.5">
                      {musicTracks.map((track, idx) => (
                        <div
                          key={idx}
                          onClick={() => {
                            setCurrentTrackIndex(idx);
                            setIsPlayingMusic(true);
                          }}
                          className={`flex items-center justify-between p-2 rounded-lg border transition-all cursor-pointer ${
                            currentTrackIndex === idx
                              ? "bg-pink-50/90 border-[#EA3484] text-[#172554] font-bold"
                              : "bg-slate-50/70 border-slate-100 text-slate-700"
                          }`}
                        >
                          <div className="flex items-center gap-2 text-[11px]">
                            <span className="text-slate-400 font-semibold">{idx + 1}</span>
                            <span className="truncate max-w-[190px]">{track.title}</span>
                          </div>
                          <span className="text-[10px] text-slate-500 font-mono">{track.duration}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 5. KICK COUNTER */}
              {activeToolId === "kick-counter" && (
                <KickCounterView />
              )}

              {/* Bottom Quick Action Banner */}
              <div className="mt-2 p-2.5 rounded-xl bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100 flex items-center justify-between gap-2">
                <div className="text-left">
                  <p className="text-[11px] font-bold text-[#172554]">
                    {isHindi ? "एस्ट्रो बेबी ऐप" : "Astro Baby Mobile App"}
                  </p>
                  <p className="text-[10px] text-slate-600">
                    {isHindi ? "280 दिनों की संपूर्ण गाइड" : "Full 280-day personalized guide"}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-2.5 py-1 rounded-lg bg-[#172554] text-white text-[10px] font-bold hover:bg-[#1E3A8A] transition-colors cursor-pointer"
                >
                  {isHindi ? "बंद करें" : "Close"}
                </button>
              </div>
            </div>

            {/* Phone Bottom Home Bar Indicator (iOS style) */}
            <div className="bg-[#FFFCFE] py-1.5 flex items-center justify-center shrink-0 border-t border-slate-100">
              <div className="w-24 h-1 bg-slate-300 rounded-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
}
