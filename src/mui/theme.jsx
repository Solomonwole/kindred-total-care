import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF",
    },
    secondary: {
      main: "#0DBBB4",
    },
    info: {
      main: "#F6F7F8",
    },
    textPrimary: {
      main: "#3A3636",
    },
    textSecondary: {
      main: "#393F42",
    },
    notify: {
      main: "#FF4A4A",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    h1: {
      fontSize: "56px",
      fontWeight: "700",
      "@media (min-width:0px) and (max-width:360px)": {
        fontSize: "35px",
      },
      "@media (min-width:360px) and (max-width:600px)": {
        fontSize: "45px",
      },
    },
    h2: {
      fontSize: "40px",
      fontWeight: "600",
      color: "#000",
      "@media (min-width:0px) and (max-width:360px)": {
        fontSize: "35px",
      },
      "@media (min-width:360px) and (max-width:600px)": {
        fontSize: "35px",
      },
    },
    h3: {
      fontSize: "18px",
      fontWeight: "700",
    },
    h4: {
      fontSize: "16px",
      fontWeight: "500",
    },
    h5: {
      fontSize: "14px",
      fontWeight: "500",
    },
    body1: {
      fontSize: "14px",
      fontWeight: "300",
      lineHeight: "30px",
    },
    caption: {
      fontSize: "12px",
      fontWeight: "400",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          minWidth: "90px",
          minHeight: "40px",
        },
        contained: {
          color: "#fff",
          background:
            "var(--bluegree, linear-gradient(180deg, #0DBBB4 0%, rgba(48, 184, 50, 0.44) 100%))",
          borderRadius: "10px",
          height: "50px",
          width: "150px",
          fontSize: "15px",
        },
      },
    },
  },
});

export default theme;
