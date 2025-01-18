import React from "react";
import {
  Box,
  Container,
  Typography,
  LinearProgress,
  Card,
  CardContent,
  Button,
} from "@mui/material";

const MainContent = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 4, mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Hey, User!
        </Typography>
        <LinearProgress
          variant="determinate"
          value={30}
          sx={{
            height: 8,
            borderRadius: 4,
            width: "200px",
            mb: 1,
            backgroundColor: "rgba(100, 90, 255, 0.1)",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "#645AFF",
            },
          }}
        />
        <Typography variant="body2" color="text.secondary">
          Portfolio 30% complete
        </Typography>
      </Box>
      <Card sx={{ mb: 4, p: 1 }}>
        <CardContent>
          <Typography variant="overline" display="block" gutterBottom>
            LEARN
          </Typography>
          <Typography variant="h6" gutterBottom>
            Introduction to Python
          </Typography>
          <LinearProgress
            variant="determinate"
            value={0}
            sx={{
              height: 8,
              borderRadius: 4,
              mb: 1,
              backgroundColor: "rgba(100, 90, 255, 0.1)",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#645AFF",
              },
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              4 hours to go
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#645AFF",
                "&:hover": {
                  backgroundColor: "#5346FF",
                },
              }}
            >
              Keep Making Progress
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Card sx={{ flex: 1, p: 1 }}>
          <CardContent>
            <Typography variant="overline" display="block" gutterBottom>
              PRACTICE
            </Typography>
            <Typography variant="h6">Introduction to Python</Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, p: 1 }}>
          <CardContent>
            <Typography variant="overline" display="block" gutterBottom>
              APPLY
            </Typography>
            <Typography variant="h6">Investigating Data</Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default MainContent;
