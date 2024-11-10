import {
  Card,
  IconButton,
  Typography,
  useTheme,
  Box,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { AiFillCheckCircle, AiFillEdit, AiFillMessage } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { BiTrash } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { deletePost, likePost, unlikePost, updatePost } from "../api/posts";
import { isLoggedIn } from "../helpers/authHelper";
import ContentDetails from "./ContentDetails";
import LikeBox from "./LikeBox";
import PostContentBox from "./PostContentBox";
import HorizontalStack from "./util/HorizontalStack";
import ContentUpdateEditor from "./ContentUpdateEditor";
import Markdown from "./Markdown";
import UserLikePreview from "./UserLikePreview";

const PostCard = (props) => {
  const { preview, removePost } = props;
  const postData = props.post;
  const navigate = useNavigate();
  const user = isLoggedIn();
  const isAuthor = user && user.username === postData.poster.username;

  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [post, setPost] = useState(postData);
  const [likeCount, setLikeCount] = useState(post.likeCount);

  const theme = useTheme();
  const iconColor = "#71A769"; // Green accent color for icons

  const handleDeletePost = async (e) => {
    e.stopPropagation();
    if (!confirm) setConfirm(true);
    else {
      setLoading(true);
      await deletePost(post._id, isLoggedIn());
      setLoading(false);
      if (preview) removePost(post);
      else navigate("/");
    }
  };

  const handleEditPost = (e) => {
    e.stopPropagation();
    setEditing(!editing);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    await updatePost(post._id, isLoggedIn(), { content });
    setPost({ ...post, content, edited: true });
    setEditing(false);
  };

  const handleLike = async (liked) => {
    if (liked) {
      setLikeCount(likeCount + 1);
      await likePost(post._id, user);
    } else {
      setLikeCount(likeCount - 1);
      await unlikePost(post._id, user);
    }
  };

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 3,
        overflow: "hidden",
        backgroundColor: "#FFF",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <Box>
        <HorizontalStack spacing={0} alignItems="initial">
          <PostContentBox clickable={preview} post={post} editing={editing}>
            <HorizontalStack justifyContent="space-between">
              <ContentDetails
                username={post.poster.username}
                createdAt={post.createdAt}
                edited={post.edited}
                preview={preview === "secondary"}
                sx={{
                  color: "#705EAA", // Purple text
                }}
              />
              {user &&
                (isAuthor || user.isAdmin) &&
                preview !== "secondary" && (
                  <HorizontalStack>
                    <IconButton
                      size="small"
                      onClick={handleEditPost}
                      disabled={loading}
                    >
                      {editing ? (
                        <MdCancel color={iconColor} />
                      ) : (
                        <AiFillEdit color={iconColor} />
                      )}
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={handleDeletePost}
                      disabled={loading}
                    >
                      {confirm ? (
                        <AiFillCheckCircle color={theme.palette.error.main} />
                      ) : (
                        <BiTrash color={theme.palette.error.main} />
                      )}
                    </IconButton>
                  </HorizontalStack>
                )}
            </HorizontalStack>

            <Typography
              variant="h5"
              gutterBottom
              sx={{ overflow: "hidden", mt: 1, color: "#705EAA" }}
            >
              {post.title}
            </Typography>

            {preview !== "secondary" && (
              <Box overflow="hidden" className="content">
                {editing ? (
                  <ContentUpdateEditor
                    handleSubmit={handleSubmit}
                    originalContent={post.content}
                  />
                ) : (
                  <>
                    <Markdown content={post.content} />
                    <img
                      src="https://www.aeroday.tn/assets/pdp-BZKnssaS.png"
                      alt={post.title}
                      style={{
                        width: "100%",
                        height: "400px",
                        objectFit: "cover",
                        borderRadius: "10px",
                        marginBottom: "10px",
                      }}
                    />
                  </>
                )}
              </Box>
            )}
          </PostContentBox>
        </HorizontalStack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            padding: 2,
            backgroundColor: "#F9F9F9",
            borderTop: "1px solid #E0E0E0",
          }}
        >
          <HorizontalStack>
            <LikeBox
              likeCount={likeCount}
              liked={post.liked}
              onLike={handleLike}
            />
            <HorizontalStack alignItems="center">
              <IconButton onClick={() => navigate("/posts/" + post._id)}>
                <IconContext.Provider value={{ color: iconColor }}>
                  <AiFillMessage />
                </IconContext.Provider>
              </IconButton>
              <Typography sx={{ ml: 1, color: "#705EAA" }}>
                {post.commentCount}
              </Typography>
            </HorizontalStack>
          </HorizontalStack>
          <UserLikePreview
            postId={post._id}
            userLikePreview={post.userLikePreview}
          />
        </Stack>
      </Box>
    </Card>
  );
};

export default PostCard;
