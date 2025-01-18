import React from "react";
import { Box, Typography, IconButton, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Styled components
const StyledSection = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#f5f5f5",
  minHeight: "500px",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
}));

const ContentWrapper = styled(Box)({
  position: "relative",
  zIndex: 1,
  padding: "40px",
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  maxWidth: "500px",
});

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "#f5f5f5",
  },
  zIndex: 2,
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
}));

const ImageSection = styled(Box)({
  position: "absolute",
  right: 0,
  top: 0,
  bottom: 0,
  width: "50%",
  backgroundColor: "#00bfa5", // La couleur turquoise de l'arrière-plan
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const LearningSection = () => {
  return (
    <StyledSection>
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <NavigationButton
          sx={{ left: { xs: 10, md: 20 } }}
          aria-label="previous slide"
        >
          <ChevronLeftIcon />
        </NavigationButton>

        <ContentWrapper>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Un apprentissage qui vous ressemble
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
          >
            Des compétences pour aujourd'hui (et demain). Nous vous accompagnons
            dans vos premiers pas.
          </Typography>
        </ContentWrapper>

        <ImageSection>
          <Box
            component="img"
            src="/api/placeholder/600/800"
            alt="Woman sitting in a chair"
            sx={{
              maxWidth: "100%",
              height: "auto",
              objectFit: "cover",
              display: { xs: "none", md: "block" },
            }}
          />
        </ImageSection>

        <NavigationButton
          sx={{ right: { xs: 10, md: 20 } }}
          aria-label="next slide"
        >
          <ChevronRightIcon />
        </NavigationButton>
      </Container>
    </StyledSection>
  );
};

export default LearningSection;
