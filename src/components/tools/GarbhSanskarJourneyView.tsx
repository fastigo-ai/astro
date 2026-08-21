import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  Sparkles,
  Sun,
  Heart,
  BookOpen,
  Music,
  Activity,
  CheckCircle2,
  Circle,
  Clock,
  ThumbsUp,
  ThumbsDown,
  RotateCcw,
  Play,
  Pause,
  ChevronRight,
  Settings2,
  Flame,
  Volume2,
  Award,
  Zap,
  RefreshCw,
  Info,
  X,
  Target,
} from "lucide-react";

export type JourneyCategory = "mantra" | "meditation" | "music" | "stories" | "wellness" | "nutrition";
export type JourneyGoal = "stress_relief" | "brain_boost" | "wellness" | "spiritual" | "bonding";

export interface JourneyActivity {
  id: string;
  category: JourneyCategory;
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
  contentEn: string;
  contentHi: string;
  durationMinutes: number;
  suitableTrimesters: (1 | 2 | 3)[];
  matchingGoals: JourneyGoal[];
  badgeEn: string;
  badgeHi: string;
  icon: string;
}

const ACTIVITIES_POOL: JourneyActivity[] = [
  {
    id: "act_gayatri",
    category: "mantra",
    titleEn: "Pratah Gayatri Mantra Chanting",
    titleHi: "प्रातः गायत्री मंत्र जप व ध्यान",
    descEn: "Chant or listen to the sacred solar mantra for maternal radiance and calm neural waves.",
    descHi: "सकारात्मक मानसिक शांति और चेतना के लिए प्रातः काल 11 बार गायत्री मंत्र का श्रवण व जप करें।",
    contentEn: "Om Bhur Bhuvaḥ Swaḥ, Tat Savitur Vareṇyaṃ, Bhargo Devasya Dhīmahi, Dhiyo Yo Naḥ Prachodayāt. Breathe slowly and imagine golden sunlight enveloping your baby.",
    contentHi: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात्॥ शांत चित्त होकर शिशु को स्वर्णिम प्रकाश में अनुभव करें।",
    durationMinutes: 10,
    suitableTrimesters: [1, 2, 3],
    matchingGoals: ["spiritual", "stress_relief", "brain_boost"],
    badgeEn: "Solar Energy",
    badgeHi: "सौर ऊर्जा",
    icon: "Sun",
  },
  {
    id: "act_garbh_samvad",
    category: "stories",
    titleEn: "Garbh Samvad: Story of Compassion",
    titleHi: "गर्भ संवाद: करुणा व ज्ञान की कथा",
    descEn: "Read aloud to your baby to stimulate auditory nerve pathways and foster heart bonding.",
    descHi: "शिशु से आत्मीय संवाद करते हुए सद्गुणों और दयालुता की पावन कथा सुनाएं।",
    contentEn: "Gently place your hands on your belly. Speak: 'Dear little one, today we learn about truth, bravery, and benevolence.' Read the tale of King Harishchandra and virtuous saints.",
    contentHi: "हाथों को पेट पर रखकर प्रेमपूर्वक कहें: 'हे दिव्य शिशु, आज हम धैर्य और सत्यनिष्ठा की कथा सुनते हैं।' शिशु आपकी प्रेममयी आवाज़ सुनकर अत्यंत सुरक्षित महसूस करता है।",
    durationMinutes: 15,
    suitableTrimesters: [2, 3],
    matchingGoals: ["bonding", "brain_boost", "spiritual"],
    badgeEn: "Auditory Bonding",
    badgeHi: "श्रवण संस्कार",
    icon: "Heart",
  },
  {
    id: "act_raag_yaman",
    category: "music",
    titleEn: "Raag Yaman 432Hz Sound Therapy",
    titleHi: "राग यमन 432Hz न्यूरो-संगीत",
    descEn: "Gentle Indian classical flute melodies that enhance maternal alpha brainwaves and soothe fetal heart rate.",
    descHi: "बांसुरी और सितार की सुमधुर तान जो मानसिक तनाव को दूर कर शिशु के मस्तिष्क को शांत करती है।",
    contentEn: "Put on comfortable earphones at moderate volume. Close your eyes and let the acoustic micro-harmonics flow through your nervous system for deep tranquility.",
    contentHi: "मंद स्वर में राग यमन की बांसुरी धुन सुनें और श्वास पर ध्यान केंद्रित करें। यह संगीत गर्भस्थ शिशु में एकाग्रता और प्रसन्नता का संचार करता है।",
    durationMinutes: 12,
    suitableTrimesters: [1, 2, 3],
    matchingGoals: ["stress_relief", "brain_boost"],
    badgeEn: "432Hz Healing",
    badgeHi: "नाद चिकित्सा",
    icon: "Music",
  },
  {
    id: "act_bhadrasana",
    category: "wellness",
    titleEn: "Bhadrasana & Butterfly Pelvic Stretch",
    titleHi: "भद्रासन व तितली आसन (पेल्विक योग)",
    descEn: "Safe prenatal stretching to open pelvic hip flexors and relieve lower back tightness.",
    descHi: "पीठ के तनाव को कम करने और प्रसव पूर्व पेल्विक मांसपेशियों के लचीलेपन हेतु सरल योगासन।",
    contentEn: "Sit tall against a wall for support. Bring the soles of your feet together, holding feet gently. Inhale deeply, exhaling as knees flutter gently like butterfly wings.",
    contentHi: "दीवार का सहारा लेकर बैठें। दोनों पैरों के तलवे मिलाकर रखें और सहजता से घुटनों को ऊपर-नीचे करें। श्वास को गहरा और शांत रखें।",
    durationMinutes: 10,
    suitableTrimesters: [2, 3],
    matchingGoals: ["wellness", "stress_relief"],
    badgeEn: "Mobility",
    badgeHi: "लचीलापन",
    icon: "Activity",
  },
  {
    id: "act_satvik_nutrition",
    category: "nutrition",
    titleEn: "Saffron Almond Satvik Rasayana",
    titleHi: "केसर-बादाम सात्विक रसायन",
    descEn: "Nutrient-rich satvik drink packed with brain-boosting magnesium, folate, and calcium.",
    descHi: "गर्भस्थ शिशु के मस्तिष्क और हड्डियों के विकास के लिए पोषक सात्विक आहार।",
    contentEn: "Take 5 soaked, peeled almonds, a pinch of authentic saffron (Kesar), and cardamom in warm A2 milk. Sip mindfully with gratitude and positive thoughts.",
    contentHi: "5 भीगे छिले बादाम, एक चुटकी शुद्ध केसर और इलायची युक्त गुनगुने दूध का कृतज्ञता भाव से सेवन करें।",
    durationMinutes: 5,
    suitableTrimesters: [1, 2, 3],
    matchingGoals: ["wellness", "brain_boost"],
    badgeEn: "Ayurvedic Satvik",
    badgeHi: "सात्विक पोषण",
    icon: "Sun",
  },
  {
    id: "act_garbh_raksha",
    category: "mantra",
    titleEn: "Garbh Raksha Shanti Stotra",
    titleHi: "गर्भ रक्षा शांति स्तोत्र पाठ",
    descEn: "Ancient Vedic invocation to create a protective spiritual aura around mother and child.",
    descHi: "दिव्य संरक्षण और निर्भयता के लिए परंपरागत वैदिक रक्षा स्तोत्र का पाठ।",
    contentEn: "Recite: 'Om Hreem Shreem Garbhadhanam Raksha Raksha Hum Phat Swaha'. Feel divine grace protecting every cell of your womb.",
    contentHi: "मातृत्व रक्षा हेतु शांत वातावरण में स्तोत्र का श्रवण करें। यह मन के अज्ञात भय को दूर कर आत्मबल प्रदान करता है।",
    durationMinutes: 8,
    suitableTrimesters: [1, 2, 3],
    matchingGoals: ["spiritual", "stress_relief"],
    badgeEn: "Divine Shield",
    badgeHi: "रक्षा कवच",
    icon: "Sparkles",
  },
  {
    id: "act_anulom_vilom",
    category: "meditation",
    titleEn: "Pranayama Oxygenation Breathing",
    titleHi: "अनुलोम-विलोम प्राणवायु प्राणायाम",
    descEn: "Alternate nostril breathing to optimize oxygen saturation across the placenta.",
    descHi: "प्लेसेंटा तक शुद्ध प्राणवायु पहुंचाने और मन को एकाग्र करने के लिए प्राणायाम।",
    contentEn: "Sit comfortably. Close right nostril, inhale through left for 4 counts. Close left, exhale through right for 4 counts. Repeat smoothly with effortless ease.",
    contentHi: "शांत बैठकर दाहिनी नासिका बंद कर बाईं से 4 सेकंड श्वास लें, फिर दाईं से 4 सेकंड छोड़ें। 10 चक्र बिना किसी जोर के सहजता से पूरे करें।",
    durationMinutes: 8,
    suitableTrimesters: [1, 2, 3],
    matchingGoals: ["stress_relief", "wellness"],
    badgeEn: "Oxygen Flow",
    badgeHi: "प्राण शक्ति",
    icon: "Activity",
  },
  {
    id: "act_lullaby_sleep",
    category: "music",
    titleEn: "Shayan Lullaby & Sleep Shlokas",
    titleHi: "शयन संस्कार व मधुर लोरी",
    descEn: "Deep evening relaxation routine to align circadian rhythm for peaceful maternal sleep.",
    descHi: "रात्रि में सुखद व गहरी नींद के लिए शांत संगीत और कृतज्ञता ध्यान।",
    contentEn: "Dim room lights. Play the soothing lullaby soundscape. Place one hand on heart and one on belly, affirming: 'We are peaceful, healthy, and blessed.'",
    contentHi: "कमरे की लाइट मद्धम करें। मधुर शयन लोरी सुनें और मन में कहें: 'हम स्वस्थ, सुरक्षित और शांत हैं।' गहरी सुखद निद्रा का आनंद लें।",
    durationMinutes: 10,
    suitableTrimesters: [1, 2, 3],
    matchingGoals: ["stress_relief", "bonding"],
    badgeEn: "Deep Sleep",
    badgeHi: "सुखद निद्रा",
    icon: "Music",
  },
];

