import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  LinearProgress,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Card,
  CardContent,
  Chip,
  IconButton,
} from "@mui/material";
import {
  AccessTime,
  School,
  Assessment,
  WorkspacesOutlined,
  Groups,
  ExpandMore,
  ExpandLess,
  Book,
} from "@mui/icons-material";
import LearningLayout from "../../../common/LearningLayout";

const CareerTrackDetails = () => {
  const [courseOneExpanded, setCourseOneExpanded] = useState(true);
  const [courseTwoExpanded, setCourseTwoExpanded] = useState(false);

  const trackStats = [
    { icon: <Book />, text: "Python, Theory" },
    { icon: <AccessTime />, text: "90 hours" },
    { icon: <School />, text: "23 courses" },
    { icon: <Assessment />, text: "3 skill assessments" },
    { icon: <WorkspacesOutlined />, text: "11 projects" },
    { icon: <Groups />, text: "225,970 participants" },
  ];

  const bonusItems = Array(14).fill(null);

  const instructors = [
    {
      name: "Hugo Bowne-Anderson",
      title: "Data Scientist",
      avatar: "/path/to/avatar1",
    },
    {
      name: "Benjamin Wilson",
      title: "Director of Research at lateral.io",
      avatar: "/path/to/avatar2",
    },
    {
      name: "Elie Kawerk",
      title: "Senior Data Scientist",
      avatar: "/path/to/avatar3",
    },
  ];

  return (
    <LearningLayout>
      <Box sx={{ maxWidth: 1200, mx: "auto", p: 3 }}>
        {/* Header Section */}
        <Box
          sx={{
            bgcolor: "#0A1929",
            p: 4,
            borderRadius: 2,
            color: "white",
            mb: 3,
          }}
        >
          <Typography variant="caption" sx={{ color: "grey.400" }}>
            CAREER TRACK
          </Typography>
          <Typography variant="h4" sx={{ my: 2 }}>
            Associate Data Scientist in Python
          </Typography>
          <Button variant="contained" color="success" sx={{ mb: 4 }}>
            Start Track
          </Button>

          {/* Track Statistics */}
          <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap", mb: 4 }}>
            {trackStats.map((stat, index) => (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                {stat.icon}
                <Typography variant="body2">{stat.text}</Typography>
              </Box>
            ))}
          </Box>

          {/* Progress Section */}
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              TRACK COMPLETION
            </Typography>
            <LinearProgress
              variant="determinate"
              value={0}
              sx={{
                height: 8,
                borderRadius: 4,
                bgcolor: "rgba(255,255,255,0.1)",
              }}
            />
          </Box>

          {/* Bonus Materials */}
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1 }}>
              BONUS MATERIAL - 0 OF 14
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {bonusItems.map((_, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    bgcolor: "rgba(255,255,255,0.1)",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>

        {/* Main Content */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <Box sx={{ flex: 1 }}>
            {/* Track Description */}
            <Typography variant="h6" sx={{ mb: 2 }}>
              Track Description
            </Typography>
            <Typography variant="body2" sx={{ mb: 4 }}>
              Learn data science in Python, from data manipulation to machine
              learning. This track provides the skills needed to succeed as a
              data scientist!
            </Typography>

            {/* Course List */}
            <List>
              {/* Course 1 */}
              <ListItem
                sx={{
                  bgcolor: "background.paper",
                  mb: 2,
                  borderRadius: 1,
                  border: 1,
                  borderColor: "divider",
                  display: "block",
                }}
              >
                <Box sx={{ p: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 2,
                    }}
                  >
                    <Typography variant="subtitle1">
                      1. Introduction to Python
                    </Typography>
                    <IconButton
                      onClick={() => setCourseOneExpanded(!courseOneExpanded)}
                    >
                      {courseOneExpanded ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={0}
                    sx={{ mb: 2, height: 4, borderRadius: 2 }}
                  />
                  <Collapse in={courseOneExpanded}>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      Master the basics of data analysis with Python in just
                      four hours. This online course will introduce the Python
                      interface and explore popular packages.
                    </Typography>

                    {/* Already know this section */}
                    <Box
                      sx={{
                        bgcolor: "info.light",
                        p: 2,
                        borderRadius: 1,
                        mb: 2,
                      }}
                    >
                      <Typography variant="body2">
                        Already know this?
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Take a quick test to check if you can skip the course.
                      </Typography>
                      <Button variant="outlined" sx={{ mt: 1 }}>
                        Take Test
                      </Button>
                    </Box>

                    {/* Chapters */}
                    <Typography variant="subtitle2" sx={{ mb: 1 }}>
                      Chapters:
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemText
                          primary="Python Basics"
                          secondary="700 XP"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Python Lists"
                          secondary="1150 XP"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary="Functions and Packages"
                          secondary="950 XP"
                        />
                      </ListItem>
                      <ListItem>
                        <ListItemText primary="NumPy" secondary="1100 XP" />
                      </ListItem>
                    </List>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 2,
                      }}
                    >
                      <Button variant="text">View Course</Button>
                      <Button variant="contained" color="success">
                        Continue
                      </Button>
                    </Box>
                  </Collapse>
                </Box>
              </ListItem>

              {/* Course 2 */}
              <ListItem
                sx={{
                  bgcolor: "background.paper",
                  borderRadius: 1,
                  border: 1,
                  borderColor: "divider",
                }}
              >
                <Box sx={{ width: "100%", p: 2 }}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="subtitle1">
                      2. Intermediate Python
                    </Typography>
                    <IconButton
                      onClick={() => setCourseTwoExpanded(!courseTwoExpanded)}
                    >
                      {courseTwoExpanded ? <ExpandLess /> : <ExpandMore />}
                    </IconButton>
                  </Box>
                </Box>
              </ListItem>
            </List>
          </Box>

          {/* Sidebar */}
          <Box sx={{ width: 300 }}>
            {/* Certification Card */}
            <Card sx={{ mb: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Certification Available
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
                >
                  <Typography variant="body2">by</Typography>
                  <Typography variant="body2" color="primary">
                    datacamp
                  </Typography>
                </Box>
                <Chip
                  label="Included with Premium"
                  size="small"
                  color="primary"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  Industry recognized certifications help you stand out and
                  prove your skills. Prepare for certification by completing
                  this track.
                </Typography>
                <Button variant="outlined" fullWidth>
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Instructors Card */}
            <Card>
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <Groups /> INSTRUCTORS
                </Typography>
                <List>
                  {instructors.map((instructor, index) => (
                    <ListItem key={index} sx={{ px: 0 }}>
                      <ListItemIcon>
                        <Avatar src={instructor.avatar} />
                      </ListItemIcon>
                      <ListItemText
                        primary={instructor.name}
                        secondary={instructor.title}
                      />
                    </ListItem>
                  ))}
                </List>
                <Button variant="text" fullWidth>
                  See All Instructors
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </LearningLayout>
  );
};

export default CareerTrackDetails;
