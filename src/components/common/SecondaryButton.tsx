import { ButtonHTMLAttributes } from "react";

export default function SecondaryButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`px-7 py-3.5 rounded-full bg-white/90 border-2 border-[#2584F5]/30 text-[#2584F5] font-bold hover:bg-[#2584F5]/10 hover:border-[#2584F5] transition-all duration-300 shadow-xs backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] ${props.className || ""}`}
    >
      {props.children}
    </button>
  );
}
