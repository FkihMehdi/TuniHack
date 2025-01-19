import React, { useState } from "react";
import dayjs from "dayjs";
import {
  Box,
  Paper,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Chip,
  Card,
  CardContent,
  Badge,
} from "@mui/material";
import {
  CalendarMonth,
  Assignment,
  Business,
  Forum,
} from "@mui/icons-material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  LocalizationProvider,
  DateCalendar,
  PickersDay,
} from "@mui/x-date-pickers";
import { LearningLayout } from "../../../common";

const CourseCalendar = () => {
  // Sample course data with due dates (keeping your existing data)
  const courseDueDates = [
    {
      id: 1,
      title: "Business Plan Development",
      type: "entrepreneurship",
      dueDate: new Date("2025-01-25"),
      description: "Submit final business plan draft",
      priority: "high",
    },
    {
      id: 2,
      title: "Public Speaking Workshop",
      type: "communication",
      dueDate: new Date("2025-01-28"),
      description: "Prepare and record 10-minute pitch",
      priority: "medium",
    },
    {
      id: 3,
      title: "Market Analysis Project",
      type: "entrepreneurship",
      dueDate: new Date("2025-02-05"),
      description: "Complete competitor analysis report",
      priority: "high",
    },
    {
      id: 4,
      title: "Professional Email Writing",
      type: "communication",
      dueDate: new Date("2025-02-10"),
      description: "Email campaign strategy submission",
      priority: "medium",
    },
    {
      id: 5,
      title: "Startup Financial Planning",
      type: "entrepreneurship",
      dueDate: new Date("2025-02-15"),
      description: "Financial projections and budget",
      priority: "high",
    },
  ];

  const [selectedDate, setSelectedDate] = useState(dayjs());

  // Custom day component to show badges for dates with assignments
  const CustomDay = (props) => {
    const { day, outsideCurrentMonth, ...other } = props;

    // Check if the day has any assignments
    const hasAssignment = courseDueDates.some(
      (course) =>
        dayjs(course.dueDate).format("YYYY-MM-DD") === day.format("YYYY-MM-DD")
    );

    // Get assignments for the day to determine priority
    const dayAssignments = courseDueDates.filter(
      (course) =>
        dayjs(course.dueDate).format("YYYY-MM-DD") === day.format("YYYY-MM-DD")
    );

    // Determine if there's a high priority assignment
    const hasHighPriority = dayAssignments.some(
      (assignment) => assignment.priority === "high"
    );

    if (outsideCurrentMonth) {
      return <PickersDay {...other} outsideCurrentMonth day={day} />;
    }

    return (
      <Badge
        key={day.toString()}
        overlap="circular"
        badgeContent={hasAssignment ? "●" : undefined}
        sx={{
          "& .MuiBadge-badge": {
            backgroundColor: "transparent",
            color: hasHighPriority ? "#f44336" : "#1976d2",
            fontSize: "16px",
            right: 3,
            top: 3,
          },
        }}
      >
        <PickersDay
          {...other}
          day={day}
          sx={{
            ...(hasAssignment && {
              backgroundColor: hasHighPriority
                ? "rgba(244, 67, 54, 0.1)"
                : "rgba(25, 118, 210, 0.1)",
              "&:hover": {
                backgroundColor: hasHighPriority
                  ? "rgba(244, 67, 54, 0.2)"
                  : "rgba(25, 118, 210, 0.2)",
              },
            }),
          }}
        />
      </Badge>
    );
  };

  // Keep your existing helper functions
  const getDueDatesForSelectedDate = (date) => {
    return courseDueDates.filter((course) =>
      dayjs(course.dueDate).isSame(date, "day")
    );
  };

  const getUpcomingDueDates = () => {
    const today = dayjs();
    return courseDueDates
      .filter((course) => dayjs(course.dueDate).isAfter(today))
      .sort((a, b) => dayjs(a.dueDate).diff(dayjs(b.dueDate)));
  };

  const getChipColor = (type) => {
    return type === "entrepreneurship" ? "primary" : "secondary";
  };

  const getCourseIcon = (type) => {
    return type === "entrepreneurship" ? <Business /> : <Forum />;
  };

  return (
    <LearningLayout>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
            Course Calendar
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <DateCalendar
                  value={selectedDate}
                  onChange={(newDate) => setSelectedDate(newDate)}
                  slots={{
                    day: CustomDay,
                  }}
                  sx={{
                    width: "100%",
                    "& .MuiPickersDay-root": {
                      "&.Mui-selected": {
                        backgroundColor: "primary.main",
                      },
                    },
                  }}
                />

                {/* Legend */}
                <Box
                  sx={{
                    mt: 2,
                    display: "flex",
                    gap: 2,
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <span style={{ color: "#1976d2", fontSize: "16px" }}>
                      ●
                    </span>
                    <Typography variant="caption">Regular Due Date</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <span style={{ color: "#f44336", fontSize: "16px" }}>
                      ●
                    </span>
                    <Typography variant="caption">High Priority</Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>

            {/* Rest of your existing component code */}
            {/* Due Dates Section */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  {/* Your existing CardContent code */}
                  <Typography variant="h6" gutterBottom>
                    Selected Date: {selectedDate.format("dddd, MMMM D, YYYY")}
                  </Typography>

                  {getDueDatesForSelectedDate(selectedDate).length > 0 ? (
                    <List>
                      {getDueDatesForSelectedDate(selectedDate).map(
                        (course) => (
                          <ListItem
                            key={course.id}
                            sx={{
                              bgcolor: "background.paper",
                              mb: 1,
                              borderRadius: 1,
                              border: 1,
                              borderColor: "divider",
                            }}
                          >
                            <ListItemIcon>
                              {getCourseIcon(course.type)}
                            </ListItemIcon>
                            <ListItemText
                              primary={course.title}
                              secondary={
                                <>
                                  {course.description}
                                  <Box sx={{ mt: 1 }}>
                                    <Chip
                                      label={course.type}
                                      color={getChipColor(course.type)}
                                      size="small"
                                      sx={{ mr: 1 }}
                                    />
                                    <Chip
                                      label={course.priority}
                                      color={
                                        course.priority === "high"
                                          ? "error"
                                          : "warning"
                                      }
                                      size="small"
                                    />
                                  </Box>
                                </>
                              }
                            />
                          </ListItem>
                        )
                      )}
                    </List>
                  ) : (
                    <Typography color="textSecondary">
                      No assignments due on this date
                    </Typography>
                  )}

                  {/* Upcoming Assignments */}
                  <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                    Upcoming Due Dates
                  </Typography>
                  <List>
                    {getUpcomingDueDates()
                      .slice(0, 3)
                      .map((course) => (
                        <ListItem
                          key={course.id}
                          sx={{
                            bgcolor: "background.paper",
                            mb: 1,
                            borderRadius: 1,
                            border: 1,
                            borderColor: "divider",
                          }}
                        >
                          <ListItemIcon>
                            <Assignment />
                          </ListItemIcon>
                          <ListItemText
                            primary={course.title}
                            secondary={
                              <>
                                Due:{" "}
                                {dayjs(course.dueDate).format(
                                  "dddd, MMMM D, YYYY"
                                )}
                                <Box sx={{ mt: 1 }}>
                                  <Chip
                                    label={course.type}
                                    color={getChipColor(course.type)}
                                    size="small"
                                  />
                                </Box>
                              </>
                            }
                          />
                        </ListItem>
                      ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </LocalizationProvider>
    </LearningLayout>
  );
};

export default CourseCalendar;
