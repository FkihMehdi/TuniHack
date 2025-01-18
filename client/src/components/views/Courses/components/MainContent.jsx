import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Chip,
  Button,
  Avatar,
  Stack,
} from "@mui/material";
import { LocationOn, FilterList } from "@mui/icons-material";
import { additionalTech, courses, technologies } from "../data";

const MainContent = () => {
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
              MainContent
            </Typography>
            <Chip
              icon={<LocationOn />}
              label="Hands-on learning"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "white",
              }}
            />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: "normal", opacity: 0.9 }}>
            It's time to roll up your sleeves—we learn best by doing. All of our
            MainContent are interactive, combining short videos with hands-on
            exercises.
          </Typography>
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
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {additionalTech.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              clickable
              sx={{
                backgroundColor: "#f7f7fc",
                "&:hover": {
                  backgroundColor: "#eeeef9",
                },
              }}
            />
          ))}
          <Chip label="+13" variant="outlined" />
        </Box>
      </Stack>

      {/* Filters and Count */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h6" component="h2">
          501 MainContent
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            sx={{ color: "#000000", borderColor: "#000000" }}
            startIcon={<FilterList />}
          >
            More filters
          </Button>
        </Box>
      </Box>

      {/* Course Cards */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 3,
        }}
      >
        {courses.map((course) => (
          <Card
            key={course.title}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="overline" color="text.secondary">
                {course.type}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {course.title}
              </Typography>
              <Chip
                label={course.level}
                size="small"
                sx={{
                  backgroundColor: "#f7f7fc",
                  mb: 2,
                }}
              />
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 2, minHeight: 80 }}
              >
                {course.description}
              </Typography>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
              >
                <Avatar
                  src={course.instructor.avatar}
                  sx={{ width: 32, height: 32 }}
                />
                <Box>
                  <Typography variant="subtitle2">
                    {course.instructor.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {course.instructor.role}
                  </Typography>
                </Box>
              </Box>
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
                  {course.icon}
                </Typography>
                <Typography variant="body2">{course.duration}</Typography>
              </Box>
              <Button variant="outlined">Start</Button>
            </Box>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default MainContent;
