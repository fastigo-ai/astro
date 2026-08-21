import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import {
  CalendarHeart,
  Calendar,
  Sparkles,
  Heart,
  Baby,
  Activity,
  CheckCircle2,
  Circle,
  Apple,
  Sun,
  BookOpen,
  Info,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  Flame,
  Music,
  Smile,
  Footprints,
} from "lucide-react";

export type TrackerMethod = "lmp" | "duedate" | "conception" | "ivf";

interface WeeklyContent {
  week: number;
  babySize: { nameEn: string; nameHi: string; emoji: string; weight: string; length: string };
  fetalHighlightEn: string;
  fetalHighlightHi: string;
  motherBodyEn: string;
  motherBodyHi: string;
  trimester: 1 | 2 | 3;
  suggestions: {
    id: string;
    category: "garbh_sanskar" | "nutrition" | "wellness" | "readiness";
    titleEn: string;
    titleHi: string;
    descEn: string;
    descHi: string;
  }[];
}

const WEEKLY_DATA: Record<number, WeeklyContent> = {
  8: {
    week: 8,
    babySize: { nameEn: "Raspberry", nameHi: "रसभरी (Raspberry)", emoji: "🫐", weight: "~ 1 g", length: "~ 1.6 cm" },
    fetalHighlightEn: "Tiny fingers, toes, and facial features like eyelid folds and nostrils are forming rapidly.",
    fetalHighlightHi: "नन्हे हाथ-पैर की उंगलियां, पलकें और चेहरे की बनावट तेजी से विकसित हो रही हैं।",
    motherBodyEn: "Morning sickness, heightened sense of smell, and breast tenderness are common.",
    motherBodyHi: "मॉर्निंग सिकनेस, गंध के प्रति संवेदनशीलता और हल्का थकान महसूस होना सामान्य है।",
    trimester: 1,
    suggestions: [
      { id: "s8_1", category: "nutrition", titleEn: "Folic Acid & Hydration", titleHi: "फॉलिक एसिड व पर्याप्त जल", descEn: "Drink 8-10 glasses of water and take prescribed iron-folate supplements.", descHi: "प्रतिदिन 8-10 गिलास पानी पिएं और चिकित्सक द्वारा निर्देशित फॉलिक एसिड लें।" },
      { id: "s8_2", category: "garbh_sanskar", titleEn: "Gayatri Mantra Meditation", titleHi: "गायत्री मंत्र व सकारात्मक ध्यान", descEn: "Spend 10 minutes in morning sunlight with gentle breathing affirmations.", descHi: "सुबह 10 मिनट गुनगुनी धूप में बैठकर शांत मन से सकारात्मक संकल्प लें।" },
      { id: "s8_3", category: "wellness", titleEn: "Gentle Morning Walk", titleHi: "हल्की सुबह की सैर", descEn: "15-20 minutes slow paced walk to boost circulation.", descHi: "रक्त संचार बेहतर रखने के लिए 15-20 मिनट धीमी गति से टहलें।" },
    ],
  },
  12: {
    week: 12,
    babySize: { nameEn: "Plum / Lime", nameHi: "बेर / नीम्बू", emoji: "🍋", weight: "~ 14 g", length: "~ 5.4 cm" },
    fetalHighlightEn: "All essential vital organs, reflexes, and vocal cords are fully formed. Baby can curl toes.",
    fetalHighlightHi: "शिशु के सभी प्रमुख अंग और रिफ्लेक्स बन चुके हैं। शिशु पैर की उंगलियां मोड़ सकता है।",
    motherBodyEn: "First trimester nausea begins easing as the placenta takes over hormone production.",
    motherBodyHi: "प्लेसेंटा के पूर्ण विकास से मतली और थकान में धीरे-धीरे कमी आने लगती है।",
    trimester: 1,
    suggestions: [
      { id: "s12_1", category: "garbh_sanskar", titleEn: "Shanti Shloka Chanting", titleHi: "शांति श्लोक व मानसिक शांति", descEn: "Listen to soothing Vedic shlokas to relieve prenatal stress.", descHi: "मानसिक शांति हेतु सौम्य वैदिक मंत्र और शांति पाठ सुनें।" },
      { id: "s12_2", category: "nutrition", titleEn: "Calcium & Nuts Satvik Diet", titleHi: "कैल्शियम व सात्विक आहार", descEn: "Incorporate soaked almonds, walnuts, and fresh curd.", descHi: "भीगे बादाम, अखरोट और ताज़ा दही को आहार में शामिल करें।" },
      { id: "s12_3", category: "wellness", titleEn: "First Trimester Scan Review", titleHi: "प्रथम तिमाही सोनोग्राफी चेक", descEn: "Complete your NT ultrasound scan and routine blood checkup.", descHi: "अपने डॉक्टर से मिलकर 12वें सप्ताह की आवश्यक जांचें पूरी करें।" },
    ],
  },
  16: {
    week: 16,
    babySize: { nameEn: "Avocado", nameHi: "एवोकाडो (Avocado)", emoji: "🥑", weight: "~ 100 g", length: "~ 11.6 cm" },
    fetalHighlightEn: "Baby's eyes can make slow movements and the heart pumps 25 quarts of blood per day.",
    fetalHighlightHi: "शिशु की आंखें धीमी हलचल कर सकती हैं और हृदय प्रतिदिन रक्त संचार करता है।",
    motherBodyEn: "The 'pregnancy glow' appears as blood volume increases; energy levels rebound nicely.",
    motherBodyHi: "ऊर्जा का स्तर बढ़ता है और चेहरे पर प्राकृतिक मातृत्व चमक (Pregnancy Glow) आती है।",
    trimester: 2,
    suggestions: [
      { id: "s16_1", category: "wellness", titleEn: "Prenatal Yoga Stretching", titleHi: "हल्का प्रेगनेंसी योग", descEn: "Butterfly pose (Bhadrasana) and Cat-Cow stretch for spine flexibility.", descHi: "रीढ़ की हड्डी के लचीलेपन हेतु भद्रासन और मार्जरी आसन का अभ्यास करें।" },
      { id: "s16_2", category: "garbh_sanskar", titleEn: "Garbh Samvad Conversation", titleHi: "गर्भ संवाद - शिशु से बातचीत", descEn: "Speak lovingly to your baby for 10 minutes every evening.", descHi: "प्रतिदिन शाम को 10 मिनट शिशु से स्नेहपूर्वक बातें करें।" },
      { id: "s16_3", category: "nutrition", titleEn: "Iron & Vitamin C Pairings", titleHi: "आयरन व विटामिन सी युक्त पोषण", descEn: "Pair leafy spinach and beetroot with lemon water for optimal absorption.", descHi: "पालक, चुकंदर के साथ नींबू पानी लें जिससे आयरन का अवशोषण बेहतर हो।" },
    ],
  },
  20: {
    week: 20,
    babySize: { nameEn: "Banana", nameHi: "केला (Banana)", emoji: "🍌", weight: "~ 300 g", length: "~ 25.6 cm" },
    fetalHighlightEn: "Halfway milestone! Baby can hear your voice and swallow amniotic fluid actively.",
    fetalHighlightHi: "आधी यात्रा पूर्ण! शिशु आपकी आवाज़ सुन सकता है और हलचलें स्पष्ट होने लगती हैं।",
    motherBodyEn: "You may start feeling the first gentle flutters (quickening) inside the belly.",
    motherBodyHi: "पेट के भीतर नन्ही तितली जैसी पहली हलचलें (Quickening) महसूस हो सकती हैं।",
    trimester: 2,
    suggestions: [
      { id: "s20_1", category: "garbh_sanskar", titleEn: "Raag Yaman Music Therapy", titleHi: "राग यमन न्यूरो-म्यूजिक", descEn: "Listen to 432Hz calming Indian classical flute for fetal brain stimulation.", descHi: "शिशु के मस्तिष्क विकास के लिए 432Hz बांसुरी और राग यमन संगीत सुनें।" },
      { id: "s20_2", category: "wellness", titleEn: "Anatomy Ultrasound Scan", titleHi: "एनोमली (अल्ट्रासाउंड) स्कैन", descEn: "Schedule your detailed level-2 anomaly scan with your obstetrician.", descHi: "अपने डॉक्टर से लेवल-2 विस्तृत एनाटॉमी स्कैन की तिथि सुनिश्चित करें।" },
      { id: "s20_3", category: "nutrition", titleEn: "Protein & Saffron Milk", titleHi: "प्रोटीन व केसर दूध", descEn: "Enjoy warm milk with a pinch of saffron and roasted makhana snack.", descHi: "हल्के भुने मखाने और एक चुटकी केसर युक्त गुनगुने दूध का सेवन करें।" },
    ],
  },
  24: {
    week: 24,
    babySize: { nameEn: "Ear of Corn", nameHi: "भुट्टा / मकई (Corn)", emoji: "🌽", weight: "~ 600 g", length: "~ 30 cm" },
    fetalHighlightEn: "Baby's inner ear is fully developed; baby recognizes day vs night rhythms.",
    fetalHighlightHi: "शिशु के कान पूर्ण विकसित हैं; वह दिन और रात की लय को समझने लगता है।",
    motherBodyEn: "Mild Braxton Hicks contractions and lower back strain may occasionally appear.",
    motherBodyHi: "हल्की कमर दर्द और पेट का खिंचाव महसूस हो सकता है; सीधी मुद्रा में बैठें।",
    trimester: 2,
    suggestions: [
      { id: "s24_1", category: "wellness", titleEn: "Pelvic Tilt & Posture Support", titleHi: "पेल्विक टिल्ट व पोस्चर सुधार", descEn: "Use maternity cushion while sitting; practice deep belly diaphragmatic breathing.", descHi: "बैठते समय कुशन का सहारा लें और गहरी सुखद श्वास का अभ्यास करें।" },
      { id: "s24_2", category: "garbh_sanskar", titleEn: "Inspiring Stories & Virtues", titleHi: "सद्गुणों व वीरों की कथाएं", descEn: "Read uplifting tales of wisdom, courage, and compassion to the baby.", descHi: "शिशु को शौर्य, करुणा और ज्ञान से भरपूर प्रेरक कहानियां सुनाएं।" },
      { id: "s24_3", category: "nutrition", titleEn: "Glucose Screen & Fiber", titleHi: "ग्लूकोज जांच व फाइबर युक्त भोजन", descEn: "Eat whole grains, oats, and chia seeds to prevent constipation.", descHi: "दलिया, ओट्स और फाइबर युक्त आहार लें तथा ग्लूकोज टेस्ट कराएं।" },
    ],
  },
  28: {
    week: 28,
    babySize: { nameEn: "Eggplant", nameHi: "बैंगन (Eggplant)", emoji: "🍆", weight: "~ 1.0 kg", length: "~ 37.6 cm" },
    fetalHighlightEn: "Third Trimester begins! Baby opens eyes, blinks, and has regular sleep-wake cycles.",
    fetalHighlightHi: "तीसरी तिमाही आरंभ! शिशु पलकें झपकाता है और उसके सोने-जागने का चक्र बनता है।",
    motherBodyEn: "Leg cramps, shortness of breath, and frequent urination as the uterus expands.",
    motherBodyHi: "पैरों में ऐंठन और बार-बार पेशाब की इच्छा हो सकती है; बाईं करवट सोएं।",
    trimester: 3,
    suggestions: [
      { id: "s28_1", category: "wellness", titleEn: "Start Kick Counting Daily", titleHi: "दैनिक किक काउंट शुरू करें", descEn: "Log baby movements daily using our AstroBaby Kick Counter.", descHi: "प्रतिदिन शांत समय में एस्ट्रो बेबी किक काउंटर से हलचलें दर्ज करें।" },
      { id: "s28_2", category: "wellness", titleEn: "Left-Side Sleeping (SOS)", titleHi: "बाईं करवट सोने की आदत", descEn: "Sleep on your left side with pillow between knees for maximum blood flow.", descHi: "बेहतर रक्त संचार के लिए घुटनों के बीच तकिया रखकर बाईं करवट सोएं।" },
      { id: "s28_3", category: "garbh_sanskar", titleEn: "Garbh Raksha Stotra", titleHi: "गर्भ रक्षा स्तोत्र व शांति मंत्र", descEn: "Recite or listen to Garbh Raksha shlokas for maternal assurance.", descHi: "सकारात्मक सुरक्षा कवच हेतु गर्भ रक्षा स्तोत्र का श्रवण करें।" },
    ],
  },
  32: {
    week: 32,
    babySize: { nameEn: "Squash / Coconut", nameHi: "नारियल / स्क्वैश", emoji: "🥥", weight: "~ 1.7 kg", length: "~ 42.4 cm" },
    fetalHighlightEn: "Bones are fully hardening though the skull remains soft for birth flexibility.",
    fetalHighlightHi: "हड्डियां मजबूत हो रही हैं, सिर का हिस्सा जन्म की सुगमता के लिए लचीला रहता है।",
    motherBodyEn: "Braxton Hicks practice contractions become more noticeable; stay well hydrated.",
    motherBodyHi: "गर्भाशय प्रसव की तैयारी में हल्का खिंचाव करता है; भरपूर पानी पिएं।",
    trimester: 3,
    suggestions: [
      { id: "s32_1", category: "readiness", titleEn: "Hospital Bag Preparation", titleHi: "हॉस्पिटल बैग की तैयारी", descEn: "Prepare maternity documents, comfortable clothing, and newborn essentials.", descHi: "आवश्यक मेडिकल रिपोर्ट्स, आरामदायक कपड़े और शिशु का सामान व्यवस्थित करें।" },
      { id: "s32_2", category: "wellness", titleEn: "Anulom Vilom Pranayama", titleHi: "अनुलोम-विलोम प्राणायाम", descEn: "5-10 minutes slow rhythmic alternate nostril breathing for relaxation.", descHi: "मन को शांत रखने हेतु 5-10 मिनट सहज अनुलोम-विलोम प्राणायाम करें।" },
      { id: "s32_3", category: "nutrition", titleEn: "Small Frequent Meals", titleHi: "छोटे-छोटे अंतरालों पर भोजन", descEn: "Eat 5-6 small light meals to prevent heartburn and indigestion.", descHi: "एसिडिटी से बचने के लिए एक बार में भारी भोजन की जगह हल्का भोजन लें।" },
    ],
  },
  36: {
    week: 36,
    babySize: { nameEn: "Papaya", nameHi: "पपीता (Papaya)", emoji: "🍈", weight: "~ 2.6 kg", length: "~ 47.4 cm" },
    fetalHighlightEn: "Lungs and digestive system are almost mature; baby drops lower into the pelvis.",
    fetalHighlightHi: "फेफड़े परिपक्व हो चुके हैं; शिशु पेल्विस में नीचे की ओर खिसकने लगता है।",
    motherBodyEn: "Breathing gets slightly easier as baby drops, but pelvic pressure increases.",
    motherBodyHi: "शिशु के नीचे आने से सांस लेना आसान होता है, परंतु पेल्विक दबाव बढ़ता है।",
    trimester: 3,
    suggestions: [
      { id: "s36_1", category: "readiness", titleEn: "Birth Plan & Hospital Route", titleHi: "बर्थ प्लान व अस्पताल की व्यवस्था", descEn: "Confirm hospital transport, emergency contacts, and pediatrician list.", descHi: "अस्पताल पहुंचने का रूट, वाहन और इमरजेंसी कॉन्टैक्ट्स तैयार रखें।" },
      { id: "s36_2", category: "wellness", titleEn: "Perineal Massage & Squats", titleHi: "पेल्विक स्ट्रेचिंग व विश्राम", descEn: "Consult your doctor about gentle supported squats for pelvic opening.", descHi: "चिकित्सक की अनुमति से पेल्विक मांसपेशियों के लचीलेपन का अभ्यास करें।" },
      { id: "s36_3", category: "garbh_sanskar", titleEn: "Maha Mrityunjaya Prayer", titleHi: "महामृत्युंजय मंत्र व निर्भयता", descEn: "Channel inner courage and divine blessing for a safe natural delivery.", descHi: "सुलभ व सुरक्षित प्रसव के लिए निर्भय मन से ईश्वर का ध्यान करें।" },
    ],
  },
  40: {
    week: 40,
    babySize: { nameEn: "Watermelon", nameHi: "तरबूज (Watermelon)", emoji: "🍉", weight: "~ 3.4 kg", length: "~ 51.2 cm" },
    fetalHighlightEn: "Full Term Miracle! Baby is ready to meet the world and take the first breath.",
    fetalHighlightHi: "पूर्ण अवधि का चमत्कार! शिशु संसार में आकर पहली सांस लेने को तैयार है।",
    motherBodyEn: "Cervix is effacing and dilating. Watch for regular contractions or water break.",
    motherBodyHi: "गर्भाशय ग्रीवा प्रसव के लिए तैयार हो रही है; नियमित संकुचनों पर ध्यान दें।",
    trimester: 3,
    suggestions: [
      { id: "s40_1", category: "readiness", titleEn: "Labor Signs Monitoring", titleHi: "प्रसव संकेतों की पहचान", descEn: "Track contraction intervals (5-1-1 rule) and notify your doctor immediately.", descHi: "संकुचनों के समय अंतराल पर नज़र रखें और डॉक्टर को तुरंत सूचित करें।" },
      { id: "s40_2", category: "wellness", titleEn: "Calm Deep Breathing", titleHi: "गहरी शांत श्वास प्रक्रिया", descEn: "Stay completely relaxed, trusting your body's natural birthing strength.", descHi: "अपने शरीर की प्राकृतिक शक्ति पर विश्वास रखकर मन को पूर्ण शांत रखें।" },
      { id: "s40_3", category: "garbh_sanskar", titleEn: "Welcoming Vedic Affirmations", titleHi: "शिशु आगमन का पावन स्वागत", descEn: "Embrace the sacred moment of motherhood with unconditional love and gratitude.", descHi: "सच्चे मातृत्व भाव और कृतज्ञता के साथ नन्हे शिशु का स्वागत करें।" },
    ],
  },
};

