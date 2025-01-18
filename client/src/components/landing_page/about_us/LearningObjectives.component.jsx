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
          Un apprentissage axé sur vos objectifs
        </Typography>

        {/* Feature cards */}
        {[
          {
            title: "Formation pratique",
            description:
              "Perfectionnez vos compétences de manière efficace grâce à des exercices de codage, des exercices pratiques, des quiz et des espaces de travail alimentés par l'IA.",
            alt: "Practice icon",
          },
          {
            title: "Préparation aux certifications",
            description:
              "Préparez-vous à obtenir des certifications reconnues par le secteur en relevant des défis concrets et décrochez des badges au passage.",
            alt: "Certification icon",
            buttonLabel: "Explore courses",
          },
          {
            title: "Informations et analyses",
            description:
              "Atteignez rapidement vos objectifs grâce à des informations avancées et à une équipe dédiée à la réussite des clients.",
            alt: "Analytics icon",
            chip: true,
            buttonLabel: "En savoir plus",
          },
          {
            title: "Contenu personnalisable",
            description:
              "Créez des parcours d'apprentissage personnalisés en fonction des objectifs de l'équipe et de l'organisation.",
            alt: "Custom content icon",
            chip: true,
            buttonLabel: "En savoir plus",
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
                      label="Abonnement Enterprise"
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
