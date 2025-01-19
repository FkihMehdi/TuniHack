import { Box, Stack } from "@mui/material";
import { LearningTrackCard } from "../learning-page/learningTrackCard";
import ProfileCard from "../learning-page/profile-card";
import { LearningLayout } from "../../common";

const LearningPage = () => {
  return (
    <LearningLayout>
      <Box sx={{ maxWidth: 1200, margin: "0 auto", p: 2 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <LearningTrackCard />
          <ProfileCard />
        </Stack>
      </Box>
    </LearningLayout>
  );
};

export { LearningPage };
