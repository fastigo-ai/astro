import React, { createContext, useContext, useEffect, useState } from "react";

export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export const LANGUAGES: Language[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
];

interface LanguageContextType {
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  languages: Language[];
}

const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: LANGUAGES[0],
  changeLanguage: () => {},
  languages: LANGUAGES,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("astrobaby_lang");
    if (saved) {
      const match = LANGUAGES.find((l) => l.code === saved);
      if (match) return match;
    }
    const cookies = document.cookie.split(";");
    const googtrans = cookies.find((c) => c.trim().startsWith("googtrans="));
    if (googtrans) {
      const val = googtrans.split("=")[1]?.trim();
      const code = val?.split("/")?.pop();
      const match = LANGUAGES.find((l) => l.code === code);
      if (match) return match;
    }
    return LANGUAGES[0];
  });

  const applyGoogleTranslate = (langCode: string) => {
    const hostname = window.location.hostname;
    if (langCode === "en") {
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${hostname}; path=/;`;
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${hostname}; path=/;`;
    } else {
      document.cookie = `googtrans=/en/${langCode}; path=/;`;
      document.cookie = `googtrans=/en/${langCode}; domain=.${hostname}; path=/;`;
      document.cookie = `googtrans=/en/${langCode}; domain=${hostname}; path=/;`;
    }

    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (select) {
      select.value = langCode;
      select.dispatchEvent(new Event("change"));
    } else {
      // Reload to let Google translate hook the new cookie
      window.location.reload();
    }
  };

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem("astrobaby_lang", lang.code);
    applyGoogleTranslate(lang.code);
  };

  useEffect(() => {
    // If a non-English language was saved previously, ensure cookie is active
    if (currentLanguage.code !== "en") {
      const hostname = window.location.hostname;
      document.cookie = `googtrans=/en/${currentLanguage.code}; path=/;`;
      document.cookie = `googtrans=/en/${currentLanguage.code}; domain=.${hostname}; path=/;`;
      document.cookie = `googtrans=/en/${currentLanguage.code}; domain=${hostname}; path=/;`;

      // Check if google-te-combo is ready
      const interval = setInterval(() => {
        const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
        if (select) {
          if (select.value !== currentLanguage.code) {
            select.value = currentLanguage.code;
            select.dispatchEvent(new Event("change"));
          }
          clearInterval(interval);
        }
      }, 500);

      const timer = setTimeout(() => clearInterval(interval), 5000);
      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [currentLanguage.code]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
