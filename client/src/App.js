import "@mui/material";
import "react-icons";
import "react-icons/bi";
import "react-icons/md";
import "react-icons/bs";
import "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./theme";
import { useEffect } from "react";
import PostView from "./components/views/PostView";
import CreatePostView from "./components/views/CreatePostView";
import ProfileView from "./components/views/ProfileView";
import LoginView from "./components/views/LoginView";
import SignupView from "./components/views/SignupView";
import ExploreView from "./components/views/ExploreView";
import PrivateRoute from "./components/PrivateRoute";
import SearchView from "./components/views/SearchView";
import MessengerView from "./components/views/MessengerView";
import { initiateSocketConnection } from "./helpers/socketHelper";
import { LandingPage } from "./components/landing_page/LandingPage";
import LearningDashboard from "./components/views/LearningDashboard/LearningDashboard";
import Courses from "./components/views/Courses/Courses";
import PracticePage from "./components/views/Practises/Practices";
import Offers from "./components/views/Offers/Offers";

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
          <Route path="/" element={<ExploreView />} />
          <Route path="/home" element={<LandingPage />} />
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
          <Route path="/offers" element={<Offers />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/users/:id" element={<ProfileView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/signup" element={<SignupView />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
