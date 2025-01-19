import React, { useState } from "react";
import {
  Box,
  Typography,
  LinearProgress,
  Stepper,
  Step,
  StepLabel,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Assignment } from "@mui/icons-material";
import { LessonContent, Quiz, NavigationControls } from "./components";
import { courseData } from "./data";
import LearningLayout from "../../../common/LearningLayout";

// Sample course data structure

const CourseContent = () => {
  const [currentModule, setCurrentModule] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [userProgress, setUserProgress] = useState({});
  const [showCongratulations, setShowCongratulations] = useState(false);

  const currentModuleData = courseData.modules[currentModule];
  const currentLessonData = currentModuleData.lessons[currentLesson];
  const currentQuestionData = currentLessonData.questions[currentQuestion];

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    const isCorrect = selectedAnswer === currentQuestionData.correctAnswer;

    // Update progress
    setUserProgress((prev) => ({
      ...prev,
      [`${currentLessonData.id}-${currentQuestionData.id}`]: isCorrect,
    }));

    if (currentQuestion < currentLessonData.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Check if all questions are answered correctly
      const allCorrect = currentLessonData.questions.every(
        (_, index) =>
          userProgress[
            `${currentLessonData.id}-${currentLessonData.questions[index].id}`
          ]
      );

      if (allCorrect) {
        setShowCongratulations(true);
      }
      setShowQuiz(false);
      setCurrentQuestion(0);
    }
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const handleCheckAnswer = () => {
    setShowResult(true);
  };

  const calculateProgress = () => {
    const totalQuestions = courseData.modules.reduce(
      (sum, module) =>
        sum +
        module.lessons.reduce(
          (lessonSum, lesson) => lessonSum + lesson.questions.length,
          0
        ),
      0
    );

    const answeredCorrectly =
      Object.values(userProgress).filter(Boolean).length;
    return (answeredCorrectly / totalQuestions) * 100;
  };

  return (
    <LearningLayout>
      <Box sx={{ maxWidth: 1200, mx: "auto", p: 3 }}>
        {/* Course Header */}
        <Typography variant="h4" gutterBottom>
          {courseData.title}
        </Typography>

        <Box sx={{ mb: 4 }}>
          <LinearProgress
            variant="determinate"
            value={calculateProgress()}
            sx={{ height: 10, borderRadius: 5 }}
          />
          <Typography variant="body2" color="text.secondary" align="right">
            Progress: {Math.round(calculateProgress())}%
          </Typography>
        </Box>

        {/* Module Navigation */}
        <Stepper
          activeStep={currentModule}
          orientation="horizontal"
          sx={{ mb: 4 }}
        >
          {courseData.modules.map((module, index) => (
            <Step key={module.id}>
              <StepLabel>{module.title}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {/* Lesson Content or Quiz */}
        {!showQuiz ? (
          <LessonContent
            currentLessonData={currentLessonData}
            setShowQuiz={setShowQuiz}
          />
        ) : (
          <Quiz
            currentQuestion={currentQuestion}
            currentLessonData={currentLessonData}
            currentQuestionData={currentQuestionData}
            selectedAnswer={selectedAnswer}
            showResult={showResult}
            handleAnswerSelect={handleAnswerSelect}
            handleCheckAnswer={handleCheckAnswer}
            handleNextQuestion={handleNextQuestion}
            setShowQuiz={setShowQuiz}
          />
        )}

        {/* Navigation Controls */}
        <NavigationControls
          currentModule={currentModule}
          currentLesson={currentLesson}
          courseData={courseData}
          setCurrentModule={setCurrentModule}
          setCurrentLesson={setCurrentLesson}
          setShowQuiz={setShowQuiz}
        />

        {/* Congratulations Dialog */}
        <Dialog
          open={showCongratulations}
          onClose={() => setShowCongratulations(false)}
        >
          <DialogTitle>Congratulations! 🎉</DialogTitle>
          <DialogContent>
            <Typography>
              You've successfully completed this lesson's quiz! Keep up the
              great work!
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setShowCongratulations(false)}>
              Continue Learning
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </LearningLayout>
  );
};

export default CourseContent;
