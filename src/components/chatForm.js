import React, { useState } from 'react';
import { TextField, Button, Box, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatForm = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      props.onSendMessage(inputValue,props?.user?.username,"admin");
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
        {/* <Button type="submit" variant="contained" color="primary">
          Send 
        </Button> */}

        <IconButton type='submit' variant='contained'>
       
<SendIcon/>
        </IconButton>
      </Box>
    </form>
  );
};

export default ChatForm;
