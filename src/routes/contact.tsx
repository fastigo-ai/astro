import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Heart,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  HelpCircle,
  Calendar,
  User,
  Globe
} from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import AppDownloadSection from "@/components/common/AppDownloadSection";

const contactCards = [
  {
    icon: Phone,
    title: "Call Our Counselors",
    subtitle: "Speak directly with our Garbhadhan Sanskar advisors",
    info: "+91 90185 67465",
    link: "tel:+919018567465",
    badge: "Mon–Sat, 9AM–7PM",
    badgeColor: "bg-pink-50 text-[#F45B8A] border-pink-200/80",
    gradient: "from-pink-500/10 to-rose-500/5",
    iconBg: "bg-[#F45B8A]/10 text-[#F45B8A]",
    btnText: "Call Now",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Assistance",
    subtitle: "Instant chat support for expectant mothers",
    info: "+91 90185 67465",
    link: "https://wa.me/919018567465?text=Hello%20Astro%20Baby%20Team,%20I%20would%20like%20to%20know%20more%20about%20Garbhadhan%20Sanskar.",
    badge: "Quick Response",
    badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-200/80",
    gradient: "from-emerald-500/10 to-teal-500/5",
    iconBg: "bg-emerald-500/10 text-emerald-600",
    btnText: "Chat on WhatsApp",
  },
  {
    icon: Mail,
    title: "Email Support",
    subtitle: "For partnerships, queries, and technical help",
    info: "support@astrobaby.com",
    link: "mailto:support@astrobaby.com",
    badge: "Within 24 Hours",
    badgeColor: "bg-blue-50 text-[#3B82F6] border-blue-200/80",
    gradient: "from-blue-500/10 to-sky-500/5",
    iconBg: "bg-[#3B82F6]/10 text-[#3B82F6]",
    btnText: "Send an Email",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    subtitle: "Research & Development Center",
    info: "Astro Baby Center, Indore, MP, India",
    link: "https://maps.google.com/?q=Indore,Madhya+Pradesh,India",
    badge: "Global Reach",
    badgeColor: "bg-purple-50 text-purple-600 border-purple-200/80",
    gradient: "from-purple-500/10 to-indigo-500/5",
    iconBg: "bg-purple-500/10 text-purple-600",
    btnText: "View on Map",
  },
];

