import React, { useState } from "react";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Chip,
  Divider,
  Grid,
} from "@mui/material";
import {
  LocationOn,
  Business,
  WorkOutline,
  AccessTime,
  Payment,
  Star,
} from "@mui/icons-material";

const jobsName = [
  "Startup Founder",
  "Business Consultant",
  "Venture Capitalist",
  "Innovation Manager",
  "Entreprenership Coach",
  "Product Manager",
];

// Mock data with more detailed job information
const jobs = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  title: jobsName[Math.floor(Math.random() * jobsName.length)],
  company: `Tech Company ${i + 1}`,
  location: [33.8869 + Math.random() * 2, 9.5375 + Math.random() * 2],
  salary: `${40 + Math.floor(Math.random() * 60)}k - ${
    60 + Math.floor(Math.random() * 40)
  }k`,
  type: Math.random() > 0.5 ? "Full-time" : "Part-time",
  experience: `${Math.floor(Math.random() * 5)} - ${Math.floor(
    Math.random() * 5 + 5
  )} years`,
  skills: ["React", "Node.js", "JavaScript", "MongoDB"].slice(
    0,
    Math.floor(Math.random() * 3) + 2
  ),
  description:
    "We are looking for a talented software engineer to join our dynamic team. The ideal candidate will have strong problem-solving skills and experience with modern web technologies.",
  postedDate: new Date(
    Date.now() - Math.floor(Math.random() * 10) * 24 * 60 * 60 * 1000
  ).toLocaleDateString(),
}));

const Map = () => {
  const position = [33.8869, 9.5375]; // Tunisia coordinates
  const [selectedJob, setSelectedJob] = useState(null);

  const handleMarkerClick = (job) => {
    setSelectedJob(job);
  };

  const handleClose = () => {
    setSelectedJob(null);
  };

  const JobDetailsDialog = ({ job, open, onClose }) => {
    if (!job) return null;

    return (
      <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
        <DialogTitle>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">{job.title}</Typography>
            <Chip
              label={job.type}
              color="primary"
              size="small"
              sx={{ borderRadius: 1 }}
            />
          </Box>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {/* Company and Location Info */}
            <Grid item xs={12}>
              <Box display="flex" alignItems="center" gap={2} mb={2}>
                <Business color="action" />
                <Typography variant="subtitle1">{job.company}</Typography>
                <LocationOn color="action" />
                <Typography variant="subtitle1">
                  {`${job.location[0].toFixed(2)}, ${job.location[1].toFixed(
                    2
                  )}`}
                </Typography>
              </Box>
            </Grid>

            {/* Key Details */}
            <Grid item xs={12}>
              <Box display="flex" flexWrap="wrap" gap={3} mb={3}>
                <Box display="flex" alignItems="center" gap={1}>
                  <Payment color="action" />
                  <Typography>{job.salary}</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <WorkOutline color="action" />
                  <Typography>{job.experience} experience</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <AccessTime color="action" />
                  <Typography>Posted {job.postedDate}</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" gutterBottom>
                Required Skills
              </Typography>
              <Box display="flex" gap={1} mb={3}>
                {job.skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    variant="outlined"
                    icon={<Star fontSize="small" />}
                  />
                ))}
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Job Description
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {job.description}
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
          <Button variant="contained" color="primary">
            Apply Now
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <>
      <MapContainer
        center={position}
        zoom={6}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {jobs.map((job) => (
          <CircleMarker
            key={job.id}
            center={job.location}
            pathOptions={{
              color: selectedJob?.id === job.id ? "#1976d2" : "red",
              fillOpacity: 0.7,
            }}
            radius={10}
            eventHandlers={{
              click: () => handleMarkerClick(job),
            }}
          >
            <Tooltip>
              <Typography variant="body2" fontWeight="bold">
                {job.title}
              </Typography>
              <Typography variant="caption">Click for details</Typography>
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>

      <JobDetailsDialog
        job={selectedJob}
        open={!!selectedJob}
        onClose={handleClose}
      />
    </>
  );
};

export default Map;
