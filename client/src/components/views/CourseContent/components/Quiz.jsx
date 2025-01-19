import React from "react";
import {
  Card,
  CardContent,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Alert,
  Box,
  Button,
} from "@mui/material";

const Quiz = ({
  currentQuestion,
  currentLessonData,
  currentQuestionData,
  selectedAnswer,
  showResult,
  handleAnswerSelect,
  handleCheckAnswer,
  handleNextQuestion,
  setShowQuiz,
}) => (
  <Card>
    <CardContent>
      <Typography variant="h6" gutterBottom>
        Question {currentQuestion + 1} of {currentLessonData.questions.length}
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        {currentQuestionData.question}
      </Typography>

      <FormControl component="fieldset">
        <RadioGroup
          value={selectedAnswer}
          onChange={(e) => handleAnswerSelect(parseInt(e.target.value))}
        >
          {currentQuestionData.options.map((option, index) => (
            <FormControlLabel
              key={index}
              value={index}
              control={<Radio />}
              label={option}
              disabled={showResult}
            />
          ))}
        </RadioGroup>
      </FormControl>

      {showResult && (
        <Alert
          severity={
            selectedAnswer === currentQuestionData.correctAnswer
              ? "success"
              : "error"
          }
          sx={{ mt: 2 }}
        >
          {currentQuestionData.explanation}
        </Alert>
      )}

      <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
        <Button variant="outlined" onClick={() => setShowQuiz(false)}>
          Back to Lesson
        </Button>
        {!showResult ? (
          <Button
            variant="contained"
            onClick={handleCheckAnswer}
            disabled={selectedAnswer === null}
          >
            Check Answer
          </Button>
        ) : (
          <Button variant="contained" onClick={handleNextQuestion}>
            {currentQuestion < currentLessonData.questions.length - 1
              ? "Next Question"
              : "Finish Quiz"}
          </Button>
        )}
      </Box>
    </CardContent>
  </Card>
);

export default Quiz;
