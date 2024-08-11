import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';



const MessageList = ({ messages }) => {
  return (
    <List sx={{ maxHeight: '400px', overflowY: 'auto' }}>
      {messages.length > 0 ? messages.map((msg, index) => (
        <ListItem key={index}>
          <ListItemText primary={msg.message} />
        </ListItem>
      )):0}
    </List>
  );
};

export default MessageList;
