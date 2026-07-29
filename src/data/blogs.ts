export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^\w\u0900-\u097F\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .slice(0, 80) || "post";

export type Post = { img: string; title: string; date: string };

export function getPostCategory(title: string): string {
  const t = title.toLowerCase();
  if (t.includes("trimester") || t.includes("month") || t.includes("stage")) return "Trimester Guide";
  if (t.includes("diet") || t.includes("food") || t.includes("fruit") || t.includes("water") || t.includes("diabetes") || t.includes("coconut")) return "Diet & Nutrition";
  if (t.includes("yoga") || t.includes("exercise") || t.includes("pain") || t.includes("sleep") || t.includes("stress") || t.includes("vomiting") || t.includes("blood pressure")) return "Health & Fitness";
  if (t.includes("mantra") || t.includes("shloka") || t.includes("music") || t.includes("punsavan") || t.includes("simant") || t.includes("scripture") || t.includes("soul")) return "Vedic & Mantras";
  if (t.includes("sanskar") || t.includes("womb") || t.includes("baby") || t.includes("samvad")) return "Garbh Sanskar";
  return "Pregnancy Care";
}

export function getReadTime(title: string): string {
  const words = title.split(/\s+/).length;
  const time = Math.max(3, Math.min(8, Math.floor(words * 0.3) + 3));
  return `${time} min read`;
}

const BLOG_THUMBNAILS = [
  "/images/story_thumb_1.png",
  "/images/story_thumb_2.png",
  "/images/story_thumb_3.png",
  "/images/story_thumb_4.png",
  "/images/story_thumb_5.png",
  "/images/celestial_mother.png",
  "/images/astrobaby_video_spotlight.png",
  "/images/about_premium.png",
  "/images/features_banner_astrobaby.png",
  "/images/hero/hero-1.png",
  "/images/hero/hero-2.png",
  "/images/hero/hero-3.png",
];

export function getPostImage(post?: Post, index?: number): string {
  if (post?.img) {
    if (post.img.startsWith("http://") || post.img.startsWith("https://") || post.img.startsWith("/")) {
      return post.img;
    }
  }
  const idx = index !== undefined ? Math.abs(index) : Math.abs(post?.title?.length || 0);
  return BLOG_THUMBNAILS[idx % BLOG_THUMBNAILS.length];
}


