import { createTheme} from "@mui/material/styles";
export const getTheme=(mode, language)=>{

  

   

 return createTheme({
    palette:{
      mode: mode
    },
    




    direction: language ==="fa" ? "rtl" : "ltr",
    typography:{
      fontFamily: language === "fa" ? "sans-serif" : "Roboto"
    }
})

}
