import React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { MainContent } from "./components/index";
import { Sidebar, TopNavigation } from "../../../common";

const theme = createTheme({
  palette: {
    background: {
      default: "#f7f7fc",
    },
    primary: {
      main: "#645AFF",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#000000",
          boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#000820",
          borderRight: "none",
          boxShadow: "1px 0px 3px rgba(0, 0, 0, 0.1)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
          borderRadius: "8px",
        },
      },
    },
  },
});

const LearningDashboard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#f7f7fc",
          minHeight: "100vh",
        }}
      >
        <TopNavigation />
        <Sidebar />
        <MainContent />
      </Box>
    </ThemeProvider>
  );
};

export default LearningDashboard;
