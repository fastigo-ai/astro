import { ButtonHTMLAttributes } from "react";

export default function PrimaryButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`px-7 py-3.5 rounded-full bg-[#4cb5ab] text-white font-bold shadow-md shadow-[#4cb5ab]/20 hover:shadow-lg hover:shadow-[#4cb5ab]/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ${props.className || ""}`}
    >
      {props.children}
    </button>
  );
}
