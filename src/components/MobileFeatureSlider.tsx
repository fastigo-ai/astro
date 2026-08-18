import { useState, useEffect } from "react";

const slides = [
  "/images/features/slide1.png",
  "/images/features/slide2.png",
  "/images/features/slide3.png",
  "/images/features/slide4.png",
];

export default function MobileFeatureSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center relative">
      {/* Phone Frame */}
      <div className="relative w-[280px] h-[580px] bg-white rounded-[40px] shadow-2xl border-[8px] border-slate-800 overflow-hidden flex flex-col">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl z-20 flex justify-center items-end pb-1">
          <div className="w-16 h-1.5 bg-slate-600 rounded-full" />
        </div>

        {/* Screen Content - Image Slider */}
        <div className="flex-1 relative bg-slate-100 overflow-hidden">
          {slides.map((slide, idx) => (
            <img
              key={slide}
              src={slide}
              alt={`Feature ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                idx === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          {/* Subtle gradient overlay to make text pop if needed, or just let the images shine */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
        </div>

        {/* Bottom Logo Area */}
        <div className="h-[120px] bg-white z-10 flex flex-col items-center justify-center border-t border-slate-100 relative shadow-[0_-4px_10px_rgba(0,0,0,0.05)] rounded-t-3xl -mt-6">
          <img src="/images/logo.png" alt="Astro Baby" className="h-14 object-contain mb-1" />
          <p className="text-[10px] text-slate-500 font-medium tracking-wide uppercase">
            Your Health & Pregnancy Companion
          </p>
        </div>
      </div>
    </div>
  );
}
