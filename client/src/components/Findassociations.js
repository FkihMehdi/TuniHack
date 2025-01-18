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
        backgroundColor: "#FFFFFF", // Fond blanc pour un look moderne
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)", // Ombre douce pour élégance
        borderRadius: 4,
      }}
    >
      <Stack spacing={2}>
        <HorizontalStack justifyContent="space-between">
          <HorizontalStack spacing={1} alignItems="center">
            <AiOutlineUser color="#705eaa" size={28} /> {/* Icône violet */}
            <Typography
              variant="h5"
              sx={{ color: "#705eaa", fontWeight: "bold", fontSize: 20 }} // Texte violet élégant
            >
              Connect with associations
            </Typography>
          </HorizontalStack>
          <IconButton
            sx={{
              color: "#71a769", // Vert pour le bouton de rafraîchissement
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
        <Divider sx={{ backgroundColor: "#705eaa", opacity: 0.5 }} />{" "}
        {/* Diviseur en violet */}
        {loading ? (
          <Loading sx={{ color: "#705eaa" }} /> // Accent violet pour le chargement
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
