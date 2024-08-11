import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { msgRecvd, msgSend } from "./theme";

const MessageList = ({ messages, user }) => {
  return (
    <List sx={{ maxHeight: "400px", overflowY: "auto" }}>
      {messages.length > 0
        ? messages.map((msg, index) => (
            <ListItem key={index}>
              {/* <ListItemText primary={msg.message} />
          <ListItemText primary={msg?.reciever} secondary/> */}
            

              <Card
                sx={{
                  backgroundColor:
                    msg.reciever == user.username ? msgRecvd : msgSend,
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 10 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {msg.message}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 8 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {msg.reciever == user.username ? msg.username : ""}
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </ListItem>
          ))
        : ""}
    </List>
  );
};

export default MessageList;
