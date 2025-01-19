import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Paper,
  TextField,
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Fab,
  Zoom,
  Dialog,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your assistant. Ask me anything about communication, pitching, or entrepreneurship!",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessageToRasa = async (message) => {
    try {
      const response = await fetch(
        "http://localhost:5005/webhooks/rest/webhook",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sender: "user",
            message: message,
          }),
        }
      );

      const data = await response.json();
      return data[0]?.text || "I'm sorry, I couldn't process that request.";
    } catch (error) {
      console.error("Error communicating with Rasa:", error);
      return "Sorry, I'm having trouble connecting to the server.";
    }
  };

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Get response from Rasa
    const botResponse = await sendMessageToRasa(input);
    setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Action Button */}
      <Zoom in={!isOpen}>
        <Fab
          color="primary"
          aria-label="chat"
          onClick={handleToggleChat}
          sx={{
            position: "fixed",
            bottom: 32,
            right: 32,
            zIndex: 1000,
          }}
        >
          <SmartToyIcon />
        </Fab>
      </Zoom>

      {/* Chat Dialog */}
      <Dialog
        open={isOpen}
        onClose={handleToggleChat}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            height: "600px",
            maxHeight: "80vh",
            margin: { xs: 2, sm: 4 },
            borderRadius: 2,
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Box
            sx={{
              p: 2,
              backgroundColor: "primary.main",
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Platform Assistant</Typography>
            <IconButton color="inherit" onClick={handleToggleChat} size="small">
              <CloseIcon />
            </IconButton>
          </Box>

          <List sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
            {messages.map((message, index) => (
              <ListItem
                key={index}
                sx={{
                  justifyContent:
                    message.sender === "user" ? "flex-end" : "flex-start",
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    maxWidth: "80%",
                  }}
                >
                  {message.sender === "bot" && (
                    <Avatar sx={{ mr: 1, bgcolor: "primary.main" }}>
                      <SmartToyIcon />
                    </Avatar>
                  )}
                  <Paper
                    elevation={1}
                    sx={{
                      p: 1.5,
                      backgroundColor:
                        message.sender === "user"
                          ? "primary.light"
                          : "grey.100",
                      color:
                        message.sender === "user" ? "white" : "text.primary",
                    }}
                  >
                    <ListItemText primary={message.text} />
                  </Paper>
                  {message.sender === "user" && (
                    <Avatar sx={{ ml: 1, bgcolor: "secondary.main" }}>
                      <PersonIcon />
                    </Avatar>
                  )}
                </Box>
              </ListItem>
            ))}
            <div ref={messagesEndRef} />
          </List>

          <Box
            sx={{
              p: 2,
              borderTop: 1,
              borderColor: "divider",
              display: "flex",
              backgroundColor: "background.paper",
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              size="small"
            />
            <IconButton color="primary" onClick={handleSend} sx={{ ml: 1 }}>
              <SendIcon />
            </IconButton>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default Chatbot;
