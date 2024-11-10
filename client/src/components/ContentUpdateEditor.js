import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const ContentUpdateEditor = (props) => {
  const [content, setContent] = useState(props.originalContent);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const content = e.target.content.value;
    let error = null;

    if (props.validate) {
      error = props.validate(content);
    }

    if (error && error.length !== 0) {
      setError(error);
    } else {
      props.handleSubmit(e);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: "600px",
        margin: "auto",
        backgroundColor: "white",
        borderRadius: 2,
        padding: 2,
        boxShadow: 3,
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          fontWeight: 600,
          color: "#705eaa", // Purple for the title
          textAlign: "center",
        }}
      >
        Edit Content
      </Typography>

      <Stack spacing={2}>
        <TextField
          value={content}
          fullWidth
          name="content"
          multiline
          rows={6}
          onChange={handleChange}
          error={error.length !== 0}
          helperText={error}
          sx={{
            backgroundColor: "#f9f9f9",
            borderRadius: 2,
            padding: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: 1,
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: error ? "red" : "#ccc",
            },
            "&:focus": {
              borderColor: "#705eaa", // Purple on focus
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            fontWeight: 600,
            padding: "10px 20px",
            textTransform: "none",
            borderRadius: 3,
            backgroundColor: "#71a769", // Green background
            "&:hover": {
              backgroundColor: "#5a8a55", // Darker green on hover
            },
          }}
        >
          Update
        </Button>
      </Stack>
    </Box>
  );
};

export default ContentUpdateEditor;
