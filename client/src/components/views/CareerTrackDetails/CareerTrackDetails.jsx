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
    { icon: <Book />, text: "Communication, Strategy" },
    { icon: <AccessTime />, text: "60 hours" },
    { icon: <School />, text: "15 courses" },
    { icon: <Assessment />, text: "2 skill assessments" },
    { icon: <WorkspacesOutlined />, text: "5 projects" },
    { icon: <Groups />, text: "10,000 participants" },
  ];

  const bonusItems = Array(14).fill(null);

  const instructors = [
    {
      name: "Jane Doe",
      title: "Entrepreneurship Coach",
      avatar: "/path/to/avatar1",
    },
    {
      name: "John Smith",
      title: "Communication Expert",
      avatar: "/path/to/avatar2",
    },
    {
      name: "Emily Johnson",
      title: "Public Speaking Trainer",
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
