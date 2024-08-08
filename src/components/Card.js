import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Stack,
  IconButton,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import TaskIcon from '@mui/icons-material/Task';
import EditIcon from '@mui/icons-material/Edit';


const ToDoCard = ({ image, id, description, dueDate, title }) => {
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        sx={{ width: "30%", height: "100%", objectFit: "cover" }}
        image={image}
        alt="Todo Image"
      />

      {/* Content */}
      <CardContent
        sx={{
          flexGrow: 1,
          padding: 1,
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="body2" color="textSecondary">
          <strong>ID:</strong> {id}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <strong>Title:</strong> {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <strong>Description:</strong> {description}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          <strong>Due Date:</strong> {dueDate}
        </Typography>

        {/* Action Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "auto",
          }}
        >
          <Stack spacing={1} direction={"row"}>
            {/* <Button variant="contained" color="primary" size="small">
              Complete
            </Button> */}

            <IconButton aria-label="delete" >
        <DeleteIcon sx={{color:"red"}} />
      </IconButton>

      <IconButton aria-label="delete">
        <TaskIcon  sx={{color:"green"}}/>
      </IconButton>

      <IconButton aria-label="delete">
        <EditIcon  sx={{color:"gray"}}/>
      </IconButton>
         
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ToDoCard;
