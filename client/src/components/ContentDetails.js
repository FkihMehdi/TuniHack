import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import HorizontalStack from "./util/HorizontalStack";
import Moment from "react-moment";
import UserAvatar from "./UserAvatar";
import { Link } from "react-router-dom";

const ContentDetails = ({ username, createdAt, edited, preview }) => {
  return (
    <HorizontalStack sx={{}}>
      <UserAvatar width={30} height={30} username={username} />
      <Stack direction="column">
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          <Link
            color="inherit"
            underline="hover"
            onClick={(e) => {
              e.stopPropagation();
            }}
            to={"/users/" + username}
          >
            {username}
          </Link>
        </Typography>
        {!preview && (
          <Box
            sx={{
              fontSize: "0.7rem",
              color: "text.secondary",
            }}
          >
            <Moment fromNow>{createdAt}</Moment> {edited && <>(Edited)</>}
          </Box>
        )}
      </Stack>
    </HorizontalStack>
  );
};

export default ContentDetails;
