import "@mui/material";
import "react-icons";
import "react-icons/bi";
import "react-icons/md";
import "react-icons/bs";
import "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import theme from "./theme";
import { useEffect } from "react";
import PostView from "./components/views/PostView";
import CreatePostView from "./components/views/CreatePostView";
import ProfileView from "./components/views/ProfileView";
import LoginView from "./components/views/LoginView";
import SignupView from "./components/views/SignupView";
import PrivateRoute from "./components/PrivateRoute";
import SearchView from "./components/views/SearchView";
import MessengerView from "./components/views/MessengerView";
import { initiateSocketConnection } from "./helpers/socketHelper";
import { LandingPage } from "./components/landing_page/LandingPage";
import LearningDashboard from "./components/views/LearningDashboard/LearningDashboard";
import Courses from "./components/views/Courses/Courses";
import PracticePage from "./components/views/Practises/Practices";
import Conferences from "./components/views/Conferences/Conferences";
import ConferenceDetails from "./components/views/ConferenceDetails/ConferenceDetails";
import { LearningPage } from "./components/views/Learning";
import Dashboard from "./components/views/dashboard/Dashboard";
import Offers from "./components/views/Offers/Offers";
import CareerTracks from "./components/views/CareerTracks/CareerTracks";
import CareerTrackDetails from "./components/views/CareerTrackDetails/CareerTrackDetails";
import CareerPathRecommender from "./components/views/CareerPathRecommender/CareerPathRecommender";
import CourseContent from "./components/views/CourseContent/CourseContent";
import Certifications from "./components/views/Certifications/Certifications";
import CourseCalendar from "./components/views/CourseCalendar/CourseCalendar";

function App() {
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.fontFamily = "'Roboto', sans-serif";

    return () => {
      document.body.style.background = "";
    };
  }, []);

  initiateSocketConnection();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<LandingPage />} />
          <Route path="/posts/:id" element={<PostView />} />
          <Route
            path="/posts/create"
            element={
              <PrivateRoute>
                <CreatePostView />
              </PrivateRoute>
            }
          />
          <Route
            path="/messenger"
            element={
              <PrivateRoute>
                <MessengerView />
              </PrivateRoute>
            }
          />
          <Route path="/search" element={<SearchView />} />
          <Route path="/learning-dashboard" element={<LearningDashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseContent />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/users/:id" element={<ProfileView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/signup" element={<SignupView />} />
          <Route path="/learning" element={<LearningPage />} />
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/conferences/:id" element={<ConferenceDetails />} />
          <Route path="/offers" element={<Offers />} />
          <Route
            path="/conferences/:id/stream"
            element={<ConferenceDetails />}
          />
          {/* <Route path="/map" element={<Map />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="career-path-recommendation"
            element={<CareerPathRecommender />}
          />
          <Route path="career-tracks" element={<CareerTracks />} />
          <Route path="career-tracks/:id" element={<CareerTrackDetails />} />
          <Route path="Certification" element={<Certifications />} />
          <Route path="my-calendar" element={<CourseCalendar />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
