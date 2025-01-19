import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
} from "@mui/material";

const CareerTrackCard = ({ track, navigate }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          {track.category}
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          {track.title}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          {track.description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            mb: 2,
          }}
        >
          <Chip
            label="Fundamentals"
            size="small"
            sx={{
              backgroundColor: "#ff69b4",
              color: "white",
            }}
          />
          <Chip
            label="Certification available"
            size="small"
            sx={{
              backgroundColor: "#ffd700",
              color: "black",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {track.icon}
            <Typography>{track.courses} Courses and Projects</Typography>
          </Box>
          <Button
            variant="outlined"
            onClick={() => {
              navigate(`/career-tracks/${track.id}`);
            }}
          >
            View Details
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CareerTrackCard;
