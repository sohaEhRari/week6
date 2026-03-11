
import { createContext, useState } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  const [language, setLanguage] = useState("en");

  const toggleTheme = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fa" : "en");
  };

  return (
    <SettingsContext.Provider
      value={{
        mode,
        language,
        toggleTheme,
        toggleLanguage,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};