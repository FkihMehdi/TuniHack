import React from "react";
import {
  Box,
  Typography,
  Chip,
  Card,
  CardContent,
  Button,
  Tabs,
  Tab,
  Container,
  Stack,
} from "@mui/material";
import { careerTypes, tracks } from "./data";
import LearningLayout from "../../../common/LearningLayout";
import { useNavigate } from "react-router-dom";

const CareerTracks = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = React.useState(0);

  return (
    <LearningLayout>
      <Container maxWidth="xl">
        <Box sx={{ mb: 4, mt: 4 }}>
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
                Our career tracks are hand-picked by industry experts. You will
                learn all you need to start a new career in the data science
                field.
              </Typography>
            </Box>
            <Chip
              label="Zero to job ready"
              color="success"
              variant="outlined"
              sx={{ backgroundColor: "rgba(76, 175, 80, 0.1)" }}
            />
          </Box>

          <Tabs
            value={selectedTab}
            onChange={(e, newValue) => setSelectedTab(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ mb: 3 }}
          >
            {careerTypes.map((type, index) => (
              <Tab
                key={type}
                label={type}
                sx={{
                  textTransform: "none",
                  minWidth: "auto",
                  mr: 1,
                  "&.Mui-selected": {
                    backgroundColor: "primary.main",
                    color: "white",
                    borderRadius: 1,
                  },
                }}
              />
            ))}
          </Tabs>

          <Typography variant="h6" sx={{ mb: 3 }}>
            23 Career tracks
          </Typography>

          <Stack spacing={3}>
            {tracks.map((track, index) => (
              <Card key={index} variant="outlined">
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
                      <Typography>
                        {track.courses} Courses and Projects
                      </Typography>
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
            ))}
          </Stack>
        </Box>
      </Container>
    </LearningLayout>
  );
};

export default CareerTracks;
