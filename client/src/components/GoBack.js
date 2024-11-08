import { Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const GoBack = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
      <Typography
        component={Link}
        to="/"
        sx={{
          color: "#FFB700", // Main color from palette
          fontWeight: "bold",
          textDecoration: "none",
          fontSize: "1rem",
          padding: "8px 16px",
          borderRadius: "8px",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#0D1B2A", // Subtle background on hover
            color: "#FFFFFF", // Light text on hover
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        &lt;&lt; Go back to posts
      </Typography>
    </Box>
  );
};

export default GoBack;
