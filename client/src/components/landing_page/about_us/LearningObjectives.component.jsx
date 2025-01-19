import React from "react";
import { Box, Typography, Button, Chip } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Styled components
const FeatureCard = styled(Box)(({ theme }) => ({
  padding: "20px",
  borderRadius: "12px",
  border: "1px solid #05192d",
  backgroundColor: "#000820",
  marginBottom: "16px",
  transition: "all 0.3s ease",
  cursor: "pointer",
  color: "#fff",
  "&:hover": {
    boxShadow: "0 4px 12px rgba(121, 51, 255, 0.3)",
    borderColor: "#7933ff",
    transform: "translateY(-2px)",
  },
}));

const LearnMoreButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  color: "#7933ff",
  padding: 0,
  "&:hover": {
    backgroundColor: "transparent",
    textDecoration: "underline",
  },
  "& .MuiButton-endIcon": {
    marginLeft: "4px",
  },
}));

const EnterpriseChip = styled(Chip)({
  backgroundColor: "#7933ff",
  color: "#fff",
  borderRadius: "4px",
  fontSize: "12px",
  height: "24px",
  marginLeft: "8px",
});

const LearningObjectives = () => {
  return (
    <Box
      sx={{
        p: 4,
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        color: "#fff",
      }}
    >
      {/* Left Content */}
      <Box sx={{ flex: "0 0 50%", pr: 4 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 600, color: "#7933ff" }}
        >
          Learning Focused on Your Goals
        </Typography>

        {/* Feature cards */}
        {[
          {
            title: "Practical Training",
            description:
              "Enhance your skills effectively with hands-on exercises, practical tasks, quizzes, and AI-powered workspaces.",
            alt: "Practice icon",
          },
          {
            title: "Certification Preparation",
            description:
              "Prepare for industry-recognized certifications by tackling real-world challenges and earning badges along the way.",
            alt: "Certification icon",
            buttonLabel: "Explore courses",
          },
          {
            title: "Insights and Analytics",
            description:
              "Achieve your goals quickly with advanced insights and a dedicated customer success team.",
            alt: "Analytics icon",
            chip: true,
            buttonLabel: "Learn more",
          },
          {
            title: "Customizable Content",
            description:
              "Create personalized learning paths based on team and organizational goals.",
            alt: "Custom content icon",
            chip: true,
            buttonLabel: "Learn more",
          },
        ].map((item, index) => (
          <FeatureCard key={index}>
            <Box display="flex" alignItems="flex-start" gap={2}>
              <Box
                component="img"
                src="/api/placeholder/48/48"
                alt={item.alt}
              />
              <Box>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                  {item.chip && (
                    <EnterpriseChip
                      label="Enterprise Subscription"
                      size="small"
                    />
                  )}
                </Typography>
                <Typography variant="body2" color="#d0d0d0">
                  {item.description}
                </Typography>
                {item.buttonLabel && (
                  <LearnMoreButton
                    endIcon={<ArrowForwardIcon />}
                    onClick={() => console.log(item.buttonLabel)}
                  >
                    {item.buttonLabel}
                  </LearnMoreButton>
                )}
              </Box>
            </Box>
          </FeatureCard>
        ))}
      </Box>

      {/* Right Content - Placeholder for an image */}
      <Box
        sx={{
          flex: "0 0 50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#05192d",
          borderRadius: "12px",
          minHeight: "400px",
        }}
      >
        <Typography variant="h6" sx={{ color: "#7933ff" }}>
          [Placeholder for image]
        </Typography>
      </Box>
    </Box>
  );
};

export default LearningObjectives;
