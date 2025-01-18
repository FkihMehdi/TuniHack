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

const TopNavigation = () => {
  const [selectedChip, setSelectedChip] = useState(null);

  const handleChipClick = (chip) => {
    setSelectedChip(chip);
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
        >
          LearningHub
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
          {["Learn", "Certification", "Sandbox", "Jobs"].map((label) => (
            <Chip
              key={label}
              label={label}
              clickable
              onClick={() => handleChipClick(label)}
              sx={{
                backgroundColor: selectedChip === label ? "#000000" : "#f7f7fc",
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
  );
};

export default TopNavigation;