const quickFaqs = [
  {
    q: "How soon will a Garbhadhan Sanskar counselor connect with me?",
    a: "Our team typically reaches out within 2 to 4 business hours. If you need urgent assistance, you can also ping us directly on our WhatsApp helpline.",
  },
  {
    q: "Can I get a personalized consultation with a doctor or astrologer?",
    a: "Yes. Once you register or send us an inquiry, our coordinator will arrange a 1-on-1 virtual appointment with our panel of gynaecologists, astrologers, or nutritionists according to your pregnancy stage.",
  },
  {
    q: "Is my personal pregnancy information safe & confidential?",
    a: "Absolutely. We adhere to stringent medical data privacy protocols. Your medical history, Janam Kundli data, and personal details remain 100% confidential and secure.",
  },
  {
    q: "Can I request a live demo of the Astro Baby mobile app?",
    a: "Yes! Simply mention in the form that you would like a free live guided walkthrough, and our expert will demonstrate the app features for you.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    stage: "Planning Conception (Beej Sanskar)",
    language: "English",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#FFFCFE] text-[#475569] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#F45B8A]/20 selection:text-[#F45B8A]">
      {/* Header Navbar */}
      <HeaderNavbar />

      {/* ── Page Hero / Banner ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-pink-100/60 bg-gradient-to-b from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF]">
        {/* Ambient Blurred Glows */}
        <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-10 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-10 h-80 w-80 rounded-full bg-amber-100/40 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-pink-200/80 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#F45B8A] backdrop-blur-md shadow-sm mb-4"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>We Are Here For You</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['DM_Serif_Display',Georgia,serif] text-4xl sm:text-5xl md:text-6xl font-normal text-[#172554] tracking-tight leading-[1.15] max-w-4xl mx-auto"
          >
            Connect with{" "}
            <span className="bg-gradient-to-r from-[#172554] via-[#F45B8A] to-[#E91E63] bg-clip-text text-transparent">
              Astro Baby
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg md:text-xl text-[#475569] max-w-2xl mx-auto font-['Manrope',sans-serif] leading-relaxed"
          >
            Have questions about Garbhadhan Sanskar, our mobile app features, or scheduling an expert consultation? Our caring advisors are ready to guide you.
          </motion.p>

          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-slate-500"
          >
            <Link to="/" className="hover:text-[#F45B8A] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[#172554] font-bold">Contact Us</span>
          </motion.div>
        </div>
      </section>

      {/* ── Direct Contact Cards ── */}
      <section className="py-14 md:py-20 relative z-10 bg-gradient-to-b from-[#FFFDFE] via-[#FBF7FC] to-[#F7FAFF] border-b border-pink-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((c, i) => {
              const IconComp = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-[28px] bg-white/95 p-6 sm:p-7 border border-pink-100/90 shadow-[0_10px_35px_rgba(23,37,84,0.05)] hover:shadow-[0_20px_50px_rgba(244,91,138,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`flex h-13 w-13 items-center justify-center rounded-2xl ${c.iconBg} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                        <IconComp className="h-6 w-6" />
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${c.badgeColor}`}>
                        {c.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-['DM_Serif_Display',Georgia,serif] text-xl font-normal text-[#172554] mb-1">
                        {c.title}
                      </h3>
                      <p className="text-xs text-[#475569] font-['Manrope',sans-serif] leading-relaxed">
                        {c.subtitle}
                      </p>
                    </div>

                    <div className="font-bold text-[#172554] text-sm md:text-base font-['Plus_Jakarta_Sans',sans-serif] pt-2">
                      {c.info}
                    </div>
                  </div>

                  <div className="relative z-10 pt-4 mt-4 border-t border-slate-100">
                    <a
                      href={c.link}
                      target={c.link.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#172554]/5 text-[#172554] group-hover:bg-gradient-to-r group-hover:from-[#F45B8A] group-hover:to-[#E91E63] group-hover:text-white transition-all duration-300 shadow-xs"
                    >
                      <span>{c.btnText}</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Main Form & Guidance Section ── */}
      <section className="py-16 md:py-24 relative z-10 bg-[#FFFCFE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Side: Counseling Benefits & Trust Points */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="space-y-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#F45B8A] backdrop-blur-sm shadow-sm">
                  <Heart className="h-3 w-3" /> Personalized Support
                </span>
                <h2 className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-4xl font-normal text-[#172554] leading-tight">
                  How Our Experts Assist You
                </h2>
                <p className="text-sm text-[#475569] font-['Manrope',sans-serif] leading-relaxed">
                  Every pregnancy is unique. Whether you are planning conception or navigating your third trimester, our multidisciplinary team provides personalized solutions.
                </p>
              </div>

              {/* Bullet Features */}
              <div className="space-y-4 pt-2">
                {[
                  {
                    title: "Garbhadhan Sanskar Customization",
                    desc: "Tailored daily mantra chanting, shlokas, and satvik diet recommendations based on your gestational week.",
                  },
                  {
                    title: "Medical & Gynecological Insight",
                    desc: "Clear explanations from certified doctors for high-risk pregnancies, stress relief, and natural delivery wellness.",
                  },
                  {
                    title: "Personalized Isht Mantra & Astrology",
                    desc: "Calculation of cosmic timings and auspicious muhurat sessions customized for mother and father.",
                  },
                  {
                    title: "100% Confidential & Compassionate",
                    desc: "Your privacy is sacred. We maintain complete confidentiality across all consultations.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-gradient-to-r from-[#FFF6FA] to-[#F8FAFF] border border-pink-100/80 shadow-xs"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white shadow-xs text-[#F45B8A] mt-0.5">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#172554] mb-0.5">{item.title}</h4>
                      <p className="text-[11px] leading-relaxed text-[#475569] font-['Manrope',sans-serif]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Helpdesk Box */}
              <div className="p-6 rounded-[24px] bg-[#172554] text-white shadow-xl space-y-3 relative overflow-hidden">
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#F45B8A]/30 blur-2xl" />
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-[#F6C85F]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Direct Helpline Available</h4>
                    <p className="text-[11px] text-slate-300">Call +91 90185 67465 for immediate queries</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: The Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="bg-white/95 backdrop-blur-2xl rounded-[32px] p-6 sm:p-10 lg:p-12 border border-pink-100 shadow-[0_20px_60px_-15px_rgba(23,37,84,0.08)] relative overflow-hidden">
                {/* Form Header */}
                <div className="mb-8 space-y-2">
                  <h3 className="font-['DM_Serif_Display',Georgia,serif] text-2xl sm:text-3xl font-normal text-[#172554]">
                    Send a Message or Consultation Request
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] font-['Manrope',sans-serif]">
                    Fill in your details and our senior counselor will connect with you promptly.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-12 space-y-4 bg-emerald-50/70 rounded-2xl border border-emerald-200/80 p-8"
                    >
                      <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-md">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h4 className="font-['DM_Serif_Display',Georgia,serif] text-2xl text-[#172554]">
                        Thank You, {formData.name || "Friend"}!
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                        Your message has been received with care. An Astro Baby counselor will contact you via WhatsApp or phone within 2-4 hours.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            stage: "Planning Conception (Beej Sanskar)",
                            language: "English",
                            message: "",
                          });
                        }}
                        className="inline-flex items-center gap-2 rounded-full bg-[#172554] text-white px-6 py-2.5 text-xs font-bold hover:bg-[#1e3a8a] transition-all shadow-sm"
                      >
                        <span>Send Another Inquiry</span>
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name & Phone Grid */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-[#172554] flex items-center gap-1.5">
                            <User className="h-3.5 w-3.5 text-[#F45B8A]" />
                            <span>Your Full Name *</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Priya Sharma"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 bg-slate-50/80 rounded-xl border border-slate-200 text-sm text-[#172554] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F45B8A] focus:bg-white transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-[#172554] flex items-center gap-1.5">
                            <Phone className="h-3.5 w-3.5 text-[#F45B8A]" />
                            <span>Phone Number / WhatsApp *</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 bg-slate-50/80 rounded-xl border border-slate-200 text-sm text-[#172554] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F45B8A] focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#172554] flex items-center gap-1.5">
                          <Mail className="h-3.5 w-3.5 text-[#F45B8A]" />
                          <span>Email Address *</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. priya@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50/80 rounded-xl border border-slate-200 text-sm text-[#172554] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F45B8A] focus:bg-white transition-all"
                        />
                      </div>

                      {/* Stage & Language Selection */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-[#172554] flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5 text-[#F45B8A]" />
                            <span>Pregnancy Stage</span>
                          </label>
                          <select
                            value={formData.stage}
                            onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                            className="w-full px-4 py-3 bg-slate-50/80 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#172554] focus:outline-none focus:ring-2 focus:ring-[#F45B8A] focus:bg-white transition-all"
                          >
                            <option>Planning Conception (Beej Sanskar)</option>
                            <option>1st Trimester (Months 1–3)</option>
                            <option>2nd Trimester (Months 4–6)</option>
                            <option>3rd Trimester (Months 7–9)</option>
                            <option>Postnatal & Parenting (0–2 Years)</option>
                            <option>General Inquiries & Demo</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-xs font-bold text-[#172554] flex items-center gap-1.5">
                            <Globe className="h-3.5 w-3.5 text-[#F45B8A]" />
                            <span>Preferred Language</span>
                          </label>
                          <select
                            value={formData.language}
                            onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                            className="w-full px-4 py-3 bg-slate-50/80 rounded-xl border border-slate-200 text-xs sm:text-sm text-[#172554] focus:outline-none focus:ring-2 focus:ring-[#F45B8A] focus:bg-white transition-all"
                          >
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Marathi</option>
                            <option>Gujarati</option>
                          </select>
                        </div>
                      </div>

                      {/* Message Textarea */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#172554] flex items-center gap-1.5">
                          <MessageCircle className="h-3.5 w-3.5 text-[#F45B8A]" />
                          <span>Your Message / Questions</span>
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Tell us about your questions, trimester, or any specific guidance you're seeking..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 bg-slate-50/80 rounded-xl border border-slate-200 text-sm text-[#172554] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F45B8A] focus:bg-white transition-all resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white py-4 px-8 text-sm font-bold shadow-lg shadow-[#F45B8A]/35 hover:shadow-xl hover:shadow-[#F45B8A]/45 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-70 cursor-pointer"
                        >
                          {loading ? (
                            <span className="flex items-center gap-2">
                              <span className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                              Sending Request...
                            </span>
                          ) : (
                            <>
                              <span>Submit Your Request</span>
                              <Send className="h-4 w-4 ml-1" />
                            </>
                          )}
                        </button>
                      </div>

                      <p className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5 pt-1">
                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                        <span>Your data is protected by strict medical confidentiality.</span>
                      </p>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 relative z-10 bg-gradient-to-b from-[#FFF6FA] via-[#F8FAFF] to-[#EAF4FF] border-t border-pink-100/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#F45B8A] backdrop-blur-sm shadow-sm">
              <HelpCircle className="h-3 w-3" /> Common Inquiries
            </span>
            <h2 className="font-['DM_Serif_Display',Georgia,serif] text-3xl sm:text-4xl font-normal text-[#172554]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#475569] font-['Manrope',sans-serif]">
              Quick answers about contacting our counseling department and scheduling sessions.
            </p>
          </div>

          <div className="space-y-3">
            {quickFaqs.map((f, i) => (
              <div
                key={i}
                className="border border-blue-100/80 rounded-2xl overflow-hidden bg-white/80 backdrop-blur-md shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center text-left px-6 py-4.5 bg-blue-50/40 hover:bg-blue-50/80 transition-colors"
                >
                  <span className="font-bold text-[#172554] text-sm md:text-[15px]">{f.q}</span>
                  <span className="text-[#F45B8A] text-xl font-bold ml-4">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 text-slate-600 text-xs md:text-sm leading-relaxed bg-white/95 border-t border-slate-100"
                  >
                    {f.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── App Download CTA ── */}
      <AppDownloadSection />

      {/* ── Footer ── */}
      <footer className="bg-[#172554] text-white/80 py-10 font-['Plus_Jakarta_Sans',sans-serif]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Astro Baby Garbhadhan Sanskar. All rights reserved.
          </div>
          <div className="flex gap-4 text-white/80 text-xs font-semibold">
            <span className="hover:text-white transition cursor-pointer">Facebook</span>
            <span>•</span>
            <span className="hover:text-white transition cursor-pointer">Instagram</span>
            <span>•</span>
            <span className="hover:text-white transition cursor-pointer">YouTube</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
