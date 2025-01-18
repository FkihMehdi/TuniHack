import { Stack } from "@mui/material";
import { LearningTrackCard } from "../learning-page/learningTrackCard";
import ProfileCard from "../learning-page/profile-card";
import { LearningLayout } from "../../common";

const LearningPage = () => {
  return (
    <LearningLayout>
      <Stack>
        <LearningTrackCard />
        <ProfileCard />
      </Stack>
    </LearningLayout>
  );
};

export { LearningPage };