const STORAGE_JOURNEY_STATE = "astrobaby_garbh_journey_state";

interface UserJourneyProfile {
  week: number;
  availableTimeMinutes: number;
  selectedGoals: JourneyGoal[];
  completedActivityIds: string[];
  skippedActivityIds: string[];
  likedActivityIds: string[];
  dislikedActivityIds: string[];
  streakDays: number;
}

export default function GarbhSanskarJourneyView() {
  const { i18n } = useTranslation();
  const isHindi = i18n.language === "hi";

  // User Journey Profile State
  const [profile, setProfile] = useState<UserJourneyProfile>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_JOURNEY_STATE);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return {
      week: 20,
      availableTimeMinutes: 35,
      selectedGoals: ["stress_relief", "brain_boost", "bonding"],
      completedActivityIds: ["act_gayatri"],
      skippedActivityIds: [],
      likedActivityIds: ["act_raag_yaman"],
      dislikedActivityIds: [],
      streakDays: 4,
    };
  });

  const [showSettings, setShowSettings] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<JourneyActivity | null>(null);

  // Save profile state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_JOURNEY_STATE, JSON.stringify(profile));
    } catch (e) {
      console.error(e);
    }
  }, [profile]);

  // Current Trimester
  const currentTrimester: 1 | 2 | 3 = profile.week >= 28 ? 3 : profile.week >= 14 ? 2 : 1;

  // ── Adaptive Rule-Based Scoring Engine ──
  const scoredPlan = useMemo(() => {
    const scoredList = ACTIVITIES_POOL.map((act) => {
      let score = 0;

      // 1. Stage Match (30 pts)
      if (act.suitableTrimesters.includes(currentTrimester)) {
        score += 30;
      }

      // 2. Goal Match (20 pts)
      const matchesGoal = act.matchingGoals.some((g) => profile.selectedGoals.includes(g));
      if (matchesGoal) {
        score += 20;
      }

      // 3. Preference / Liked Match (15 pts)
      if (profile.likedActivityIds.includes(act.id)) {
        score += 15;
      }

      // 4. Time Budget Fit (15 pts)
      if (act.durationMinutes <= profile.availableTimeMinutes) {
        score += 15;
      } else {
        score -= 25; // Penalty for exceeding total budget
      }

      // 5. Incomplete Today bonus (10 pts)
      const isCompleted = profile.completedActivityIds.includes(act.id);
      if (!isCompleted) {
        score += 10;
      } else {
        score -= 15; // Penalty for already completed today
      }

      // 6. Penalty for Skipped / Disliked (-15 to -25 pts)
      if (profile.skippedActivityIds.includes(act.id)) {
        score -= 15;
      }
      if (profile.dislikedActivityIds.includes(act.id)) {
        score -= 25;
      }

      return { activity: act, score, isCompleted };
    });

    // Sort by highest score first
    scoredList.sort((a, b) => b.score - a.score);

    // Select balanced playlist fitting within available time
    let accumulatedTime = 0;
    const selectedActivities: { activity: JourneyActivity; score: number; isCompleted: boolean }[] = [];
    const usedCategories = new Set<string>();

    for (const item of scoredList) {
      if (accumulatedTime + item.activity.durationMinutes <= profile.availableTimeMinutes + 5) {
        // Encourage category variety
        if (!usedCategories.has(item.activity.category) || selectedActivities.length < 3) {
          selectedActivities.push(item);
          accumulatedTime += item.activity.durationMinutes;
          usedCategories.add(item.activity.category);
        }
      }
      if (selectedActivities.length >= 4) break;
    }

    return {
      playlist: selectedActivities,
      totalPlanMinutes: accumulatedTime,
      nextBest: selectedActivities.find((item) => !item.isCompleted)?.activity || selectedActivities[0]?.activity,
    };
  }, [profile, currentTrimester]);

  // Actions
  const toggleComplete = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setProfile((prev) => {
      const isDone = prev.completedActivityIds.includes(id);
      const updated = isDone
        ? prev.completedActivityIds.filter((item) => item !== id)
        : [...prev.completedActivityIds, id];

      return {
        ...prev,
        completedActivityIds: updated,
        streakDays: !isDone && updated.length >= 3 ? prev.streakDays + 1 : prev.streakDays,
      };
    });
  };

  const handleSkipActivity = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setProfile((prev) => ({
      ...prev,
      skippedActivityIds: [...new Set([...prev.skippedActivityIds, id])],
    }));
  };

  const handleLikeActivity = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setProfile((prev) => ({
      ...prev,
      likedActivityIds: prev.likedActivityIds.includes(id)
        ? prev.likedActivityIds.filter((x) => x !== id)
        : [...prev.likedActivityIds, id],
      dislikedActivityIds: prev.dislikedActivityIds.filter((x) => x !== id),
    }));
  };

  const handleDislikeActivity = (id: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    setProfile((prev) => ({
      ...prev,
      dislikedActivityIds: prev.dislikedActivityIds.includes(id)
        ? prev.dislikedActivityIds.filter((x) => x !== id)
        : [...prev.dislikedActivityIds, id],
      likedActivityIds: prev.likedActivityIds.filter((x) => x !== id),
    }));
  };

  const completedCount = scoredPlan.playlist.filter((p) => p.isCompleted).length;
  const totalCount = scoredPlan.playlist.length;
  const progressPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  // Progression Stage Ladder
  const progressionStage = useMemo(() => {
    if (profile.streakDays >= 14) return { stage: "Adapt", level: 5, desc: "Habitual Vedic Mastery" };
    if (profile.streakDays >= 7) return { stage: "Build Habit", level: 4, desc: "Daily Consistency Formed" };
    if (profile.streakDays >= 3) return { stage: "Practice", level: 3, desc: "Active Routine Established" };
    if (completedCount >= 1) return { stage: "Learn", level: 2, desc: "Exploring Vedic Modules" };
    return { stage: "Discover", level: 1, desc: "Starting Your Journey" };
  }, [profile.streakDays, completedCount]);

  return (
    <div className="flex flex-col h-full text-[#172554] font-sans">
      {/* ── Subheader Bar ── */}
      <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-pink-100/90 px-0.5">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-pink-50 border border-pink-200 flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-[#EA3484]" />
          </div>
          <h3 className="font-bold text-xs sm:text-sm text-[#172554] tracking-tight">
            {isHindi ? "गर्भ संस्कार व्यक्तिगत यात्रा" : "Garbh Sanskar Journey"}
          </h3>
        </div>

        {/* Profile Settings Toggle */}
        <button
          type="button"
          onClick={() => setShowSettings(!showSettings)}
          className="flex items-center gap-1 text-[11px] font-semibold text-[#EA3484] bg-pink-50/90 hover:bg-pink-100 px-2.5 py-1 rounded-lg border border-pink-200/80 transition-all cursor-pointer shadow-2xs"
        >
          <Settings2 className="w-3 h-3 text-[#EA3484]" />
          <span>{isHindi ? "प्राथमिकताएं" : "Preferences"}</span>
        </button>
      </div>

      {/* ── Settings Drawer Modal ── */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden mb-3 bg-white rounded-2xl p-3.5 border border-pink-200 shadow-sm space-y-3"
          >
            <div className="flex items-center justify-between border-b border-pink-100 pb-2">
              <span className="font-bold text-xs text-[#172554] flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-[#EA3484]" />
                {isHindi ? "व्यक्तिगत अनुकूलन सेटिंग्स" : "Personalize Your Plan"}
              </span>
              <button
                type="button"
                onClick={() => setShowSettings(false)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Daily Available Time Selector */}
            <div>
              <label className="block text-[11px] font-bold text-[#172554] mb-1">
                {isHindi ? "दैनिक उपलब्ध समय (Daily Time Budget):" : "Daily Available Time Budget:"}
              </label>
              <div className="grid grid-cols-4 gap-1.5">
                {[15, 30, 45, 60].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setProfile((prev) => ({ ...prev, availableTimeMinutes: t }))}
                    className={`py-1 rounded-lg text-[10px] font-bold border transition-all cursor-pointer ${
                      profile.availableTimeMinutes === t
                        ? "bg-[#EA3484] text-white border-[#EA3484] shadow-2xs"
                        : "bg-slate-50 text-[#475569] border-slate-200 hover:bg-pink-50"
                    }`}
                  >
                    {t} Mins
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Goals Multi-select */}
            <div>
              <label className="block text-[11px] font-bold text-[#172554] mb-1">
                {isHindi ? "मुख्य लक्ष्य (Primary Goals):" : "Your Active Goals:"}
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { id: "stress_relief" as JourneyGoal, labelEn: "Calm Mind & Peace", labelHi: "मानसिक शांति" },
                  { id: "brain_boost" as JourneyGoal, labelEn: "Baby Brain Stimulation", labelHi: "मस्तिष्क विकास" },
                  { id: "bonding" as JourneyGoal, labelEn: "Garbh Samvad Bonding", labelHi: "गर्भ संवाद" },
                  { id: "wellness" as JourneyGoal, labelEn: "Yoga & Physical Health", labelHi: "योग व स्वास्थ्य" },
                  { id: "spiritual" as JourneyGoal, labelEn: "Vedic Mantras", labelHi: "वैदिक मंत्र" },
                ].map((g) => {
                  const isSelected = profile.selectedGoals.includes(g.id);
                  return (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => {
                        setProfile((prev) => ({
                          ...prev,
                          selectedGoals: isSelected
                            ? prev.selectedGoals.filter((x) => x !== g.id)
                            : [...prev.selectedGoals, g.id],
                        }));
                      }}
                      className={`p-1.5 rounded-lg text-[10px] font-bold border text-left flex items-center justify-between transition-all cursor-pointer ${
                        isSelected
                          ? "bg-pink-50 text-[#EA3484] border-[#EA3484]"
                          : "bg-slate-50 text-[#475569] border-slate-200"
                      }`}
                    >
                      <span>{isHindi ? g.labelHi : g.labelEn}</span>
                      {isSelected && <CheckCircle2 className="w-3 h-3 text-[#EA3484]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="space-y-3">
        {/* ── Today's Progress & Streak Banner ── */}
        <div className="bg-gradient-to-br from-[#FFF5F9] via-[#FFFCFE] to-[#FFF8FD] rounded-2xl p-3.5 border border-pink-200/90 shadow-2xs space-y-2.5">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-[#EA3484] uppercase tracking-wider block">
                {isHindi ? "आज की वैदिक दिनचर्या" : "Today's Journey Plan"}
              </span>
              <h4 className="text-sm font-extrabold text-[#172554]">
                {completedCount} of {totalCount} Activities Completed
              </h4>
            </div>

            {/* Streak Flame Badge */}
            <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-xl shadow-2xs">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span className="text-xs font-extrabold text-amber-900">
                {profile.streakDays} {isHindi ? "दिन स्ट्रीक" : "Day Streak"}
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] font-bold text-[#475569]">
              <span>~{scoredPlan.totalPlanMinutes} Mins Routine</span>
              <span className="text-[#EA3484]">{progressPercent}% Progress</span>
            </div>
            <div className="w-full h-2.5 bg-pink-50 rounded-full overflow-hidden p-0.5 border border-pink-200/80">
              <div
                className="h-full bg-gradient-to-r from-[#EA3484] via-[#F45B8A] to-[#F6C85F] rounded-full transition-all duration-500 shadow-xs"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Progression Ladder Indicator */}
          <div className="pt-1.5 border-t border-pink-100/70 flex items-center justify-between text-[10px] text-[#475569]">
            <span className="font-semibold flex items-center gap-1">
              <Award className="w-3 h-3 text-[#EA3484]" />
              {isHindi ? "चरण:" : "Stage:"} <strong className="text-[#172554]">{progressionStage.stage}</strong>
            </span>
            <span className="text-[9px] text-[#EA3484] font-bold uppercase tracking-wider bg-pink-50 px-2 py-0.5 rounded-full border border-pink-200">
              {progressionStage.desc}
            </span>
          </div>
        </div>

        {/* ── Next Best Recommended Activity Hero Card ── */}
        {scoredPlan.nextBest && (
          <div className="bg-gradient-to-r from-[#172554] via-[#1E3A8A] to-[#2B1B4D] rounded-2xl p-3.5 text-white shadow-md space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-pink-300 flex items-center gap-1">
                <Zap className="w-3 h-3 text-amber-400 fill-amber-400" />
                {isHindi ? "अगली श्रेष्ठ गतिविधि" : "Next Best Activity"}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 text-white font-medium">
                {scoredPlan.nextBest.durationMinutes} Mins
              </span>
            </div>

            <div>
              <h4 className="font-bold text-sm text-white leading-tight">
                {isHindi ? scoredPlan.nextBest.titleHi : scoredPlan.nextBest.titleEn}
              </h4>
              <p className="text-xs text-pink-100/80 mt-0.5 line-clamp-2 leading-relaxed">
                {isHindi ? scoredPlan.nextBest.descHi : scoredPlan.nextBest.descEn}
              </p>
            </div>

            <div className="pt-1 flex gap-2">
              <button
                type="button"
                onClick={() => setSelectedActivity(scoredPlan.nextBest)}
                className="flex-1 py-1.5 px-3 rounded-xl bg-gradient-to-r from-[#EA3484] to-[#F43F5E] text-white text-xs font-bold shadow-xs hover:opacity-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isHindi ? "शुरू करें" : "Start Activity"}</span>
              </button>

              <button
                type="button"
                onClick={(e) => toggleComplete(scoredPlan.nextBest.id, e)}
                className="py-1.5 px-3 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                {isHindi ? "पूर्ण मार्क करें" : "Mark Done"}
              </button>
            </div>
          </div>
        )}

        {/* ── Curated Daily Routine List ── */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-[11px] font-bold text-[#172554] flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#EA3484]" />
              {isHindi ? "आज की अनुशंसित गतिविधियां" : "Curated Daily Activities"}
            </span>
          </div>

          <div className="space-y-2">
            {scoredPlan.playlist.map(({ activity, isCompleted }) => {
              const isLiked = profile.likedActivityIds.includes(activity.id);
              return (
                <div
                  key={activity.id}
                  onClick={() => setSelectedActivity(activity)}
                  className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-2.5 ${
                    isCompleted
                      ? "bg-emerald-50/60 border-emerald-200 text-emerald-950"
                      : "bg-white border-pink-100 hover:border-pink-300 text-[#172554] shadow-2xs"
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    {/* Toggle Done Button */}
                    <button
                      type="button"
                      onClick={(e) => toggleComplete(activity.id, e)}
                      className="mt-0.5 text-[#EA3484] focus:outline-none shrink-0"
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                      ) : (
                        <Circle className="w-4 h-4 text-pink-300 hover:text-[#EA3484]" />
                      )}
                    </button>

                    <div>
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-pink-50 text-[#EA3484]">
                          {isHindi ? activity.badgeHi : activity.badgeEn}
                        </span>
                        <span className="text-[10px] text-[#475569] font-medium flex items-center gap-0.5">
                          <Clock className="w-2.5 h-2.5" />
                          {activity.durationMinutes}m
                        </span>
                      </div>

                      <h5 className={`text-xs font-bold leading-snug ${isCompleted ? "line-through text-slate-500" : "text-[#172554]"}`}>
                        {isHindi ? activity.titleHi : activity.titleEn}
                      </h5>
                      <p className="text-[11px] text-[#475569] mt-0.5 line-clamp-1">
                        {isHindi ? activity.descHi : activity.descEn}
                      </p>
                    </div>
                  </div>

                  {/* Feedback like / skip controls */}
                  <div className="flex items-center gap-1 shrink-0 pt-0.5">
                    <button
                      type="button"
                      onClick={(e) => handleLikeActivity(activity.id, e)}
                      className={`p-1 rounded-md transition-colors ${
                        isLiked ? "text-[#EA3484] bg-pink-50" : "text-slate-400 hover:text-[#EA3484]"
                      }`}
                      title="Recommend more like this"
                    >
                      <ThumbsUp className="w-3 h-3" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => handleSkipActivity(activity.id, e)}
                      className="p-1 rounded-md text-slate-400 hover:text-red-500"
                      title="Skip / Replace"
                    >
                      <RefreshCw className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Non-diagnostic guidance disclaimer ── */}
        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 text-[10px] text-[#475569] text-left flex items-start gap-1.5">
          <Info className="w-3.5 h-3.5 text-[#475569] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {isHindi
              ? "यह दिनचर्या प्राचीन वैदिक गर्भ संस्कार सिद्धांतों पर आधारित है। किसी भी चिकित्सीय परामर्श के लिए अपने डॉक्टर से संपर्क करें।"
              : "This journey follows traditional Vedic Garbhadhan Sanskar tenets for maternal wellbeing. It does not replace medical obstetric guidance."}
          </p>
        </div>
      </div>

      {/* ── Activity Detail & Player Popup Modal ── */}
      <AnimatePresence>
        {selectedActivity && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-slate-950/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 15 }}
              className="bg-white rounded-3xl p-4 sm:p-5 max-w-md w-full border border-pink-200 shadow-2xl space-y-3.5 max-h-[85vh] overflow-y-auto overscroll-contain"
            >
              <div className="flex items-center justify-between border-b border-pink-100 pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-pink-50 border border-pink-200 flex items-center justify-center text-[#EA3484]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#EA3484] uppercase tracking-wider">
                      {isHindi ? selectedActivity.badgeHi : selectedActivity.badgeEn}
                    </span>
                    <h4 className="font-bold text-sm text-[#172554] leading-tight">
                      {isHindi ? selectedActivity.titleHi : selectedActivity.titleEn}
                    </h4>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedActivity(null)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Mantra / Story / Yoga Content Card */}
              <div className="bg-gradient-to-br from-[#FFF5F9] via-[#FFFCFE] to-[#FFF8FD] p-4 rounded-2xl border border-pink-200 text-left space-y-2">
                <span className="text-[10px] font-bold text-[#EA3484] uppercase tracking-wider block">
                  {isHindi ? "अभ्यास व श्लोक निर्देश" : "Practice Instructions & Vedic Content"}
                </span>
                <p className="text-xs text-[#172554] font-medium leading-relaxed italic">
                  "{isHindi ? selectedActivity.contentHi : selectedActivity.contentEn}"
                </p>
                <div className="pt-2 border-t border-pink-100 flex items-center gap-2 text-[10px] text-[#475569]">
                  <Clock className="w-3 h-3 text-[#EA3484]" />
                  <span>Recommended duration: {selectedActivity.durationMinutes} Minutes</span>
                </div>
              </div>

              <div className="pt-1 flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    toggleComplete(selectedActivity.id);
                    setSelectedActivity(null);
                  }}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#EA3484] to-[#F45B8A] text-white text-xs font-bold hover:opacity-95 shadow-md shadow-pink-500/20 cursor-pointer"
                >
                  {profile.completedActivityIds.includes(selectedActivity.id)
                    ? (isHindi ? "पूर्ण चिन्हित है ✓" : "Completed ✓")
                    : (isHindi ? "गतिविधि पूर्ण करें" : "Mark as Completed")}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedActivity(null)}
                  className="py-2.5 px-4 rounded-xl bg-slate-100 text-[#172554] text-xs font-bold hover:bg-slate-200 cursor-pointer"
                >
                  {isHindi ? "बंद करें" : "Close"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
