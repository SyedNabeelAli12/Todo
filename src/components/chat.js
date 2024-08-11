import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import {
  Container,
  Typography,
  Paper,
  Snackbar,
  Alert,
  Box,
} from "@mui/material";
import ChatForm from "./chatForm";
import MessageList from "./chatList";
import axios from "axios";

const socket = io("http://localhost:3002", {
  transports: ["websocket", "polling"],
});

const Chat = (props) => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [mapMessages, setMapMessages] = useState(false);

  const fetchNotes = async () => {
    console.log(props.user.username);
    const response = await axios.post("http://127.0.0.1:3001/msg/", {
      username: props.user.username,
    });

    setMessages(response.data);
    console.log(response.data);
    console.log("check", messages);

    // if (Array.isArray(response.data)) {
    //     setMessages((prevMessages) => [...response.data, ...prevMessages]);
    //   } else {
    //     console.error('Expected an array of messages');
    //   }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => {
    setMapMessages(true);
  }, [messages]);

  useEffect(() => {
    const handleError = (error) => {
      console.error("Socket error:", error);
      setError("An error occurred while connecting to the chat server.");
      setOpenSnackbar(true);
    };

    socket.on("connect_error", handleError);
    socket.on("connect_timeout", handleError);
    socket.on("error", handleError);

    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, {message:msg}]);
    });

    return () => {
      socket.off("chat message");
      socket.off("connect_error");
      socket.off("connect_timeout");
      socket.off("error");
    };
  }, []);

  const handleSendMessage = (message, user) => {
    try {
      socket.emit("chat message", message, user);
    } catch (err) {
      console.error("Send message error:", err);
      setError("Failed to send the message.");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    setError(null);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 80,
        right: 0,
        margin: "16px",
        width: "300px",
        padding: "10",
      }}
    >
      <Paper
        elevation={3}
        style={{ height: "500px", display: "flex", flexDirection: "column" }}
      >
        <Typography
          variant="h6"
          gutterBottom
          align="center"
          style={{ padding: "10px" }}
        >
          Chat
        </Typography>
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
            height: "calc(100% - 60px)", // Adjust height based on header and footer sizes
          }}
        >
          {mapMessages ? <MessageList messages={messages} /> : ""}{" "}
        </Box>

        <ChatForm onSendMessage={handleSendMessage} user={props.user} />
      </Paper>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Chat;
