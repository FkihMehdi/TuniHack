import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  LinearProgress,
  Chip,
  Stack,
} from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

// Profile Card Component
const ProfileCard = () => {
  return (
    <Box sx={{ maxWidth: 600, margin: "0 auto", p: 2 }}>
      {/* User Profile Section */}
      <Card sx={{ mb: 2, bgcolor: "#f5f5f5" }}>
        <CardContent>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Avatar
              sx={{
                width: 56,
                height: 56,
                bgcolor: "purple",
                "& > *": { transform: "rotate(45deg)" },
              }}
            >
              <Box
                component="div"
                sx={{
                  width: "60%",
                  height: "60%",
                  bgcolor: "#4caf50",
                  transform: "rotate(45deg)",
                }}
              />
            </Avatar>

            <Box sx={{ flexGrow: 1 }}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 1 }}
              >
                <Typography variant="h6" component="div">
                  Hey, MEHDI!
                </Typography>
                <ChevronRightIcon />
              </Box>

              <Box sx={{ mb: 1 }}>
                <LinearProgress
                  variant="determinate"
                  value={30}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    bgcolor: "#e0e0e0",
                    "& .MuiLinearProgress-bar": {
                      bgcolor: "#4caf50",
                    },
                  }}
                />
                <Typography variant="caption" color="text.secondary">
                  Profile 30% complete
                </Typography>
              </Box>

              <Typography variant="body2" color="text.secondary">
                0 XP
              </Typography>
            </Box>
          </Box>

          {/* Stats Section */}
          <Box sx={{ mt: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <BoltIcon sx={{ color: "#9e9e9e" }} />
              <Typography component="span">
                <strong>0</strong> days
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Daily Streak
              </Typography>
            </Box>

            <Stack spacing={0.5}>
              <Typography variant="body2" color="text.secondary">
                Completed
              </Typography>
              <Typography variant="body2">0 Courses</Typography>
              <Typography variant="body2">0 Tracks</Typography>
              <Typography variant="body2">0 Projects</Typography>
            </Stack>
          </Box>
        </CardContent>
      </Card>

      {/* Track Section */}
      <Card>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                TRACK
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                AWS Cloud Practitioner
              </Typography>
              <Typography variant="body2" color="text.secondary">
                10 hours
              </Typography>
            </Box>
            <Chip
              label="NEW"
              size="small"
              sx={{
                bgcolor: "#ffd700",
                fontWeight: "bold",
                color: "black",
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfileCard;
