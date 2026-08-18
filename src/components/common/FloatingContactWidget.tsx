import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  MessageCircle,
  X,
  Phone,
  Send,
  User,
  Sparkles,
  CheckCircle2,
  Clock,
  Shield,
  Wifi,
  Battery,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const shouldReduceMotion = useReducedMotion();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter mobile number";
    } else if (!/^[0-9+ ]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter valid phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Please enter a message";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success state
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
      setFormData({ name: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <aside aria-label="Live Contact Support Widget" className="fixed bottom-5 right-4 sm:bottom-6 sm:right-7 z-50">
      {/* ── Compact Modern Mobile Phone-Shaped Popup ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-lenis-prevent
            initial={{ opacity: 0, scale: 0.85, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20, transformOrigin: "bottom right" }}
            transition={{
              type: "spring",
              damping: 26,
              stiffness: 320,
            }}
            className="absolute bottom-16 right-0 w-[calc(100vw-32px)] max-w-[320px] sm:w-[335px] max-h-[70vh] sm:max-h-[500px] overflow-hidden rounded-[28px] bg-white border-2 border-slate-900/10 shadow-[0_20px_50px_rgba(23,37,84,0.22)] flex flex-col z-50 text-[#172554] overscroll-contain"
          >
            {/* Phone Top Speaker & Status Notch */}
            <div className="bg-[#172554] px-4 pt-2 pb-1.5 flex items-center justify-between text-white/70 text-[10px] select-none shrink-0">
              <span className="font-semibold text-white/90">9:41</span>
              {/* Dynamic Island Notch */}
              <div className="w-14 h-3 bg-slate-950/80 rounded-full flex items-center justify-center gap-1 px-1.5">
                <div className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                <div className="w-5 h-0.5 bg-white/20 rounded-full" />
              </div>
              <div className="flex items-center gap-1">
                <Wifi className="w-2.5 h-2.5" />
                <Battery className="w-3 h-3" />
              </div>
            </div>

            {/* Header / Brand Profile */}
            <div className="relative bg-gradient-to-br from-[#172554] via-[#1E3A8A] to-[#EA3484] p-3.5 text-white shrink-0">
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close Chat Widget"
                className="absolute top-3 right-3 h-7 w-7 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer backdrop-blur-md"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-2.5">
                {/* Brand Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="h-10 w-10 rounded-xl bg-white p-0.5 shadow-md flex items-center justify-center border border-pink-200">
                    <img
                      src="/images/logo.png"
                      alt="Astro Baby"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 border-2 border-white ring-1 ring-emerald-400/50" />
                </div>

                {/* Profile Details */}
                <div className="pr-6">
                  <h3 className="font-bold text-sm text-white leading-tight flex items-center gap-1">
                    Astro Baby Care
                    <Sparkles className="w-3 h-3 text-[#F6C85F]" />
                  </h3>
                  <div className="flex items-center gap-1 text-[11px] text-pink-100/90 mt-0.5">
                    <Clock className="w-2.5 h-2.5 text-emerald-300" />
                    <span>Replies in ~5 mins</span>
                  </div>
                </div>
              </div>

              {/* Subtitle Banner */}
              <div className="mt-2 bg-white/10 backdrop-blur-md rounded-lg p-2 border border-white/15 text-[11px] text-white/95 leading-snug font-medium">
                👋 Namaste! How can we help with Garbhadhan Sanskar?
              </div>
            </div>

            {/* Content Body (Compact Scrollable with data-lenis-prevent) */}
            <div
              data-lenis-prevent
              className="p-3.5 overflow-y-auto space-y-3 bg-[#FFFCFE] flex-1 overscroll-contain touch-pan-y"
            >
              {/* Quick Contact Action Buttons */}
              <div className="grid grid-cols-2 gap-2">
                {/* WhatsApp Quick Action */}
                <a
                  href="https://wa.me/919018567465?text=Hello%20Astro%20Baby%2C%20I%20would%20like%20to%20know%20more%20about%20Garbhadhan%20Sanskar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100/80 transition-all font-semibold text-[11px] shadow-2xs group"
                >
                  <FaWhatsapp className="w-3.5 h-3.5 text-emerald-600 group-hover:scale-110 transition-transform" />
                  <span>WhatsApp</span>
                </a>

                {/* Call Now Quick Action */}
                <a
                  href="tel:+919018567465"
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-pink-50 text-[#EA3484] border border-pink-200 hover:bg-pink-100/80 transition-all font-semibold text-[11px] shadow-2xs group"
                >
                  <Phone className="w-3 h-3 text-[#EA3484] group-hover:scale-110 transition-transform" />
                  <span>Call Now</span>
                </a>
              </div>

              {/* Divider */}
              <div className="relative flex items-center justify-center my-0.5">
                <div className="border-t border-pink-100 w-full" />
                <span className="bg-[#FFFCFE] px-2 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                  or write a message
                </span>
                <div className="border-t border-pink-100 w-full" />
              </div>

              {/* Submission Success State */}
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-4 text-center space-y-2"
                >
                  <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-sm text-[#172554]">
                    Message Sent!
                  </h4>
                  <p className="text-[11px] text-slate-600 max-w-xs mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#EA3484]">{formData.name}</strong>. We will connect with you shortly.
                  </p>
                </motion.div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-2.5">
                  {/* Name Input */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-0.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Priya Sharma"
                        className={`w-full pl-8 pr-3 py-1.5 text-xs rounded-lg bg-white border ${
                          errors.name ? "border-rose-400 bg-rose-50/20" : "border-pink-200/80"
                        } focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all text-slate-800 placeholder:text-slate-400 shadow-2xs`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-[9.5px] text-rose-500 font-medium mt-0.5">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-0.5">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className={`w-full pl-8 pr-3 py-1.5 text-xs rounded-lg bg-white border ${
                          errors.phone ? "border-rose-400 bg-rose-50/20" : "border-pink-200/80"
                        } focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all text-slate-800 placeholder:text-slate-400 shadow-2xs`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[9.5px] text-rose-500 font-medium mt-0.5">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-700 uppercase tracking-wider mb-0.5">
                      How can we assist you? <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Ask about Garbhadhan Sanskar courses or prenatal care..."
                      className={`w-full p-2.5 text-xs rounded-lg bg-white border ${
                        errors.message ? "border-rose-400 bg-rose-50/20" : "border-pink-200/80"
                      } focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all text-slate-800 placeholder:text-slate-400 shadow-2xs resize-none`}
                    />
                    {errors.message && (
                      <p className="text-[9.5px] text-rose-500 font-medium mt-0.5">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-[#EA3484] via-[#F45B8A] to-[#FF70A6] text-white font-bold text-xs shadow-[0_4px_16px_rgba(234,52,132,0.35)] hover:shadow-[0_6px_20px_rgba(234,52,132,0.45)] transition-all cursor-pointer hover:scale-[1.01] active:scale-[0.98]"
                  >
                    <Send className="w-3 h-3" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

              {/* Privacy Footer */}
              <div className="pt-1.5 text-center text-[9.5px] text-slate-400 flex items-center justify-center gap-1 border-t border-pink-100/80">
                <Shield className="w-2.5 h-2.5 text-[#EA3484]" />
                <span>100% Confidential & Secure Consultation</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Circular Floating Trigger Button (Bottom-Right) ── */}
      <motion.button
        whileHover={shouldReduceMotion ? {} : { scale: 1.08 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.92 }}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close Contact Support" : "Open Contact Support"}
        className="relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#EA3484] via-[#F45B8A] to-[#FF70A6] text-white shadow-[0_8px_28px_rgba(234,52,132,0.5)] hover:shadow-[0_12px_36px_rgba(234,52,132,0.65)] transition-shadow duration-300 cursor-pointer border-2 border-white focus:outline-none focus:ring-4 focus:ring-pink-300/80"
      >
        {/* Pulsing Emerald Online Dot */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white ring-1 ring-emerald-300" />
        </span>

        {/* Animated Icon Rotation on Open/Close */}
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-5.5 h-5.5 text-white fill-white/20" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </aside>
  );
}
