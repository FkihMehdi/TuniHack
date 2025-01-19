import React from "react";
import { Box, Typography, Button, LinearProgress } from "@mui/material";

const TrackHeader = ({ trackStats, bonusItems }) => (
  <Box
    sx={{
      bgcolor: "#0A1929",
      p: 4,
      borderRadius: 2,
      color: "white",
      mb: 3,
    }}
  >
    <Typography variant="caption" sx={{ color: "grey.400" }}>
      CAREER TRACK
    </Typography>
    <Typography variant="h4" sx={{ my: 2 }}>
      Associate Data Scientist in Python
    </Typography>
    <Button variant="contained" color="success" sx={{ mb: 4 }}>
      Start Track
    </Button>

    <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", mb: 4 }}>
      {trackStats.map((stat, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {stat.icon}
          <Typography variant="body2">{stat.text}</Typography>
        </Box>
      ))}
    </Box>

    <Box sx={{ mb: 2 }}>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        TRACK COMPLETION
      </Typography>
      <LinearProgress
        variant="determinate"
        value={0}
        sx={{
          height: 8,
          borderRadius: 4,
          bgcolor: "rgba(255,255,255,0.1)",
        }}
      />
    </Box>

    <Box>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>
        BONUS MATERIAL - 0 OF 14
      </Typography>
      <Box sx={{ display: "flex", gap: 1 }}>
        {bonusItems.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              bgcolor: "rgba(255,255,255,0.1)",
            }}
          />
        ))}
      </Box>
    </Box>
  </Box>
);

export default TrackHeader;
