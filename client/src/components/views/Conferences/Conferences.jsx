import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Avatar,
  Chip,
  Stack,
} from "@mui/material";
import { CalendarToday } from "@mui/icons-material";
import { conferences } from "./data";
import { NavLink } from "react-router-dom";
import LearningLayout from "../../../common/LearningLayout";

const Conferences = () => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <LearningLayout>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={3}>
          {conferences.map((conference) => (
            <Grid item xs={12} sm={6} md={4} key={conference.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: 3,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={conference.image}
                  alt={conference.name}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <NavLink
                    to={`/conferences/${conference.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography gutterBottom variant="h5" component="h2">
                      {conference.name}
                    </Typography>
                  </NavLink>

                  <Stack direction="row" spacing={1} alignItems="center" mb={2}>
                    <CalendarToday fontSize="small" color="action" />
                    <Typography variant="body2" color="text.secondary">
                      {formatDate(conference.date)}
                    </Typography>
                  </Stack>

                  <Chip
                    label={conference.subject}
                    size="small"
                    sx={{ mb: 2 }}
                  />

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      mb: 2,
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 3,
                    }}
                  >
                    {conference.description}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mt: "auto",
                    }}
                  >
                    <Avatar
                      src={conference.mentor.avatar}
                      sx={{ width: 32, height: 32, mr: 1 }}
                    />
                    <Box>
                      <Typography variant="subtitle2">
                        {conference.mentor.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {conference.mentor.role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </LearningLayout>
  );
};

export default Conferences;
