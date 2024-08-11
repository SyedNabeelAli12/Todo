import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const ChatForm = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      props.onSendMessage(inputValue,props?.user?.username);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" alignItems="center">
 
        <TextField
          label="Type a message"
          variant="outlined"
          fullWidth
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <Button type="submit" variant="contained" color="primary">
          Send 
        </Button>
      </Box>
    </form>
  );
};

export default ChatForm;
