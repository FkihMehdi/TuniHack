import {
  Card,
  CardContent,
  Typography,
  Button,
  LinearProgress,
  Grid,
  Paper,
  Box,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PsychologyIcon from "@mui/icons-material/Psychology";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import StorageIcon from "@mui/icons-material/Storage";

const LearningTrackCard = () => {
  return (
    <Box sx={{ maxWidth: 1200, margin: "0 auto", p: 2 }}>
      <Card>
        <CardContent>
          {/* Header Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 3,
            }}
          >
            <Box>
              <Typography color="text.secondary" sx={{ fontSize: "0.875rem" }}>
                You're enrolled in the{" "}
                <Typography
                  component="span"
                  sx={{ textDecoration: "underline" }}
                >
                  Entrepreneurial Communication
                </Typography>{" "}
                track.
              </Typography>
              <Typography variant="h5" sx={{ mt: 1, fontWeight: "bold" }}>
                Mastering Business Communication
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#00e676",
                color: "black",
                "&:hover": {
                  bgcolor: "#00c853",
                },
              }}
            >
              Keep Making Progress
            </Button>
          </Box>

          {/* Progress Section */}
          <Box sx={{ mb: 3 }}>
            <LinearProgress
              variant="determinate"
              value={20}
              sx={{
                height: 8,
                borderRadius: 4,
                bgcolor: "#e0e0e0",
                "& .MuiLinearProgress-bar": {
                  bgcolor: "#9e9e9e",
                },
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <AccessTimeIcon
                sx={{ fontSize: "1rem", mr: 0.5, color: "text.secondary" }}
              />
              <Typography variant="body2" color="text.secondary">
                4 hours to go
              </Typography>
            </Box>
          </Box>

          {/* Three Sections Grid */}
          <Grid container spacing={2}>
            {[
              {
                icon: <PsychologyIcon />,
                title: "LEARN",
                content: "Effective Communication Strategies",
              },
              {
                icon: <FitnessCenterIcon />,
                title: "PRACTICE",
                content: "Public Speaking Exercises",
              },
              {
                icon: <StorageIcon />,
                title: "APPLY",
                content: "Pitching Your Business Idea",
              },
            ].map((section, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    bgcolor: "#f5f5f5",
                    height: "100%",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    {section.icon}
                    <Typography
                      variant="subtitle1"
                      sx={{
                        ml: 1,
                        fontWeight: "bold",
                      }}
                    >
                      {section.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1">{section.content}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export { LearningTrackCard };
