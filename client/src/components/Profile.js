import { useTheme } from "@emotion/react";
import {
  Avatar,
  Button,
  Card,
  Divider,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import {
  AiFillEdit,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";
import { isLoggedIn } from "../helpers/authHelper";
import ContentUpdateEditor from "./ContentUpdateEditor";
import Loading from "./Loading";
import UserAvatar from "./UserAvatar";
import HorizontalStack from "./util/HorizontalStack";

const Profile = (props) => {
  const [user, setUser] = useState(null);
  const currentUser = isLoggedIn();
  const theme = useTheme();

  // Defining custom colors from the palette
  const purple = "#705eaa";
  const green = "#71a769";
  const white = "#ffffff";

  useEffect(() => {
    if (props.profile) {
      setUser(props.profile.user);
    }
  }, [props.profile]);

  return (
    <Card sx={{ backgroundColor: white, padding: 3 }}>
      {user ? (
        <Stack alignItems="center" spacing={2}>
          <Box my={1}>
            <UserAvatar width={150} height={150} username={user.username} />
          </Box>

          <Typography variant="h5" color={purple}>
            {user.username}
          </Typography>

          {props.editing ? (
            <Box>
              <ContentUpdateEditor
                handleSubmit={props.handleSubmit}
                originalContent={user.biography}
                validate={props.validate}
              />
            </Box>
          ) : user.biography ? (
            <Typography textAlign="center" variant="body1" color={purple}>
              <b>Bio: </b>
              {user.biography}
            </Typography>
          ) : (
            <Typography variant="body1" color="text.secondary">
              <i>No bio yet</i>
            </Typography>
          )}

          {currentUser && user._id === currentUser.userId && (
            <Box>
              <Button
                startIcon={<AiFillEdit color={white} />}
                onClick={props.handleEditing}
                sx={{
                  backgroundColor: purple,
                  color: white,
                  "&:hover": {
                    backgroundColor: "#5b489d", // Slightly darker purple for hover
                  },
                }}
              >
                {props.editing ? <>Cancel</> : <>Edit bio</>}
              </Button>
            </Box>
          )}

          {currentUser && user._id !== currentUser.userId && (
            <Button
              variant="outlined"
              onClick={props.handleMessage}
              sx={{
                borderColor: green,
                color: green,
                "&:hover": {
                  backgroundColor: "#b3d9b1", // Light green hover effect
                },
              }}
            >
              Message
            </Button>
          )}

          <HorizontalStack>
            <Typography color="text.secondary">
              Likes <b>{props.profile.posts.likeCount}</b>
            </Typography>
            <Typography color="text.secondary">
              Posts <b>{props.profile.posts.count}</b>
            </Typography>
          </HorizontalStack>

          {/* Achievements Section */}
          <Divider sx={{ width: "100%", my: 2 }} />
          <Typography variant="h6" color={purple}>
            Achievements
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Example achievements; replace with dynamic content */}
            - winner of swafython hackthon <br />- 5 Years of experience in
            software development
          </Typography>

          {/* Workshops & Activity & Events Section */}
          <Divider sx={{ width: "100%", my: 2 }} />
          <Typography variant="h6" color={purple}>
            Workshops & Activities
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Example activities; replace with dynamic content */}
            - Guest speaker at XYZ Conference <br />- Organized Coding Bootcamp
            2023
          </Typography>

          {/* Membership Cards Section */}
          <Divider sx={{ width: "100%", my: 2 }} />
          <Typography variant="h6" color={purple}>
            Membership Cards
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Example memberships; replace with dynamic content */}
            - Member of ABC Professional Association <br />- Member in ieee ras
            chapter{" "}
          </Typography>

          {/* Social Media Icons for Contact */}
          <Divider sx={{ width: "100%", my: 2 }} />
          <Typography variant="h6" color={purple}>
            Connect with Me
          </Typography>
          <Stack direction="row" spacing={2}>
            <IconButton href="https://facebook.com" target="_blank">
              <AiFillFacebook color={purple} size={30} />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank">
              <AiFillTwitterSquare color={purple} size={30} />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank">
              <AiFillInstagram color={purple} size={30} />
            </IconButton>
          </Stack>
        </Stack>
      ) : (
        <Loading label="Loading profile" />
      )}
    </Card>
  );
};

export default Profile;
