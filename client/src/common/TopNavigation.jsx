import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Chip,
  IconButton,
  Button,
} from "@mui/material";
import {
  Search as SearchIcon,
  Language as LanguageIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const TopNavigation = () => {
  const [selectedChip, setSelectedChip] = useState("");
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", path: "home" },
    { label: "Learn", path: "learning" },
    { label: "Practice", path: "practice" },
    { label: "Certification", path: "my-certifications" },
    { label: "My Calendar", path: "my-calendar" },
  ];

  const offersNavItem = { label: "Offers", path: "offers" };

  const handleChipClick = (chip) => {
    setSelectedChip((prevSelectedChip) => {
      if (prevSelectedChip !== chip.label) {
        navigate("/" + chip.path);
      }
      return chip.label;
    });
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 0, mr: 2, color: "#000000" }}
          onClick={() => navigate("/home")}
        >
          Affilify
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            backgroundColor: "#e0e0e0",
            padding: 1,
            borderRadius: 5,
          }}
        >
          {navItems.map((item) => (
            <Chip
              key={item.label}
              label={item.label}
              clickable
              onClick={() => handleChipClick(item)}
              sx={{
                backgroundColor:
                  selectedChip === item.label ? "#000000" : "#e0e0e0",
                color: selectedChip === item.label ? "#ffffff" : "#000000",
                "&:hover": {
                  backgroundColor:
                    selectedChip === item.label ? "#000000" : "#eeeef9",
                },
              }}
            />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            ml: 2,
          }}
        >
          <Chip
            sx={{
              backgroundColor:
                selectedChip === offersNavItem.label ? "#000000" : "#e0e0e0",
              color:
                selectedChip === offersNavItem.label ? "#ffffff" : "#000000",
              "&:hover": {
                backgroundColor:
                  selectedChip === offersNavItem.label ? "#000000" : "#eeeef9",
              },
              py: 3,
              width: 100,
            }}
            label={offersNavItem.label}
            clickable
            onClick={() => handleChipClick(offersNavItem)}
          />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton sx={{ color: "LearningHub#000000" }}>
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
  );
};

export default TopNavigation;
