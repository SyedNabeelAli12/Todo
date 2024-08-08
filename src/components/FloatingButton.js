

import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";

import AddIcon from '@mui/icons-material/Add';


 function AddTask() {
  return (


    
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
    <Fab
      size="small"
      sx={{ backgroundColor: "gray", color: "white" ,":hover":{backgroundColor : 'black'} }}
      aria-label="add"
    >
      <AddIcon
    
      />
    </Fab>
    </Box>
  );
}

export default AddTask