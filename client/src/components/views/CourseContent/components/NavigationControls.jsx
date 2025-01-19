import React from "react";
import { Box, Button } from "@mui/material";

const NavigationControls = ({
  currentModule,
  currentLesson,
  courseData,
  setCurrentModule,
  setCurrentLesson,
  setShowQuiz,
}) => (
  <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
    <Button
      disabled={currentLesson === 0 && currentModule === 0}
      onClick={() => {
        if (currentLesson > 0) {
          setCurrentLesson((prev) => prev - 1);
        } else if (currentModule > 0) {
          setCurrentModule((prev) => prev - 1);
          setCurrentLesson(
            courseData.modules[currentModule - 1].lessons.length - 1
          );
        }
        setShowQuiz(false);
      }}
    >
      Previous Lesson
    </Button>
    <Button
      disabled={
        currentModule === courseData.modules.length - 1 &&
        currentLesson === currentModuleData.lessons.length - 1
      }
      onClick={() => {
        if (currentLesson < currentModuleData.lessons.length - 1) {
          setCurrentLesson((prev) => prev + 1);
        } else if (currentModule < courseData.modules.length - 1) {
          setCurrentModule((prev) => prev + 1);
          setCurrentLesson(0);
        }
        setShowQuiz(false);
      }}
    >
      Next Lesson
    </Button>
  </Box>
);

export default NavigationControls;
