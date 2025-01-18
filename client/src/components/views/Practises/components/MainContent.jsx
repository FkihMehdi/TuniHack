import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Chip,
  Button,
  Stack,
  Grid,
  ImageListItem,
  CardMedia,
} from "@mui/material";
import { ArrowForward, FilterList, Image } from "@mui/icons-material";

const MainContent = () => {
  const technologies = [
    "All",
    "Python",
    "SQL",
    "R",
    "Power BI",
    "Tableau",
    "Excel",
    "AWS",
    "Azure",
    "Docker",
    "Julia",
    "Theory",
  ];

  const practices = [
    {
      title: "Data Cleaning in R",
      type: "PRACTICE",
      technology: "R",
      icon: "📊",
    },
    {
      title: "Introduction to Python",
      type: "PRACTICE",
      technology: "Python",
      icon: "🐍",
    },
    {
      title: "Intermediate R",
      type: "PRACTICE",
      technology: "R",
      icon: "📊",
    },
    {
      title: "Introduction to Tableau",
      type: "PRACTICE",
      technology: "Tableau",
      icon: "📈",
    },
    {
      title: "Introduction to the Tidyverse",
      type: "PRACTICE",
      technology: "R",
      icon: "📊",
    },
    {
      title: "Intermediate Julia",
      type: "PRACTICE",
      technology: "Julia",
      icon: "💻",
    },
  ];

  return (
    <Container maxWidth="lg">
      {/* Header Section */}
      <Card
        sx={{
          backgroundColor: "#000820",
          color: "white",
          mb: 4,
          p: 4,
          position: "relative",
          overflow: "visible",
        }}
      >
        <Box sx={{ maxWidth: "60%" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <Typography variant="h4" component="h1">
              Practice
            </Typography>
            <Chip
              icon={<ArrowForward />}
              label="Reinforce what you're learning"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "white",
              }}
            />
          </Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: "normal", opacity: 0.9, mb: 2 }}
          >
            Keep your skills sharp with quick daily challenges on desktop or
            Mobile app. You earn XP for every practice round.
          </Typography>
          <Chip
            label="250 XP"
            sx={{
              backgroundColor: "#FFD700",
              color: "#000000",
              fontWeight: "bold",
            }}
          />
        </Box>

        {/* Learning Cycle Diagram - Placeholder */}
        <Box
          sx={{
            position: "absolute",
            right: 40,
            top: "50%",
            transform: "translateY(-50%)",
            width: 200,
            height: 200,
            opacity: 0.6,
          }}
        >
          {/* Add your learning cycle diagram here */}
        </Box>
      </Card>

      {/* Technology Filter Chips */}
      <Stack spacing={2} sx={{ mb: 4 }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              clickable
              sx={{
                backgroundColor: tech === "All" ? "#000820" : "#f7f7fc",
                color: tech === "All" ? "white" : "inherit",
                "&:hover": {
                  backgroundColor: tech === "All" ? "#001040" : "#eeeef9",
                },
              }}
            />
          ))}
        </Box>
      </Stack>

      {/* Practice Count and Filters */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h6" component="h2">
          89 Practice sessions
        </Typography>
        <Button
          variant="outlined"
          startIcon={<FilterList />}
          sx={{ color: "#000000", borderColor: "#000000" }}
        >
          Filter Practice
        </Button>
      </Box>

      {/* Practice Cards */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              "&:hover": {
                boxShadow: 3,
              },
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="overline"
                color="text.secondary"
                sx={{ mb: 1, display: "block" }}
              >
                PRACTICE
              </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Hello world
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 3,
        }}
      >
        {practices.map((practice) => (
          <Card
            key={practice.title}
            sx={{
              display: "flex",
              flexDirection: "column",
              "&:hover": {
                boxShadow: 3,
              },
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="overline"
                color="text.secondary"
                sx={{ mb: 1, display: "block" }}
              >
                {practice.type}
              </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {practice.title}
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: 2,
                pt: 0,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography sx={{ fontSize: "1.5rem" }}>
                  {practice.icon}
                </Typography>
                <Typography variant="body2">{practice.technology}</Typography>
              </Box>
              <Button
                variant="outlined"
                sx={{
                  color: "#000000",
                  borderColor: "#000000",
                  "&:hover": {
                    borderColor: "#000000",
                    backgroundColor: "rgba(0, 0, 0, 0.04)",
                  },
                }}
              >
                Start
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default MainContent;
