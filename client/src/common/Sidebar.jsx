import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Timeline,
  BookmarkBorder,
  School,
  Assignment,
  WorkOutline,
  Code,
  EmojiEvents,
} from "@mui/icons-material";

const drawerWidth = 240;

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          marginTop: "64px",
          backgroundColor: "#000820",
        },
      }}
    >
      <List>
        <ListItem button onClick={() => navigate("/learning-dashboard")}>
          <ListItemIcon sx={{ color: "#ffffff" }}>
            <Timeline />
          </ListItemIcon>
          <ListItemText
            primary="Progress"
            sx={{
              "& .MuiTypography-root": {
                color: "#ffffff",
              },
            }}
          />
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: "#ffffff" }}>
            <BookmarkBorder />
          </ListItemIcon>
          <ListItemText
            primary="My Library"
            sx={{
              "& .MuiTypography-root": {
                color: "#ffffff",
              },
            }}
          />
        </ListItem>
        <ListItem sx={{ mt: 2 }}>
          <ListItemText
            primary="LEARN"
            sx={{
              "& .MuiTypography-root": {
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "0.75rem",
                fontWeight: 600,
              },
            }}
          />
        </ListItem>
        {[
          { text: "Tracks", icon: <School /> },
          { text: "Courses", icon: <Assignment />, path: "/courses" },
          // { text: "Practice", icon: <Assessment />, path: "/practice" },
          { text: "Tutorials", icon: <BookmarkBorder /> },
        ].map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => item.path && navigate(item.path)}
            sx={{
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#ffffff" }}>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                "& .MuiTypography-root": {
                  color: "#ffffff",
                },
              }}
            />
          </ListItem>
        ))}
        <ListItem sx={{ mt: 2 }}>
          <ListItemText
            primary="APPLY"
            sx={{
              "& .MuiTypography-root": {
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "0.75rem",
                fontWeight: 600,
              },
            }}
          />
        </ListItem>
        {[
          { text: "Projects", icon: <WorkOutline /> },
          { text: "Competitions", icon: <EmojiEvents /> },
        ].map((item) => (
          <ListItem
            button
            key={item.text}
            sx={{
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.08)",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#ffffff" }}>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.text}
              sx={{
                "& .MuiTypography-root": {
                  color: "#ffffff",
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
