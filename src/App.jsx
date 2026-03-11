import { Routes, Route } from "react-router-dom";

import LayOut from "./layout/LayOut";

import Dashboard from "./pages/Dashboard";
import Goals from "./pages/Goals";
import Categories from "./pages/Categories";
import NewGoal from "./pages/NewGoal";
import Settings from "./pages/Settings";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "./Theme/theme" // your function that accepts mode & language
import { useContext, useEffect, useMemo } from "react";
import { SettingsContext } from "./context/SettingsContext";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import rtlPlugin from 'stylis-plugin-rtl'
import { prefixer } from "stylis";


function App() {
  const rtlCache = useMemo(
    () =>
      createCache({
        key: "muirtl",
        stylisPlugins: [prefixer, rtlPlugin],
      }),
    []
  );
  const ltrCache = useMemo(() => createCache({ key: "muiltr" }), []);

  const { mode, language } = useContext(SettingsContext);
  const theme = getTheme(mode, language);
  useEffect(() => {
    const dir = language === "fa" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", language);
  }, [language]);
  return (
    <>
    <CacheProvider value={language === "fa" ? rtlCache : ltrCache}>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Dashboard />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/goals/new" element={<NewGoal />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
      </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default App;
