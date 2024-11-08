import { Card, Stack, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getPosts } from "../api/posts";
import { isLoggedIn } from "../helpers/authHelper";
import Loading from "./Loading";
import PostCard from "./PostCard";
import HorizontalStack from "./util/HorizontalStack";
import { MdLeaderboard } from "react-icons/md";

const TopPosts = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(null);
  const user = isLoggedIn();

  const fetchPosts = async () => {
    const query = { sortBy: "-likeCount" };
    const data = await getPosts(user && user.token, query);

    const topPosts = [];
    if (data && data.data) {
      for (let i = 0; i < 3 && i < data.data.length; i++) {
        topPosts.push(data.data[i]);
      }
    }
    setPosts(topPosts);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Stack spacing={2}>
      <Card
        sx={{
          backgroundColor: "#FFD700",
          color: "#0D1B2A",
          padding: 2,
          borderRadius: 2,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)", // Soft shadow effect
        }}
      >
        <HorizontalStack alignItems="center" spacing={1}>
          <MdLeaderboard size={24} color="#0D1B2A" /> {/* blue icon color */}
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Top Posts
          </Typography>
        </HorizontalStack>
      </Card>

      {!loading ? (
        posts && posts.length > 0 ? (
          posts.map((post) => (
            <PostCard preview="secondary" post={post} key={post._id} />
          ))
        ) : (
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ textAlign: "center", color: "#0D1B2A" }} // blue for empty message
          >
            No top posts to display.
          </Typography>
        )
      ) : (
        <Loading />
      )}
    </Stack>
  );
};

export default TopPosts;
