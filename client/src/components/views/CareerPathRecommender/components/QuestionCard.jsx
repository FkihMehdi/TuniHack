import React from "react";
import {
  Card,
  CardContent,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Typography,
  Stack,
} from "@mui/material";

const QuestionCard = ({ question, answers, handleAnswer }) => (
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

export default QuestionCard;
