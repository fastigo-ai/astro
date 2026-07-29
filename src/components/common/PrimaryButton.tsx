import { ButtonHTMLAttributes } from "react";

export default function PrimaryButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F63D8E] to-[#E02B7B] text-white font-bold shadow-md shadow-pink-500/20 hover:shadow-lg hover:shadow-pink-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ${props.className || ""}`}
    >
      {props.children}
    </button>
  );
}
