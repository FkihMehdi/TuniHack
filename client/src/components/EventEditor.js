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
  OutlinedInput,
  Chip,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../api/posts";
import ErrorAlert from "./ErrorAlert";
import { isLoggedIn } from "../helpers/authHelper";
import HorizontalStack from "./util/HorizontalStack";
import UserAvatar from "./UserAvatar";
import DeleteIcon from "@mui/icons-material/Delete";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const tags = [
  "web development",
  "mobile development",
  "data science",
  "cybersecurity",
  "cloud computing",
  "machine learning",
  "artificial intelligence",
  "blockchain",
  "internet of things",
  "physics",
  "chemistry",
  "biology",
  "mathematics",
  "engineering",
  "medicine",
];

const typpes = [
  "workshop",
  "competition",
  "seminar",
  "conference",
  "other",
  "hackathon",
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

const EventEditor = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    postType: "",
    location: "",
    images: [],
    tags: [],
  });

  const [serverError, setServerError] = useState("");
  const [errors, setErrors] = useState({});
  const user = isLoggedIn();

  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

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
    console.log(formData);

    // const data = await createPost(formData, isLoggedIn());
    // setLoading(false);
    // if (data && data.error) {
    //   setServerError(data.error);
    // } else {
    //   navigate("/posts/" + data._id);
    // }
  };

  const validate = () => {
    const errors = {};
    if (!formData.title) errors.title = "Title is required";
    if (!formData.content) errors.content = "Content is required";
    if (!formData.postType) errors.postType = "Post type is required";
    return errors;
  };

  return (
    <Card
      sx={{
        p: 3,
        maxWidth: 600,
        mx: "auto",
        boxShadow: 3,
        backgroundColor: "#F4F3EE", // Beige clair
      }}
    >
      <Stack spacing={3}>
        {user && (
          <HorizontalStack spacing={2}>
            <UserAvatar width={50} height={50} username={user.username} />
            <Typography variant="h5" sx={{ color: "#3A4466" }}>
              {" "}
              {/* Bleu profond */}
              What event you want to create today, {user.username}?
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
              bgcolor: "#F4F3EE", // Beige clair
              borderRadius: 1,
              color: "#2F2F2F", // Gris foncé
              "& .MuiInputLabel-root": { color: "#705EAA" }, // Couleur principale
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#705EAA" },
              },
            }}
          />
          <TextField
            fullWidth
            label="Description"
            multiline
            rows={10}
            name="Description"
            margin="normal"
            onChange={handleChange}
            error={errors.content !== undefined}
            helperText={errors.content}
            required
            sx={{
              bgcolor: "#F4F3EE",
              borderRadius: 1,
              color: "#2F2F2F",
              "& .MuiInputLabel-root": { color: "#705EAA" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#705EAA" },
              },
            }}
          />
          <FormControl
            fullWidth
            margin="normal"
            error={errors.postType !== undefined}
          >
            <InputLabel sx={{ color: "#705EAA" }}>Event Type</InputLabel>
            <Select
              value={formData.postType}
              label="Post Type"
              onChange={handleChange}
              name="postType"
              sx={{
                bgcolor: "#F4F3EE",
                borderRadius: 1,
                color: "#2F2F2F",
                "& .MuiSelect-icon": { color: "#705EAA" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#705EAA" },
                },
              }}
            >
              {typpes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
            {errors.postType && (
              <FormHelperText sx={{ color: "#705EAA" }}>
                {errors.postType}
              </FormHelperText>
            )}
          </FormControl>
          <Box
            sx={{
              bgcolor: "#F4F3EE",
              borderRadius: 1,
              width: "100%",
              color: "#2F2F2F",
              "& .MuiInputLabel-root": { color: "#705EAA" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#705EAA" },
              },
            }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["DatePicker"]}
                sx={{
                  width: "100%",
                }}
              >
                <DatePicker
                  label="pick a date"
                  sx={{
                    width: "100%",
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>
          <TextField
            fullWidth
            label="Location"
            required
            name="location"
            margin="normal"
            onChange={handleChange}
            error={errors.location !== undefined}
            helperText={errors.location}
            sx={{
              bgcolor: "#F4F3EE",
              borderRadius: 1,
              color: "#2F2F2F",
              "& .MuiInputLabel-root": { color: "#705EAA" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#705EAA" },
              },
            }}
          />
          <Box
            sx={{
              p: 2,
              borderRadius: 2,
              border: "2px dashed #705EAA", // Couleur principale
              backgroundColor: "#F4F3EE",
              color: "#3A4466", // Bleu profond
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#A3CFA9", // Vert doux
                borderColor: "#705EAA",
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
                  bgcolor: "#705EAA",
                  color: "#F4F3EE",
                  "&:hover": { bgcolor: "#A3CFA9" },
                }}
              >
                Or Browse Files
              </Button>
            </label>
          </Box>
          <FormControl
            fullWidth
            sx={{
              mt: 2,
              // border: "1px solid #705EAA",
              // borderRadius: 1,
            }}
          >
            <InputLabel id="demo-multiple-chip-label">Tags</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={personName}
              onChange={handleChange2}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip
                      key={value}
                      label={value}
                      sx={{ bgcolor: "#705EAA", color: "#F4F3EE" }}
                    />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {tags.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box mt={2}>
            {formData.images.length > 0 && (
              <Typography variant="h6" sx={{ color: "#705EAA" }}>
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
                    "&:hover": { boxShadow: 6 },
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
                      color: "#F4F3EE",
                      backgroundColor: "#705EAA",
                      "&:hover": { backgroundColor: "#3A4466" },
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
              bgcolor: "#705EAA",
              color: "#F4F3EE",
              "&:hover": { bgcolor: "#A3CFA9" },
            }}
          >
            {loading ? <>Submitting...</> : <>Submit</>}
            {loading ? <>Submitting...</> : <>Submit</>}
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};

export default EventEditor;
