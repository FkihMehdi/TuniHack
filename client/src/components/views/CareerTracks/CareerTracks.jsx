import React from "react";
import {
  Box,
  Container,
  Typography,
  Chip,
  Tabs,
  Tab,
  Stack,
} from "@mui/material";
import { careerTypes, tracks } from "./data";
import LearningLayout from "../../../common/LearningLayout";
import { useNavigate } from "react-router-dom";
import { CareerTrackCard, CareerTrackHeader } from "./components";

const CareerTracks = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = React.useState(0);

  return (
    <LearningLayout>
      <Container maxWidth="xl">
        <Box sx={{ mb: 4, mt: 4 }}>
          <CareerTrackHeader />
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
              <CareerTrackCard key={index} track={track} navigate={navigate} />
            ))}
          </Stack>
        </Box>
      </Container>
    </LearningLayout>
  );
};

export default CareerTracks;