const STORAGE_SAVED_ACTIVITIES = "astrobaby_tracker_completed_activities";

export default function PregnancyTrackerView() {
  const { i18n } = useTranslation();
  const isHindi = i18n.language === "hi";

  // Input state
  const [method, setMethod] = useState<TrackerMethod>("lmp");
  const [inputDate, setInputDate] = useState<string>(() => {
    const d = new Date();
    d.setDate(d.getDate() - 140); // 20 weeks ago
    return d.toISOString().split("T")[0];
  });

  // Selected week for browsing (defaults to calculated week)
  const [selectedWeekOverride, setSelectedWeekOverride] = useState<number | null>(null);

  // Interest filter
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Completed activities storage
  const [completedActivities, setCompletedActivities] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_SAVED_ACTIVITIES);
      if (saved) setCompletedActivities(JSON.parse(saved));
    } catch (e) {
      console.error(e);
    }
  }, []);

  const toggleActivity = (id: string) => {
    setCompletedActivities((prev) => {
      const updated = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem(STORAGE_SAVED_ACTIVITIES, JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  // Calculation logic
  const calculatedStats = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selected = new Date(inputDate + "T00:00:00");
    if (isNaN(selected.getTime())) return null;

    let eddDate = new Date();
    let startDate = new Date();

    if (method === "lmp") {
      startDate = new Date(selected);
      eddDate = new Date(selected);
      eddDate.setDate(eddDate.getDate() + 280);
    } else if (method === "conception") {
      eddDate = new Date(selected);
      eddDate.setDate(eddDate.getDate() + 266);
      startDate = new Date(selected);
      startDate.setDate(startDate.getDate() - 14);
    } else if (method === "duedate") {
      eddDate = new Date(selected);
      startDate = new Date(selected);
      startDate.setDate(startDate.getDate() - 280);
    } else if (method === "ivf") {
      eddDate = new Date(selected);
      eddDate.setDate(eddDate.getDate() + 261);
      startDate = new Date(selected);
      startDate.setDate(startDate.getDate() - 19);
    }

    const pregnancyDays = Math.max(0, Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)));
    const pregnancyWeeks = Math.min(42, Math.max(1, Math.floor(pregnancyDays / 7)));
    const daysInWeek = pregnancyDays % 7;
    const daysRemaining = Math.max(0, Math.floor((eddDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));
    const progressPercent = Math.min(100, Math.max(0, Math.round((pregnancyDays / 280) * 100)));

    let trimester: 1 | 2 | 3 = 1;
    let trimesterNameEn = "First Trimester";
    let trimesterNameHi = "प्रथम तिमाही";

    if (pregnancyWeeks >= 28) {
      trimester = 3;
      trimesterNameEn = "Third Trimester";
      trimesterNameHi = "तृतीय तिमाही";
    } else if (pregnancyWeeks >= 14) {
      trimester = 2;
      trimesterNameEn = "Second Trimester";
      trimesterNameHi = "द्वितीय तिमाही";
    }

    const formattedEdd = eddDate.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    return {
      pregnancyDays,
      pregnancyWeeks,
      daysInWeek,
      daysRemaining,
      progressPercent,
      trimester,
      trimesterNameEn,
      trimesterNameHi,
      formattedEdd,
    };
  }, [inputDate, method]);

  // Current active viewing week (either override or calculated)
  const currentWeek = selectedWeekOverride ?? calculatedStats?.pregnancyWeeks ?? 20;

  // Closest available weekly content
  const weekContent = useMemo(() => {
    const availableWeeks = [8, 12, 16, 20, 24, 28, 32, 36, 40];
    const closest = availableWeeks.reduce((prev, curr) =>
      Math.abs(curr - currentWeek) < Math.abs(prev - currentWeek) ? curr : prev
    );
    return WEEKLY_DATA[closest] || WEEKLY_DATA[20];
  }, [currentWeek]);

  // Filtered suggestions
  const filteredSuggestions = useMemo(() => {
    if (selectedCategory === "all") return weekContent.suggestions;
    return weekContent.suggestions.filter((s) => s.category === selectedCategory);
  }, [weekContent, selectedCategory]);

  return (
    <div className="flex flex-col h-full text-[#172554] font-sans">
      {/* ── Header Title & Week Navigation ── */}
      <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-pink-100/90 px-0.5">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md bg-pink-50 border border-pink-200 flex items-center justify-center">
            <CalendarHeart className="w-3 h-3 text-[#EA3484]" />
          </div>
          <h3 className="font-bold text-xs sm:text-sm text-[#172554] tracking-tight">
            {isHindi ? "गर्भावस्था ट्रैकर व साप्ताहिक गाइड" : "Pregnancy Tracker & Journey"}
          </h3>
        </div>

        {/* Reset to Calculated Week button */}
        {selectedWeekOverride && (
          <button
            type="button"
            onClick={() => setSelectedWeekOverride(null)}
            className="text-[10px] font-bold text-[#EA3484] bg-pink-50 px-2 py-0.5 rounded-md border border-pink-200 hover:bg-pink-100 transition-colors cursor-pointer"
          >
            {isHindi ? "वर्तमान सप्ताह" : "Current Week"}
          </button>
        )}
      </div>

      <div className="space-y-3">
        {/* ── Quick Calculator Summary Card ── */}
        {calculatedStats && (
          <div className="bg-gradient-to-br from-[#FFF5F9] via-[#FFFCFE] to-[#FFF8FD] rounded-2xl p-3.5 border border-pink-200/90 shadow-2xs space-y-2.5">
            {/* Top Stat Row */}
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#EA3484] uppercase tracking-wider block">
                  {isHindi ? "वर्तमान प्रगति" : "Your Pregnancy Stage"}
                </span>
                <h4 className="text-base sm:text-lg font-extrabold text-[#172554] leading-tight">
                  Week {calculatedStats.pregnancyWeeks} + {calculatedStats.daysInWeek} Days
                </h4>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-pink-50 text-[#EA3484] border border-pink-200 block w-max ml-auto mb-0.5">
                  {isHindi ? calculatedStats.trimesterNameHi : calculatedStats.trimesterNameEn}
                </span>
                <span className="text-[10px] text-[#475569] font-medium">
                  EDD: <strong className="text-[#172554]">{calculatedStats.formattedEdd}</strong>
                </span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] font-bold text-[#475569]">
                <span>{calculatedStats.pregnancyDays} Days Completed</span>
                <span className="text-[#EA3484]">{calculatedStats.daysRemaining} Days Left ({calculatedStats.progressPercent}%)</span>
              </div>
              <div className="w-full h-2 bg-pink-50 rounded-full overflow-hidden p-0.5 border border-pink-200/80">
                <div
                  className="h-full bg-gradient-to-r from-[#EA3484] via-[#F45B8A] to-[#F6C85F] rounded-full transition-all duration-300 shadow-xs"
                  style={{ width: `${calculatedStats.progressPercent}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* ── Week Carousel Selector ── */}
        <div className="bg-white rounded-xl p-2.5 border border-pink-100 shadow-2xs">
          <div className="flex items-center justify-between mb-1.5 px-1">
            <span className="text-[11px] font-bold text-[#172554] flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#EA3484]" />
              {isHindi ? `सप्ताह ${currentWeek} की संपूर्ण जानकारी` : `Week ${currentWeek} Overview`}
            </span>
            <span className="text-[10px] text-[#475569] font-medium">
              Select Week (1-40)
            </span>
          </div>

          <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {[4, 8, 12, 16, 20, 24, 28, 32, 36, 40].map((w) => (
              <button
                key={w}
                type="button"
                onClick={() => setSelectedWeekOverride(w)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                  currentWeek === w
                    ? "bg-[#EA3484] text-white shadow-xs scale-105"
                    : "bg-pink-50/70 text-[#475569] hover:bg-pink-100 hover:text-[#172554]"
                }`}
              >
                Week {w}
              </button>
            ))}
          </div>
        </div>

        {/* ── Baby Size & Development Card ── */}
        <div className="bg-gradient-to-br from-[#FFF5F9] via-[#FFFCFE] to-[#FFF8FD] rounded-2xl p-3.5 border border-pink-200/90 shadow-2xs">
          <div className="flex items-center gap-3">
            {/* Fruit / Object Emoji */}
            <div className="w-14 h-14 rounded-2xl bg-white border border-pink-200 flex flex-col items-center justify-center shadow-xs shrink-0">
              <span className="text-2xl">{weekContent.babySize.emoji}</span>
              <span className="text-[9px] font-extrabold text-[#EA3484] mt-0.5">W{currentWeek}</span>
            </div>

            <div>
              <span className="text-[10px] font-bold text-[#475569] uppercase tracking-wider block">
                {isHindi ? "शिशु का आकार व वज़न" : "Baby Size & Growth"}
              </span>
              <h4 className="text-sm font-extrabold text-[#172554]">
                {isHindi ? weekContent.babySize.nameHi : weekContent.babySize.nameEn}
              </h4>
              <div className="flex items-center gap-2 text-[10px] text-pink-700 font-semibold mt-0.5">
                <span>{weekContent.babySize.length}</span>
                <span>•</span>
                <span>{weekContent.babySize.weight}</span>
              </div>
            </div>
          </div>

          {/* Development highlights */}
          <div className="mt-3 pt-2.5 border-t border-pink-100/80 space-y-1.5 text-left text-xs">
            <div className="flex items-start gap-2 bg-white/90 p-2 rounded-xl border border-pink-100">
              <Baby className="w-3.5 h-3.5 text-[#EA3484] shrink-0 mt-0.5" />
              <p className="text-[11px] text-[#172554] leading-snug">
                <strong>{isHindi ? "शिशु का विकास: " : "Fetal Development: "}</strong>
                {isHindi ? weekContent.fetalHighlightHi : weekContent.fetalHighlightEn}
              </p>
            </div>

            <div className="flex items-start gap-2 bg-white/90 p-2 rounded-xl border border-pink-100">
              <Heart className="w-3.5 h-3.5 text-[#EA3484] shrink-0 mt-0.5" />
              <p className="text-[11px] text-[#475569] leading-snug">
                <strong>{isHindi ? "मां के शरीर में बदलाव: " : "Mother's Body: "}</strong>
                {isHindi ? weekContent.motherBodyHi : weekContent.motherBodyEn}
              </p>
            </div>
          </div>
        </div>

        {/* ── Personalized Weekly Guidance & Activities ── */}
        <div className="space-y-2">
          <div className="flex items-center justify-between px-1">
            <span className="text-[11px] font-bold text-[#172554] flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#EA3484]" />
              {isHindi ? "साप्ताहिक व्यक्तिगत सुझाव व गतिविधियां" : "Personalized Weekly Plan"}
            </span>
          </div>

          {/* Category Chips */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {[
              { id: "all", labelEn: "All", labelHi: "सभी" },
              { id: "garbh_sanskar", labelEn: "Garbh Sanskar", labelHi: "गर्भ संस्कार" },
              { id: "nutrition", labelEn: "Nutrition", labelHi: "सात्विक आहार" },
              { id: "wellness", labelEn: "Yoga & Wellness", labelHi: "योग व स्वास्थ्य" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? "bg-[#172554] text-white shadow-2xs"
                    : "bg-white text-[#475569] border border-pink-100 hover:bg-pink-50"
                }`}
              >
                {isHindi ? cat.labelHi : cat.labelEn}
              </button>
            ))}
          </div>

          {/* Activity Cards List */}
          <div className="space-y-1.5">
            {filteredSuggestions.map((item) => {
              const isDone = completedActivities.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => toggleActivity(item.id)}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-start justify-between gap-2.5 ${
                    isDone
                      ? "bg-emerald-50/60 border-emerald-200 text-emerald-950"
                      : "bg-white border-pink-100 hover:border-pink-300 text-[#172554] shadow-2xs"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <button
                      type="button"
                      className="mt-0.5 shrink-0 text-[#EA3484] focus:outline-none"
                    >
                      {isDone ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100" />
                      ) : (
                        <Circle className="w-4 h-4 text-pink-300" />
                      )}
                    </button>

                    <div>
                      <h5 className={`text-xs font-bold leading-snug ${isDone ? "line-through text-slate-500" : "text-[#172554]"}`}>
                        {isHindi ? item.titleHi : item.titleEn}
                      </h5>
                      <p className="text-[11px] text-[#475569] mt-0.5 leading-tight">
                        {isHindi ? item.descHi : item.descEn}
                      </p>
                    </div>
                  </div>

                  <span className="text-[9px] font-bold uppercase px-1.5 py-0.5 rounded bg-pink-50 text-[#EA3484] shrink-0">
                    {item.category.replace("_", " ")}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Non-Diagnostic Disclaimer ── */}
        <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 text-[10px] text-[#475569] text-left flex items-start gap-1.5">
          <Info className="w-3.5 h-3.5 text-[#475569] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {isHindi
              ? "यह गाइड सामान्य जानकारी और वैदिक मातृत्व सुझावों पर आधारित है। किसी भी स्वास्थ्य चिंता या लक्षण के लिए अपने डॉक्टर से संपर्क करें।"
              : "This guide is for informational & Vedic wellness purposes. Always consult your obstetrician for any health concerns or symptoms."}
          </p>
        </div>
      </div>
    </div>
  );
}
