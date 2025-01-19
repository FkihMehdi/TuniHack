import React from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Grid,
  Avatar,
  Chip,
  Divider,
  Paper,
  Stack,
  LinearProgress,
  Link,
  Button,
} from "@mui/material";
import {
  CalendarToday,
  AccessTime,
  LocationOn,
  Group,
} from "@mui/icons-material";
import { conference } from "./data";
import LearningLayout from "../../../common/LearningLayout";

const ConferenceDetails = () => {
  // Sample conference data

  return (
    <LearningLayout>
      <Box sx={{ maxWidth: 1200, margin: "0 auto", p: 3 }}>
        {/* Hero Section */}
        <Card sx={{ mb: 4 }}>
          <CardMedia
            component="img"
            height="400"
            image={conference.image}
            alt={conference.name}
          />
        </Card>

        {/* Main Content Grid */}
        <Grid container spacing={4}>
          {/* Left Column - Main Information */}
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h3" gutterBottom>
                {conference.name}
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <Chip
                  icon={<CalendarToday />}
                  label={new Date(conference.date).toLocaleDateString()}
                />
                <Chip icon={<AccessTime />} label={conference.time} />
                <Chip icon={<LocationOn />} label={conference.location} />
              </Stack>
              <Chip label={conference.subject} color="primary" sx={{ mb: 2 }} />
              <Typography variant="body1" paragraph>
                {conference.description}
              </Typography>
              <Button
                component={Link}
                href={"http://localhost:3030/" + conference.id}
                target="_blank"
                rel="noopener"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Watch Conference Live
              </Button>
            </Box>

            <Divider sx={{ mb: 4 }} />

            {/* Detailed Description */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                About This Conference
              </Typography>
              <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                {conference.longDescription}
              </Typography>
            </Box>

            {/* Schedule */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" gutterBottom>
                Schedule
              </Typography>
              {conference.schedule.map((item, index) => (
                <Paper key={index} sx={{ p: 2, mb: 2 }}>
                  <Typography variant="h6" color="primary">
                    {item.time}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Grid>

          {/* Right Column - Sidebar Information */}
          <Grid item xs={12} md={4}>
            {/* Mentor Information */}
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Conference Mentor
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Avatar
                  src={conference.mentor.avatar}
                  sx={{ width: 64, height: 64, mr: 2 }}
                />
                <Box>
                  <Typography variant="subtitle1">
                    {conference.mentor.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {conference.mentor.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {conference.mentor.company}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2">{conference.mentor.bio}</Typography>
            </Paper>

            {/* Attendance Information */}
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" gutterBottom>
                Attendance
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <Group sx={{ mr: 1 }} />
                <Typography>
                  {conference.currentAttendees} / {conference.capacity}{" "}
                  registered
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={
                  (conference.currentAttendees / conference.capacity) * 100
                }
                sx={{ mt: 1 }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </LearningLayout>
  );
};

export default ConferenceDetails;
