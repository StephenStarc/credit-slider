import { createTheme } from "@mui/material";

const theme= createTheme({
    palette: {
      primary: { main: '#9747FF' },
      secondary: { main: '#757575' },
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
    shape: {
      borderRadius: 8,
    },
    spacing: (factor:number) => `${0.5 * factor}rem`,
  });
  
  export default theme;