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
  Assessment, // Icon for Market Analysis or Financial Tools
  BarChart, // Icon for Financial Analysis Tools (Profitability, Revenue)
  Security, // Icon for Risk Management
  Report, // Icon for Reporting Tools
  Storefront, // Icon for Inventory/Logistics
  AlarmOn, // Icon for Notifications
} from "@mui/icons-material";

const drawerWidth = 240;

const SidebarBS = () => {
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
        {/* Business Utilities Section */}
        <ListItem sx={{ mt: 4 }}>
          <ListItemText
            primary="Business Tools"
            sx={{
              "& .MuiTypography-root": {
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "0.75rem",
                fontWeight: 600,
              },
            }}
          />
        </ListItem>

        {/* Financial Tools */}
        {[
          { text: "Revenue Forecasting", icon: <BarChart /> },
          { text: "Cost Analysis", icon: <Assessment /> },
          { text: "Profitability Calculator", icon: <BarChart /> },
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

        {/* Market & Risk Tools */}
        {[
          { text: "Market Analysis", icon: <Assessment /> },
          { text: "Risk Management", icon: <Security /> },
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

        {/* Reports & Alerts */}
        {[
          { text: "Business Reports", icon: <Report /> },
          { text: "Alerts & Notifications", icon: <AlarmOn /> },
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

        {/* Supply Chain & Inventory */}
        {[{ text: "Inventory Management", icon: <Storefront /> }].map(
          (item) => (
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
          )
        )}
      </List>
    </Drawer>
  );
};

export default SidebarBS;