export const posts: Post[] = [
  {
    img: "maxresdefault123.jpg",
    title: "According to the scriptures, what should be the first step after a child's birth?",
    date: "Oct 24, 2025",
  },
  {
    img: "maxresdefault.jpg",
    title: "The Real Reason Behind Broken Relationships Between Husband and Wife",
    date: "Oct 24, 2025",
  },
  {
    img: "Thesecretofthesoulandthelivingentity,whichveryfewpeopleknow!.jpg",
    title: "The secret of the soul and the living entity, which very few people know!",
    date: "Oct 07, 2025",
  },
  {
    img: "garbh-sanskar-in-the-third-trimester.jpg",
    title: "Nurturing Your Pregnancy: Garbh Sanskar in the Third Trimester",
    date: "Oct 11, 2023",
  },
  {
    img: "garbh-sanskar-in-the-second-trimester.jpg",
    title: "Garbh Sanskar in the Second Trimester: A Comprehensive Guide",
    date: "Oct 09, 2023",
  },
  {
    img: "garbh-sanskar-in-the-first-trimester.jpg",
    title: "Unraveling The Power of Garbh Sanskar in The First Trimester",
    date: "Oct 04, 2023",
  },
  {
    img: "stages-of-pregnancy-month-by-month-your-definitive-guide-to-pregnancy-krishna-coming.jpg",
    title: "9 Stages of Pregnancy, Month by Month: Your Definitive Guide To Pregnancy",
    date: "Jan 30, 2023",
  },
  {
    img: "from-which-month-should-you-start-garbh-sanskar.jpg",
    title: "From Which Month Should You Start Garbh Sanskar?",
    date: "Jan 18, 2023",
  },
  {
    img: "fruit-not-to-eat-during-pregnancy-krishna-coming-garbh-sanskar.jpg",
    title: "Fruits Not To Eat During Pregnancy",
    date: "Jan 10, 2023",
  },
  {
    img: "how-to-do-garbh-sanskar-at-home-krishna-coming.jpg",
    title: "How to Do Garbh Sanskar at Home",
    date: "Oct 27, 2022",
  },
  {
    img: "how-to-take-care-of-pregnant-women-during-pregnancy-min.jpg",
    title: "How to Take Care of Pregnant Women During Pregnancy",
    date: "Oct 14, 2022",
  },
  {
    img: "five-amazing-benefits-of-coconut-water-duringpregnancy-krishna-coming-garbh-sanskar0.jpg",
    title: "5 Amazing Benefits of Coconut Water During Pregnancy",
    date: "Sep 30, 2022",
  },
  {
    img: "best-online-garbh-sanskar-application-krishna-coming0.jpg",
    title: "Best Garbh Sanskar App - Astro Baby",
    date: "Sep 21, 2022",
  },
  {
    img: "how-to-manage-job-stress-during-pregnancy-krishna-coming-garbh-sanskar0.jpg",
    title: "How to Manage Job Stress During Pregnancy",
    date: "Sep 10, 2022",
  },
  {
    img: "benefits-of-garbh-sanskar-during-pregnancy-krishna-coming0.jpg",
    title: "Benefits of Garbh Sanskar During Pregnancy",
    date: "Aug 26, 2022",
  },
  {
    img: "seven-early-signs-of-pregnancy-you-should-not-ignore-krishna-coming-garbh-sanskar0.jpg",
    title: "7 Early Signs of Pregnancy You Should Not Ignore",
    date: "Aug 20, 2022",
  },
  {
    img: "krishna-coming-garbh-samvad-during-pregnancy.jpg",
    title: "गर्भावस्था में गर्भ संवाद और इसके चमत्कारिक लाभ",
    date: "Aug 14, 2022",
  },
  {
    img: "simantonayana-sanskar-godh-bharai-ritual-krishna-coming-garbh-sanskar.jpg",
    title: "क्या होता है सीमन्तोन्नयन संस्कार और इसे घर बैठे कैसे करें?",
    date: "Aug 02, 2022",
  },
  {
    img: "what-is-ultrasound-during-pregnancy-krishna-coming.jpg",
    title: "What Is Ultrasound? (Sonography)",
    date: "Jul 16, 2022",
  },
  {
    img: "importance-of-garbh-sanskar-during-pregnancy.jpg",
    title: "Importance of Garbh Sanskar During Pregnancy",
    date: "Jun 27, 2022",
  },
  {
    img: "know-everything-about-simantonnayana-sanskar-krishna-coming.jpg",
    title: "Know Everything About Simantonnayana Sanskar",
    date: "Mar 30, 2022",
  },
  {
    img: "punsavan-sanskar-krishna-coming-garbh-sanskar.jpg",
    title: "Know everything about Punsavan Sanskar",
    date: "Mar 11, 2022",
  },
  {
    img: "healthy-food-for-pregnant-women-during-pregnancy-krishna-coming-garbh-sanskar.jpg",
    title: "Healthy Food For Pregnant Women",
    date: "Mar 03, 2022",
  },
  {
    img: "low-blood-pressure-during-pregnancy-krishna-coming-garbh-sanskar.jpg",
    title: "Low Blood Pressure During Pregnancy & Its Effect On Baby",
    date: "Feb 25, 2022",
  },
  {
    img: "best-exercise-for-pregnant-women-krishna-coming-garbh-sanskar.jpg",
    title: "Exercise for Pregnant Women",
    date: "Feb 16, 2022",
  },
  {
    img: "stomach-pain-during-pregnancy-krishna-coming-garbh-sanskar.jpg",
    title: "Stomach Pain During Pregnancy",
    date: "Feb 11, 2022",
  },
  {
    img: "how-to-plan-for-pregnancy-krishna-coming-garbh-sanskar.jpg",
    title: "How To Plan For Pregnancy?",
    date: "Feb 04, 2022",
  },
  {
    img: "role-of-mother-in-law-during-pregnancy-krishna-coming-garbh-sanskar.jpg",
    title: "Role of a Mother-in-law During Pregnancy",
    date: "Jan 29, 2022",
  },
  {
    img: "signs-of-healthy-baby-in-womb-krishna-coming-garbh-sanskar.jpg",
    title: "ये छः संकेत बताते हैं कि गर्भ में शिशु सुरक्षित है",
    date: "Jan 22, 2022",
  },
  {
    img: "gestational-diabetes-during-pregnancy-krishna-coming-garbh-sanskar.jpg",
    title: "Gestational Diabetes During Pregnancy",
    date: "Jan 13, 2022",
  },
  {
    img: "yoga-for-pregnant-woman-krishna-coming-garbh-sanskar.jpg",
    title: "Yoga for Pregnant Women - Poses, Benefits and Safety Tips",
    date: "Jan 07, 2022",
  },
  {
    img: "krishna-coming-garbh-sanskar-story-read-these-real-mythological-stories.jpg",
    title: "Garbh Sanskar Story - Read These Real Mythological Stories",
    date: "Dec 30, 2021",
  },
  {
    img: "best-books-to-read-during-pregnancy-krishna-coming-garbh-sanskar.jpg",
    title: "Best Spiritual Books to Read During Pregnancy",
    date: "Dec 23, 2021",
  },
  {
    img: "back-pain-during-pregnancy-krishna-coming-garbh-sanskar.jpg",
    title: "Experts Recommended Treatments for Back Pain During Pregnancy",
    date: "Dec 16, 2021",
  },
  {
    img: "how-to-get-better-sleep-during-pregnancy-tips-and-positions-krishna-coming-garbh-sanskar.jpg",
    title: "How to Get Better Sleep During Pregnancy - Tips and Positions",
    date: "Dec 09, 2021",
  },
  {
    img: "baby-to-mumma-please-control-your-anger-it's-affecting-me-during-pregnancy-krishna-coming.jpg",
    title: "Baby to Mumma - Please Control Your Anger, It's Affecting Me!",
    date: "Dec 02, 2021",
  },
  {
    img: "benefits-of-breastfeeding-in-the-first-six-months-pregnancy-krishna-coming-garbh-sanskar.jpg",
    title: "Benefits of Breastfeeding in The First 6 Months",
    date: "Nov 25, 2021",
  },
  {
    img: "how-to-make-your-baby-healthy-inside-the-womb-krishna-coming-garbh-sanskar.jpg",
    title: "How To Make Your Baby Healthy Inside The Womb",
    date: "Nov 23, 2021",
  },
  {
    img: "benefits-of-meditation-during-pregnancy-krishna-coming-garbh-sanskar.jpg",
    title: "Meditation During Pregnancy - Benefits",
    date: "Oct 26, 2021",
  },
  {
    img: "krishna-coming-garbh-sanskar-mantra.jpg",
    title: "Benefits of Garbh Sanskar Mantra and Shloka During Pregnancy",
    date: "Oct 17, 2021",
  },
  {
    img: "precautions-for-the-third-trimester-of-pregnancy-krishna-coming-garbh-sanskar.jpg",
    title: "Necessary Precautions During The Third Trimester of Pregnancy",
    date: "Sep 23, 2021",
  },
  {
    img: "healthy-diet-for-third-trimester-of-pregnancy-krishna-coming-garbh-sanskar.jpg",
    title: "Healthy Diet for The Third Trimester of Pregnancy",
    date: "Sep 15, 2021",
  },
  {
    img: "best-exercise-for-third-trimester-of-pregnancy-krishna-coming-garbh-sanskar.jpg",
    title: "Best Exercises for The Third Trimester of Pregnancy",
    date: "Sep 14, 2021",
  },
  {
    img: "best-exercises-for-first-trimester-of-pregnancy-krishna-coming-garbh-sanskar.jpg",
    title: "Best Exercises for The First Trimester of Pregnancy",
    date: "Sep 14, 2021",
  },
  {
    img: "precautions-for-the-second-trimester-of-pregnancy-krishna-coming-garbh-sanskar.jpg",
    title: "Necessary Precautions During The Second Trimester of Pregnancy",
    date: "Sep 11, 2021",
  },
  {
    img: "best-exercise-for-second-trimester-of-pregnancy-krishna-coming-garbh-sanskar.jpg",
    title: "Best Exercises For The Second Trimester of Pregnancy",
    date: "Sep 11, 2021",
  },
  {
    img: "healthy-diet-for-the-second-trimester-of-pregnancy-krishna-coming-garbh-sanskar.jpg",
    title: "Healthy Diet for The Second Trimester of Pregnancy",
    date: "Sep 11, 2021",
  },
  {
    img: "necessary-precautions-during-the-first-trimester-of-pregnancy-krishna-coming-garbh-sanskar.jpg",
    title: "Necessary Precautions During The First Trimester of Pregnancy",
    date: "Sep 08, 2021",
  },
  {
    img: "healthy-diet-for-first-trimester-of-pregnancy-krishna-coming-garbh-sanskar.jpg",
    title: "Healthy Diet for The First Trimester of Pregnancy",
    date: "Sep 04, 2021",
  },
  {
    img: "krishna-coming-garbh-sanskar-music-for-a-miraculous-pregnancy.jpg",
    title: "Garbh Sanskar Music - For a Miraculous Pregnancy",
    date: "Sep 01, 2021",
  },
  {
    img: "early-signs-of-pregnancy-symptoms-krishna-coming-garbh-sanskar.jpg",
    title: "Pregnancy Symptoms That You Might Experience",
    date: "Aug 28, 2021",
  },
  {
    img: "mood-swings-during-pregnancy-krishna-coming-garbh-sanskar.jpg",
    title: "Mood Swings During Pregnancy? Is It Normal?",
    date: "Aug 23, 2021",
  },
  {
    img: "how-to-control-vomiting-during-pregnancy-krishna-coming-garbh-sanskar.jpg",
    title: "How to Control Vomiting During Pregnancy",
    date: "Aug 23, 2021",
  },
  {
    img: "five-miraculous-yoga-poses-to-avoid-miscarriage-during-pregnancy-krishna-coming-garbh-sanskar.jpg",
    title: "5 Miraculous Yoga Poses to Prevent Miscarriage",
    date: "Aug 17, 2021",
  },
  {
    img: "how-to-get-healthy-and-intelligent-baby-during-pregnancy-krishna-coming-garbh-sanskar.jpg",
    title: "How to Get A Healthy and Intelligent Baby",
    date: "May 01, 2021",
  },
];
