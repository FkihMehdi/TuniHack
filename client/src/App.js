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
import AccountView from "./components/views/AccountView";
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
import { Event } from "./components/views/Event";
import { GenerateWebsite } from "./components/views/GenerateWebsite";
import { Connections } from "./components/views/Connections";
import { Mentors } from "./components/views/Mentors";
import { PromoteEvent } from "./components/views/PromoteEvent";
import { Schedule } from "./components/views/Schedule";
import CreateEvent from "./components/CreateEvent";
import { LandingPage } from "./components/landing_page/LandingPage";
import { LearningPage } from "./components/views/Learning";

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
          <Route path="/users/:id" element={<ProfileView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/signup" element={<SignupView />} />
          <Route path="/event" element={<Event />} />
          <Route path="/generate-website" element={<GenerateWebsite />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/calendar" element={<Schedule />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/promote-event" element={<PromoteEvent />} />
          <Route path="/account" element={<AccountView />} />
          <Route path="/event/create" element={<CreateEvent />} />
          <Route path="/learning" element={<LearningPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
