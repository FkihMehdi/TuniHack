import React from "react";
import HorizontalStack from "./util/HorizontalStack";
import UserAvatar from "./UserAvatar";
import { Typography, Button } from "@mui/material";

const UserEntry = ({ username, bio }) => {
  return (
    <HorizontalStack
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      sx={{
        padding: 2,
        borderRadius: 2,
        "&:hover": {
          backgroundColor: "rgba(112, 94, 170, 0.1)", // Light purple hover effect
          boxShadow: "0 4px 10px rgba(112, 94, 170, 0.2)", // Subtle shadow effect
        },
        cursor: "pointer", // Make the entire area clickable
      }}
      onClick={() => (window.location.href = `/users/${username}`)} // Redirect on click
    >
      <HorizontalStack spacing={2} alignItems="center">
        <UserAvatar width={40} height={40} username={username} />
        <div>
          <Typography
            sx={{
              color: "#705eaa", // Violet text color for an elegant look
              fontWeight: 500,
              fontSize: "1rem",
            }}
          >
            {username}
          </Typography>
          {bio && (
            <Typography
              sx={{
                color: "#6c5e82", // Slightly muted purple for the bio
                fontSize: "0.875rem", // Smaller text for bio
                fontStyle: "italic",
                marginTop: "4px",
              }}
            >
              {bio}
            </Typography>
          )}
        </div>
      </HorizontalStack>
      <HorizontalStack spacing={1}>
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#71a769", // Green for primary action (Follow)
            color: "#FFFFFF", // White text for contrast
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#5c8e5b", // Dark green for hover effect
            },
          }}
        >
          Follow
        </Button>
      </HorizontalStack>
    </HorizontalStack>
  );
};

export default UserEntry;
