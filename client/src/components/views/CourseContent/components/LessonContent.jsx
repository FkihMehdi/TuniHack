import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { Assignment } from "@mui/icons-material";

const LessonContent = ({ currentLessonData, setShowQuiz }) => (
  <Card>
    <CardContent>
      <Typography variant="h5" gutterBottom>
        {currentLessonData.title}
      </Typography>
      <Typography variant="body1" sx={{ whiteSpace: "pre-line", mb: 3 }}>
        {currentLessonData.content}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowQuiz(true)}
        startIcon={<Assignment />}
      >
        Take Lesson Quiz
      </Button>
    </CardContent>
  </Card>
);

export default LessonContent;
