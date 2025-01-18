import { Stack } from "@mui/material";
import { LearningTrackCard } from "../learning-page/learningTrackCard";
import ProfileCard from "../learning-page/profile-card";

const LearningPage = () => {
  return (
    <Stack>
      <LearningTrackCard />
      <ProfileCard />
    </Stack>
  );
};

export { LearningPage };
