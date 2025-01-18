import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { styled } from "@mui/system";
import { AuthLayoutWithoutRightSidebar } from "../AuthLayoutWithoutRightSidebar";

// Import the video file
import eventVideo from "../../assests/templatestandard.mp4";

const StyledBox = styled(Box)({
  backgroundColor: "#FFFFFF",
  padding: "2rem",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
});

const StyledTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#705eaa",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#71a769",
    },
    "&:hover fieldset": {
      borderColor: "#705eaa",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#705eaa",
    },
  },
});

const StyledButton = styled(Button)({
  backgroundColor: "#705eaa",
  color: "#FFFFFF",
  "&:hover": {
    backgroundColor: "#71a769",
  },
});

const GenerateWebsite = () => {
  const [eventData, setEventData] = useState({
    name: "",
    logo: "",
    description: "",
    mainImage: "",
    aboutUs: "",
    attendees: "",
    workshops: "",
    guestSpeakers: "",
    trust: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleImageChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      setEventData({ ...eventData, [field]: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Event Data:", eventData);
  };

  return (
    <AuthLayoutWithoutRightSidebar>
      <StyledBox component="form" onSubmit={handleSubmit}>
        <Typography variant="h4" color="#705eaa" mb={3}>
          Event Creation Form
        </Typography>
        <Grid container spacing={3}>
          {/* Event's Name */}
          <Grid item xs={12}>
            <StyledTextField
              label="Event's Name"
              name="name"
              value={eventData.name}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          {/* Logo Upload */}
          <Grid item xs={12}>
            <InputLabel sx={{ color: "#705eaa" }}>Event Logo</InputLabel>
            <OutlinedInput
              type="file"
              inputProps={{ accept: "image/*" }}
              onChange={(e) => handleImageChange(e, "logo")}
              fullWidth
            />
          </Grid>

          {/* Event Description */}
          <Grid item xs={12}>
            <StyledTextField
              label="Event Description"
              name="description"
              value={eventData.description}
              onChange={handleChange}
              multiline
              rows={3}
              fullWidth
              required
            />
          </Grid>

          {/* Main Image Upload */}
          <Grid item xs={12}>
            <InputLabel sx={{ color: "#705eaa" }}>Main Image</InputLabel>
            <OutlinedInput
              type="file"
              inputProps={{ accept: "image/*" }}
              onChange={(e) => handleImageChange(e, "mainImage")}
              fullWidth
            />
          </Grid>

          {/* About Us Description */}
          <Grid item xs={12}>
            <StyledTextField
              label="About Us"
              name="aboutUs"
              value={eventData.aboutUs}
              onChange={handleChange}
              multiline
              rows={3}
              fullWidth
              required
            />
          </Grid>

          {/* Stats: Attendees, Workshops, Guest Speakers */}
          <Grid item xs={12} md={4}>
            <StyledTextField
              label="Number of Attendees"
              name="attendees"
              value={eventData.attendees}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledTextField
              label="Number of Workshops"
              name="workshops"
              value={eventData.workshops}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledTextField
              label="Number of Guest Speakers"
              name="guestSpeakers"
              value={eventData.guestSpeakers}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>

          {/* Trust Section */}
          <Grid item xs={12}>
            <StyledTextField
              label="Trust Section Content"
              name="trust"
              value={eventData.trust}
              onChange={handleChange}
              multiline
              rows={3}
              fullWidth
              required
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <StyledButton variant="contained" type="submit" fullWidth>
              Submit Event Details
            </StyledButton>
          </Grid>

          {/* Video Template Section */}
          <Grid item xs={12}>
            <Typography variant="h5" color="#705eaa" mb={2}>
              Event Template Preview
            </Typography>
            <Card sx={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>
              <CardMedia
                component="video"
                src={eventVideo}
                controls
                title="Event Template Preview"
                height="300"
              />
              <CardContent>
                <Typography color="#71a769">
                  This video shows a standard event template for reference.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </StyledBox>
    </AuthLayoutWithoutRightSidebar>
  );
};

export { GenerateWebsite };
