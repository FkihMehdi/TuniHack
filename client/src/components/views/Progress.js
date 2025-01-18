import { Box, Container, Stack } from "@mui/material";
import { LearningTrackCard } from "../learning-page/learningTrackCard";
import ProfileCard from "../learning-page/profile-card";
import { LearningLayout } from "../../common";

const Progress = () => {
  return (
    <LearningLayout>
      <Container sx={{ margin: "0 auto", p: 2 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          sx={{ margin: "0 auto", p: 2 }}
        >
          <LearningTrackCard />
          <ProfileCard />
        </Stack>
      </Container>
    </LearningLayout>
  );
};

export { Progress };
