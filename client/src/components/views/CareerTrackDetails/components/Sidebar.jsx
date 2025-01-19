import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";
import { Groups } from "@mui/icons-material";

const Sidebar = ({ instructors }) => (
  <Box sx={{ width: 300 }}>
    <Card sx={{ mb: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Certification Available
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <Typography variant="body2">by</Typography>
          <Typography variant="body2" color="primary">
            datacamp
          </Typography>
        </Box>
        <Chip
          label="Included with Premium"
          size="small"
          color="primary"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Industry recognized certifications help you stand out and prove your
          skills. Prepare for certification by completing this track.
        </Typography>
        <Button variant="outlined" fullWidth>
          Learn More
        </Button>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <Groups /> INSTRUCTORS
        </Typography>
        <List>
          {instructors.map((instructor, index) => (
            <ListItem key={index} sx={{ px: 0 }}>
              <ListItemIcon>
                <Avatar src={instructor.avatar} />
              </ListItemIcon>
              <ListItemText
                primary={instructor.name}
                secondary={instructor.title}
              />
            </ListItem>
          ))}
        </List>
        <Button variant="text" fullWidth>
          See All Instructors
        </Button>
      </CardContent>
    </Card>
  </Box>
);

export default Sidebar;
