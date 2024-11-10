import { AuthLayoutWithoutRightSidebar } from "../AuthLayoutWithoutRightSidebar";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
  Stack,
} from "@mui/material";
import React from "react";

const Mentors = () => {
  return (
    <AuthLayoutWithoutRightSidebar>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4, p: 3 }}>
        {/* Section 1: Available Mentors */}
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="#705eaa"
            gutterBottom
          >
            Available Mentors
          </Typography>
          <Grid container spacing={2}>
            {[1, 2, 3].map((mentor, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ p: 2, backgroundColor: "#f4f4f4" }}>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      alt="Mentor Name"
                      src="/mentor.jpg"
                      sx={{ width: 56, height: 56, mr: 2 }}
                    />
                    <Typography variant="h6" color="#705eaa">
                      Mentor Name
                    </Typography>
                  </Box>
                  <CardContent>
                    <Typography variant="body2" color="textSecondary">
                      Specializes in robotics and AI, offering guidance on
                      various projects.
                    </Typography>
                  </CardContent>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 2,
                      bgcolor: "#71a769",
                      color: "white",
                      "&:hover": { bgcolor: "#5f9460" },
                    }}
                  >
                    Connect
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Section 2: Robotics Material Donations & Free Learning Courses */}
        <Box>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="#705eaa"
            gutterBottom
          >
            Robotics Material Donations & Free Learning Courses
          </Typography>
          <Grid container spacing={2}>
            {/* Example donation post */}
            {[1, 2].map((post, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card sx={{ p: 2, backgroundColor: "#f4f4f4" }}>
                  <Box display="flex" alignItems="center" mb={1}>
                    <Avatar
                      alt="Provider Name"
                      src="/provider.jpg"
                      sx={{ width: 40, height: 40, mr: 2 }}
                    />
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      color="#705eaa"
                    >
                      Provider Name
                    </Typography>
                  </Box>
                  <CardContent>
                    <Typography variant="h6" gutterBottom color="#705eaa">
                      Robotics Kit Donation
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Free kits available for beginners. Sign up to receive a
                      basic robotics kit to kickstart your learning journey.
                    </Typography>
                  </CardContent>
                  <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                    <Button
                      variant="outlined"
                      color="inherit"
                      sx={{ borderColor: "#705eaa", color: "#705eaa" }}
                    >
                      Follow
                    </Button>
                    <Button
                      variant="outlined"
                      color="inherit"
                      sx={{ borderColor: "#705eaa", color: "#705eaa" }}
                    >
                      Message
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#71a769",
                        color: "white",
                        "&:hover": { bgcolor: "#5f9460" },
                      }}
                    >
                      View Profile
                    </Button>
                  </Stack>
                </Card>
              </Grid>
            ))}

            {/* Example learning course */}
            {[1].map((course, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card sx={{ p: 2, backgroundColor: "#f4f4f4" }}>
                  <Box display="flex" alignItems="center" mb={1}>
                    <Avatar
                      alt="Provider Name"
                      src="/provider.jpg"
                      sx={{ width: 40, height: 40, mr: 2 }}
                    />
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      color="#705eaa"
                    >
                      Provider Name
                    </Typography>
                  </Box>
                  <CardContent>
                    <Typography variant="h6" gutterBottom color="#705eaa">
                      Free Course on Robotics Basics
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Learn the fundamentals of robotics with a free online
                      course. Perfect for newcomers!
                    </Typography>
                  </CardContent>
                  <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                    <Button
                      variant="outlined"
                      color="inherit"
                      sx={{ borderColor: "#705eaa", color: "#705eaa" }}
                    >
                      Follow
                    </Button>
                    <Button
                      variant="outlined"
                      color="inherit"
                      sx={{ borderColor: "#705eaa", color: "#705eaa" }}
                    >
                      Message
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "#71a769",
                        color: "white",
                        "&:hover": { bgcolor: "#5f9460" },
                      }}
                    >
                      View Profile
                    </Button>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </AuthLayoutWithoutRightSidebar>
  );
};

export { Mentors };
