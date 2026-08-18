import React, { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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
  const { i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    const activeCode = i18n.language?.startsWith("hi") ? "hi" : "en";
    return LANGUAGES.find((l) => l.code === activeCode) || LANGUAGES[0];
  });

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    i18n.changeLanguage(lang.code);
    localStorage.setItem("astrobaby_lang", lang.code);
  };

  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      const activeCode = lng.startsWith("hi") ? "hi" : "en";
      const match = LANGUAGES.find((l) => l.code === activeCode);
      if (match && match.code !== currentLanguage.code) {
        setCurrentLanguage(match);
      }
    };

    i18n.on("languageChanged", handleLanguageChanged);
    return () => {
      i18n.off("languageChanged", handleLanguageChanged);
    };
  }, [i18n, currentLanguage.code]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, languages: LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
