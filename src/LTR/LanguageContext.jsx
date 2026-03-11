import { useContext } from "react";
import { createContext } from "react";
import translations from "./translations";
import { SettingsContext } from "../context/SettingsContext";

const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
  const { language, setLanguage } = useContext(SettingsContext);
  const t = (key) => translations[language]?.[key] ?? key;
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage=()=>useContext(LanguageContext);


 
