import { useTheme } from "@emotion/react";
import {
  Avatar,
  Button,
  Card,
  Divider,
  Stack,
  Typography,
  Badge,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AiFillEdit } from "react-icons/ai";
import ContentUpdateEditor from "./ContentUpdateEditor";
import Loading from "./Loading";
import UserAvatar from "./UserAvatar";
import HorizontalStack from "./util/HorizontalStack";

const Profile = (props) => {
  const {
    profile,
    editing,
    handleSubmit,
    handleEditing,
    validate,
    handleMessage,
  } = props;
  const theme = useTheme();
  const iconColor = theme.palette.primary.main;

  // Set colors for the new theme (dark blue and gold)
  const backgroundColor = "#0D1B2A"; // Dark blue background
  const textColor = "#FFD700"; // Gold text

  return (
    <Card
      sx={{
        backgroundColor: backgroundColor,
        color: textColor,
        padding: 3,
        borderRadius: 2,
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)", // Soft shadow effect
      }}
    >
      {profile ? (
        <Stack alignItems="center" spacing={2}>
          <Box my={1}>
            <UserAvatar width={150} height={150} username={profile.username} />
          </Box>

          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            {profile.username}
          </Typography>

          {editing ? (
            <Box>
              <ContentUpdateEditor
                handleSubmit={handleSubmit}
                originalContent={profile.biography}
                validate={validate}
              />
            </Box>
          ) : profile.biography ? (
            <Typography textAlign="center" variant="p">
              <b>Bio: </b>
              {profile.biography}
            </Typography>
          ) : (
            <Typography variant="p">
              <i>No bio yet</i>
            </Typography>
          )}

          {props.currentUser && profile._id === props.currentUser.userId && (
            <Box>
              <Button
                startIcon={<AiFillEdit color={iconColor} />}
                onClick={handleEditing}
                sx={{
                  backgroundColor: "#FFD700", // Gold button
                  color: "#0D1B2A", // Dark blue text
                  "&:hover": {
                    backgroundColor: "#FFB700", // Slightly darker gold on hover
                  },
                }}
              >
                {editing ? <>Cancel</> : <>Edit bio</>}
              </Button>
            </Box>
          )}

          {props.currentUser && profile._id !== props.currentUser.userId && (
            <Button
              variant="outlined"
              sx={{
                borderColor: "#FFD700", // Gold border
                color: "#FFD700", // Gold text color
                "&:hover": {
                  borderColor: "#FFB700", // Hover effect
                  color: "#FFB700",
                },
              }}
              onClick={handleMessage}
            >
              Message
            </Button>
          )}

          {/* Horizontal Stack for Likes and Posts */}
          <HorizontalStack>
            <Typography color="text.secondary">
              Likes <b>{profile.posts.likeCount}</b>
            </Typography>
            <Typography color="text.secondary">
              Posts <b>{profile.posts.count}</b>
            </Typography>
          </HorizontalStack>

          {/* Clubs and Associations Section */}
          <Box mt={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Clubs & Associations
            </Typography>
            <Typography variant="body2">
              {profile.clubs?.length > 0 ? (
                profile.clubs.map((club, index) => (
                  <Box key={index} sx={{ marginBottom: 1 }}>
                    <Typography variant="body2">{club.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {club.role}
                    </Typography>
                  </Box>
                ))
              ) : (
                <i>No clubs or associations listed</i>
              )}
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Achievements Section with Badge */}
          <Box mt={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Achievements
            </Typography>
            <Box>
              {profile.achievements?.length > 0 ? (
                profile.achievements.map((achievement, index) => (
                  <Box
                    key={index}
                    sx={{
                      marginBottom: 1,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {/* Badge for Achievement */}
                    <Badge
                      badgeContent="🏅"
                      color="primary"
                      sx={{
                        fontSize: 20,
                        marginRight: 1,
                      }}
                    />
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      {achievement.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ ml: 1 }}
                    >
                      {achievement.description}
                    </Typography>
                  </Box>
                ))
              ) : (
                <i>No achievements listed</i>
              )}
            </Box>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Events and Workshops Section */}
          <Box mt={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Events & Workshops
            </Typography>
            <Typography variant="body2">
              {profile.events?.length > 0 ? (
                profile.events.map((event, index) => (
                  <Box key={index} sx={{ marginBottom: 1 }}>
                    <Typography variant="body2">{event.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {event.date}
                    </Typography>
                  </Box>
                ))
              ) : (
                <i>No events or workshops listed</i>
              )}
            </Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          {/* Social Media Contact Section */}
          <Box mt={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Contact & Social Media
            </Typography>
            <Box>
              {profile.socials?.instagram && (
                <Typography variant="body2">
                  <a
                    href={profile.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram: {profile.socials.instagram}
                  </a>
                </Typography>
              )}
              {profile.socials?.facebook && (
                <Typography variant="body2">
                  <a
                    href={profile.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook: {profile.socials.facebook}
                  </a>
                </Typography>
              )}
              {profile.socials?.linkedin && (
                <Typography variant="body2">
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn: {profile.socials.linkedin}
                  </a>
                </Typography>
              )}
              {profile.socials?.github && (
                <Typography variant="body2">
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub: {profile.socials.github}
                  </a>
                </Typography>
              )}
            </Box>
          </Box>
        </Stack>
      ) : (
        <Loading label="Loading profile" />
      )}
    </Card>
  );
};

export default Profile;
