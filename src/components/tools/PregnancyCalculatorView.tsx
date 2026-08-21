import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  Calculator,
  Calendar,
  Sparkles,
  Clock,
  Heart,
  AlertCircle,
  RotateCcw,
  CheckCircle2,
  Info,
  ChevronRight,
  Sun,
  Layers,
} from "lucide-react";

export type CalcMethod = "lmp" | "conception" | "ivf" | "duedate";
export type IvfType = "day5" | "day3";

export default function PregnancyCalculatorView() {
  const { i18n } = useTranslation();
  const isHindi = i18n.language === "hi";

  // Calculation Method
  const [method, setMethod] = useState<CalcMethod>("lmp");

  // Input Dates (YYYY-MM-DD)
  // Default to a realistic recent date (e.g., ~12 weeks ago)
  const todayStr = useMemo(() => new Date().toISOString().split("T")[0], []);

  const defaultLmpDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() - 140); // ~20 weeks ago
    return d.toISOString().split("T")[0];
  }, []);

  const [inputDate, setInputDate] = useState<string>(defaultLmpDate);
  const [ivfType, setIvfType] = useState<IvfType>("day5");
  const [showResult, setShowResult] = useState<boolean>(true);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Method change handler
  const handleMethodChange = (newMethod: CalcMethod) => {
    setMethod(newMethod);
    setValidationError(null);

    const now = new Date();
    if (newMethod === "lmp") {
      const d = new Date(now);
      d.setDate(d.getDate() - 140);
      setInputDate(d.toISOString().split("T")[0]);
    } else if (newMethod === "conception") {
      const d = new Date(now);
      d.setDate(d.getDate() - 126); // 18 weeks ago
      setInputDate(d.toISOString().split("T")[0]);
    } else if (newMethod === "ivf") {
      const d = new Date(now);
      d.setDate(d.getDate() - 121);
      setInputDate(d.toISOString().split("T")[0]);
    } else if (newMethod === "duedate") {
      const d = new Date(now);
      d.setDate(d.getDate() + 140); // 20 weeks in future
      setInputDate(d.toISOString().split("T")[0]);
    }
  };

  // Main Calculation Logic
  const calculation = useMemo(() => {
    if (!inputDate) return null;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selected = new Date(inputDate + "T00:00:00");
    if (isNaN(selected.getTime())) return null;

    let eddDate = new Date();
    let estimatedLmpDate = new Date();

    // 1. Validate based on method
    if (method === "lmp") {
      if (selected > today) {
        return { error: isHindi ? "LMP तिथि आज के बाद की नहीं हो सकती" : "LMP date cannot be in the future." };
      }
      const daysDiff = Math.floor((today.getTime() - selected.getTime()) / (1000 * 60 * 60 * 24));
      if (daysDiff > 310) {
        return { error: isHindi ? "कृपया वैध LMP तिथि चुनें (44 सप्ताह के भीतर)" : "Please select a valid LMP date within 44 weeks." };
      }

      // EDD = LMP + 280 days
      estimatedLmpDate = new Date(selected);
      eddDate = new Date(selected);
      eddDate.setDate(eddDate.getDate() + 280);
    } else if (method === "conception") {
      if (selected > today) {
        return { error: isHindi ? "गर्भधारण तिथि आज के बाद की नहीं हो सकती" : "Conception date cannot be in the future." };
      }
      // EDD = Conception + 266 days
      eddDate = new Date(selected);
      eddDate.setDate(eddDate.getDate() + 266);

      // Estimated LMP = Conception - 14 days
      estimatedLmpDate = new Date(selected);
      estimatedLmpDate.setDate(estimatedLmpDate.getDate() - 14);
    } else if (method === "ivf") {
      if (selected > today) {
        return { error: isHindi ? "ट्रांसफर तिथि आज के बाद की नहीं हो सकती" : "Transfer date cannot be in the future." };
      }
      // Day 5 embryo: EDD = Transfer + 261 days, LMP = Transfer - 19 days
      // Day 3 embryo: EDD = Transfer + 263 days, LMP = Transfer - 17 days
      const addDays = ivfType === "day5" ? 261 : 263;
      const subLmpDays = ivfType === "day5" ? 19 : 17;

      eddDate = new Date(selected);
      eddDate.setDate(eddDate.getDate() + addDays);

      estimatedLmpDate = new Date(selected);
      estimatedLmpDate.setDate(estimatedLmpDate.getDate() - subLmpDays);
    } else if (method === "duedate") {
      // User entered Due Date directly
      eddDate = new Date(selected);
      // Estimated LMP = Due Date - 280 days
      estimatedLmpDate = new Date(selected);
      estimatedLmpDate.setDate(estimatedLmpDate.getDate() - 280);
    }

    // Pregnancy Day = Current Date - Estimated LMP
    const pregnancyDays = Math.floor((today.getTime() - estimatedLmpDate.getTime()) / (1000 * 60 * 60 * 24));
    const pregnancyWeeks = Math.floor(pregnancyDays / 7);
    const currentDayInWeek = Math.max(0, pregnancyDays % 7);

    // Trimester Calculation
    let trimesterNameEn = "First Trimester";
    let trimesterNameHi = "प्रथम तिमाही";
    let trimesterNum = 1;

    if (pregnancyWeeks >= 28) {
      trimesterNameEn = "Third Trimester";
      trimesterNameHi = "तृतीय तिमाही";
      trimesterNum = 3;
    } else if (pregnancyWeeks >= 14) {
      trimesterNameEn = "Second Trimester";
      trimesterNameHi = "द्वितीय तिमाही";
      trimesterNum = 2;
    }

    // Progress percentage
    const progressPercent = Math.min(100, Math.max(0, Math.round((pregnancyDays / 280) * 100)));

    // Days Remaining = EDD - Current Date
    const daysRemaining = Math.floor((eddDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    const isDuePassed = daysRemaining < 0;

    // Next Milestone
    let nextMilestone = "Week 12 (End of 1st Trimester)";
    if (pregnancyWeeks < 12) {
      nextMilestone = isHindi ? "सप्ताह 12 (प्रथम तिमाही पूर्ण)" : "Week 12 (End of 1st Trimester)";
    } else if (pregnancyWeeks < 20) {
      nextMilestone = isHindi ? "सप्ताह 20 (अल्ट्रासाउंड स्कैन / आधी यात्रा)" : "Week 20 (Anatomy Scan / Halfway Mark)";
    } else if (pregnancyWeeks < 24) {
      nextMilestone = isHindi ? "सप्ताह 24 (शिशु वायबिलिटी व श्रवण विकास)" : "Week 24 (Auditory & Viability Milestone)";
    } else if (pregnancyWeeks < 28) {
      nextMilestone = isHindi ? "सप्ताह 28 (तृतीय तिमाही का आरंभ)" : "Week 28 (Third Trimester Begins)";
    } else if (pregnancyWeeks < 37) {
      nextMilestone = isHindi ? "सप्ताह 37 (पूर्ण अवधि - Full Term)" : "Week 37 (Full Term Milestone)";
    } else {
      nextMilestone = isHindi ? "सप्ताह 40 (प्रसव नियत तिथि - Due Date)" : "Week 40 (Expected Due Date)";
    }

    const formattedEdd = eddDate.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    return {
      error: null,
      pregnancyDays: Math.max(0, pregnancyDays),
      pregnancyWeeks: Math.max(0, pregnancyWeeks),
      currentDayInWeek,
      trimesterNameEn,
      trimesterNameHi,
      trimesterNum,
      progressPercent,
      daysRemaining: Math.max(0, daysRemaining),
      isDuePassed,
      formattedEdd,
      nextMilestone,
    };
  }, [inputDate, method, ivfType, isHindi]);

  return (
    <div className="flex flex-col h-full text-[#172554] font-sans">
      {/* ── Header Title & Reset ── */}
      <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-pink-100/90 px-0.5">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-pink-50 border border-pink-200 flex items-center justify-center">
            <Calculator className="w-3 h-3 text-[#EA3484]" />
          </div>
          <h3 className="font-bold text-xs sm:text-sm text-[#172554] tracking-tight">
            {isHindi ? "गर्भावस्था कैलकुलेटर" : "Pregnancy Calculator"}
          </h3>
        </div>

        <button
          type="button"
          onClick={() => handleMethodChange("lmp")}
          className="flex items-center gap-1 text-[11px] font-semibold text-[#475569] hover:text-[#EA3484] bg-white hover:bg-pink-50 px-2 py-0.5 rounded-lg border border-pink-100 transition-colors cursor-pointer"
          title="Reset Calculator"
        >
          <RotateCcw className="w-3 h-3 text-[#EA3484]" />
          <span>{isHindi ? "रीसेट" : "Reset"}</span>
        </button>
      </div>

      <div className="space-y-3">
        {/* ── Method Selection Pills (Only 1 Active) ── */}
        <div className="bg-[#FFF5F9] p-1 rounded-xl border border-pink-200/80 grid grid-cols-2 gap-1 text-center">
          <button
            type="button"
            onClick={() => handleMethodChange("lmp")}
            className={`py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
              method === "lmp"
                ? "bg-[#EA3484] text-white shadow-xs"
                : "text-[#475569] hover:text-[#172554] hover:bg-pink-100/50"
            }`}
          >
            {isHindi ? "1. LMP (मासिक धर्म)" : "1. Last Period (LMP)"}
          </button>

          <button
            type="button"
            onClick={() => handleMethodChange("conception")}
            className={`py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
              method === "conception"
                ? "bg-[#EA3484] text-white shadow-xs"
                : "text-[#475569] hover:text-[#172554] hover:bg-pink-100/50"
            }`}
          >
            {isHindi ? "2. गर्भधारण तिथि" : "2. Conception Date"}
          </button>

          <button
            type="button"
            onClick={() => handleMethodChange("ivf")}
            className={`py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
              method === "ivf"
                ? "bg-[#EA3484] text-white shadow-xs"
                : "text-[#475569] hover:text-[#172554] hover:bg-pink-100/50"
            }`}
          >
            {isHindi ? "3. IVF ट्रांसफर" : "3. IVF / Embryo"}
          </button>

          <button
            type="button"
            onClick={() => handleMethodChange("duedate")}
            className={`py-1.5 px-2 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
              method === "duedate"
                ? "bg-[#EA3484] text-white shadow-xs"
                : "text-[#475569] hover:text-[#172554] hover:bg-pink-100/50"
            }`}
          >
            {isHindi ? "4. ज्ञात नियत तिथि" : "4. Known Due Date"}
          </button>
        </div>

        {/* ── Date Input Form Card ── */}
        <div className="bg-white rounded-xl p-3 border border-pink-100 shadow-2xs space-y-2.5">
          <div>
            <label className="block text-[11px] font-bold text-[#172554] mb-1">
              {method === "lmp" && (isHindi ? "अंतिम मासिक धर्म (LMP) का पहला दिन:" : "First Day of Last Menstrual Period (LMP):")}
              {method === "conception" && (isHindi ? "गर्भधारण की तिथि (Conception Date):" : "Estimated Conception Date:")}
              {method === "ivf" && (isHindi ? "भ्रूण ट्रांसफर की तिथि (IVF Transfer Date):" : "IVF Embryo Transfer Date:")}
              {method === "duedate" && (isHindi ? "अपेक्षित प्रसव तिथि (Expected Due Date):" : "Your Expected Due Date (EDD):")}
            </label>
            <input
              type="date"
              value={inputDate}
              onChange={(e) => setInputDate(e.target.value)}
              className="w-full bg-pink-50/40 border border-pink-200/90 rounded-lg px-2.5 py-1.5 text-xs text-[#172554] font-medium focus:outline-none focus:ring-1 focus:ring-[#EA3484]"
            />
          </div>

          {/* IVF Specific Option */}
          {method === "ivf" && (
            <div className="pt-1">
              <label className="block text-[10px] font-bold text-[#475569] mb-1">
                {isHindi ? "भ्रूण का प्रकार (Embryo Type):" : "Embryo Transfer Type:"}
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                <button
                  type="button"
                  onClick={() => setIvfType("day5")}
                  className={`py-1 px-2 rounded-lg text-[10px] font-bold border transition-all cursor-pointer ${
                    ivfType === "day5"
                      ? "bg-pink-100 text-[#EA3484] border-[#EA3484]"
                      : "bg-slate-50 text-[#475569] border-slate-200"
                  }`}
                >
                  Day 5 Blastocyst (+261d)
                </button>
                <button
                  type="button"
                  onClick={() => setIvfType("day3")}
                  className={`py-1 px-2 rounded-lg text-[10px] font-bold border transition-all cursor-pointer ${
                    ivfType === "day3"
                      ? "bg-pink-100 text-[#EA3484] border-[#EA3484]"
                      : "bg-slate-50 text-[#475569] border-slate-200"
                  }`}
                >
                  Day 3 Embryo (+263d)
                </button>
              </div>
            </div>
          )}

          {/* Error notice if validation fails */}
          {calculation?.error && (
            <div className="bg-red-50 text-red-600 text-[11px] p-2 rounded-lg border border-red-200 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{calculation.error}</span>
            </div>
          )}
        </div>

        {/* ── Main Result Screen (When calculation is valid) ── */}
        {calculation && !calculation.error && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-2.5"
          >
            {/* Main Result Card */}
            <div className="bg-gradient-to-br from-[#FFF5F9] via-[#FFFCFE] to-[#FFF8FD] rounded-2xl p-3.5 border border-pink-200/90 shadow-2xs space-y-3">
              
              {/* Header Title with Heart */}
              <div className="flex items-center justify-between pb-2 border-b border-pink-100">
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-[#EA3484] fill-[#EA3484]/20" />
                  <span className="font-bold text-xs text-[#172554]">
                    {isHindi ? "आपकी गर्भावस्था यात्रा" : "Your Pregnancy Journey"} 🌸
                  </span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-50 text-[#EA3484] border border-pink-200">
                  {isHindi ? calculation.trimesterNameHi : calculation.trimesterNameEn}
                </span>
              </div>

              {/* Progress and EDD Grid */}
              <div className="grid grid-cols-2 gap-2 text-left">
                <div className="bg-white/90 p-2.5 rounded-xl border border-pink-100 shadow-2xs">
                  <span className="text-[10px] text-[#475569] block font-medium">
                    {isHindi ? "वर्तमान प्रगति" : "Current Progress"}
                  </span>
                  <h4 className="text-sm font-extrabold text-[#172554] mt-0.5 leading-tight">
                    {calculation.pregnancyWeeks} Weeks + {calculation.currentDayInWeek} Days
                  </h4>
                  <span className="text-[10px] text-pink-600 font-semibold">
                    Day {calculation.pregnancyDays} of 280
                  </span>
                </div>

                <div className="bg-white/90 p-2.5 rounded-xl border border-pink-100 shadow-2xs">
                  <span className="text-[10px] text-[#475569] block font-medium">
                    {isHindi ? "अनुमानित प्रसव तिथि" : "Estimated Due Date"}
                  </span>
                  <h4 className="text-sm font-extrabold text-[#EA3484] mt-0.5 leading-tight">
                    {calculation.formattedEdd}
                  </h4>
                  <span className="text-[10px] text-[#475569] font-medium">
                    {calculation.isDuePassed
                      ? (isHindi ? "नियत तिथि पूर्ण" : "Due Date Reached")
                      : `${calculation.daysRemaining} ${isHindi ? "दिन शेष" : "Days Remaining"}`}
                  </span>
                </div>
              </div>

              {/* Progress Percentage Bar */}
              <div className="space-y-1 pt-1">
                <div className="flex justify-between text-[11px] font-bold text-[#172554]">
                  <span>{isHindi ? "गर्भावस्था प्रगति" : "Pregnancy Progress"}</span>
                  <span className="text-[#EA3484] font-mono">{calculation.progressPercent}%</span>
                </div>
                <div className="w-full h-2.5 bg-pink-50 rounded-full overflow-hidden p-0.5 border border-pink-200/80">
                  <div
                    className="h-full bg-gradient-to-r from-[#EA3484] via-[#F45B8A] to-[#F6C85F] rounded-full transition-all duration-500 shadow-xs"
                    style={{ width: `${calculation.progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Trimester Milestone Bar */}
              <div className="bg-white/90 p-2 rounded-xl border border-pink-100 text-[10px] flex items-center justify-between text-[#475569]">
                <span className={calculation.trimesterNum === 1 ? "font-bold text-[#EA3484]" : ""}>
                  T1 (W1-13)
                </span>
                <span>•</span>
                <span className={calculation.trimesterNum === 2 ? "font-bold text-[#EA3484]" : ""}>
                  T2 (W14-27)
                </span>
                <span>•</span>
                <span className={calculation.trimesterNum === 3 ? "font-bold text-[#EA3484]" : ""}>
                  T3 (W28-40)
                </span>
              </div>

              {/* Next Milestone Card */}
              <div className="bg-gradient-to-r from-pink-50 to-purple-50/60 p-2.5 rounded-xl border border-pink-200/70 text-left flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-[#EA3484] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-bold text-[#EA3484] uppercase tracking-wider block">
                    {isHindi ? "अगला महत्वपूर्ण पड़ाव" : "Next Milestone"}
                  </span>
                  <p className="text-[11px] font-bold text-[#172554] mt-0.5 leading-snug">
                    {calculation.nextMilestone}
                  </p>
                </div>
              </div>

              {/* If due date passed banner */}
              {calculation.isDuePassed && (
                <div className="bg-amber-50 p-2.5 rounded-xl border border-amber-200 text-[11px] text-amber-900 text-left">
                  <span className="font-bold block mb-0.5">
                    {isHindi ? "नियत तिथि पूर्ण हो चुकी है:" : "Estimated due date has passed:"}
                  </span>
                  <p className="leading-snug">
                    {isHindi
                      ? "कृपया प्रसव योजना और मार्गदर्शन के लिए अपने डॉक्टर से संपर्क करें।"
                      : "Please consult your healthcare provider for clinical guidance and next steps."}
                  </p>
                </div>
              )}
            </div>

            {/* ── Important Medical Disclaimer ── */}
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 text-[10px] text-[#475569] text-left flex items-start gap-1.5">
              <Info className="w-3.5 h-3.5 text-[#475569] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {isHindi
                  ? "यह कैलकुलेटर एक अनुमानित समय-सीमा प्रदान करता है। यह चिकित्सीय सलाह या प्रसवपूर्व पेशेवर जांच का विकल्प नहीं है।"
                  : "This calculator provides an estimated pregnancy timeline. Due dates can vary, and this tool does not replace medical advice or professional prenatal care."}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
