import {
  Button,
  Card,
  Stack,
  TextField,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
  IconButton,
  Box,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api/posts";
import ErrorAlert from "./ErrorAlert";
import { isLoggedIn } from "../helpers/authHelper";
import HorizontalStack from "./util/HorizontalStack";
import UserAvatar from "./UserAvatar";
import DeleteIcon from "@mui/icons-material/Delete";

const PostEditor = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    postType: "",
    images: [],
  });

  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState({});
  const user = isLoggedIn();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    const errors = validate();
    setErrors(errors);
  };
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: [...formData.images, ...files] });
  };
  const removeImage = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    setFormData({ ...formData, images: newImages });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const data = await createPost(formData, isLoggedIn());
    setLoading(false);
    if (data && data.error) {
      setServerError(data.error);
    } else {
      navigate("/posts/" + data._id);
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.title) {
      errors.title = "Title is required";
    }
    if (!formData.content) {
      errors.content = "Content is required";
    }
    if (!formData.postType) {
      errors.postType = "Post type is required";
    }
    return errors;
  };

  return (
    <Card
      sx={{
        p: 3,
        maxWidth: 600,
        mx: "auto",
        boxShadow: 3,
        backgroundColor: "#0D1B2A",
      }}
    >
      <Stack spacing={3}>
        {user && (
          <HorizontalStack spacing={2}>
            <UserAvatar width={50} height={50} username={user.username} />
            <Typography variant="h5" sx={{ color: "#FFD700" }}>
              What would you like to post today, {user.username}?
            </Typography>
          </HorizontalStack>
        )}
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Title"
            required
            name="title"
            margin="normal"
            onChange={handleChange}
            error={errors.title !== undefined}
            helperText={errors.title}
            sx={{
              bgcolor: "#1D2A3A",
              borderRadius: 1,
              color: "#FFF",
              "& .MuiInputLabel-root": { color: "#FFD700" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#FFD700" },
              },
            }}
          />
          <TextField
            fullWidth
            label="Content"
            multiline
            rows={10}
            name="content"
            margin="normal"
            onChange={handleChange}
            error={errors.content !== undefined}
            helperText={errors.content}
            required
            sx={{
              bgcolor: "#1D2A3A",
              borderRadius: 1,
              color: "#FFF",
              "& .MuiInputLabel-root": { color: "#FFD700" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#FFD700" },
              },
            }}
          />
          <FormControl
            fullWidth
            margin="normal"
            error={errors.postType !== undefined}
          >
            <InputLabel sx={{ color: "#FFD700" }}>Post Type</InputLabel>
            <Select
              value={formData.postType}
              label="Post Type"
              onChange={handleChange}
              name="postType"
              sx={{
                bgcolor: "#1D2A3A",
                borderRadius: 1,
                color: "#FFF",
                "& .MuiSelect-icon": { color: "#FFD700" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#FFD700" },
                },
              }}
            >
              <MenuItem value="hackathon">Hackathon</MenuItem>
              <MenuItem value="call-for-ambassadors">
                Call for Ambassadors
              </MenuItem>
              <MenuItem value="event">Event</MenuItem>
              <MenuItem value="workshop">Workshop</MenuItem>
              <MenuItem value="call-for-sponsorship">
                Call for Sponsorship
              </MenuItem>
            </Select>
            {errors.postType && (
              <FormHelperText sx={{ color: "#FFD700" }}>
                {errors.postType}
              </FormHelperText>
            )}
          </FormControl>
          <Box
            sx={{
              p: 2,
              borderRadius: 2,
              border: "2px dashed #FFD700",
              backgroundColor: "#1D2A3A",
              color: "#FFD700",
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#253545",
                borderColor: "#FFCC00",
              },
            }}
          >
            <Typography variant="h6">Drag & Drop Images Here</Typography>
            <input
              type="file"
              multiple
              name="images"
              onChange={handleImageChange}
              style={{ display: "none" }}
              id="image-upload"
            />
            <label htmlFor="image-upload">
              <Button
                variant="outlined"
                component="span"
                sx={{
                  bgcolor: "#FFD700",
                  color: "#0D1B2A",
                  "&:hover": { bgcolor: "#FFCC00" },
                }}
              >
                Or Browse Files
              </Button>
            </label>
          </Box>
          <Box mt={2}>
            {formData.images.length > 0 && (
              <Typography variant="h6" sx={{ color: "#FFD700" }}>
                Preview of Uploaded Images:
              </Typography>
            )}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              {formData.images.map((image, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    display: "inline-block",
                    width: "100px",
                    height: "100px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: 3,
                    "&:hover": {
                      boxShadow: 6,
                    },
                  }}
                >
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Preview ${index}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <IconButton
                    onClick={() => removeImage(index)}
                    sx={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      color: "#FFD700",
                      backgroundColor: "#0D1B2A",
                      "&:hover": { backgroundColor: "#FFCC00" },
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Box>
          <ErrorAlert error={serverError} />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            disabled={loading}
            sx={{
              mt: 2,
              bgcolor: "#FFD700",
              color: "#0D1B2A",
              "&:hover": {
                bgcolor: "#FFCC00",
              },
            }}
          >
            {loading ? <>Submitting...</> : <>Submit</>}
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};

export default PostEditor;
