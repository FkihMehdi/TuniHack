import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Chip,
  Stack,
  Button,
} from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ShareIcon from "@mui/icons-material/Share";
import { certifications } from "./data";
import { LearningLayout } from "../../../common";

const Certifications = () => {
  const handleShare = (certification) => {
    // Implement sharing functionality
    console.log(`Sharing certification: ${certification.title}`);
  };

  return (
    <LearningLayout>
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          My Certifications
        </Typography>

        <Grid container spacing={3}>
          {certifications.map((cert) => (
            <Grid item xs={12} md={6} lg={4} key={cert.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  "&:hover": {
                    boxShadow: 6,
                    transform: "translateY(-4px)",
                    transition: "all 0.3s ease-in-out",
                  },
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    height: 140,
                    bgcolor: "primary.light",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <WorkspacePremiumIcon sx={{ fontSize: 60, color: "white" }} />
                </CardMedia>

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {cert.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {cert.description}
                  </Typography>

                  <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                    <CalendarTodayIcon fontSize="small" color="action" />
                    <Typography variant="body2" color="text.secondary">
                      {new Date(cert.date).toLocaleDateString()}
                    </Typography>
                  </Stack>

                  <Typography variant="subtitle2" gutterBottom>
                    Issued by: {cert.issuer}
                  </Typography>

                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Skills:
                    </Typography>
                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                      {cert.skills.map((skill, index) => (
                        <Chip
                          key={index}
                          label={skill}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Stack>
                  </Box>

                  <Box
                    sx={{
                      mt: 2,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="caption" color="text.secondary">
                      Credential ID: {cert.credential}
                    </Typography>
                    <Button
                      size="small"
                      startIcon={<ShareIcon />}
                      onClick={() => handleShare(cert)}
                    >
                      Share
                    </Button>
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

export default Certifications;
