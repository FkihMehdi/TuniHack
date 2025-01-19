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
} from "@mui/material";
import { ArrowForward, FilterList } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const MainContent = () => {
  const navigate = useNavigate();

  const categories = [
    "All",
    "Marketing",
    "Sales",
    "Business Strategy",
    "Finance",
    "Leadership",
    "Entrepreneurship",
    "Operations",
    "Customer Relations",
    "Product Management",
    "Growth Hacking",
    "Startup Theory",
  ];

  const practices = [
    {
      title: "Developing a Business Plan",
      type: "PRACTICE",
      category: "Business Strategy",
      icon: "📋",
    },
    {
      title: "Sales Techniques for Entrepreneurs",
      type: "PRACTICE",
      category: "Sales",
      icon: "💼",
    },
    {
      title: "Effective Marketing Strategies",
      type: "PRACTICE",
      category: "Marketing",
      icon: "📢",
    },
    {
      title: "Financial Management for Startups",
      type: "PRACTICE",
      category: "Finance",
      icon: "💰",
    },
    {
      title: "Building a Customer-Centric Culture",
      type: "PRACTICE",
      category: "Customer Relations",
      icon: "🤝",
    },
    {
      title: "Startup Leadership Fundamentals",
      type: "PRACTICE",
      category: "Leadership",
      icon: "🏆",
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
              label="Reinforce your business knowledge"
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
            Keep refining your skills with quick daily challenges on desktop or
            mobile. Earn XP for every practice round.
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

        {/* Business Category Filter Chips */}
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
          {/* Add your business-related diagram here */}
        </Box>
      </Card>

      {/* Business Category Filter Chips */}
      <Stack spacing={2} sx={{ mb: 4 }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              clickable
              sx={{
                backgroundColor: category === "All" ? "#000820" : "#f7f7fc",
                color: category === "All" ? "white" : "inherit",
                "&:hover": {
                  backgroundColor: category === "All" ? "#001040" : "#eeeef9",
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
                BUSINESS SIMULATOR
              </Typography>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Virtual Business Simulator
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Launch your own business and grow it in a simulated environment!
                Test your skills, strategy, and learn the ins and outs of
                business management.
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                p: 2,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#007bff",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#0056b3",
                  },
                }}
                onClick={() => navigate("/dashboard")}
              >
                Create Your Business
              </Button>
            </Box>
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
                <Typography variant="body2">{practice.category}</Typography>
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
