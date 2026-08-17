import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Mail,
  Send,
  CheckCircle2,
  ChevronRight,
  Star,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import HeaderNavbar from "@/components/common/HeaderNavbar";
import AppDownloadSection from "@/components/common/AppDownloadSection";
import Footer from "@/components/common/Footer";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [stage, setStage] = useState("Planning Conception (Beej Sanskar)");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#FFFCFE] text-[#475569] selection:bg-[#F45B8A]/20 selection:text-[#F45B8A]">
      {/* Header & Navbar */}
      <HeaderNavbar />

      {/* ── Page Hero / Banner ── */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-pink-100/60 bg-gradient-to-b from-[#FFF6FA] via-[#FFF8FD] to-[#EAF4FF]">
        {/* Ambient Glow Spheres */}
        <div className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 right-10 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-10 h-80 w-80 rounded-full bg-amber-100/40 blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-pink-200/80 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#F45B8A] backdrop-blur-md shadow-sm mb-4"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Weekly Wisdom & Guidance</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#172554] tracking-tight leading-[1.1] max-w-4xl mx-auto"
          >
            The Astro Baby{" "}
            <span className="bg-gradient-to-r from-[#172554] via-[#F45B8A] to-[#E91E63] bg-clip-text text-transparent">
              Garbhadhan Sanskar
            </span>{" "}
            Newsletter
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg md:text-xl text-[#475569] max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Join over 50,000+ expectant parents receiving weekly Vedic shlokas, satvik recipes, trimester wellness tips, and astrological insights.
          </motion.p>

          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-slate-500"
          >
            <Link to="/" className="hover:text-[#F45B8A] transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
            <span className="text-[#172554] font-semibold">Newsletter</span>
          </motion.div>
        </div>
      </section>

      {/* ── Main Signup Card Section with Illustration ── */}
      <section className="py-16 md:py-24 relative z-10 bg-gradient-to-b from-[#FFFDFE] via-[#FBF7FC] to-[#F7FAFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-2xl rounded-[32px] p-6 sm:p-10 lg:p-14 border border-pink-100 shadow-[0_20px_60px_-15px_rgba(23,37,84,0.08)] grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Artwork & Floating Badge */}
            <div className="lg:col-span-5 relative group">
              <div className="relative aspect-[4/3] sm:aspect-square rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(23,37,84,0.14)] border-4 border-white bg-[#FFFCFE]">
                <img
                  src="/images/newsletter_illustration.jpg"
                  alt="Astro Baby Garbhadhan Sanskar Mother"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#172554]/60 via-transparent to-transparent opacity-80 pointer-events-none" />

                {/* Floating Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md text-[#172554] p-3.5 rounded-2xl shadow-xl border border-white/80 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-pink-50 text-[#F45B8A] flex items-center justify-center font-bold text-lg shrink-0 border border-pink-100 shadow-xs">
                    🌸
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#172554] leading-snug">
                      Weekly Garbhadhan Sutras
                    </div>
                    <div className="text-[11px] text-[#475569] font-normal">
                      Ancient Mantras, Satvik Diet & Trimester Care
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Subscription Form */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-pink-200/80 bg-pink-50/90 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F45B8A] backdrop-blur-sm shadow-sm">
                  <Mail className="h-3 w-3" /> Direct to Your Inbox
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-[#172554] leading-tight">
                  Subscribe & Receive Our Free 9-Month Starter Guide
                </h2>

                <p className="text-sm sm:text-base text-[#475569] font-normal leading-relaxed">
                  Join a community of conscious parents. Delivered every Wednesday morning, completely free, with no spam.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {subscribed ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-emerald-50/90 border border-emerald-200/80 rounded-2xl p-6 sm:p-8 space-y-3"
                  >
                    <div className="flex items-center gap-3 text-emerald-700">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <CheckCircle2 className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-[#172554]">
                          Welcome to the Astro Baby Family!
                        </h4>
                        <p className="text-xs text-slate-600 font-normal">
                          We've sent a verification email and your free Garbhadhan Sanskar Starter PDF to <strong className="text-[#172554] font-semibold">{email}</strong>.
                        </p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => setSubscribed(false)}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-[#172554] hover:text-[#F45B8A] transition-colors"
                      >
                        <span>Subscribe with another email</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-3.5">
                      <input
                        type="text"
                        placeholder="Your First Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-[#172554] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#F45B8A] focus:bg-white transition-all font-normal"
                      />

                      <select
                        value={stage}
                        onChange={(e) => setStage(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#172554] focus:outline-none focus:ring-2 focus:ring-[#F45B8A] focus:bg-white transition-all font-normal"
                      >
                        <option>Planning Conception (Beej Sanskar)</option>
                        <option>1st Trimester (Months 1–3)</option>
                        <option>2nd Trimester (Months 4–6)</option>
                        <option>3rd Trimester (Months 7–9)</option>
                        <option>Mindful Parenting (0–2 Years)</option>
                      </select>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative flex-1">
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your primary email address..."
                          className="w-full pl-11 pr-4 py-4 rounded-2xl bg-slate-50 text-[#172554] placeholder:text-slate-400 text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#F45B8A] focus:bg-white transition-all font-normal"
                        />
                        <Mail className="w-4.5 h-4.5 text-[#F45B8A] absolute left-4 top-4" />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="px-8 py-4 bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white font-semibold text-sm rounded-2xl shadow-[0_10px_25px_-5px_rgba(244,91,138,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(244,91,138,0.5)] transition-all duration-300 flex items-center justify-center gap-2 active:scale-98 disabled:opacity-75 shrink-0 cursor-pointer"
                      >
                        {loading ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Join Free</span>
                            <Send className="w-4 h-4 ml-1" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 pt-1 font-normal">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="h-4 w-4 text-emerald-500" />
                        <span>100% Privacy. Unsubscribe with 1-click anytime.</span>
                      </span>
                      <span className="flex items-center gap-1 text-[#172554] font-semibold">
                        <Star className="h-3.5 w-3.5 fill-[#F6C85F] text-[#F6C85F]" />
                        <span>Trusted by 50,000+ Parents</span>
                      </span>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ── App Download CTA ── */}
      <AppDownloadSection />

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}
