import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  LinearProgress,
  List,
  ListItem,
  IconButton,
  Collapse,
  Card,
  CardContent,
  Chip,
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
import {
  TrackHeader,
  TrackDescription,
  CourseList,
  Sidebar,
} from "./components";

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
        <TrackHeader trackStats={trackStats} bonusItems={bonusItems} />
        <Box sx={{ display: "flex", gap: 3 }}>
          <Box sx={{ flex: 1 }}>
            <TrackDescription />
            <CourseList
              courseOneExpanded={courseOneExpanded}
              setCourseOneExpanded={setCourseOneExpanded}
              courseTwoExpanded={courseTwoExpanded}
              setCourseTwoExpanded={setCourseTwoExpanded}
            />
          </Box>
          <Sidebar instructors={instructors} />
        </Box>
      </Box>
    </LearningLayout>
  );
};

export default CareerTrackDetails;
