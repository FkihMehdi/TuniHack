import { IconButton, Stack, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../helpers/authHelper";
import HorizontalStack from "./util/HorizontalStack";

const LikeBox = (props) => {
  const { likeCount, onLike } = props;
  const theme = useTheme();
  const [liked, setLiked] = useState(props.liked);

  const navigate = useNavigate();

  const handleLike = (e) => {
    if (isLoggedIn()) {
      const newLikedValue = !liked;
      setLiked(newLikedValue);
      onLike(newLikedValue);
    } else {
      navigate("/login");
    }
  };

  return (
    <HorizontalStack alignItems="center">
      <IconButton sx={{ padding: 0 }} onClick={(e) => handleLike(e)}>
        {liked ? (
          <IconContext.Provider
            value={{ color: theme.palette.primary.main, padding: 0 }}
          >
            <AiFillLike />
          </IconContext.Provider>
        ) : (
          <AiOutlineLike />
        )}
      </IconButton>
      <Typography>{likeCount}</Typography>
    </HorizontalStack>
  );
};

export default LikeBox;
