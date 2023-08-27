import { Box, ThemeProvider } from "@mui/material";
import RouterScreen from "./router/RouterScreen";
import theme from "./mui/theme";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
    // eslint-disable-next-line no-undef
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ overflowX: "hidden" }}>
          <RouterScreen />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
