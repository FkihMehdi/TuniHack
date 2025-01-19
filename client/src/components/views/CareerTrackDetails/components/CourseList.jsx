import React from "react";
import {
  List,
  ListItem,
  Box,
  Typography,
  IconButton,
  LinearProgress,
  Collapse,
  Button,
  ListItemText,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

const CourseList = ({
  courseOneExpanded,
  setCourseOneExpanded,
  courseTwoExpanded,
  setCourseTwoExpanded,
}) => (
  <List>
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
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="subtitle1">
            1. Introduction to Entrepreneurial Communication
          </Typography>
          <IconButton onClick={() => setCourseOneExpanded(!courseOneExpanded)}>
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
            Master the basics of entrepreneurial communication in just four
            hours. This online course will introduce key concepts and
            strategies.
          </Typography>
          <Box sx={{ bgcolor: "info.light", p: 2, borderRadius: 1, mb: 2 }}>
            <Typography variant="body2">Already know this?</Typography>
            <Typography variant="body2" color="text.secondary">
              Take a quick test to check if you can skip the course.
            </Typography>
            <Button variant="outlined" sx={{ mt: 1 }}>
              Take Test
            </Button>
          </Box>
          <Typography variant="subtitle2" sx={{ mb: 1 }}>
            Chapters:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Communication Basics" secondary="700 XP" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Pitching Ideas" secondary="1150 XP" />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Networking Strategies"
                secondary="950 XP"
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Public Speaking" secondary="1100 XP" />
            </ListItem>
          </List>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button variant="text">View Course</Button>
            <Button variant="contained" color="success">
              Continue
            </Button>
          </Box>
        </Collapse>
      </Box>
    </ListItem>
    <ListItem
      sx={{
        bgcolor: "background.paper",
        borderRadius: 1,
        border: 1,
        borderColor: "divider",
      }}
    >
      <Box sx={{ width: "100%", p: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="subtitle1">
            2. Advanced Entrepreneurial Communication
          </Typography>
          <IconButton onClick={() => setCourseTwoExpanded(!courseTwoExpanded)}>
            {courseTwoExpanded ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Box>
      </Box>
    </ListItem>
  </List>
);

export default CourseList;
