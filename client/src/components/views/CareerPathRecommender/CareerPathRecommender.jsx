import React, { useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
  Card,
  CardContent,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  CircularProgress,
  Stack,
  Chip,
} from "@mui/material";
import LearningLayout from "../../../common/LearningLayout";
import { careerPaths, questions } from "./data";

const CareerPathRecommender = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [recommendations, setRecommendations] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleAnswer = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const calculateRecommendations = () => {
    setIsCalculating(true);

    setTimeout(() => {
      const recommendations = [];

      if (
        answers.programming_experience === "none" ||
        answers.programming_experience === "beginner"
      ) {
        recommendations.push("dataAnalyst");
      }

      if (
        answers.interest_area === "ml" ||
        answers.work_preference === "research"
      ) {
        if (answers.programming_experience === "advanced") {
          recommendations.push("mlEngineer");
        } else {
          recommendations.push("dataScientist");
        }
      }

      if (
        answers.interest_area === "engineering" ||
        answers.work_preference === "infrastructure"
      ) {
        recommendations.push("dataEngineer");
      }

      if (recommendations.length === 0) {
        recommendations.push("dataAnalyst");
      }

      setRecommendations(recommendations);
      setIsCalculating(false);
    }, 1500);
  };

  const handleNext = () => {
    if (activeStep === questions.length - 1) {
      calculateRecommendations();
    }
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setAnswers({});
    setRecommendations(null);
  };

  const renderQuestion = (question) => (
    <Card sx={{ mt: 4, mb: 2 }}>
      <CardContent>
        <FormControl component="fieldset">
          <FormLabel component="legend" sx={{ mb: 2 }}>
            <Typography variant="h6">{question.question}</Typography>
          </FormLabel>
          <RadioGroup
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswer(question.id, e.target.value)}
          >
            <Stack spacing={1}>
              {question.options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={<Radio />}
                  label={option.label}
                  sx={{
                    p: 1,
                    border: 1,
                    borderColor: "divider",
                    borderRadius: 1,
                    "&:hover": {
                      bgcolor: "action.hover",
                    },
                  }}
                />
              ))}
            </Stack>
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  );

  const renderRecommendations = () => (
    <Box sx={{ mt: 4 }}>
      {isCalculating ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 200,
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Stack spacing={3}>
          <Typography variant="h5" gutterBottom>
            Recommended Career Paths
          </Typography>
          {recommendations.map((pathId) => {
            const path = careerPaths[pathId];
            return (
              <Card key={pathId}>
                <CardContent>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    {path.icon}
                    <Typography variant="h6" sx={{ ml: 2 }}>
                      {path.title}
                    </Typography>
                  </Box>
                  <Typography color="text.secondary" sx={{ mb: 2 }}>
                    {path.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Key Skills:
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                      {path.skills.map((skill) => (
                        <Chip key={skill} label={skill} size="small" />
                      ))}
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      Time to Complete: {path.timeToComplete}
                    </Typography>
                    <Chip
                      label={path.difficulty}
                      color={
                        path.difficulty === "Advanced"
                          ? "error"
                          : path.difficulty === "Intermediate"
                          ? "warning"
                          : "success"
                      }
                      size="small"
                    />
                  </Box>
                </CardContent>
              </Card>
            );
          })}
        </Stack>
      )}
    </Box>
  );

  return (
    <LearningLayout>
      <Box sx={{ maxWidth: 800, mx: "auto", p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Find Your Ideal Career Path
        </Typography>
        <Typography color="text.secondary" paragraph>
          Answer a few questions to get personalized career path
          recommendations.
        </Typography>

        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {questions.map((question, index) => (
            <Step key={index}>
              <StepLabel>Question {index + 1}</StepLabel>
            </Step>
          ))}
          <Step>
            <StepLabel>Results</StepLabel>
          </Step>
        </Stepper>

        {activeStep === questions.length
          ? renderRecommendations()
          : renderQuestion(questions[activeStep])}

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          <Box>
            <Button onClick={handleReset} sx={{ mr: 1 }}>
              Reset
            </Button>
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={!answers[questions[activeStep]?.id]}
            >
              {activeStep === questions.length - 1
                ? "Get Recommendations"
                : "Next"}
            </Button>
          </Box>
        </Box>
      </Box>
    </LearningLayout>
  );
};

export default CareerPathRecommender;
