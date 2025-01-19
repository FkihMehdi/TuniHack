import React, { useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
} from "@mui/material";
import LearningLayout from "../../../common/LearningLayout";
import { questions, careerPaths } from "./data";
import { QuestionCard, Recommendations } from "./components";

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
        answers.business_experience === "none" ||
        answers.business_experience === "beginner"
      ) {
        recommendations.push("marketingSpecialist");
      }

      if (
        answers.interest_area === "strategy" ||
        answers.work_preference === "leadership"
      ) {
        if (answers.business_experience === "advanced") {
          recommendations.push("businessConsultant");
        } else {
          recommendations.push("entrepreneur");
        }
      }

      if (
        answers.interest_area === "communication" ||
        answers.work_preference === "networking"
      ) {
        recommendations.push("publicRelations");
      }

      if (recommendations.length === 0) {
        recommendations.push("marketingSpecialist");
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

        {activeStep === questions.length ? (
          <Recommendations
            isCalculating={isCalculating}
            recommendations={recommendations}
          />
        ) : (
          <QuestionCard
            question={questions[activeStep]}
            answers={answers}
            handleAnswer={handleAnswer}
          />
        )}

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
