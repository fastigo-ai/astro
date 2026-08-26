export type HubType = "garbh-sanskar" | "pregnancy" | "how-to";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContentSection {
  heading: string;
  content: string[];
  bulletPoints?: string[];
  highlightQuote?: string;
  tip?: string;
}

export interface Article {
  id: string;
  hub: HubType;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  featuredImage: string;
  programCta: {
    title: string;
    subtitle: string;
    link: string;
    buttonText: string;
  };
  tableOfContents: {
    id: string;
    title: string;
  }[];
  sections: ContentSection[];
  faqs?: FAQItem[];
  relatedSlugs?: string[];
}

export const ARTICLES_DATA: Article[] = [
  // ─── 1. GARBH SANSKAR HUB ARTICLES (17 Articles) ─────────────────────────
  {
    id: "gs-1",
    hub: "garbh-sanskar",
    slug: "what-is-garbh-sanskar",
    title: "What is Garbh Sanskar? Ancient Wisdom Meets Modern Science",
    metaTitle: "What is Garbh Sanskar? Complete Guide to Prenatal Education",
    metaDescription: "Learn what Garbh Sanskar is, its ancient Vedic roots, Ayurvedic principles, and modern fetal psychology benefits for mother and baby.",
    category: "Vedic Fundamentals",
    excerpt: "Garbh Sanskar is the sacred Vedic science of educating and nurturing your unborn child in the womb through satvik lifestyle, music, mantras, and positive thoughts.",
    readTime: "6 min read",
    date: "Feb 10, 2024",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Ayurvedic Obstetrician & Garbh Sanskar Scholar",
    },
    featuredImage: "/images/hero/hero-1.png",
    programCta: {
      title: "Garbh Sanskar 9-Month Complete Program",
      subtitle: "Join thousands of mothers experiencing daily mantras, satvik diet plans, and Garbh Samvad.",
      link: "/features/garbh-sanskar",
      buttonText: "Explore Garbh Sanskar Program",
    },
    tableOfContents: [
      { id: "meaning", title: "Meaning & Definition of Garbh Sanskar" },
      { id: "history", title: "Vedic Origins & Historical Context" },
      { id: "pillars", title: "Core Pillars of Garbh Sanskar" },
      { id: "scientific-relevance", title: "Modern Scientific Validation" },
      { id: "how-to-start", title: "How to Begin Your Journey" },
    ],
    sections: [
      {
        heading: "Meaning & Definition of Garbh Sanskar",
        content: [
          "The word 'Garbh' translates to womb or fetus, and 'Sanskar' signifies the process of refining, purifying, and educating. Garbh Sanskar is the traditional practice of cultivating virtues, mental acuity, emotional balance, and physical vitality in the baby right inside the womb.",
          "According to ancient scriptures such as Charaka Samhita and Sushruta Samhita, a child’s personality, intelligence (IQ), emotional quotient (EQ), and spiritual quotient (SQ) start taking shape from the moment of conception.",
        ],
        highlightQuote: "A mother's mind is the classroom, her thoughts are the syllabus, and the unborn child is the receptive student.",
      },
      {
        heading: "Vedic Origins & Historical Context",
        content: [
          "Ancient Indian history is replete with legends exemplifying Garbh Sanskar. Prahlad gained supreme devotion while in Queen Kayadhu's womb through Narada Muni's sermons. Abhimanyu learned the secret strategy of the Chakravyuha while hearing Arjuna converse with Subhadra.",
          "These historical narratives demonstrate that sensory perception and neurological learning begin long before delivery.",
        ],
        bulletPoints: [
          "Prahlad Maharaj: Spiritual wisdom imbibed through womb listening",
          "Abhimanyu: Military strategy absorbed through mother's acoustic awareness",
          "Ashtavakra: Mastery over Vedic shlokas while in his mother Sujata's womb",
        ],
      },
      {
        heading: "Core Pillars of Garbh Sanskar",
        content: [
          "Garbh Sanskar is a holistic 360-degree lifestyle regimen divided into five primary pillars that harmonize the mother's five senses and bio-energies.",
        ],
        bulletPoints: [
          "Satvik Ahar (Pure Nutrition): Wholesome Ayurvedic food promoting sattva (purity and mental calm).",
          "Garbh Samvad (Womb Dialogue): Intentional loving conversation between parents and the fetus.",
          "Mantra & Raga Therapy: Acoustic resonance using sacred Vedic chants and Kalyan/Bhairav ragas.",
          "Pranayama & Gentle Yoga: Enhancing oxygenation and pelvic floor preparation.",
          "Positive Mental Cultivation: Reading inspiring literature and practicing creative visualization.",
        ],
      },
      {
        heading: "Modern Scientific Validation",
        content: [
          "Contemporary neuroscience confirms that a fetus possesses active hearing and sensory responsiveness by the 16th to 20th week. Maternal stress hormones (cortisol) cross the placental barrier, whereas endorphins and oxytocin promote healthy neurogenesis and emotional security in the developing baby.",
        ],
        tip: "Practicing 15 minutes of Garbh Samvad and listening to classical ragas daily reduces maternal cortisol by up to 35%.",
      },
      {
        heading: "How to Begin Your Journey",
        content: [
          "You can begin Garbh Sanskar at any stage of your pregnancy. Even if you are in the second or third trimester, introducing daily shlokas, gentle stretches, and serene thoughts will create an immediate positive impact on your baby's development.",
        ],
      },
    ],
    faqs: [
      {
        question: "When should I start Garbh Sanskar?",
        answer: "Ideally, Garbh Sanskar practices can begin during the pre-conception stage (Beej Sanskar) or as soon as pregnancy is confirmed in the 1st trimester.",
      },
      {
        question: "Is Garbh Sanskar religious or scientific?",
        answer: "Garbh Sanskar is a holistic scientific tradition combining Ayurvedic obstetrics, fetal auditory learning, and mindful parenting with spiritual roots.",
      },
    ],
  },
  {
    id: "gs-2",
    hub: "garbh-sanskar",
    slug: "importance-of-garbh-sanskar-during-pregnancy",
    title: "Importance of Garbh Sanskar During Pregnancy",
    metaTitle: "Why Garbh Sanskar is Important During Pregnancy | Astro Baby",
    metaDescription: "Understand the deep significance of Garbh Sanskar in shaping your child's physical health, mental sharpness, and emotional bonding.",
    category: "Benefits & Importance",
    excerpt: "Discover why Garbh Sanskar is essential for maternal mental wellness, natural labor preparedness, and lifelong child development.",
    readTime: "5 min read",
    date: "Jan 18, 2024",
    author: {
      name: "Dr. Rameshwar Joshi",
      role: "Vedic Astrologer & Prenatal Counselor",
    },
    featuredImage: "/images/story_thumb_1.png",
    programCta: {
      title: "Experience Daily Garbh Sanskar Classes",
      subtitle: "Daily interactive sessions for mantras, nutrition, and fetal bonding.",
      link: "/features/garbh-sanskar",
      buttonText: "Enroll in Garbh Sanskar",
    },
    tableOfContents: [
      { id: "key-importance", title: "Why Garbh Sanskar Matters" },
      { id: "maternal-benefits", title: "Impact on Mother's Health" },
      { id: "baby-benefits", title: "Lifelong Benefits for the Baby" },
      { id: "bonding", title: "Parent-Child Attachment in the Womb" },
    ],
    sections: [
      {
        heading: "Why Garbh Sanskar Matters",
        content: [
          "Pregnancy is not merely a biological phenomenon; it is a sacred metamorphosis. The emotional, psychological, and spiritual atmosphere surrounding the mother leaves an indelible blueprint on the newborn's subconscious mind.",
          "Garbh Sanskar ensures that this impression is one of courage, intelligence, kindness, and spiritual poise.",
        ],
        highlightQuote: "The foundation of a child's character is laid in the peaceful sanctuary of the womb.",
      },
      {
        heading: "Impact on Mother's Health",
        content: [
          "Expectant mothers often grapple with anxiety, hormonal mood swings, and physical exhaustion. Garbh Sanskar practices calm the sympathetic nervous system and stimulate parasympathetic relaxation.",
        ],
        bulletPoints: [
          "Regulates blood pressure and decreases the risk of preeclampsia",
          "Promotes deep restorative sleep through Yog Nidra and soothing mantras",
          "Prepares the pelvic muscles for a smoother, natural labor experience",
        ],
      },
      {
        heading: "Lifelong Benefits for the Baby",
        content: [
          "Babies whose mothers actively practiced Garbh Sanskar frequently demonstrate earlier milestones, superior language comprehension, calmer temperaments, and better sleep routines after birth.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does Garbh Sanskar help in normal delivery?",
        answer: "Yes, the combination of pelvic pranayama, gentle prenatal yoga, and anxiety reduction significantly supports natural labor readiness.",
      },
    ],
  },
  {
    id: "gs-3",
    hub: "garbh-sanskar",
    slug: "benefits-of-garbh-sanskar-during-pregnancy",
    title: "10 Proven Benefits of Garbh Sanskar During Pregnancy",
    metaTitle: "10 Major Benefits of Garbh Sanskar for Mother & Baby",
    metaDescription: "Explore the 10 evidence-based psychological, biological, and spiritual benefits of Garbh Sanskar during the 9 months of pregnancy.",
    category: "Benefits & Importance",
    excerpt: "From higher intellectual capacity to reduced maternal stress, learn the transformative advantages of regular Garbh Sanskar.",
    readTime: "6 min read",
    date: "Dec 14, 2023",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Ayurvedic Obstetrician",
    },
    featuredImage: "/images/story_thumb_2.png",
    programCta: {
      title: "Transform Your Pregnancy Journey",
      subtitle: "Discover the structured Astro Baby Garbh Sanskar curriculum today.",
      link: "/features/garbh-sanskar",
      buttonText: "Start Garbh Sanskar Now",
    },
    tableOfContents: [
      { id: "top-benefits", title: "Top 10 Benefits Breakdown" },
      { id: "intellectual-growth", title: "Cognitive & Brain Development" },
      { id: "emotional-stability", title: "Emotional Intelligence & Calmness" },
    ],
    sections: [
      {
        heading: "Top 10 Benefits Breakdown",
        content: [
          "Practicing Garbh Sanskar systematically yields immense rewards across all dimensions of motherhood and child growth.",
        ],
        bulletPoints: [
          "Enhanced Brain Synapses & IQ development",
          "Significant reduction in prenatal stress & anxiety",
          "Balanced secretion of mood-enhancing hormones",
          "Deepened father-mother-baby bonding",
          "Better immune response through satvik nutrition",
          "Instillation of positive virtues and values",
          "Regulated fetal sleep-wake cycles",
          "Easier postpartum lactation and bonding",
          "Higher adaptability and calmer newborn temperament",
          "Holistic spiritual enrichment for the entire family",
        ],
      },
    ],
  },
  {
    id: "gs-4",
    hub: "garbh-sanskar",
    slug: "garbh-sanskar-vidhi",
    title: "Garbh Sanskar Vidhi: Step-by-Step Daily Rituals and Practices",
    metaTitle: "Garbh Sanskar Vidhi - Complete Step-by-Step Daily Guide",
    metaDescription: "Learn the authentic daily Garbh Sanskar Vidhi, including morning mantras, satvik diet schedule, Garbh Samvad, and evening prayer routines.",
    category: "Practices & Rituals",
    excerpt: "A practical, authentic daily routine guide for expectant mothers to perform Garbh Sanskar Vidhi at home with ease and joy.",
    readTime: "7 min read",
    date: "Nov 22, 2023",
    author: {
      name: "Acharya Devendra Shastri",
      role: "Vedic Ritual Specialist",
    },
    featuredImage: "/images/story_thumb_3.png",
    programCta: {
      title: "Daily Guided Vidhi on Astro Baby App",
      subtitle: "Get audio shlokas, time-based prompts, and personalized checklists.",
      link: "/features/garbh-sanskar",
      buttonText: "Join Daily Guided Program",
    },
    tableOfContents: [
      { id: "morning-routine", title: "Morning Awakening & Mantras" },
      { id: "diet-schedule", title: "Satvik Dietary Regimen" },
      { id: "afternoon-practices", title: "Creative Arts & Fetal Stimulation" },
      { id: "evening-routine", title: "Evening Garbh Samvad & Shanti Path" },
    ],
    sections: [
      {
        heading: "Morning Awakening & Mantras",
        content: [
          "Begin your day during Brahma Muhurat or early sunrise. Sit comfortably in a serene space facing East. Gently place your right hand on your belly and chant the Gayatri Mantra 11 times.",
        ],
      },
      {
        heading: "Satvik Dietary Regimen",
        content: [
          "Consume warm milk with saffron, soaked almonds, fresh seasonal fruits, and freshly cooked khichdi or green vegetables.",
        ],
      },
    ],
  },
  {
    id: "gs-5",
    hub: "garbh-sanskar",
    slug: "garbh-sanskar-music",
    title: "Garbh Sanskar Music: Healing Ragas & Melodies for Your Unborn Baby",
    metaTitle: "Garbh Sanskar Music - Best Ragas & Fetal Auditory Stimulation",
    metaDescription: "Discover which Indian classical ragas (Yaman, Bhairav, Malkauns) soothe the fetus, improve neural connectivity, and lower maternal anxiety.",
    category: "Music & Mantras",
    excerpt: "Explore how acoustic vibrations of Indian classical music stimulate auditory neural pathways in your baby during pregnancy.",
    readTime: "5 min read",
    date: "Nov 05, 2023",
    author: {
      name: "Vidushi Meenakshi Iyer",
      role: "Music Therapist & Vedic Scholar",
    },
    featuredImage: "/images/story_thumb_4.png",
    programCta: {
      title: "Listen to Curated Raga Playlists",
      subtitle: "Over 100+ high-definition Garbh Sanskar musical tracks inside Astro Baby.",
      link: "/features/garbh-sanskar",
      buttonText: "Explore Garbh Sanskar Music",
    },
    tableOfContents: [
      { id: "science-of-sound", title: "The Science of Sound in the Womb" },
      { id: "best-ragas", title: "Recommended Classical Ragas" },
      { id: "listening-tips", title: "Best Times & Volume Guidelines" },
    ],
    sections: [
      {
        heading: "The Science of Sound in the Womb",
        content: [
          "By the 18th week, the baby's cochlea and auditory cortex are functioning. Gentle, harmonic sound waves travel through amniotic fluid, massaging the baby's developing nervous system.",
        ],
      },
      {
        heading: "Recommended Classical Ragas",
        content: [
          "Specific ragas invoke distinct psychological states that nourish mother and child.",
        ],
        bulletPoints: [
          "Raga Bhairav: Morning awakening, brings peace and courage",
          "Raga Yaman: Evening tranquility, reduces mental agitation",
          "Raga Bageshree: Enhances positive emotional bonding",
          "Raga Malkauns: Deep cellular rejuvenation and restorative sleep",
        ],
      },
    ],
  },
  {
    id: "gs-6",
    hub: "garbh-sanskar",
    slug: "garbh-sanskar-mantra",
    title: "Sacred Garbh Sanskar Mantras and Shlokas for Pregnancy",
    metaTitle: "Garbh Sanskar Mantras & Shlokas for Safe Pregnancy and Healthy Child",
    metaDescription: "Auspicious Vedic mantras like Garbharakshambika Stotram, Gayatri Mantra, and Santana Gopala Mantra with meanings and chanting instructions.",
    category: "Music & Mantras",
    excerpt: "Ancient Vedic sound vibrations that create a protective spiritual shield for mother and baby while nurturing spiritual intellect.",
    readTime: "6 min read",
    date: "Oct 28, 2023",
    author: {
      name: "Acharya Devendra Shastri",
      role: "Vedic Scholar",
    },
    featuredImage: "/images/story_thumb_5.png",
    programCta: {
      title: "Chant Along with Vedic Masters",
      subtitle: "Daily interactive audio mantra sessions on the Astro Baby App.",
      link: "/features/garbh-sanskar",
      buttonText: "Access Sacred Mantras",
    },
    tableOfContents: [
      { id: "protective-mantras", title: "Garbha Raksha Mantras" },
      { id: "intellect-mantras", title: "Mantras for Wisdom & Memory" },
      { id: "how-to-chant", title: "Chanting Rules & Pronunciation" },
    ],
    sections: [
      {
        heading: "Garbha Raksha Mantras",
        content: [
          "The Sri Garbharakshambika Stotram is chanted to seek divine protection against complications, miscarriages, and distress during pregnancy.",
        ],
      },
    ],
  },
  {
    id: "gs-7",
    hub: "garbh-sanskar",
    slug: "garbh-sanskar-story",
    title: "Garbh Sanskar Stories: Inspiring Mythological & Moral Tales for Womb Reading",
    metaTitle: "Garbh Sanskar Stories to Read During Pregnancy | Astro Baby",
    metaDescription: "Read uplifting moral stories and mythological tales of Rama, Prahlada, Shivaji, and Bharata to instill noble values in your unborn baby.",
    category: "Practices & Rituals",
    excerpt: "Discover the art of storytelling to your unborn baby to build character, bravery, devotion, and compassion before birth.",
    readTime: "5 min read",
    date: "Oct 15, 2023",
    author: {
      name: "Dr. Rameshwar Joshi",
      role: "Vedic Educator",
    },
    featuredImage: "/images/celestial_mother.png",
    programCta: {
      title: "Explore 500+ Daily Womb Stories",
      subtitle: "Audiobook and illustrated story cards inside Astro Baby.",
      link: "/features/garbh-sanskar",
      buttonText: "Read Womb Stories",
    },
    tableOfContents: [
      { id: "story-impact", title: "How Stories Shape Fetal Mind" },
      { id: "recommended-stories", title: "Top Stories to Read Aloud" },
    ],
    sections: [
      {
        heading: "How Stories Shape Fetal Mind",
        content: [
          "When a mother visualizes heroic, virtuous narratives, her brain releases dopamine and serotonin. This positive emotional resonance is communicated directly to the fetus.",
          "Vedic tradition underscores that storytelling during pregnancy is an active transmission of sanskars (mental impressions) that lay the moral foundation for the unborn baby.",
        ],
        bulletPoints: [
          "Auditory bonding: Hearing the soothing cadence of the mother's voice builds familiar neural connections.",
          "Emotional calmness: Virtuous stories lower maternal cortisol, fostering optimal brain development.",
          "Value imprint: Stories of valor, truth, and devotion awaken deep subconscious virtues in the baby.",
        ],
      },
      {
        heading: "Top Stories to Read Aloud",
        content: [
          "Vedic literature offers profound inspiring tales specifically suited for prenatal reading. Mothers are encouraged to read them aloud with devotion and vivid visualization.",
        ],
        bulletPoints: [
          "Story of Prahlada: Highlighting unflinching faith, inner fearlessness, and moral conviction.",
          "Story of Dhruva: Cultivating unmatched determination, focused will, and patience.",
          "Story of Abhimanyu & Subhadra: The classic Vedic example of intrauterine learning through spoken words.",
          "Tales of Veer Shivaji & Jijabai: Exemplifying courage, visionary leadership, and righteous character.",
        ],
        tip: "Read for 15 to 20 minutes daily in a peaceful room, speaking with affectionate, warm intonation while placing your hand gently on your belly.",
      },
    ],
  },
  {
    id: "gs-8",
    hub: "garbh-sanskar",
    slug: "scientific-evidence",
    title: "Scientific Garbh Sanskar Evidence: Modern Fetal Neuroscience Validations",
    metaTitle: "Scientific Evidence of Garbh Sanskar | Fetal Neuroscience",
    metaDescription: "Explore scientific research, clinical trials, and neurobiology studies validating the benefits of prenatal sensory stimulation and Garbh Sanskar.",
    category: "Science & Research",
    excerpt: "What does modern science say about prenatal stimulation? Review clinical studies on fetal memory, maternal epigenetics, and stress reduction.",
    readTime: "7 min read",
    date: "Oct 02, 2023",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Obstetrician & Clinical Researcher",
    },
    featuredImage: "/images/about_premium.png",
    programCta: {
      title: "Evidence-Based Vedic Care",
      subtitle: "Experience programs curated jointly by doctors and Vedic masters.",
      link: "/features/garbh-sanskar",
      buttonText: "Learn More About Our Methodology",
    },
    tableOfContents: [
      { id: "epigenetics", title: "Fetal Epigenetics & Maternal Environment" },
      { id: "auditory-studies", title: "Auditory Learning in the Womb" },
      { id: "cortisol-impact", title: "Stress Hormones & Neurogenesis" },
    ],
    sections: [
      {
        heading: "Fetal Epigenetics & Maternal Environment",
        content: [
          "Epigenetic studies demonstrate that gene expression in the fetus is influenced by the mother's hormonal balance, emotional state, and nutritional intake.",
        ],
      },
    ],
  },
  {
    id: "gs-9",
    hub: "garbh-sanskar",
    slug: "what-is-simantonnayana-sanskar",
    title: "What is Simantonnayana Sanskar? Significance, Muhurat, and Rituals",
    metaTitle: "What is Simantonnayana Sanskar? Complete Godh Bharai Guide",
    metaDescription: "Learn what Simantonnayana Sanskar is, its Vedic significance in the 7th/8th month of pregnancy, auspicious Muhurat timings, and traditional rituals.",
    category: "Traditional Sanskars",
    excerpt: "Complete guide to performing the sacred Vedic Simantonnayana ceremony at home, auspicious Muhurat calculation, and maternal wellness rituals.",
    readTime: "6 min read",
    date: "Sep 20, 2023",
    author: {
      name: "Acharya Devendra Shastri",
      role: "Vedic Astrologer & Scholar",
    },
    featuredImage: "/images/hero/hero-2.png",
    programCta: {
      title: "Calculate Auspicious Simantonnayana Muhurat",
      subtitle: "Get free personalized Vedic Muhurat timings from our senior astrologers.",
      link: "/features/bhavishya-fal",
      buttonText: "Find Your Muhurat",
    },
    tableOfContents: [
      { id: "simant-meaning", title: "Meaning & Purpose of Simantonnayana" },
      { id: "simant-timing", title: "Ideal Month & Auspicious Timing" },
      { id: "simant-rituals", title: "Key Rituals and Mental Benefits" },
    ],
    sections: [
      {
        heading: "Meaning & Purpose of Simantonnayana",
        content: [
          "Simantonnayana (parting of the hair) is the third sacred prenatal sanskar performed during the 7th or 8th month of pregnancy. Its primary purpose is to uplift the expectant mother's mental state, eliminate prenatal anxieties, and surround her with positive affirmations and blessings.",
          "Ancient Ayurvedic texts state that the fetal mind becomes conscious and receptive around the 7th month, making the mother's emotional cheerfulness paramount.",
        ],
      },
      {
        heading: "Ideal Month & Auspicious Timing",
        content: [
          "Traditionally conducted in the 6th, 7th, or 8th month during an auspicious lunar nakshatra (Rohini, Mrigashira, Pushya, Uttara Phalguni, or Hasta).",
        ],
      },
    ],
  },
  {
    id: "gs-10",
    hub: "garbh-sanskar",
    slug: "punsavan-sanskar",
    title: "Punsavan Sanskar: Meaning, Significance, and Auspicious Timing",
    metaTitle: "Punsavan Sanskar - Traditional Vedic Ritual & Spiritual Meaning",
    metaDescription: "Understand the second Vedic sanskar performed during the 3rd month of pregnancy to bless the fetus with strength, vitality, and health.",
    category: "Traditional Sanskars",
    excerpt: "Explore the ancient Vedic Punsavan Sanskar ritual performed for the vitality and holistic health of the developing fetus.",
    readTime: "5 min read",
    date: "Sep 12, 2023",
    author: {
      name: "Acharya Devendra Shastri",
      role: "Vedic Astrologer",
    },
    featuredImage: "/images/story_thumb_1.png",
    programCta: {
      title: "Calculate Auspicious Punsavan Muhurat",
      subtitle: "Get free personalized Vedic Muhurat timings from our senior astrologers.",
      link: "/features/bhavishya-fal",
      buttonText: "Find Your Muhurat",
    },
    tableOfContents: [
      { id: "punsavan-definition", title: "What is Punsavan Sanskar?" },
      { id: "punsavan-timing", title: "When & How It Is Performed" },
    ],
    sections: [
      {
        heading: "What is Punsavan Sanskar?",
        content: [
          "Punsavan is the second among the 16 sacred Vedic Sanskars (Shodasha Sanskaras), conducted when the fetus begins rapid physical differentiation.",
        ],
      },
    ],
  },
  {
    id: "gs-11",
    hub: "garbh-sanskar",
    slug: "simantonnayana-sanskar",
    title: "Simantonnayana Sanskar: The Sacred Vedic Baby Shower Ceremony",
    metaTitle: "Simantonnayana Sanskar (Godh Bharai) - Vedic Significance & Vidhi",
    metaDescription: "Detailed guide on Simantonnayana Sanskar (Vedic Godh Bharai) performed in the 7th or 8th month to bless the mother with joy and peace.",
    category: "Traditional Sanskars",
    excerpt: "Learn the deep spiritual and psychological significance of Simantonnayana Sanskar to uplift the mother's spirits during the third trimester.",
    readTime: "6 min read",
    date: "Aug 25, 2023",
    author: {
      name: "Acharya Devendra Shastri",
      role: "Vedic Scholar",
    },
    featuredImage: "/images/story_thumb_2.png",
    programCta: {
      title: "Plan Your Vedic Simantonnayana",
      subtitle: "Step-by-step puja guide and auspicious dates on Astro Baby.",
      link: "/features/garbh-sanskar",
      buttonText: "Explore Ritual Details",
    },
    tableOfContents: [
      { id: "simant-meaning", title: "Meaning of Simantonnayana" },
      { id: "simant-vidhi", title: "Ritual Process & Mantras" },
    ],
    sections: [
      {
        heading: "Meaning of Simantonnayana",
        content: [
          "Simantonnayana literally translates to 'parting of the hair upwards.' It is designed to alleviate third-trimester fatigue, ward off negative vibrations, and surround the mother with celebration.",
        ],
      },
    ],
  },
  {
    id: "gs-12",
    hub: "garbh-sanskar",
    slug: "what-is-simantonnayana-sanskar",
    title: "क्या होता है सीमन्तोनयन संस्कार और इसे घर बैठे कैसे करें?",
    metaTitle: "सीमन्तोनयन संस्कार क्या है और घर पर कैसे करें? | Astro Baby",
    metaDescription: "सीमन्तोनयन संस्कार (गोद भराई) का वैदिक महत्व, घर पर पूजा करने की सरल विधि, शुभ मुहूर्त और सामग्री की पूरी जानकारी।",
    category: "Traditional Sanskars",
    excerpt: "सीमन्तोनयन संस्कार का वैदिक महत्व और घर पर सरल तरीके से पूजा संपन्न करने की संपूर्ण प्रामाणिक विधि।",
    readTime: "5 min read",
    date: "Aug 15, 2023",
    author: {
      name: "Acharya Devendra Shastri",
      role: "Vedic Scholar",
    },
    featuredImage: "/images/story_thumb_3.png",
    programCta: {
      title: "घर बैठे वैदिक संस्कार मार्गदर्शन",
      subtitle: "एस्ट्रो बेबी के विद्वान आचार्यों से ऑनलाइन पूजा मार्गदर्शन प्राप्त करें।",
      link: "/features/garbh-sanskar",
      buttonText: "संस्कार प्रोग्राम देखें",
    },
    tableOfContents: [
      { id: "hindi-simant-intro", title: "सीमन्तोनयन संस्कार का उद्देश्य" },
      { id: "hindi-simant-step", title: "घर पर पूजा की सरल विधि" },
    ],
    sections: [
      {
        heading: "सीमन्तोनयन संस्कार का उद्देश्य",
        content: [
          "सीमन्तोनयन संस्कार गर्भावती स्त्री के मानसिक उल्लास और गर्भस्थ शिशु की दीर्घायु तथा मेधा शक्ति की वृद्धि के लिए किया जाता है।",
        ],
      },
    ],
  },
  {
    id: "gs-13",
    hub: "garbh-sanskar",
    slug: "from-which-month-should-you-start",
    title: "From Which Month Should You Start Garbh Sanskar?",
    metaTitle: "When to Start Garbh Sanskar? Month-by-Month Timing Guide",
    metaDescription: "Is 1st month ideal or can you start in the 5th month? Discover the best timeline and how each trimester benefits from Garbh Sanskar.",
    category: "Trimester Guide",
    excerpt: "Discover the best month to begin Garbh Sanskar and why it is never too late to start even in late pregnancy stages.",
    readTime: "5 min read",
    date: "Aug 02, 2023",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Ayurvedic Obstetrician",
    },
    featuredImage: "/images/story_thumb_4.png",
    programCta: {
      title: "Start from Your Current Month",
      subtitle: "Personalized week-by-week curriculum tailored to your pregnancy stage.",
      link: "/features/garbh-sanskar",
      buttonText: "Start My Custom Plan",
    },
    tableOfContents: [
      { id: "pre-conception", title: "Pre-Conception (Beej Sanskar)" },
      { id: "first-to-ninth", title: "Trimester-by-Trimester Roadmap" },
      { id: "late-starters", title: "What If You Start in the 5th to 7th Month?" },
    ],
    sections: [
      {
        heading: "Pre-Conception (Beej Sanskar)",
        content: [
          "The most auspicious time is 3 to 6 months prior to conception, purifying the ovum and sperm through Ayurvedic detoxification.",
        ],
      },
      {
        heading: "What If You Start in the 5th to 7th Month?",
        content: [
          "Fetal hearing reaches maturity around month 5, making this an extraordinarily potent window for mantra and music therapy.",
        ],
      },
    ],
  },
  {
    id: "gs-14",
    hub: "garbh-sanskar",
    slug: "first-trimester",
    title: "Unlocking the Power of Garbh Sanskar in the First Trimester",
    metaTitle: "First Trimester Garbh Sanskar Guide (Months 1-3) | Astro Baby",
    metaDescription: "Manage morning sickness, reduce early miscarriage anxiety, and nurture organogenesis with 1st trimester Garbh Sanskar rituals.",
    category: "Trimester Guide",
    excerpt: "A comprehensive guide to managing first trimester fatigue, stabilizing hormones, and establishing calm vibrations for early fetal cell division.",
    readTime: "6 min read",
    date: "Jul 20, 2023",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Ayurvedic Obstetrician",
    },
    featuredImage: "/images/story_thumb_5.png",
    programCta: {
      title: "First Trimester Specialized Care",
      subtitle: "Morning sickness remedies, gentle pranayama, and sacred mantras.",
      link: "/features/garbh-sanskar",
      buttonText: "Explore 1st Trimester Program",
    },
    tableOfContents: [
      { id: "t1-changes", title: "Physical & Hormonal Changes in T1" },
      { id: "t1-diet", title: "First Trimester Satvik Diet" },
      { id: "t1-pranayama", title: "Safe Breathing & Gentle Meditations" },
    ],
    sections: [
      {
        heading: "Physical & Hormonal Changes in T1",
        content: [
          "During the first 12 weeks, the embryo forms all vital organs. Gentle restful practices and satvik, cooling foods prevent aggravation of Pitta dosha.",
        ],
      },
    ],
  },
  {
    id: "gs-15",
    hub: "garbh-sanskar",
    slug: "second-trimester",
    title: "Garbh Sanskar in the Second Trimester: The Golden Period of Pregnancy",
    metaTitle: "Second Trimester Garbh Sanskar (Months 4-6) | Astro Baby",
    metaDescription: "Maximize the golden 2nd trimester with active Garbh Samvad, classical ragas, brain stimulation activities, and energizing yoga.",
    category: "Trimester Guide",
    excerpt: "Tap into your baby's burgeoning sensory faculties during weeks 13-27 with interactive womb communication and Vedic music therapy.",
    readTime: "6 min read",
    date: "Jul 05, 2023",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Obstetrician",
    },
    featuredImage: "/images/celestial_mother.png",
    programCta: {
      title: "Second Trimester Brain Boost Program",
      subtitle: "Interactive brain stimulation, music, and yoga for weeks 13-27.",
      link: "/features/garbh-sanskar",
      buttonText: "Join 2nd Trimester Course",
    },
    tableOfContents: [
      { id: "t2-fetal-growth", title: "Fetal Sensory Awakening in T2" },
      { id: "t2-samvad", title: "Daily Garbh Samvad Protocols" },
      { id: "t2-nutrition", title: "Calcium & Iron-Rich Satvik Diet" },
    ],
    sections: [
      {
        heading: "Fetal Sensory Awakening in T2",
        content: [
          "The second trimester is characterized by rapid brain synapse expansion. The baby reacts to loud sounds, mother's voice, and gentle abdominal touch.",
        ],
      },
    ],
  },
  {
    id: "gs-16",
    hub: "garbh-sanskar",
    slug: "third-trimester",
    title: "Nurturing Your Pregnancy: Garbh Sanskar in the Third Trimester",
    metaTitle: "Third Trimester Garbh Sanskar (Months 7-9) - Birth Preparation",
    metaDescription: "Prepare physically and spiritually for labor, conquer delivery anxiety, and build endurance with 3rd trimester Garbh Sanskar.",
    category: "Trimester Guide",
    excerpt: "Practical guidance for final weeks: birth affirmations, pelvic floor relaxation, Shanti Path, and welcoming your divine child.",
    readTime: "6 min read",
    date: "Jun 22, 2023",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Obstetrician & Lactation Consultant",
    },
    featuredImage: "/images/story_thumb_1.png",
    programCta: {
      title: "Third Trimester & Labor Readiness",
      subtitle: "Pelvic relaxation, labor breathing techniques, and post-birth guidance.",
      link: "/features/garbh-sanskar",
      buttonText: "Prepare for Delivery",
    },
    tableOfContents: [
      { id: "t3-mindset", title: "Overcoming Delivery Fear & Anxiety" },
      { id: "t3-pelvic-yoga", title: "Pelvic Stretches for Normal Delivery" },
      { id: "t3-shanti-mantra", title: "Calming Shanti Mantras for Labor" },
    ],
    sections: [
      {
        heading: "Overcoming Delivery Fear & Anxiety",
        content: [
          "In the 7th to 9th month, daily positive birth affirmations and Yog Nidra help release tension, facilitating smooth cervix dilation during labor.",
        ],
      },
    ],
  },
  {
    id: "gs-17",
    hub: "garbh-sanskar",
    slug: "best-garbh-sanskar-app",
    title: "Best Garbh Sanskar App: Why Astro Baby is Loved by 10,000+ Families",
    metaTitle: "Best Garbh Sanskar App in India | Astro Baby Mobile Application",
    metaDescription: "Compare features of the top Garbh Sanskar mobile app: daily live sessions, Vedic astrology, personalized satvik recipes, and pediatrician chats.",
    category: "App & Technology",
    excerpt: "Discover why Astro Baby is ranked #1 for combining ancient Vedic wisdom with modern obstetric science in a user-friendly mobile application.",
    readTime: "5 min read",
    date: "Jun 10, 2023",
    author: {
      name: "Astro Baby Research Team",
      role: "Digital Health Faculty",
    },
    featuredImage: "/images/astrobaby_video_spotlight.jpg",
    programCta: {
      title: "Download Astro Baby Mobile App Today",
      subtitle: "Available on Google Play Store and Apple App Store.",
      link: "https://play.google.com/store/apps/details?id=com.astrobaby.garbhsanskar",
      buttonText: "Get App on Play Store",
    },
    tableOfContents: [
      { id: "why-app", title: "Why Choose a Digital Garbh Sanskar Companion" },
      { id: "astro-features", title: "Key Features of Astro Baby" },
      { id: "mother-reviews", title: "What Expecting Mothers Say" },
    ],
    sections: [
      {
        heading: "Why Choose a Digital Garbh Sanskar Companion",
        content: [
          "A structured mobile application brings daily reminders, high-fidelity audio mantras, and live doctor sessions right into your home, ensuring consistency across all 280 days of pregnancy.",
        ],
      },
    ],
  },
  {
    id: "gs-18",
    hub: "garbh-sanskar",
    slug: "garbh-samvad-during-pregnancy",
    title: "Garbh Samvad: The Sacred Art of Talking to Your Baby in the Womb",
    metaTitle: "Garbh Samvad During Pregnancy | Sacred Womb Communication Guide",
    metaDescription: "Master the ancient Vedic art of Garbh Samvad: step-by-step techniques for mother and father to communicate with the fetus, enhancing EQ, IQ, and bonding.",
    category: "Practices & Rituals",
    excerpt: "Garbh Samvad is the conscious heart-to-heart dialogue between parents and their unborn child, establishing a lifelong foundation of emotional security, love, and intellectual readiness.",
    readTime: "6 min read",
    date: "Jul 15, 2023",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Ayurvedic Obstetrician & Garbh Sanskar Scholar",
    },
    featuredImage: "/images/story_thumb_1.png",
    programCta: {
      title: "Join Daily Guided Garbh Samvad Audio Sessions",
      subtitle: "Access 40+ personalized womb dialogue audio modules on Astro Baby.",
      link: "/features/garbh-sanskar",
      buttonText: "Start Garbh Samvad Today",
    },
    tableOfContents: [
      { id: "what-is-samvad", title: "What is Garbh Samvad?" },
      { id: "fetal-hearing-science", title: "Scientific Benefits on Fetal Brain" },
      { id: "daily-mother-practice", title: "Daily Practice Guide for Mothers" },
      { id: "father-voice-role", title: "The Special Role of Father's Voice" },
      { id: "sacred-mantras-dialogue", title: "Mantras & Affirmations for Womb Talk" },
    ],
    sections: [
      {
        heading: "What is Garbh Samvad?",
        content: [
          "Garbh Samvad (गर्भ संवाद) is the ancient Vedic practice of conscious verbal and mental communication with the unborn child in the womb. In Ayurveda, the fetus is considered an active, conscious soul capable of receiving sensory, emotional, and intellectual impressions (Sanskars).",
          "By speaking, chanting, and lovingly touching the maternal belly, parents transmit feelings of unconditional love, safety, courage, and moral intelligence.",
        ],
        highlightQuote: "A mother's spoken words are the first lullabies and lessons that build the subconscious architecture of the baby's mind.",
        bulletPoints: [
          "Establishes a deep emotional bond between mother, father, and unborn baby.",
          "Reduces maternal cortisol and anxiety while flooding the placenta with oxytocin and endorphins.",
          "Stimulates the baby's auditory cortex, accelerating language acquisition after birth.",
        ],
      },
      {
        heading: "Scientific Benefits on Fetal Brain",
        content: [
          "Modern fetal neuroscience confirms that by the 16th to 20th week of gestation, the auditory apparatus (cochlea and auditory nerve) is fully functional. The fetus actively reacts to maternal voice cadences and heartbeat rhythms.",
          "Babies who experience daily parental dialogues demonstrate faster cognitive responses, calmer temperaments, and fewer crying bouts after birth.",
        ],
        tip: "Talk to your baby in a warm, gentle, and rhythmic tone. Placing both hands on the lower belly while speaking creates a soothing bio-tactile resonance.",
      },
      {
        heading: "Daily Practice Guide for Mothers",
        content: [
          "Dedicate 10 to 15 minutes twice daily (morning and evening) in a quiet, serene space. Begin by closing your eyes, taking 3 deep diaphragmatic breaths, and gently rubbing your abdomen.",
        ],
        bulletPoints: [
          "Morning Dialogue (8:00 AM): Wish your baby a joyful good morning, share positive thoughts about the day, and express gratitude for their presence.",
          "Afternoon Sharing: Talk about the wholesome foods you are eating and describe beautiful sights, flowers, or inspiring music.",
          "Evening Blessing (9:30 PM): Affirm unconditional love, protection, peace, and health before resting.",
        ],
      },
      {
        heading: "The Special Role of Father's Voice",
        content: [
          "Low-frequency male voices penetrate amniotic fluid with remarkable clarity. When the father speaks, sings, or reads aloud near the mother's abdomen, the fetus recognizes the distinct acoustic vibrations.",
          "Paternal womb dialogue fosters immediate newborn recognition, making early father-infant bonding effortless.",
        ],
      },
      {
        heading: "Mantras & Affirmations for Womb Talk",
        content: [
          "Accompany your conversation with short, auspicious affirmations and shlokas such as 'Om Shanti', Gayatri Mantra, or simple words of blessing: 'My child, you are healthy, intelligent, peaceful, and deeply loved.'",
        ],
      },
    ],
    faqs: [
      {
        question: "When should I begin Garbh Samvad?",
        answer: "You can start as early as the first trimester with mental affirmations. From the 16th week onwards, spoken dialogues and music should be practiced daily.",
      },
      {
        question: "Does the baby really hear and understand words?",
        answer: "While the fetus may not comprehend linguistic vocabulary, they deeply perceive tone, emotional frequency, heartbeat changes, and vocal cadences, which program the subconscious mind.",
      },
    ],
  },
  {
    id: "gs-19",
    hub: "garbh-sanskar",
    slug: "garbh-sanskar-in-marathi",
    title: "Garbh Sanskar in Marathi: संपूर्ण गर्भसंस्कार विधी आणि माहिती",
    metaTitle: "Garbh Sanskar in Marathi | मराठीत संपूर्ण गर्भसंस्कार विधी व मार्गदर्शन",
    metaDescription: "महाराष्ट्रातील पारंपरिक आणि वैदिक गर्भसंस्कार विधी, सात्विक आहार, संगीत, आणि मंत्रांची सविस्तर माहिती मराठीत जाणून घ्या.",
    category: "Regional Guides",
    excerpt: "गर्भातील बाळाच्या शारीरिक, मानसिक आणि बौद्धिक विकासासाठी प्राचीन वैदिक आणि आयुर्वेदिक गर्भसंस्कार पद्धतीची मराठीत परिपूर्ण माहिती आणि दैनिक दिनचर्या.",
    readTime: "7 min read",
    date: "Aug 05, 2023",
    author: {
      name: "Dr. Rameshwar Joshi",
      role: "Vedic Astrologer & Scholar",
    },
    featuredImage: "/images/story_thumb_2.png",
    programCta: {
      title: "मराठीत संपूर्ण गर्भसंस्कार कोर्स",
      subtitle: "अ‍ॅस्ट्रो बेबी अ‍ॅपवर मराठीत मंत्र, संगीत आणि दैनिक मार्गदर्शन मिळवा.",
      link: "/features/garbh-sanskar",
      buttonText: "गर्भसंस्कार कोर्स सुरू करा",
    },
    tableOfContents: [
      { id: "marathi-intro", title: "गर्भसंस्कार म्हणजे काय? (What is Garbh Sanskar?)" },
      { id: "marathi-pillars", title: "गर्भसंस्काराचे ५ मुख्य स्तंभ (5 Core Pillars)" },
      { id: "marathi-vidhi", title: "दैनंदिन गर्भसंस्कार विधी व दिनचर्या" },
      { id: "marathi-mantras", title: "शुभ मंत्र आणि राग संगीत" },
      { id: "marathi-benefits", title: "आई व बाळाला होणारे फायदे" },
    ],
    sections: [
      {
        heading: "गर्भसंस्कार म्हणजे काय? (What is Garbh Sanskar?)",
        content: [
          "गर्भसंस्कार म्हणजे गर्भातील बाळावर सुसंस्कार करणे, त्याचे शारीरिक, मानसिक, भावनिक आणि बौद्धिक (IQ, EQ, SQ) पोषण करणे. आयुर्वेद आणि वैदिक शास्त्रानुसार बाळाचे ९०% व्यक्तिमत्त्व गर्भातच आकारास येते.",
          "आईच्या विचारांचा, आहाराचा आणि वातावरणाचा बाळावर थेट परिणाम होतो. त्यामुळे गर्भधारणेपासूनच सात्विक आचरण करणे अत्यंत महत्त्वाचे आहे.",
        ],
        highlightQuote: "आईचे मन ही बाळाची पहिली शाळा असते आणि तिचे विचार हा बाळाचा पहिला अभ्यासक्रम असतो.",
      },
      {
        heading: "गर्भसंस्काराचे ५ मुख्य स्तंभ (5 Core Pillars)",
        content: [
          "वैदिक परंपरेत गर्भसंस्कार ५ मुख्य घटकांवर आधारित आहे:",
        ],
        bulletPoints: [
          "सात्विक आहार: ताज्या फळे, भाज्या, दूध, तूप आणि सुकामेवा यांचा समावेश असलेला पोष्टिक आहार.",
          "गर्भ संवाद: आई आणि वडिलांनी पोटावर हात ठेवून बाळाशी दररोज प्रेमळ संवाद साधणे.",
          "मंत्र व राग संगीत: गायत्री मंत्र, महामृत्युंजय मंत्र आणि शास्त्रीय राग ऐकणे.",
          "प्राणायाम व योगासने: सुलभ प्रसूतीसाठी हलकी योगासने आणि दीर्घ श्वसन.",
          "सकारात्मक वाचन: संत चरित्रे, रामायण, महाभारत आणि प्रेरणादायी पुस्तके वाचणे.",
        ],
      },
      {
        heading: "दैनंदिन गर्भसंस्कार विधी व दिनचर्या",
        content: [
          "सकाळी लवकर उठून प्रार्थना करणे, सूर्य नमस्कार किंवा हलके चालणे, त्यानंतर सात्विक नाश्ता घेणे. दुपारी प्रेरणादायी वाचन आणि संध्याकाळी मंद संगीतासह योगनिद्रा करणे लाभदायक ठरते.",
        ],
        tip: "दररोज रात्री झोपण्यापूर्वी १५ मिनिटे शांत बसून राग यमन किंवा राग भैरव ऐकल्याने मन शांत होते आणि गाढ झोप लागते.",
      },
      {
        heading: "शुभ मंत्र आणि राग संगीत",
        content: [
          "गर्भ रक्षा स्तोत्र, संकटनाशन गणेश स्तोत्र, आणि गायत्री मंत्राचा जप गर्भातील बाळाच्या मेंदूतील न्यूरॉन्स सक्रिय करतो.",
        ],
      },
    ],
    faqs: [
      {
        question: "गर्भसंस्कार कधीपासून सुरू करावेत?",
        answer: "गर्भसंस्कार गर्भधारणेपूर्वी (बीज संस्कार) किंवा गर्भधारणा निश्चित झाल्यापासून पहिल्या महिन्यापासूनच सुरू करता येतात.",
      },
      {
        question: "गर्भसंस्कारासाठी दररोज किती वेळ द्यावा लागतो?",
        answer: "दिवसातून फक्त २० ते ३० मिनिटे नियमितपणे मंत्र, संवाद आणि ध्यान केल्यास बाळावर उत्तम संस्कार होतात.",
      },
    ],
  },

  // ─── 2. PREGNANCY CARE HUB ARTICLES (20 Articles) ────────────────────────
  {
    id: "pr-1",
    hub: "pregnancy",
    slug: "pregnancy-symptoms",
    title: "Pregnancy Symptoms That You Might Experience Across All Trimesters",
    metaTitle: "Common Pregnancy Symptoms by Trimester | Astro Baby Health Guide",
    metaDescription: "Comprehensive overview of common, normal pregnancy symptoms from tender breasts and nausea to Braxton Hicks contractions.",
    category: "Symptoms & Changes",
    excerpt: "Understand what changes to expect in your body during each stage of pregnancy and how to manage them holistically.",
    readTime: "6 min read",
    date: "May 28, 2023",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Obstetrician",
    },
    featuredImage: "/images/story_thumb_2.png",
    programCta: {
      title: "Complete Trimester Wellness Care",
      subtitle: "Personalized tracking of symptoms with doctor-led advice.",
      link: "/features/garbh-sanskar",
      buttonText: "Explore Pregnancy Care",
    },
    tableOfContents: [
      { id: "early-symptoms", title: "First Trimester Symptoms" },
      { id: "mid-symptoms", title: "Second Trimester Changes" },
      { id: "late-symptoms", title: "Third Trimester Signs" },
    ],
    sections: [
      {
        heading: "First Trimester Symptoms",
        content: [
          "Rapid increases in progesterone and hCG cause tender breasts, frequent urination, mild cramping, and morning fatigue. Hydration and light snacks help stabilize energy.",
        ],
      },
    ],
  },
  {
    id: "pr-2",
    hub: "pregnancy",
    slug: "early-pregnancy-symptoms",
    title: "Early Pregnancy Symptoms: How to Identify Conception in Week 1 to 4",
    metaTitle: "Early Pregnancy Symptoms in Week 1-4 | Early Signs of Conception",
    metaDescription: "Spot early signs before a missed period: implantation spotting, heightened sense of smell, metallic taste, and basal temperature shifts.",
    category: "Symptoms & Changes",
    excerpt: "Discover the subtle physical clues that indicate successful conception in the earliest weeks of pregnancy.",
    readTime: "5 min read",
    date: "May 15, 2023",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Obstetrician",
    },
    featuredImage: "/images/story_thumb_3.png",
    programCta: {
      title: "Planning or Just Conceived?",
      subtitle: "Join our Beej Sanskar & Early Pregnancy guidance program.",
      link: "/features/beej-sanskar",
      buttonText: "Discover Beej Sanskar",
    },
    tableOfContents: [
      { id: "pre-period-signs", title: "Signs Before Missed Period" },
      { id: "confirming-pregnancy", title: "When to Take a Home Test" },
    ],
    sections: [
      {
        heading: "Signs Before Missed Period",
        content: [
          "Implantation occurs 6-12 days after ovulation, sometimes accompanied by very light pink or brown spotting, mild lower abdomen twinges, and heightened smell sensitivity.",
        ],
      },
    ],
  },
  {
    id: "pr-3",
    hub: "pregnancy",
    slug: "meditation-during-pregnancy",
    title: "Meditation During Pregnancy: Benefits, Techniques, and Guided Mindfulness",
    metaTitle: "Meditation During Pregnancy - Daily Guided Mindfulness for Mothers",
    metaDescription: "Discover how 15 minutes of prenatal meditation lowers cortisol, improves fetal heart rate variability, and promotes emotional equanimity.",
    category: "Wellness & Fitness",
    excerpt: "Learn simple, safe meditation and mindfulness practices tailored specifically for expecting mothers to cultivate serenity.",
    readTime: "5 min read",
    date: "Apr 28, 2023",
    author: {
      name: "Vidushi Meenakshi Iyer",
      role: "Mindfulness Coach",
    },
    featuredImage: "/images/story_thumb_4.png",
    programCta: {
      title: "Daily Guided Prenatal Meditations",
      subtitle: "Access 50+ calming guided audio sessions inside Astro Baby.",
      link: "/features/garbh-sanskar",
      buttonText: "Start Meditating Today",
    },
    tableOfContents: [
      { id: "meditation-benefits", title: "Benefits for Mother and Fetus" },
      { id: "easy-techniques", title: "3 Simple Meditation Techniques" },
    ],
    sections: [
      {
        heading: "Benefits for Mother and Fetus",
        content: [
          "Mindful breath focus stimulates the vagus nerve, calming the heart rate and bathing the placenta in rich, oxygenated blood.",
        ],
      },
    ],
  },
  {
    id: "pr-4",
    hub: "pregnancy",
    slug: "mood-swings-during-pregnancy",
    title: "Mood Swings During Pregnancy: Why They Happen and How to Stay Calm",
    metaTitle: "Managing Mood Swings in Pregnancy | Emotional Health Tips",
    metaDescription: "Understand estrogen and progesterone fluctuations causing emotional highs and lows, and learn natural ways to regain emotional stability.",
    category: "Emotional Well-being",
    excerpt: "Navigating the emotional roller coaster of pregnancy with compassion, lifestyle adjustments, and supportive partner communication.",
    readTime: "5 min read",
    date: "Apr 14, 2023",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Obstetrician",
    },
    featuredImage: "/images/story_thumb_5.png",
    programCta: {
      title: "Emotional Wellness Sessions",
      subtitle: "Live weekly group sessions with prenatal psychologists.",
      link: "/features/garbh-sanskar",
      buttonText: "Join Wellness Circle",
    },
    tableOfContents: [
      { id: "hormone-trigger", title: "Hormonal Triggers Behind Mood Swings" },
      { id: "coping-methods", title: "Practical Strategies for Emotional Balance" },
    ],
    sections: [
      {
        heading: "Hormonal Triggers Behind Mood Swings",
        content: [
          "Rapid estrogen and progesterone surges alter neurotransmitters such as serotonin. Acknowledging that these feelings are temporary and biological is the first step toward self-compassion.",
        ],
      },
    ],
  },
  {
    id: "pr-5",
    hub: "pregnancy",
    slug: "back-pain-during-pregnancy",
    title: "Experts Recommended Treatments for Back Pain During Pregnancy",
    metaTitle: "Relieving Back Pain in Pregnancy - Exercises, Posture & Ayurvedic Tips",
    metaDescription: "Safe remedies for pregnancy back pain: posture adjustments, lumbar stretches, warm sesame oil massage, and pelvic tilt exercises.",
    category: "Health & Concerns",
    excerpt: "Say goodbye to lumbar stiffness with safe, doctor-approved stretches, ergonomic tips, and Ayurvedic warm compress routines.",
    readTime: "6 min read",
    date: "Mar 30, 2023",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Physiotherapist & Obstetrician",
    },
    featuredImage: "/images/celestial_mother.png",
    programCta: {
      title: "Prenatal Yoga for Pain Relief",
      subtitle: "Doctor-approved gentle daily yoga classes for back and hip relief.",
      link: "/features/garbh-sanskar",
      buttonText: "Explore Prenatal Yoga",
    },
    tableOfContents: [
      { id: "causes-back-pain", title: "Why Does Back Pain Occur?" },
      { id: "safe-exercises", title: "Gentle Stretches for Immediate Relief" },
      { id: "ayurvedic-massage", title: "Ayurvedic Herbal Oil Compress" },
    ],
    sections: [
      {
        heading: "Why Does Back Pain Occur?",
        content: [
          "The hormone relaxin loosens pelvic ligaments, shifting your center of gravity forward and putting extra load on lumbar vertebrae.",
        ],
      },
    ],
  },
  {
    id: "pr-6",
    hub: "pregnancy",
    slug: "yoga-for-pregnant-women",
    title: "Yoga for Pregnant Women: Safe Poses, Benefits, and Precautions",
    metaTitle: "Prenatal Yoga Guide - Safe Asanas, Trimester Poses & Safety Tips",
    metaDescription: "Complete trimester-wise prenatal yoga guide: Marjariasana, Baddha Konasana, Tadasana, and poses to strictly avoid.",
    category: "Wellness & Fitness",
    excerpt: "Harness the power of ancient yogic asanas to improve flexibility, promote pelvic opening, and enhance stamina for labor.",
    readTime: "7 min read",
    date: "Mar 18, 2023",
    author: {
      name: "Yogacharya Sneha Patil",
      role: "Certified Prenatal Yoga Specialist",
    },
    featuredImage: "/images/story_thumb_1.png",
    programCta: {
      title: "Live Daily Prenatal Yoga Classes",
      subtitle: "Interactive sessions with certified prenatal yoga instructors.",
      link: "/features/garbh-sanskar",
      buttonText: "Join Live Yoga Sessions",
    },
    tableOfContents: [
      { id: "safe-asanas", title: "Top Safe Asanas by Trimester" },
      { id: "poses-to-avoid", title: "Asanas to Strictly Avoid" },
      { id: "safety-checklist", title: "Medical Safety & Breath Rules" },
    ],
    sections: [
      {
        heading: "Top Safe Asanas by Trimester",
        content: [
          "Cat-Cow (Marjariasana) alleviates spine pressure; Butterfly pose (Baddha Konasana) gently opens the groin; Mountain pose (Tadasana) balances posture.",
        ],
      },
    ],
  },
  {
    id: "pr-7",
    hub: "pregnancy",
    slug: "spiritual-books-to-read-during-pregnancy",
    title: "Best Spiritual Books to Read During Pregnancy for Womb Sanskar",
    metaTitle: "Spiritual Books to Read in Pregnancy | Astro Baby Reading Guide",
    metaDescription: "Curated list of inspiring books: Bhagavad Gita, Ramayana, Upanishadic stories, and mindfulness classics for positive fetal stimulation.",
    category: "Family & Emotional",
    excerpt: "Enrich your thoughts and elevate your baby's subconscious mind with our curated list of timeless spiritual books.",
    readTime: "5 min read",
    date: "Mar 05, 2023",
    author: {
      name: "Dr. Rameshwar Joshi",
      role: "Vedic Scholar",
    },
    featuredImage: "/images/story_thumb_2.png",
    programCta: {
      title: "Access Digital Vedic Library",
      subtitle: "Read and listen to audiobooks in Hindi and English.",
      link: "/features/garbh-sanskar",
      buttonText: "Explore Digital Library",
    },
    tableOfContents: [
      { id: "why-read-spiritual", title: "Why Spiritual Reading Matters" },
      { id: "recommended-books", title: "Top 7 Spiritual Books" },
    ],
    sections: [
      {
        heading: "Why Spiritual Reading Matters",
        content: [
          "Reading elevating literature keeps the mind focused on virtues such as equanimity, selflessness, courage, and unconditional love.",
        ],
      },
    ],
  },
  {
    id: "pr-8",
    hub: "pregnancy",
    slug: "role-of-mother-in-law-during-pregnancy",
    title: "The Role of Mother-in-Law and Family Support During Pregnancy",
    metaTitle: "Family Support & Role of Mother-in-Law During Pregnancy",
    metaDescription: "How harmonious family environments, empathetic elder support, and positive in-law relations benefit the expecting mother and unborn child.",
    category: "Family & Emotional",
    excerpt: "Building a supportive, warm family sanctum that surrounds the expecting mother with love, traditional care, and mental peace.",
    readTime: "5 min read",
    date: "Feb 20, 2023",
    author: {
      name: "Dr. Rameshwar Joshi",
      role: "Family Counselor",
    },
    featuredImage: "/images/story_thumb_3.png",
    programCta: {
      title: "Family Harmonization Workshops",
      subtitle: "Special sessions for husbands, mothers, and mothers-in-law.",
      link: "/features/parenting",
      buttonText: "Explore Family Programs",
    },
    tableOfContents: [
      { id: "family-ecosystem", title: "The Vedic Family Ecosystem" },
      { id: "elder-wisdom", title: "Blending Traditional Wisdom with Modern Respect" },
    ],
    sections: [
      {
        heading: "The Vedic Family Ecosystem",
        content: [
          "In Vedic tradition, caring for an expectant mother is considered a sacred duty for the entire household, creating a joyful, safe sanctuary for the incoming soul.",
        ],
      },
    ],
  },
  {
    id: "pr-9",
    hub: "pregnancy",
    slug: "signs-that-tell-your-baby-is-safe-in-womb",
    title: "6 Signs That Indicate Your Baby is Healthy & Safe in the Womb",
    metaTitle: "6 Signs Your Baby is Healthy and Safe Inside the Womb",
    metaDescription: "Reassuring signs of fetal well-being: consistent kick counts, steady fundal height growth, strong fetal heartbeat, and maternal weight gain.",
    category: "Health & Concerns",
    excerpt: "Learn how to track positive indicators of your baby's vitality and when to reach out to your doctor for routine checkups.",
    readTime: "5 min read",
    date: "Feb 10, 2023",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Obstetrician",
    },
    featuredImage: "/images/story_thumb_4.png",
    programCta: {
      title: "Track Fetal Kicks on Astro Baby",
      subtitle: "Built-in digital kick counter and pregnancy milestone tracker.",
      link: "/features/garbh-sanskar",
      buttonText: "Use Kick Counter Tool",
    },
    tableOfContents: [
      { id: "six-vital-signs", title: "Top 6 Reassuring Signs" },
      { id: "kick-counting", title: "How to Count Kicks Accurately" },
    ],
    sections: [
      {
        heading: "Top 6 Reassuring Signs",
        content: [
          "1. Regular fetal movements starting between weeks 18-24. 2. Steady belly expansion. 3. Strong audible fetal heartbeat (110-160 bpm). 4. Consistent kick patterns after meals. 5. Healthy blood pressure readings. 6. Normal ultrasound biometry parameters.",
        ],
      },
    ],
  },
  {
    id: "pr-10",
    hub: "pregnancy",
    slug: "stomach-pain-during-pregnancy",
    title: "Stomach Pain During Pregnancy: Normal Aches vs When to Seek Medical Help",
    metaTitle: "Stomach Pain in Pregnancy - Causes, Round Ligament Pain & Red Flags",
    metaDescription: "Differentiate between benign round ligament pain, gas, and red-flag symptoms requiring immediate medical evaluation.",
    category: "Health & Concerns",
    excerpt: "A clear, reassuring guide to understanding abdominal twinges, round ligament stretches, and identifying critical red flags.",
    readTime: "6 min read",
    date: "Jan 28, 2023",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Obstetrician",
    },
    featuredImage: "/images/story_thumb_5.png",
    programCta: {
      title: "Consult Obstetric Specialists",
      subtitle: "Get doctor answers for all your pregnancy questions on Astro Baby.",
      link: "/contact",
      buttonText: "Talk to a Specialist",
    },
    tableOfContents: [
      { id: "harmless-cramps", title: "Common Harmless Abdominal Sensations" },
      { id: "red-flag-symptoms", title: "When to Contact Your Gynecologist" },
    ],
    sections: [
      {
        heading: "Common Harmless Abdominal Sensations",
        content: [
          "Sharp twinges when rolling over or standing up are typically round ligament stretches as your uterus expands to accommodate your growing baby.",
        ],
      },
    ],
  },
  {
    id: "pr-11",
    hub: "pregnancy",
    slug: "exercise-for-pregnant-women",
    title: "Exercise for Pregnant Women: Safe Routines for Every Trimester",
    metaTitle: "Safe Exercise in Pregnancy | Cardio, Stretches & Pelvic Routines",
    metaDescription: "Discover how 30 minutes of daily moderate walking, swimming, and prenatal aerobics boosts maternal stamina and gestational health.",
    category: "Wellness & Fitness",
    excerpt: "Stay fit, energized, and ready for childbirth with low-impact cardio, pelvic floor conditioning, and gentle endurance workouts.",
    readTime: "6 min read",
    date: "Jan 15, 2023",
    author: {
      name: "Yogacharya Sneha Patil",
      role: "Fitness Instructor",
    },
    featuredImage: "/images/celestial_mother.png",
    programCta: {
      title: "Daily Guided Pregnancy Fitness",
      subtitle: "Trimester-specific low impact exercise videos on Astro Baby.",
      link: "/features/garbh-sanskar",
      buttonText: "Start Daily Fitness",
    },
    tableOfContents: [
      { id: "cardio-benefits", title: "Why Low-Impact Exercise is Vital" },
      { id: "recommended-routine", title: "Weekly Fitness Schedule" },
    ],
    sections: [
      {
        heading: "Why Low-Impact Exercise is Vital",
        content: [
          "Regular physical activity reduces gestational diabetes risk by 40%, alleviates constipation, and enhances stamina for active labor.",
        ],
      },
    ],
  },
  {
    id: "pr-12",
    hub: "pregnancy",
    slug: "low-blood-pressure-during-pregnancy",
    title: "Low Blood Pressure During Pregnancy: Symptoms, Causes, and Dietary Care",
    metaTitle: "Low Blood Pressure in Pregnancy - Symptoms, Risks & Home Care",
    metaDescription: "Learn why blood pressure dips during the first 24 weeks, how to handle dizzy spells safely, and natural electrolytes to consume.",
    category: "Health & Concerns",
    excerpt: "Understand normal circulatory expansion during pregnancy and how to maintain electrolyte balance to avoid dizziness.",
    readTime: "5 min read",
    date: "Dec 30, 2022",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Obstetrician",
    },
    featuredImage: "/images/story_thumb_1.png",
    programCta: {
      title: "Personalized Nutrition Consultation",
      subtitle: "Customized Ayurvedic diet plans tailored to your vitals.",
      link: "/features/garbh-sanskar",
      buttonText: "Get Nutrition Plan",
    },
    tableOfContents: [
      { id: "bp-causes", title: "Why Blood Pressure Drops in Pregnancy" },
      { id: "managing-dizziness", title: "Safe Home Remedies & Hydration Tips" },
    ],
    sections: [
      {
        heading: "Why Blood Pressure Drops in Pregnancy",
        content: [
          "Progesterone relaxes blood vessel walls to supply maximum blood to the growing placenta, often lowering maternal blood pressure during the 1st and 2nd trimesters.",
        ],
      },
    ],
  },
  {
    id: "pr-13",
    hub: "pregnancy",
    slug: "what-is-ultrasound-sonography",
    title: "What Is Ultrasound? (Sonography): Complete Guide to Pregnancy Scans",
    metaTitle: "Pregnancy Ultrasound Sonography Guide | NT Scan, Anomaly Scan & Growth",
    metaDescription: "Understand essential pregnancy ultrasound scans: Dating scan (6-8w), NT scan (11-13w), TIFFA Anomaly scan (18-20w), and Doppler growth scans.",
    category: "Health & Concerns",
    excerpt: "Everything parents need to know about fetal sonography scans, timing, safety, and understanding ultrasound reports.",
    readTime: "6 min read",
    date: "Dec 18, 2022",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Obstetric Radiologist & Scholar",
    },
    featuredImage: "/images/story_thumb_2.png",
    programCta: {
      title: "Track Your Scan Milestones",
      subtitle: "Digital pregnancy calendar with automated scan reminders on Astro Baby.",
      link: "/features/garbh-sanskar",
      buttonText: "View Scan Schedule",
    },
    tableOfContents: [
      { id: "scan-timeline", title: "Essential Scans Schedule" },
      { id: "scan-safety", title: "Is Ultrasound Safe for the Baby?" },
    ],
    sections: [
      {
        heading: "Essential Scans Schedule",
        content: [
          "Dating scan confirms heartbeat and gestational age; NT/Double Marker assesses chromosomal health; Level II Anomaly scan inspects organ anatomy in detail.",
        ],
      },
    ],
  },
  {
    id: "pr-14",
    hub: "pregnancy",
    slug: "five-amazing-benefits-of-coconut-water-during-pregnancy",
    title: "5 Amazing Benefits of Coconut Water During Pregnancy",
    metaTitle: "Benefits of Coconut Water in Pregnancy | Electrolytes & Amniotic Fluid",
    metaDescription: "Discover how fresh coconut water boosts amniotic fluid, cures morning sickness, treats acid reflux, and supplies vital potassium.",
    category: "Diet & Nutrition",
    excerpt: "Nature's perfect electrolyte drink: discover why fresh coconut water is an indispensable Ayurvedic elixir for pregnant mothers.",
    readTime: "4 min read",
    date: "Dec 05, 2022",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Ayurvedic Nutritionist",
    },
    featuredImage: "/images/story_thumb_3.png",
    programCta: {
      title: "Satvik Pregnancy Recipe Guide",
      subtitle: "Explore 150+ Ayurvedic recipes and drinks on Astro Baby.",
      link: "/features/garbh-sanskar",
      buttonText: "Explore Satvik Recipes",
    },
    tableOfContents: [
      { id: "coconut-benefits", title: "Top 5 Health Benefits" },
      { id: "best-time-to-drink", title: "Ideal Time & Quantity Guidelines" },
    ],
    sections: [
      {
        heading: "Top 5 Health Benefits",
        content: [
          "1. Replenishes natural electrolytes (potassium, magnesium, calcium). 2. Helps maintain optimal amniotic fluid levels. 3. Soothes heartburn and acid reflux naturally. 4. Strengthens maternal immunity with lauric acid. 5. Prevents urinary tract infections (UTIs).",
        ],
      },
    ],
  },
  {
    id: "pr-15",
    hub: "pregnancy",
    slug: "seven-early-signs-of-pregnancy-you-should-not-ignore",
    title: "7 Early Signs of Pregnancy You Should Not Ignore",
    metaTitle: "7 Early Signs of Pregnancy You Should Not Ignore | Astro Baby",
    metaDescription: "Spot subtle pregnancy signals early: metallic taste, unexplained exhaustion, smell aversions, cervical mucus changes, and light cramping.",
    category: "Symptoms & Changes",
    excerpt: "Look beyond the standard missed period: 7 distinct physical indicators that signal new life is taking root.",
    readTime: "5 min read",
    date: "Nov 20, 2022",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Obstetrician",
    },
    featuredImage: "/images/story_thumb_4.png",
    programCta: {
      title: "Free Pregnancy Due Date Calculator",
      subtitle: "Calculate your estimated delivery date and astrological nakshatra.",
      link: "/features/bhavishya-fal",
      buttonText: "Calculate Due Date",
    },
    tableOfContents: [
      { id: "seven-signs", title: "The 7 Distinct Early Signs" },
      { id: "next-steps", title: "Immediate Next Steps After Testing Positive" },
    ],
    sections: [
      {
        heading: "The 7 Distinct Early Signs",
        content: [
          "1. Extreme fatigue due to surging progesterone. 2. Tender, swollen breasts. 3. Aversions to previously loved food odors. 4. Heightened basal body temperature. 5. Frequent urge to urinate. 6. Mild cramping without heavy bleeding. 7. Sudden mood shifts.",
        ],
      },
    ],
  },
  {
    id: "pr-16",
    hub: "pregnancy",
    slug: "stages-of-pregnancy-month-by-month",
    title: "9 Stages of Pregnancy, Month by Month: Complete Developmental Guide",
    metaTitle: "9 Stages of Pregnancy Month by Month | Fetal Development & Mother Care",
    metaDescription: "Track your 9-month pregnancy journey: fetal size, milestone developments, maternal changes, and Ayurvedic care for each month.",
    category: "Trimester Guide",
    excerpt: "A visual, comprehensive month-by-month roadmap detailing your baby's anatomical milestones and Ayurvedic wellness guidance.",
    readTime: "8 min read",
    date: "Nov 02, 2022",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Obstetrician & Ayurvedic Faculty",
    },
    featuredImage: "/images/story_thumb_5.png",
    programCta: {
      title: "Interactive Month-by-Month App",
      subtitle: "Track 3D fetal development animations on the Astro Baby App.",
      link: "/features/garbh-sanskar",
      buttonText: "View 3D Fetal Timeline",
    },
    tableOfContents: [
      { id: "month-1-3", title: "Months 1 to 3 (First Trimester)" },
      { id: "month-4-6", title: "Months 4 to 6 (Second Trimester)" },
      { id: "month-7-9", title: "Months 7 to 9 (Third Trimester)" },
    ],
    sections: [
      {
        heading: "Months 1 to 3 (First Trimester)",
        content: [
          "From a microscopic blastocyst to a fully structured embryo with a beating heart and tiny limb buds by week 12.",
        ],
      },
    ],
  },
  {
    id: "pr-17",
    hub: "pregnancy",
    slug: "fruits-not-to-eat-during-pregnancy",
    title: "Fruits Not to Eat During Pregnancy: Foods to Avoid for Safe Gestation",
    metaTitle: "Fruits to Avoid in Pregnancy | Ayurvedic & Obstetric Guidelines",
    metaDescription: "Learn which fruits (unripe papaya, excessive pineapple, unwashed grapes) to restrict during pregnancy and why.",
    category: "Diet & Nutrition",
    excerpt: "Important nutritional guidelines explaining which fruits carry risks of uterine contractions and how to consume fruits safely.",
    readTime: "5 min read",
    date: "Oct 15, 2022",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Ayurvedic Dietician",
    },
    featuredImage: "/images/celestial_mother.png",
    programCta: {
      title: "Get a Safe Pregnancy Food Chart",
      subtitle: "Download printable food safety guides and satvik meal planners.",
      link: "/features/garbh-sanskar",
      buttonText: "Download Food Chart",
    },
    tableOfContents: [
      { id: "fruits-to-restrict", title: "Fruits to Limit or Avoid" },
      { id: "safe-fruits", title: "Super-Fruits to Eat Daily Instead" },
    ],
    sections: [
      {
        heading: "Fruits to Limit or Avoid",
        content: [
          "Unripe or semi-ripe raw papaya contains latex and papain which may trigger uterine contractions. Raw pineapple in excessive amounts contains bromelain that softens the cervix.",
        ],
      },
    ],
  },
  {
    id: "pr-18",
    hub: "pregnancy",
    slug: "pregnancy-calculator",
    title: "Pregnancy Calculator: Due Date, Trimester Milestones & Astrological Nakshatra",
    metaTitle: "Pregnancy Due Date & Nakshatra Calculator | Astro Baby",
    metaDescription: "Calculate your Estimated Due Date (EDD), track weekly milestones, and determine auspicious Vedic lunar birth nakshatras for your newborn.",
    category: "Tools & Milestones",
    excerpt: "A complete guide to calculating your expected delivery date using Naegele's rule, ultrasound correlation, and calculating astrological planetary alignments.",
    readTime: "6 min read",
    date: "Dec 10, 2023",
    author: {
      name: "Dr. Rameshwar Joshi",
      role: "Vedic Astrologer & Mathematician",
    },
    featuredImage: "/images/story_thumb_3.png",
    programCta: {
      title: "Calculate Your Child's Bhavishya Phal",
      subtitle: "Get free personalized astrological insights for your child's birth chart.",
      link: "/features/bhavishya-fal",
      buttonText: "Open Calculator Tool",
    },
    tableOfContents: [
      { id: "edd-formula", title: "How Due Dates Are Calculated" },
      { id: "trimester-weeks", title: "Trimester Weeks & Milestone Progression" },
      { id: "astrological-nakshatra", title: "Determining Auspicious Birth Nakshatras" },
      { id: "scan-adjustments", title: "When Ultrasounds Change Your Due Date" },
    ],
    sections: [
      {
        heading: "How Due Dates Are Calculated",
        content: [
          "Standard obstetric estimation relies on Naegele's rule: add 280 days (40 weeks) from the first day of your Last Menstrual Period (LMP). If you know your exact ovulation date, adding 266 days provides an accurate biological due date.",
          "In Vedic astrology, estimating the delivery window allows parents to anticipate the lunar tithi, nakshatra, and planetary transits influencing the child's lagna (ascendant).",
        ],
        highlightQuote: "A due date is an auspicious destination window, with 90% of healthy babies arriving safely between 37 and 41 weeks.",
      },
      {
        heading: "Trimester Weeks & Milestone Progression",
        content: [
          "Pregnancy is systematically divided into 3 distinct developmental trimesters:",
        ],
        bulletPoints: [
          "First Trimester (Weeks 1-13): Rapid organogenesis, neural tube closure, and heartbeat establishment.",
          "Second Trimester (Weeks 14-27): Sensory responsiveness, bone ossification, active kick movements, and hearing.",
          "Third Trimester (Weeks 28-40): Lung maturation, rapid brain fat deposition, immunoglobin transfer, and birth positioning.",
        ],
      },
      {
        heading: "Determining Auspicious Birth Nakshatras",
        content: [
          "The Moon spends approximately 24 hours in each of the 27 Vedic Nakshatras (such as Rohini, Pushya, Hasta, and Revati). Knowing the expected delivery month helps astrologers calculate auspicious names and beneficial gemstone/mantra remedies.",
        ],
        tip: "Keep an ultrasound dating scan handy when consulting an astrologer to ensure gestational accuracy.",
      },
      {
        heading: "When Ultrasounds Change Your Due Date",
        content: [
          "A first-trimester dating scan (between 7 and 12 weeks) measuring Crown-Rump Length (CRL) is considered the gold standard for clinical due date confirmation.",
        ],
      },
    ],
    faqs: [
      {
        question: "How accurate is the estimated due date (EDD)?",
        answer: "Only about 5% of babies are born on their exact EDD; however, approximately 85-90% are born within two weeks before or after.",
      },
    ],
  },
  {
    id: "pr-19",
    hub: "pregnancy",
    slug: "miscarriage-prevention-and-care",
    title: "Miscarriage Prevention: Safe Practices, Warning Signs, and Ayurvedic Protection",
    metaTitle: "Miscarriage Prevention & Early Pregnancy Safety | Astro Baby Care",
    metaDescription: "Evidence-based obstetric and Ayurvedic guide on protecting early pregnancy: hormonal support, satvik precautions, stress relief, and red flag symptoms.",
    category: "Health & Safety",
    excerpt: "Empower your early pregnancy with evidence-based medical precautions, progesterone care, and time-tested Ayurvedic Garbh Sthapaka rasayanas.",
    readTime: "7 min read",
    date: "Jan 12, 2024",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Obstetrician & Gynecologist",
    },
    featuredImage: "/images/story_thumb_4.png",
    programCta: {
      title: "Holistic First Trimester Support",
      subtitle: "Personalized care plans to ensure peaceful, secure early gestation.",
      link: "/features/garbh-sanskar",
      buttonText: "Explore Prenatal Care",
    },
    tableOfContents: [
      { id: "prevention-fundamentals", title: "Key Principles of Early Pregnancy Protection" },
      { id: "ayurvedic-garbh-sthapaka", title: "Ayurvedic Garbh Sthapaka Herbs" },
      { id: "warning-signs", title: "Warning Signs Requiring Immediate Doctor Visit" },
      { id: "lifestyle-precautions", title: "Daily Precautions for Expectant Mothers" },
    ],
    sections: [
      {
        heading: "Key Principles of Early Pregnancy Protection",
        content: [
          "The first 12 weeks of pregnancy are crucial as the embryo implants and the placenta matures. Maintaining optimal progesterone levels, avoiding strenuous jolts, and cultivating calm emotional states are key protective factors.",
        ],
        bulletPoints: [
          "Adequate folic acid supplementation (5mg daily) to prevent neural tube anomalies.",
          "Early thyroid (TSH) and blood sugar screening to correct underlying metabolic imbalances.",
          "Avoiding high-stress environments and strenuous abdominal lifting.",
        ],
        highlightQuote: "Serenity of the maternal mind is the greatest natural uterine relaxant.",
      },
      {
        heading: "Ayurvedic Garbh Sthapaka Herbs",
        content: [
          "Classical Ayurveda describes 'Garbh Sthapaka' herbs that stabilize pregnancy and nourish endometrial receptivity, such as Shatavari, Bala, and pure Cow's Ghee with saffron in doctor-prescribed quantities.",
        ],
        tip: "Always consult your obstetrician before starting any Ayurvedic formulations during the first trimester.",
      },
      {
        heading: "Warning Signs Requiring Immediate Doctor Visit",
        content: [
          "While mild twinges and light brown spotting can be normal, bright red vaginal bleeding, severe unilateral pelvic pain, or fever require prompt ultrasound evaluation.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is complete bed rest necessary to prevent miscarriage?",
        answer: "Routine bed rest is not recommended unless specifically advised by your doctor for subchorionic hematoma or cervical insufficiency. Gentle walking and restful lifestyle are ideal.",
      },
    ],
  },
  {
    id: "pr-20",
    hub: "pregnancy",
    slug: "healthy-pregnancy-diet-chart",
    title: "Healthy Pregnancy Diet Chart: Month-by-Month Satvik Nutrition Guide",
    metaTitle: "Complete Pregnancy Diet Chart Month-by-Month | Astro Baby Nutrition",
    metaDescription: "Complete trimester nutrition chart: daily requirements of iron, protein, calcium, vitamins, and Ayurvedic satvik meal plans for mother and baby.",
    category: "Nutrition & Diet",
    excerpt: "A comprehensive, month-by-month pregnancy nutrition plan integrating modern obstetric dietetics and Ayurvedic Ahara principles for vibrant maternal health.",
    readTime: "8 min read",
    date: "Feb 02, 2024",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Clinical Nutritionist & Ayurvedic Physician",
    },
    featuredImage: "/images/story_thumb_5.png",
    programCta: {
      title: "Personalized Trimester Satvik Diet Plans",
      subtitle: "Get weekly customized meal plans tailored to your dosha and trimester.",
      link: "/features/garbh-sanskar",
      buttonText: "Get Your Diet Plan",
    },
    tableOfContents: [
      { id: "nutrition-overview", title: "Core Nutritional Requirements" },
      { id: "trimester-1-diet", title: "Trimester 1: Nausea Relief & Folic Acid" },
      { id: "trimester-2-diet", title: "Trimester 2: Iron, Calcium & Brain Growth" },
      { id: "trimester-3-diet", title: "Trimester 3: Strength, Digestion & Labor Prep" },
      { id: "daily-meal-timetable", title: "Sample Daily Satvik Meal Timetable" },
    ],
    sections: [
      {
        heading: "Core Nutritional Requirements",
        content: [
          "During pregnancy, a mother's body requires an additional 300 to 450 calories daily, rich in micronutrients rather than empty carbohydrates. Balanced satvik nutrition ensures smooth placenta function, baby's bone mineralization, and steady blood volume expansion.",
        ],
        bulletPoints: [
          "Protein (70-80g daily): Essential for fetal tissue construction (paneer, lentils, almonds, sprouts).",
          "Iron & Vitamin C: Prevents maternal anemia and enhances fetal oxygenation (spinach, beetroot, pomegranate, amla).",
          "Calcium (1200mg daily): Builds baby's skeletal structure (milk, curd, sesame seeds, ragi).",
          "DHA & Healthy Fats: Stimulates brain and retinal neuron formation (A2 cow ghee, soaked walnuts, flaxseed).",
        ],
      },
      {
        heading: "Trimester 1: Nausea Relief & Folic Acid",
        content: [
          "Focus on small, frequent meals. Lukewarm water with lemon, dry roasted makhana, ginger tea, and green leafy vegetables help overcome morning nausea.",
        ],
      },
      {
        heading: "Sample Daily Satvik Meal Timetable",
        content: [
          "Early Morning (7:00 AM): 5 soaked almonds, 2 soaked walnuts, and a glass of warm water.",
          "Breakfast (8:30 AM): Vegetable poha/oats or moong dal chilla with mint chutney.",
          "Mid-Morning (11:00 AM): Fresh tender coconut water and a seasonal fruit (apple/pomegranate).",
          "Lunch (1:00 PM): 2 rotis with A2 ghee, 1 bowl dal, seasonal green subzi, and fresh curd.",
          "Evening Snack (5:00 PM): Roasted makhana or vegetable soup.",
          "Dinner (8:00 PM): Light khichdi or vegetable daliya, followed by warm saffron milk before bed.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much water should I drink daily during pregnancy?",
        answer: "Aim for 2.5 to 3 liters of fluids daily, including fresh water, coconut water, buttermilk, and warm herbal soups.",
      },
    ],
  },

  // ─── 3. HOW-TO GUIDES HUB ARTICLES (9 Articles) ──────────────────────────
  {
    id: "ht-1",
    hub: "how-to",
    slug: "how-to-plan-for-pregnancy",
    title: "How to Plan Pregnancy: Preconception Checklist & Vedic Preparation",
    metaTitle: "How to Plan Pregnancy - Preconception Health & Vedic Beej Sanskar",
    metaDescription: "Step-by-step preconception guide: medical checkups, folic acid, fertility tracking, Ayurvedic detox, and emotional alignment.",
    category: "Pregnancy Planning",
    excerpt: "A complete step-by-step roadmap to prepare your mind, body, and spiritual foundation for welcoming a healthy baby.",
    readTime: "6 min read",
    date: "Sep 28, 2022",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Preconception Specialist",
    },
    featuredImage: "/images/story_thumb_1.png",
    programCta: {
      title: "Beej Sanskar Preconception Course",
      subtitle: "Ayurvedic cellular detox, fertility tracking, and cosmic Muhurat alignment.",
      link: "/features/beej-sanskar",
      buttonText: "Explore Beej Sanskar",
    },
    tableOfContents: [
      { id: "step-1-medical", title: "Step 1: Medical & Genetic Screening" },
      { id: "step-2-detox", title: "Step 2: Ayurvedic Cellular Detox" },
      { id: "step-3-ovulation", title: "Step 3: Ovulation & Muhurat Alignment" },
    ],
    sections: [
      {
        heading: "Step 1: Medical & Genetic Screening",
        content: [
          "Begin preconception planning at least 3 months in advance. Schedule routine blood tests (hemoglobin, thyroid, rubella, blood glucose) and start daily 400 mcg folic acid supplementation.",
        ],
      },
    ],
  },
  {
    id: "ht-2",
    hub: "how-to",
    slug: "how-to-get-healthy-and-intelligent-baby",
    title: "How to Get a Healthy and Intelligent Baby Through Garbh Sanskar",
    metaTitle: "How to Have a Healthy & Intelligent Baby | Vedic & Modern Methods",
    metaDescription: "Learn proven Vedic routines, sensory neuro-stimulation, omega-3 nutrition, and positive psychology to enhance your child's IQ and EQ.",
    category: "Pregnancy Planning",
    excerpt: "Scientific and Vedic strategies to nurture cognitive brilliance, emotional resilience, and robust physical immunity in your unborn child.",
    readTime: "6 min read",
    date: "Sep 14, 2022",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Garbh Sanskar Expert",
    },
    featuredImage: "/images/story_thumb_2.png",
    programCta: {
      title: "Baby Brainopedia & Neuro-Stimulation",
      subtitle: "Daily cognitive stimulation puzzles, classical ragas, and Garbh Samvad.",
      link: "/features/garbh-sanskar",
      buttonText: "Boost Baby's Intelligence",
    },
    tableOfContents: [
      { id: "neuro-nutrition", title: "Brain-Building Nutrition (Omega-3, Walnuts, Ghee)" },
      { id: "auditory-stimulation", title: "Vedic Chants & Complex Musical Ragas" },
      { id: "mental-stimulation", title: "Creative Visualization & Puzzles" },
    ],
    sections: [
      {
        heading: "Brain-Building Nutrition (Omega-3, Walnuts, Ghee)",
        content: [
          "Consuming DHA-rich foods, soaked walnuts, pure A2 cow ghee, and almonds supports rapid neuronal myelination and synaptic connectivity in the fetal cerebral cortex.",
        ],
      },
    ],
  },
  {
    id: "ht-3",
    hub: "how-to",
    slug: "how-to-control-anger-during-pregnancy",
    title: "How to Control Anger During Pregnancy: Protecting Your Baby's Mind",
    metaTitle: "How to Manage & Control Anger in Pregnancy | Astro Baby",
    metaDescription: "Why maternal anger spikes cortisol and how to quickly calm down using 4-7-8 breathing, cooling pranayama, and emotional reframing.",
    category: "Managing Challenges",
    excerpt: "Practical psychological and yogic techniques to quickly defuse anger, reduce cortisol surges, and safeguard your baby's emotional balance.",
    readTime: "5 min read",
    date: "Aug 29, 2022",
    author: {
      name: "Dr. Rameshwar Joshi",
      role: "Mindfulness Counselor",
    },
    featuredImage: "/images/story_thumb_3.png",
    programCta: {
      title: "Anger & Stress Release Meditation",
      subtitle: "Instant 5-minute calming audio guides on Astro Baby.",
      link: "/features/garbh-sanskar",
      buttonText: "Try Calming Audio",
    },
    tableOfContents: [
      { id: "anger-effects", title: "How Anger Affects the Baby in the Womb" },
      { id: "cooling-pranayama", title: "Cooling Breathwork (Sheetali & Sheetkari)" },
      { id: "pause-technique", title: "The 10-Second Pause & Affirmation" },
    ],
    sections: [
      {
        heading: "How Anger Affects the Baby in the Womb",
        content: [
          "Intense anger triggers adrenaline and cortisol, causing sudden fetal heart rate spikes. Practicing Sheetali pranayama and stepping away to drink cool water neutralizes anger immediately.",
        ],
      },
    ],
  },
  {
    id: "ht-4",
    hub: "how-to",
    slug: "how-to-control-vomiting-during-pregnancy",
    title: "How to Control Vomiting and Morning Sickness During Pregnancy",
    metaTitle: "How to Stop Vomiting & Nausea in Pregnancy | Home & Ayurvedic Remedies",
    metaDescription: "Effective home remedies for morning sickness: ginger-cardamom tea, dry crackers, lemon water, acupressure points, and hydration tips.",
    category: "Managing Challenges",
    excerpt: "Gentle, natural Ayurvedic and lifestyle remedies to overcome nausea, regain appetite, and stay hydrated throughout the first trimester.",
    readTime: "5 min read",
    date: "Aug 12, 2022",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Ayurvedic Obstetrician",
    },
    featuredImage: "/images/story_thumb_4.png",
    programCta: {
      title: "Morning Sickness Relief Plan",
      subtitle: "Customized food substitutes and nausea relief audio guides.",
      link: "/features/garbh-sanskar",
      buttonText: "Get Nausea Remedies",
    },
    tableOfContents: [
      { id: "nausea-triggers", title: "Common Morning Sickness Triggers" },
      { id: "ayurvedic-remedies", title: "Top 5 Ayurvedic Anti-Emetic Home Remedies" },
    ],
    sections: [
      {
        heading: "Top 5 Ayurvedic Anti-Emetic Home Remedies",
        content: [
          "Sip warm water infused with freshly grated ginger and crushed green cardamom. Keep dry roasted gram or whole grain crackers beside your bed to eat before standing up.",
        ],
      },
    ],
  },
  {
    id: "ht-5",
    hub: "how-to",
    slug: "how-to-make-baby-healthy-inside-the-womb",
    title: "How to Make Your Baby Healthy Inside the Womb: Complete Guide",
    metaTitle: "How to Ensure a Healthy Baby in the Womb | Astro Baby Guide",
    metaDescription: "Vital steps for optimal fetal health: balanced macronutrients, daily sunshine vitamin D, gentle movement, hydration, and positive mindset.",
    category: "Baby Health & Care",
    excerpt: "Everything you need to do daily to ensure robust fetal weight gain, strong bone formation, and high natural vitality.",
    readTime: "6 min read",
    date: "Jul 28, 2022",
    author: {
      name: "Dr. Ananya Sharma",
      role: "Obstetrician",
    },
    featuredImage: "/images/story_thumb_5.png",
    programCta: {
      title: "Complete 280-Day Womb Care Program",
      subtitle: "Daily holistic routine customized to your exact pregnancy week.",
      link: "/features/garbh-sanskar",
      buttonText: "Start Daily Womb Care",
    },
    tableOfContents: [
      { id: "nourish-cells", title: "Nourishing Fetal Cells with Superfoods" },
      { id: "oxygen-supply", title: "Maximizing Placental Oxygen Flow" },
      { id: "avoid-toxins", title: "Eliminating Environmental & Mental Toxins" },
    ],
    sections: [
      {
        heading: "Nourishing Fetal Cells with Superfoods",
        content: [
          "Ensure diverse colorful vegetables, lentils, sprouted grains, nuts, and organic dairy to provide ample iron, zinc, folate, and calcium.",
        ],
      },
    ],
  },
  {
    id: "ht-6",
    hub: "how-to",
    slug: "how-to-get-better-sleep-during-pregnancy",
    title: "How to Get Better Sleep During Pregnancy: Positions, Tips & Yog Nidra",
    metaTitle: "Better Sleep During Pregnancy - Best Sleeping Positions & Tips",
    metaDescription: "Sleep comfortably during pregnancy: left lateral sleep posture (SOS), pregnancy pillows, soothing Yog Nidra, and bedtime herbal tea.",
    category: "Managing Challenges",
    excerpt: "Combat insomnia, frequent urination, and restless legs with optimal sleep positions and deep Ayurvedic relaxation techniques.",
    readTime: "5 min read",
    date: "Jul 10, 2022",
    author: {
      name: "Vidushi Meenakshi Iyer",
      role: "Sleep & Mindfulness Coach",
    },
    featuredImage: "/images/celestial_mother.png",
    programCta: {
      title: "Guided Yog Nidra for Deep Sleep",
      subtitle: "Listen to relaxing sleep meditations designed for pregnant mothers.",
      link: "/features/garbh-sanskar",
      buttonText: "Listen to Yog Nidra",
    },
    tableOfContents: [
      { id: "sleeping-positions", title: "The Best Sleeping Positions (SOS)" },
      { id: "bedtime-routine", title: "Ayurvedic Nighttime Relaxation Ritual" },
    ],
    sections: [
      {
        heading: "The Best Sleeping Positions (SOS)",
        content: [
          "Sleeping on your left side (Sleep On Side - SOS) maximizes blood and nutrient flow to the placenta and relieves inferior vena cava compression.",
        ],
      },
    ],
  },
  {
    id: "ht-7",
    hub: "how-to",
    slug: "how-to-manage-job-stress-during-pregnancy",
    title: "How to Manage Job Stress During Pregnancy for Working Mothers",
    metaTitle: "Managing Work Stress in Pregnancy | Tips for Working Mothers",
    metaDescription: "Balance career demands and pregnancy wellness: setting workplace boundaries, desk ergonomics, micro-meditation breaks, and maternity rights.",
    category: "Managing Challenges",
    excerpt: "Practical workplace survival strategies for working mothers to maintain high productivity without compromising pregnancy health.",
    readTime: "6 min read",
    date: "Jun 25, 2022",
    author: {
      name: "Dr. Rameshwar Joshi",
      role: "Corporate Wellness Consultant",
    },
    featuredImage: "/images/story_thumb_1.png",
    programCta: {
      title: "Working Mother's Garbh Sanskar Schedule",
      subtitle: "Flexible 15-minute morning and evening routines designed for busy careers.",
      link: "/features/garbh-sanskar",
      buttonText: "View Flexible Plans",
    },
    tableOfContents: [
      { id: "workplace-challenges", title: "Navigating Career Expectations & Fatigue" },
      { id: "micro-breaks", title: "5-Minute Desk De-Stressing Techniques" },
      { id: "boundary-setting", title: "Setting Clear Professional Boundaries" },
    ],
    sections: [
      {
        heading: "Navigating Career Expectations & Fatigue",
        content: [
          "Schedule 5-minute micro-breaks every 90 minutes. Do seated neck and ankle rolls, drink water, and practice deep abdominal breathing.",
        ],
      },
    ],
  },
  {
    id: "ht-8",
    hub: "how-to",
    slug: "how-to-do-garbh-sanskar-at-home",
    title: "How to Do Garbh Sanskar at Home: A Complete Practical Step-by-Step Guide",
    metaTitle: "How to Do Garbh Sanskar at Home | Daily Routine, Mantras & Diet",
    metaDescription: "Complete practical guide on practicing authentic Garbh Sanskar at home without complicated setups: daily timetable, mantras, and Garbh Samvad.",
    category: "Garbh Sanskar at Home",
    excerpt: "You don't need elaborate ceremonies: learn how simple 20-minute daily home rituals transform your pregnancy experience.",
    readTime: "7 min read",
    date: "Jun 10, 2022",
    author: {
      name: "Acharya Devendra Shastri",
      role: "Vedic Scholar",
    },
    featuredImage: "/images/story_thumb_2.png",
    programCta: {
      title: "Join Astro Baby Daily Home Program",
      subtitle: "All audio mantras, diet charts, and doctor webinars delivered straight to your phone.",
      link: "/features/garbh-sanskar",
      buttonText: "Start Home Garbh Sanskar",
    },
    tableOfContents: [
      { id: "step-by-step-home", title: "5 Essential Daily Steps at Home" },
      { id: "home-timetable", title: "Ideal Daily Home Timetable" },
      { id: "partner-involvement", title: "Involving the Father in Daily Rituals" },
    ],
    sections: [
      {
        heading: "5 Essential Daily Steps at Home",
        content: [
          "1. Morning Prayer & Gayatri Mantra (10 mins). 2. Satvik Nutrition & Herbal Hydration. 3. Afternoon Creative Activity / Uplifting Reading (15 mins). 4. Evening Garbh Samvad & Belly Touch with Partner (10 mins). 5. Nighttime Raga Music & Yog Nidra (15 mins).",
        ],
        bulletPoints: [
          "Step 1: Set up a clean, tranquil corner with a gentle lamp or deity picture.",
          "Step 2: Play soothing classical ragas or Vedic chants softly in the background.",
          "Step 3: Talk to your baby lovingly about nature, moral virtues, and your dreams.",
          "Step 4: Practice gentle pelvic floor pranayama to oxygenate maternal tissues.",
          "Step 5: Conclude each day with gratitude and peaceful sleep affirmations.",
        ],
        highlightQuote: "Consistency of love and pure intention at home is more powerful than any elaborate ritual.",
      },
    ],
  },
  {
    id: "ht-9",
    hub: "how-to",
    slug: "how-to-take-care-of-pregnant-women-during-pregnancy",
    title: "How to Take Care of Pregnant Women: A Guide for Husbands and Families",
    metaTitle: "How to Take Care of Pregnant Women | Guide for Husbands & Partners",
    metaDescription: "Essential guide for husbands and family members: physical assistance, emotional empathy, massage, hospital planning, and womb bonding.",
    category: "Baby Health & Care",
    excerpt: "A supportive partner makes all the difference: actionable advice for husbands to nurture and protect their pregnant wife throughout the 9 months.",
    readTime: "6 min read",
    date: "May 25, 2022",
    author: {
      name: "Dr. Rameshwar Joshi",
      role: "Family Wellness Counselor",
    },
    featuredImage: "/images/story_thumb_3.png",
    programCta: {
      title: "Couples Garbh Sanskar Workshop",
      subtitle: "Special father-to-be coaching and partner bonding sessions.",
      link: "/features/parenting",
      buttonText: "Join Couples Workshop",
    },
    tableOfContents: [
      { id: "husband-role", title: "The Husband's Role in Womb Bonding" },
      { id: "physical-support", title: "Daily Physical Care & Nutrition Prep" },
      { id: "emotional-support", title: "Providing Unconditional Emotional Sanctuary" },
    ],
    sections: [
      {
        heading: "The Husband's Role in Womb Bonding",
        content: [
          "A father's deeper voice frequencies penetrate amniotic fluid exceptionally well. Daily evening conversations by the father foster early paternal attachment and soothe fetal movement.",
        ],
      },
    ],
  },
];

// Helper Functions
export function getArticlesByHub(hub: HubType): Article[] {
  return ARTICLES_DATA.filter((a) => a.hub === hub);
}

export function getArticleBySlug(hub: HubType, slug: string): Article | undefined {
  return ARTICLES_DATA.find((a) => a.hub === hub && a.slug === slug);
}

export function findArticleAnyHub(slug: string): Article | undefined {
  return ARTICLES_DATA.find((a) => a.slug === slug);
}

export function getRelatedArticles(currentArticle: Article, limit = 4): Article[] {
  return ARTICLES_DATA.filter(
    (a) => a.id !== currentArticle.id && (a.hub === currentArticle.hub || a.category === currentArticle.category)
  ).slice(0, limit);
}
