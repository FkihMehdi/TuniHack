import Hero from "./hero/hero.component";
import CoursesSection from "./CoursesSection/CoursesSection.jsx";
import Footer from "./fotter/footer.component";
import LearningObjectives from "./about_us/LearningObjectives.component.jsx";
import TopNavigationHomepage from "./top_navigation/TopNavigation.jsx";

const LandingPage = () => {
  return (
    <>
      <TopNavigationHomepage />
      <Hero />
      <CoursesSection />
      <LearningObjectives />
      <Footer />
    </>
  );
};

export { LandingPage };
