import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

const CreatePost = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="outlined"
      size="medium"
      onClick={() => navigate("/posts/create")}
      sx={{
        gap: "0.2rem",
        whiteSpace: "nowrap",
        color: "#ffff",
        borderColor: "#ffff",
        "&:hover": {
          backgroundColor: "#28a74510",
          borderColor: "#28a745",
        },
      }}
    >
      <AiOutlinePlus style={{ flexShrink: 0, color: "#28a745" }} />
      <span>New Post</span>
    </Button>
  );
};

export default CreatePost;
