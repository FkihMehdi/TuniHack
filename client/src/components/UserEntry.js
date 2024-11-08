import React from "react";
import HorizontalStack from "./util/HorizontalStack";
import UserAvatar from "./UserAvatar";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const UserEntry = ({ username }) => {
  return (
    <HorizontalStack
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      sx={{
        padding: 2,
        borderRadius: 2,
        "&:hover": {
          backgroundColor: "rgba(255, 215, 0, 0.15)", // Light Gold hover effect
          boxShadow: "0 4px 12px rgba(255, 215, 0, 0.2)", // Subtle shadow
        },
      }}
    >
      <HorizontalStack spacing={2} alignItems="center">
        <UserAvatar width={40} height={40} username={username} />
        <Typography
          sx={{ color: "#E0E0E0", fontWeight: 500, fontSize: "1rem" }}
        >
          {username}
        </Typography>
      </HorizontalStack>
      <HorizontalStack spacing={1}>
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#FFD700", // Gold color for Follow button
            color: "#0D1B2A", // Dark blue text
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#E0C200",
            },
          }}
        >
          Follow
        </Button>
        <Button
          variant="outlined"
          size="small"
          sx={{
            borderColor: "#FFD700",
            color: "#FFD700",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "rgba(255, 215, 0, 0.1)",
              borderColor: "#E0C200",
            },
          }}
        >
          Message
        </Button>
      </HorizontalStack>

      <Link
        to={`/users/${username}`}
        style={{
          color: "#FFD700",
          fontWeight: "bold",
          textDecoration: "none",
          marginLeft: "8px",
        }}
      >
        View
      </Link>
    </HorizontalStack>
  );
};

export default UserEntry;
