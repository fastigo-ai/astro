import { ButtonHTMLAttributes } from "react";

export default function SecondaryButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`px-7 py-3.5 rounded-full bg-transparent hover:bg-[#3B82F6] border-2 border-[#3B82F6] text-[#3B82F6] hover:text-white font-bold transition-all duration-300 shadow-[0_2px_12px_rgba(59,130,246,0.15)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.35)] hover:scale-[1.02] active:scale-[0.98] ${props.className || ""}`}
    >
      {props.children}
    </button>
  );
}
