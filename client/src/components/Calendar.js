import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { Card, Typography, Button, Divider, Stack, Box } from "@mui/material";
import { MdEvent } from "react-icons/md";

// Extend dayjs with plugins
dayjs.extend(isToday);
dayjs.extend(advancedFormat);

const events = [
  { date: "2024-11-15", title: "Hackathon Kickoff" },
  { date: "2024-12-01", title: "Project Submission" },
  { date: "2024-12-10", title: "Final Presentations" },
];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(dayjs()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Card
      sx={{
        backgroundColor: "#705eaa", // Main background color
        color: "#fff", // White text color
        padding: 4,
        borderRadius: 4,
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
        maxWidth: 500,
        margin: "auto",
      }}
    >
      <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
        Event Calendar
      </Typography>
      <Typography variant="h6" align="center" sx={{ marginBottom: 3 }}>
        Today: {currentDate.format("dddd, MMMM D, YYYY")}
      </Typography>

      <Divider sx={{ backgroundColor: "#71a769", marginY: 2 }} />

      <Stack spacing={2}>
        {events.map((event) => {
          const eventDate = dayjs(event.date);
          const isEventToday = eventDate.isToday();
          return (
            <Box
              key={event.date}
              sx={{
                backgroundColor: isEventToday ? "#71a769" : "#fff",
                color: isEventToday ? "#fff" : "#705eaa",
                padding: 2,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <MdEvent size={24} style={{ marginRight: 10 }} />
              <Box>
                <Typography variant="body1" fontWeight="bold">
                  {event.title}
                </Typography>
                <Typography variant="body2">
                  {eventDate.format("MMMM D, YYYY")}
                </Typography>
                {isEventToday && (
                  <Typography variant="caption" sx={{ color: "#fff" }}>
                    Happening Today!
                  </Typography>
                )}
              </Box>
            </Box>
          );
        })}
      </Stack>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#71a769",
          color: "#fff",
          fontWeight: "bold",
          marginTop: 3,
          "&:hover": {
            backgroundColor: "#5b9565",
          },
        }}
        fullWidth
      >
        View All Events
      </Button>
    </Card>
  );
};

export default Calendar;
