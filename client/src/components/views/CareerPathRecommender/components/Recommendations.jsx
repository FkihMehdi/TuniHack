import React from "react";
import {
  Box,
  CircularProgress,
  Stack,
  Typography,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { careerPaths } from "../data";

const Recommendations = ({ isCalculating, recommendations }) => (
  <Box sx={{ mt: 4 }}>
    {isCalculating ? (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 200,
        }}
      >
        <CircularProgress />
      </Box>
    ) : (
      <Stack spacing={3}>
        <Typography variant="h5" gutterBottom>
          Recommended Career Paths
        </Typography>
        {recommendations.map((pathId) => {
          const path = careerPaths[pathId];
          return (
            <Card key={pathId}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  {path.icon}
                  <Typography variant="h6" sx={{ ml: 2 }}>
                    {path.title}
                  </Typography>
                </Box>
                <Typography color="text.secondary" sx={{ mb: 2 }}>
                  {path.description}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Key Skills:
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {path.skills.map((skill) => (
                      <Chip key={skill} label={skill} size="small" />
                    ))}
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Time to Complete: {path.timeToComplete}
                  </Typography>
                  <Chip
                    label={path.difficulty}
                    color={
                      path.difficulty === "Advanced"
                        ? "error"
                        : path.difficulty === "Intermediate"
                        ? "warning"
                        : "success"
                    }
                    size="small"
                  />
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    )}
  </Box>
);

export default Recommendations;
