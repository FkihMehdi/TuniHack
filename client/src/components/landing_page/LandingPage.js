import { themeOptions } from "./theme";
import { ThemeProvider } from "@mui/material";
import NavBar from "./nav-bar.component.jsx";
import Hero from "./hero/hero.component";
import Jeremy from "./jeremy/jeremy.component";
import Footer from "./fotter/footer.component";

const LandingPage = () => {
  return (
    <ThemeProvider theme={themeOptions}>
      <NavBar />
      <Hero />
      <Jeremy />
      <Footer />
    </ThemeProvider>
  );
};

export { LandingPage };
