import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { useContext } from "react"
import { SettingsContext } from "../context/SettingsContext"

export default function Settings(){

    const {toggleTheme, toggleLanguage, language}= useContext(SettingsContext);



    return (

        <Container>
            <h2>{language==="en" ? "Settings" : "تنظیمات"}</h2>

            <Button   variant="contained" onClick={toggleLanguage}>Toggle Language
            {language=== "en" ? "Toggle Language" : "تغییر زبان"}
            </Button>

            <br/> <br/>
            <Button   variant="contained" onClick={toggleTheme}>Toggle Theme
            {language=== "en" ? "Toggle Theme" : "تغییر زبان"}
            </Button>

        </Container>

    )
}