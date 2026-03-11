
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { useLanguage } from "../LTR/LanguageContext";

export default function Navbar() {
  const {language,setLanguage, t}=useLanguage();
  const toggleLanguage=()=>{
    setLanguage(language==="en" ? "fa" :"en")
  }
  return (
    <AppBar position="static">
      <Toolbar>

        <Button color="inherit" component={Link} to="/">
          Dashboard
        </Button>

        <Button color="inherit" component={Link} to="/goals">
          Goals
        </Button>

        <Button color="inherit" component={Link} to="/goals/new">
          New Goal
        </Button>

        <Button color="inherit" component={Link} to="/categories">
          Categories
        </Button>

        <Button color="inherit" component={Link} to="/settings">
          Settings
        </Button>
        <Button  onClick={toggleLanguage}>
          {language === "en" ? "fa" : "en"}
        </Button>

      </Toolbar>
      <Outlet />
    </AppBar>
  );
}