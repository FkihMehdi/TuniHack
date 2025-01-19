import React, { useState } from "react";
import Logo from "../../../assests/logo.png";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Chip,
  IconButton,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import {
  Search as SearchIcon,
  Language as LanguageIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

console.log("logo", Logo);

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

const TopNavigationHomepage = () => {
  const navigate = useNavigate();
  const [selectedChip, setSelectedChip] = useState(null);

  const handleChipClick = (chip) => {
    setSelectedChip(chip);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <img
              src={Logo}
              alt="logo"
              style={{ width: "40px", height: "40px", marginRight: "8px" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              backgroundColor: "#e0e0e0",
              padding: 1,
              borderRadius: 5,
            }}
          >
            {["Learn", "Offers", "Certification", "Sandbox"].map((label) => (
              <Chip
                key={label}
                label={label}
                clickable
                onClick={() => {
                  handleChipClick(label);
                  navigate("/" + label);
                }}
                sx={{
                  backgroundColor:
                    selectedChip === label ? "#000000" : "#f7f7fc",
                  color: selectedChip === label ? "#ffffff" : "#000000",
                  "&:hover": {
                    backgroundColor:
                      selectedChip === label ? "#000000" : "#eeeef9",
                  },
                }}
              />
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton sx={{ color: "#000000" }}>
              <SearchIcon />
            </IconButton>
            <IconButton sx={{ color: "#000000" }}>
              <LanguageIcon />
            </IconButton>
            <IconButton sx={{ color: "#000000" }}>
              <NotificationsIcon />
            </IconButton>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#645AFF",
                "&:hover": {
                  backgroundColor: "#5346FF",
                },
              }}
            >
              Upgrade
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default TopNavigationHomepage;
