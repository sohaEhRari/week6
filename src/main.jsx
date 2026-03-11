import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { GoalProvider } from "./context/GoalContext";
import { SettingsProvider } from "./context/SettingsContext";
import { LanguageProvider } from "./LTR/LanguageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SettingsProvider>
    <LanguageProvider>
    <GoalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoalProvider>
    </LanguageProvider>
  </SettingsProvider>
);