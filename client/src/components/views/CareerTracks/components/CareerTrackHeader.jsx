import React from "react";
import { Box, Typography, Chip } from "@mui/material";

const CareerTrackHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: 2,
      }}
    >
      <Box>
        <Typography variant="h4" component="h1" sx={{ mb: 1 }}>
          Career tracks
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Our career tracks are hand-picked by industry experts. You will learn
          all you need to start a new career in the data science field.
        </Typography>
      </Box>
      <Chip
        label="Zero to job ready"
        color="success"
        variant="outlined"
        sx={{ backgroundColor: "rgba(76, 175, 80, 0.1)" }}
      />
    </Box>
  );
};

export default CareerTrackHeader;
