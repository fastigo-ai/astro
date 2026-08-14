import React, { useState } from "react";

export default function NewsletterSection() {
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
    }, 500);
  };

  return (
    <section className="relative py-20 lg:py-28 bg-[#fcf2f7] text-[#475569] overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Soft Luxury Ambient Glow Backgrounds */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#3B82F6]/8 to-[#F45B8A]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#172554]/8 to-[#F45B8A]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* White Glassmorphism Luxury Card */}
        <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 lg:p-14 border border-[#EAF4FF] shadow-[0_20px_60px_-15px_rgba(23,37,84,0.07)] grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Side: Large AI Generated Image with Rounded Corners & Soft Shadow */}
          <div className="lg:col-span-5 relative group">
            <div className="relative aspect-[4/3] sm:aspect-square rounded-[28px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(23,37,84,0.18)] hover:shadow-[0_35px_70px_-12px_rgba(23,37,84,0.25)] border-2 border-white/80 ring-1 ring-[#172554]/10 bg-[#FFFCFE] transition-all duration-500">
              <img
                src="/images/newsletter_illustration.jpg"
                alt="Astro Baby Garbhadhan Sanskar Expecting Mother"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B2E]/50 via-transparent to-transparent opacity-70" />

              {/* Soft Luxury Image Badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md text-[#1E1B2E] px-4 py-3 rounded-2xl shadow-xl border border-white/80 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FFFCFE] text-[#F45B8A] flex items-center justify-center font-bold text-base flex-shrink-0 border border-pink-100 shadow-xs">
                  🌸
                </div>
                <div>
                  <div className="text-xs font-bold font-['Plus_Jakarta_Sans',sans-serif] text-[#172554] leading-snug">
                    Garbhadhan Sanskar Daily Sutras
                  </div>
                  <div className="text-[11px] text-[#475569] font-medium">
                    Wisdom, Mantras & Trimester Care
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Purple Soft Glow Behind Image */}
            <div className="absolute -inset-3 bg-gradient-to-r from-[#172554]/15 via-[#3B82F6]/15 to-[#F45B8A]/15 rounded-[32px] blur-2xl opacity-50 group-hover:opacity-85 transition duration-500 -z-10" />
          </div>

          {/* Right Side: Content & Subscription Form */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:space-y-8">
            {/* Header Badge & Title */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-[#172554] border border-blue-100 text-xs font-semibold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#F45B8A] animate-pulse" />
                Stay Connected with Astro Baby
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#172554] leading-[1.15] font-['Cormorant_Garamond',serif]">
                Subscribe to Our{" "}
                <span className="bg-gradient-to-r from-[#172554] via-[#3B82F6] to-[#F45B8A] bg-clip-text text-transparent font-semibold">
                  Garbhadhan Sanskar
                </span>{" "}
                Newsletter
              </h2>

              <p className="text-[#475569] text-sm sm:text-base leading-relaxed font-['Plus_Jakarta_Sans',sans-serif] font-normal pt-1">
                To get more Garbhadhan Sanskar related content in your inbox, subscribe to our newsletter
                by submitting your email address.
              </p>
            </div>

            {/* Form Section / Success State */}
            {subscribed ? (
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 shadow-sm animate-in fade-in zoom-in duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#F45B8A] text-white flex items-center justify-center font-bold text-xl shadow-md flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#172554] font-['Cormorant_Garamond',serif]">
                      You're Subscribed!
                    </h4>
                    <p className="text-xs text-[#475569] mt-0.5 font-['Plus_Jakarta_Sans',sans-serif]">
                      Thank you for joining our newsletter. We've sent your welcome guide to your
                      inbox.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3.5">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-4.5 flex items-center pointer-events-none text-[#948EAD]">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-[#172554] placeholder-[#94A3B8] text-sm font-['Plus_Jakarta_Sans',sans-serif] border border-blue-100 focus:outline-none focus:border-[#3B82F6] focus:ring-4 focus:ring-[#3B82F6]/10 shadow-xs transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-4 bg-[#F45B8A] hover:bg-[#d94d7a] text-white font-['Manrope',sans-serif] font-bold text-sm rounded-2xl shadow-[0_10px_25px_-5px_rgba(244,91,138,0.35)] hover:shadow-[0_15px_30px_-5px_rgba(244,91,138,0.45)] transition-all duration-300 flex items-center justify-center gap-2 active:scale-98 disabled:opacity-75 flex-shrink-0"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>

                {/* Subtle Luxury Footer Note */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#94A3B8] font-['Plus_Jakarta_Sans',sans-serif] pt-1">
                  <span className="flex items-center gap-1.5">
                    <span className="text-[#3B82F6]">🔒</span> No spam ever. Unsubscribe anytime.
                  </span>
                  <span className="flex items-center gap-1 text-[#172554] font-semibold">
                    <span>✨</span> Rated 4.6★ by Expecting Mothers
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
