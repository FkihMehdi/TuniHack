import {
  Avatar,
  Card,
  Divider,
  IconButton,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdRefresh } from "react-icons/md";
import { getRandomUsers } from "../api/users";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import UserAvatar from "./UserAvatar";
import HorizontalStack from "./util/HorizontalStack";
import UserEntry from "./UserEntry";

const FindUsers = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    const data = await getRandomUsers({ size: 5 });
    setLoading(false);
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleClick = () => {
    fetchUsers();
  };

  return (
    <Card
      sx={{
        padding: 3,
        backgroundColor: "#0D1B2A", // Dark Blue
        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.15)",
        borderRadius: 4,
      }}
    >
      <Stack spacing={2}>
        <HorizontalStack justifyContent="space-between">
          <HorizontalStack spacing={1} alignItems="center">
            <AiOutlineUser color="#FFD700" size={28} /> {/* Gold Icon */}
            <Typography
              variant="h5"
              sx={{ color: "#FFD700", fontWeight: "bold", fontSize: 20 }} // Gold Text
            >
              Connect with associations
            </Typography>
          </HorizontalStack>
          <IconButton
            sx={{
              color: "#FFD700", // Gold Color
              padding: 0,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "rotate(180deg) scale(1.1)",
              },
            }}
            disabled={loading}
            onClick={handleClick}
          >
            <MdRefresh />
          </IconButton>
        </HorizontalStack>
        <Divider sx={{ backgroundColor: "#FFD700", opacity: 0.8 }} />{" "}
        {/* Gold Divider */}
        {loading ? (
          <Loading sx={{ color: "#FFD700" }} /> // Gold for Loading
        ) : (
          users &&
          users.map((user) => (
            <UserEntry username={user.username} key={user.username} />
          ))
        )}
      </Stack>
    </Card>
  );
};

export default FindUsers;
