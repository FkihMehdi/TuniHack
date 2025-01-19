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

const MainContent = () => {
  const categories = [
    "All",
    "Marketing",
    "Finance",
    "Entrepreneurship",
    "Leadership",
    "Strategy",
    "Business Analytics",
  ];

  const additionalSkills = [
    "Public Speaking",
    "Negotiation",
    "Customer Relationship Management",
    "Design Thinking",
    "Project Management",
    "Lean Startup Methodology",
  ];

  const businessCourses = [
    {
      type: "Marketing",
      title: "Social Media Marketing Strategies",
      level: "Beginner",
      description:
        "Learn how to grow your business using social media platforms like Facebook, Instagram, and LinkedIn.",
      duration: "5 weeks",
      icon: "📱",
      instructor: {
        name: "Sara Johnson",
        avatar: "https://example.com/avatar1.jpg",
        role: "Digital Marketing Consultant",
      },
    },
    {
      type: "Finance",
      title: "Entrepreneurial Finance",
      level: "Intermediate",
      description:
        "Understand key financial principles to raise capital and manage business cash flow effectively.",
      duration: "4 weeks",
      icon: "💰",
      instructor: {
        name: "Mark Turner",
        avatar: "https://example.com/avatar2.jpg",
        role: "Financial Advisor",
      },
    },
    {
      type: "Leadership",
      title: "Emotional Intelligence for Leaders",
      level: "Advanced",
      description:
        "Master the art of emotional intelligence to lead teams and manage interpersonal relationships successfully.",
      duration: "6 weeks",
      icon: "🤝",
      instructor: {
        name: "Emma Davis",
        avatar: "https://example.com/avatar3.jpg",
        role: "Leadership Coach",
      },
    },
    {
      type: "Entrepreneurship",
      title: "Startup Growth Tactics",
      level: "Advanced",
      description:
        "Learn proven tactics to scale your startup and navigate challenges during rapid growth.",
      duration: "8 weeks",
      icon: "🚀",
      instructor: {
        name: "Jason Reed",
        avatar: "https://example.com/avatar4.jpg",
        role: "Startup Founder & Mentor",
      },
    },
    {
      type: "Strategy",
      title: "Strategic Business Planning",
      level: "Beginner",
      description:
        "Develop your strategic thinking skills and create actionable business plans to achieve long-term goals.",
      duration: "3 weeks",
      icon: "📊",
      instructor: {
        name: "Sophia Brown",
        avatar: "https://example.com/avatar5.jpg",
        role: "Business Strategist",
      },
    },
  ];

  return (
    <Container maxWidth="lg">
      {/* Header Section */}
      <Card
        sx={{
          backgroundColor: "#001F3F",
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
              Business Mastery Hub
            </Typography>
            <Chip
              icon={<LocationOn />}
              label="Business Education"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "white",
              }}
            />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: "normal", opacity: 0.9 }}>
            Upgrade your skills with world-class courses in entrepreneurship,
            marketing, finance, and leadership.
          </Typography>
        </Box>
      </Card>

      {/* Category Filter Chips */}
      <Stack spacing={2} sx={{ mb: 4 }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              clickable
              sx={{
                backgroundColor: category === "All" ? "#001F3F" : "#f7f7fc",
                color: category === "All" ? "white" : "inherit",
                "&:hover": {
                  backgroundColor: category === "All" ? "#003060" : "#eeeef9",
                },
              }}
            />
          ))}
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {additionalSkills.map((skill) => (
            <Chip
              key={skill}
              label={skill}
              clickable
              sx={{
                backgroundColor: "#f7f7fc",
                "&:hover": {
                  backgroundColor: "#eeeef9",
                },
              }}
            />
          ))}
          <Chip label="+6" variant="outlined" />
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
          250 Business Courses
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            sx={{ color: "#001F3F", borderColor: "#001F3F" }}
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
        {businessCourses.map((course) => (
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
