import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Sparkles, Mail, ArrowRight, CheckCircle2, ShieldCheck, Star } from "lucide-react";

export default function NewsletterSection() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
    }, 600);
  };

  return (
    <section
      id="newsletter"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-[#FFF6FA] via-[#FFF9FC] to-[#F0F7FF] text-[#475569] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-pink-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 right-10 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* White Glassmorphism Luxury Card */}
        <div className="bg-white/95 backdrop-blur-2xl rounded-[32px] p-6 sm:p-10 lg:p-14 border border-pink-100/80 shadow-[0_20px_60px_-15px_rgba(23,37,84,0.08)] grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Side: Large AI Generated Image with Rounded Corners & Soft Shadow */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[4/3] sm:aspect-square rounded-[28px] overflow-hidden shadow-[0_20px_50px_rgba(23,37,84,0.14)] hover:shadow-[0_28px_60px_rgba(23,37,84,0.2)] border-4 border-white ring-1 ring-pink-100/60 bg-[#FFFCFE] transition-all duration-500">
              <img
                src="/images/newsletter_illustration.jpg"
                alt="Astro Baby Garbhadhan Sanskar Expecting Mother"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#172554]/60 via-transparent to-transparent opacity-75" />

              {/* Soft Luxury Image Badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md text-[#172554] p-3.5 rounded-2xl shadow-xl border border-white/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-pink-50 text-[#F45B8A] flex items-center justify-center font-bold text-base flex-shrink-0 border border-pink-100/80 shadow-xs">
                  🌸
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#172554] leading-snug">
                    {t("programs.garbhadhan.title", "Garbhadhan Sanskar")}
                  </div>
                  <div className="text-[11px] text-[#475569] font-normal">
                    {t("programs.garbhadhan.subtitle", "Sacred Preparation for Conception")}
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Purple/Pink Soft Glow Behind Image */}
            <div className="absolute -inset-3 bg-gradient-to-r from-[#F45B8A]/15 via-[#3B82F6]/10 to-[#F6C85F]/15 rounded-[32px] blur-2xl opacity-60 group-hover:opacity-90 transition duration-500 -z-10" />
          </div>

          {/* Right Side: Content & Subscription Form */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:space-y-7">
            {/* Header Badge & Title */}
            <div className="space-y-3.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50/90 border border-pink-200/80 text-[#F45B8A] text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#F45B8A]" />
                <span>{t("newsletter.badge", "Stay Connected")}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#172554] leading-[1.2] tracking-tight">
                {t("newsletter.heading", "Receive Sacred Vedic Pregnancy Wisdom Weekly")}
              </h2>

              <p className="text-[#475569] text-sm sm:text-base leading-relaxed font-normal pt-1">
                {t("newsletter.subtitle", "Join 25,000+ expecting parents receiving auspicious Muhurat dates, prenatal satvik recipes, and calming Vedic shlokas.")}
              </p>
            </div>

            {/* Form Section / Success State */}
            {subscribed ? (
              <div className="bg-emerald-50/90 border border-emerald-200/80 rounded-2xl p-6 sm:p-7 shadow-xs animate-in fade-in zoom-in duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-r from-[#F45B8A] to-[#E91E63] text-white flex items-center justify-center font-bold text-xl shadow-md flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#172554]">{t("newsletter.successTitle", "Welcome to Astro Baby Family!")}</h4>
                    <p className="text-xs text-[#475569] mt-0.5 font-normal">
                      {t("newsletter.successMsg", "You have been successfully subscribed. Check your inbox for your first Vedic welcome guide.")} (<strong>{email}</strong>)
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3.5">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#F45B8A]/80">
                      <Mail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t("newsletter.placeholder", "Enter your email address...")}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50/70 hover:bg-white focus:bg-white text-[#172554] placeholder:text-slate-400 text-sm font-normal border border-pink-100/90 focus:outline-none focus:border-[#F45B8A] focus:ring-4 focus:ring-[#F45B8A]/15 shadow-xs transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-4 bg-gradient-to-r from-[#F45B8A] to-[#E91E63] hover:from-[#d94d7a] hover:to-[#d0185b] text-white font-semibold text-sm rounded-2xl shadow-[0_10px_25px_-5px_rgba(244,91,138,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(244,91,138,0.5)] transition-all duration-300 flex items-center justify-center gap-2 active:scale-98 disabled:opacity-75 flex-shrink-0 cursor-pointer"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>{t("newsletter.button", "Subscribe Free")}</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Subtle Luxury Footer Note */}
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 font-normal pt-1">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    <span>{t("newsletter.privacy", "We respect your privacy. Unsubscribe anytime with 1-click.")}</span>
                  </span>
                  <span className="flex items-center gap-1 text-[#172554] font-semibold">
                    <Star className="w-3.5 h-3.5 fill-[#F6C85F] text-[#F6C85F]" />
                    <span>4.9 ★ (10K+ Families)</span>
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
