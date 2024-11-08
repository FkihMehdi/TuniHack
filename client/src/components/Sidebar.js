import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { getPosts } from "../api/posts";
import { isLoggedIn } from "../helpers/authHelper";
import Loading from "./Loading";
import PostCard from "./PostCard";
import TopPosts from "./TopPosts";
import FindUsers from "./FindUsers";
import Findassociations from "./Findassociations";

const Sidebar = () => {
  return (
    <Stack spacing={2}>
      <TopPosts />
      <Findassociations />
      <FindUsers />
    </Stack>
  );
};

export default Sidebar;
