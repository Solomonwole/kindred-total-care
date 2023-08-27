import theme from "../../mui/theme";

export const ulStyle = {
  display: { xs: "none", sm: "flex" },
  justifyContent: "center",
  alignItems: "center",
  li: {
    listStyle: "none",
    margin: "0 10px",

    a: {
      color: theme.palette.textPrimary.main,
      textDecoration: "none",
    },
    "& a.active": {
      color: theme.palette.secondary.main,
    },
  },
};

export const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const mobileMenu = {
  display: { xs: "flex", sm: "none" },
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "15vh",
  width: "100%",

  background: "#fff",
  position: "fixed",
  zIndex: 10,
};

export const mobileMenuNav = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  li: {
    listStyle: "none",
    margin: "10px 0",
    a: {
      color: theme.palette.textPrimary.main,
      textDecoration: "none",
      fontSize: "26px",
    },
    "& a.active": {
      color: theme.palette.secondary.main,
    },
  },
};
