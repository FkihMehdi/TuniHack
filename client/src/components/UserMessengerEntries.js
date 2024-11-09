import { Box, Divider, List, Stack, Typography } from "@mui/material";
import React from "react";
import { AiFillMessage } from "react-icons/ai";
import Loading from "./Loading";
import UserMessengerEntry from "./UserMessengerEntry";
import HorizontalStack from "./util/HorizontalStack";
import "react-icons/bi";
import { BiSad } from "react-icons/bi";

const UserMessengerEntries = (props) => {
  return !props.loading ? (
    <>
      {props.conversations.length > 0 ? (
        <Stack
          sx={{
            borderRadius: 2,
            boxShadow: 2,
            backgroundColor: "#f9f9f9",
            padding: 2,
            height: "100%",
            overflow: "hidden",
          }}
        >
          <HorizontalStack
            alignItems="center"
            spacing={2}
            sx={{
              px: 2,
              height: "60px",
              borderBottom: "1px solid #ddd",
              mb: 2,
              color: "#2D4D78",
            }}
          >
            <AiFillMessage size={30} />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Your Conversations
            </Typography>
          </HorizontalStack>
          <Divider sx={{ mb: 2 }} />
          <Box sx={{ height: "calc(100vh - 171px)", overflowY: "auto" }}>
            <List sx={{ padding: 0 }}>
              {props.conversations.map((conversation) => (
                <UserMessengerEntry
                  conservant={props.conservant}
                  conversation={conversation}
                  key={conversation.recipient.username}
                  setConservant={props.setConservant}
                />
              ))}
            </List>
          </Box>
        </Stack>
      ) : (
        <Stack
          sx={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            spacing: 3,
            textAlign: "center",
            backgroundColor: "#fff",
            borderRadius: 2,
            boxShadow: 2,
            p: 4,
          }}
        >
          <BiSad size={80} color="#9B8C99" />
          <Typography
            variant="h4"
            sx={{ color: "#2D4D78", fontWeight: "bold" }}
          >
            No Conversations
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: "80%" }}>
            Click 'Message' on another user's profile to start a conversation
          </Typography>
        </Stack>
      )}
    </>
  ) : (
    <Stack sx={{ height: "100%" }} justifyContent="center" alignItems="center">
      <Loading />
    </Stack>
  );
};

export default UserMessengerEntries;
