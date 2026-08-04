import { ButtonHTMLAttributes } from "react";

export default function SecondaryButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`px-7 py-3.5 rounded-full bg-[#4cb5ab] border-2 border-[#4cb5ab] text-white font-bold hover:bg-[#3b9c92] transition-all duration-300 shadow-xs backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] ${props.className || ""}`}
    >
      {props.children}
    </button>
  );
}
