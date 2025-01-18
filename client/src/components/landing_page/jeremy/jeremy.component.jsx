import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Rating,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

// Theme constants
const theme = {
  colors: {
    primary: "#000820", // Dark background
    secondary: "#05192d", // Lighter dark blue
    accent: "#7933ff", // Purple accent
    text: {
      primary: "#ffffff",
      secondary: "#b0b8c1",
    },
  },
};

// Styled components
const CategoryButton = styled(Box)(({ active }) => ({
  padding: "12px 20px",
  cursor: "pointer",
  borderBottom: active ? `2px solid ${theme.colors.accent}` : "none",
  color: active ? theme.colors.accent : theme.colors.text.secondary,
  fontWeight: active ? 600 : 400,
  whiteSpace: "nowrap",
  "&:hover": {
    color: theme.colors.accent,
  },
}));

const CarouselContainer = styled(Box)({
  display: "flex",
  overflowX: "hidden",
  position: "relative",
  gap: "20px",
  padding: "20px 0",
});

const StyledCard = styled(Card)({
  width: 280,
  flexShrink: 0,
  backgroundColor: theme.colors.secondary,
  boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
  "&:hover": {
    boxShadow: "0 6px 12px rgba(0,0,0,0.3)",
    transform: "translateY(-2px)",
    transition: "all 0.3s ease",
  },
  color: theme.colors.text.primary,
});

const StyledIconButton = styled(IconButton)({
  backgroundColor: theme.colors.secondary,
  color: theme.colors.text.primary,
  "&:hover": {
    backgroundColor: theme.colors.accent,
  },
  "&.Mui-disabled": {
    backgroundColor: "rgba(5, 25, 45, 0.5)",
    color: "rgba(255, 255, 255, 0.3)",
  },
});

// Component Data
const categories = [
  "Entrepreneuriat",
  "Gestion d'entreprise",
  "Stratégie de communication",
  "Marketing numérique",
  "Développement personnel",
  "Leadership",
];

const topics = [
  { name: "Pitching", participants: "1,5 M" },
  { name: "Branding", participants: "2 M" },
  { name: "Communication interpersonnelle", participants: "5 M" },
  { name: "Gestion de projet", participants: "3,8 M" },
  { name: "Publicité numérique", participants: "4,5 M" },
];

const courses = [
  {
    id: 1,
    title: "Construire et présenter un pitch gagnant",
    author: "Sophie Dupont | Experte en communication",
    rating: 4.8,
    reviews: 152,
    price: 69.99,
    image: "/api/placeholder/280/160",
    badge: "Meilleure vente",
  },
  {
    id: 2,
    title: "Stratégies avancées de marketing numérique",
    author: "Julien Morel | Consultant en marketing",
    rating: 4.6,
    reviews: 287,
    price: 59.99,
    image: "/api/placeholder/280/160",
    badge: "Les mieux notés",
  },
  {
    id: 3,
    title: "Maîtrisez l'art du leadership inspirant",
    author: "Laura Fontaine | Coach en leadership",
    rating: 4.7,
    reviews: 201,
    price: 64.99,
    image: "/api/placeholder/280/160",
  },
];

// CourseCard Component
const CourseCard = ({ course }) => (
  <StyledCard>
    <CardMedia
      component="img"
      height="160"
      image={course.image}
      alt={course.title}
    />
    <CardContent>
      <Typography
        variant="h6"
        gutterBottom
        noWrap
        sx={{ color: theme.colors.text.primary }}
      >
        {course.title}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: theme.colors.text.secondary }}
        gutterBottom
      >
        {course.author}
      </Typography>
      <Box display="flex" alignItems="center" gap={0.5} mb={1}>
        <Rating
          value={course.rating}
          precision={0.1}
          readOnly
          size="small"
          sx={{
            color: theme.colors.accent,
            "& .MuiRating-iconEmpty": {
              color: theme.colors.text.secondary,
            },
          }}
        />
        <Typography variant="body2" sx={{ color: theme.colors.text.secondary }}>
          ({course.reviews})
        </Typography>
      </Box>
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ color: theme.colors.text.primary }}
      >
        {course.price} $US
      </Typography>
      {course.badge && (
        <Chip
          label={course.badge}
          size="small"
          sx={{
            backgroundColor:
              course.badge === "Meilleure vente"
                ? "rgba(121, 51, 255, 0.15)"
                : "rgba(121, 51, 255, 0.1)",
            color: theme.colors.accent,
            mt: 1,
          }}
        />
      )}
    </CardContent>
  </StyledCard>
);

// Main Component
const CoursesSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const newPosition =
      direction === "right" ? scrollPosition + 300 : scrollPosition - 300;
    setScrollPosition(Math.max(0, newPosition));
  };

  return (
    <Box
      sx={{
        py: 4,
        px: { xs: 2, md: 4 },
        backgroundColor: theme.colors.primary,
        minHeight: "100vh",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        fontWeight="bold"
        sx={{ color: theme.colors.text.primary }}
      >
        Développez vos compétences en entrepreneuriat et communication
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ color: theme.colors.text.secondary }}
      >
        Explorez des cours pour booster vos compétences professionnelles.
      </Typography>

      {/* Categories */}
      <Box sx={{ display: "flex", overflowX: "auto", mt: 4, mb: 2 }}>
        {categories.map((category, index) => (
          <CategoryButton
            key={category}
            active={index === activeCategory}
            onClick={() => setActiveCategory(index)}
          >
            {category}
          </CategoryButton>
        ))}
      </Box>

      {/* Topics carousel */}
      <Box sx={{ display: "flex", gap: 2, my: 3, overflowX: "auto" }}>
        {topics.map((topic) => (
          <Chip
            key={topic.name}
            label={`${topic.name} +${topic.participants} de participants`}
            variant={topic.name === "Pitching" ? "filled" : "outlined"}
            sx={{
              bgcolor:
                topic.name === "Pitching" ? theme.colors.accent : "transparent",
              color: theme.colors.text.primary,
              borderColor: theme.colors.accent,
              borderRadius: "20px",
              "&:hover": {
                backgroundColor: `${theme.colors.accent}40`,
              },
            }}
          />
        ))}
      </Box>
      <Box sx={{ position: "relative" }}>
        <StyledIconButton
          onClick={() => handleScroll("left")}
          sx={{ position: "absolute", left: -20, top: "50%", zIndex: 2 }}
          disabled={scrollPosition === 0}
        >
          <ChevronLeftIcon />
        </StyledIconButton>

        <CarouselContainer
          sx={{
            transform: `translateX(-${scrollPosition}px)`,
            transition: "transform 0.3s",
          }}
        >
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </CarouselContainer>

        <StyledIconButton
          onClick={() => handleScroll("right")}
          sx={{ position: "absolute", right: -20, top: "50%", zIndex: 2 }}
        >
          <ChevronRightIcon />
        </StyledIconButton>
      </Box>
    </Box>
  );
};

export default CoursesSection;
