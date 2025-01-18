import Hero from "./hero/hero.component";
import Jeremy from "./jeremy/jeremy.component";
import Footer from "./fotter/footer.component";
import LearningObjectives from "./about_us/LearningObjectives.component.jsx";
import TopNavigationHomepage from "./top_navigation/TopNavigation.jsx";

const LandingPage = () => {
  return (
    <>
      <TopNavigationHomepage />
      <Hero />
      <Jeremy />
      <LearningObjectives />
      <Footer />
    </>
  );
};

export { LandingPage };
