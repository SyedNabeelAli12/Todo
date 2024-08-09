import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import generateRandomAlphanumeric from "../helperFunction";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function AddToDoDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [description, setDescription] = useState("");

  // Define onChange handlers
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const addTask = async () => {
    try {
      const response = await fetch("http://127.0.0.1:3001/todo/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          dueDate: dueDate,
          description: description,
          completed: false,
          userId: props.user.userId,
          image:
            "data:image/jpeg;base64,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",
          id: generateRandomAlphanumeric(8),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add item");
   
      }

      const result = await response.json();
      console.log("Item added successfully:", result);
      
      // Clear form fields after successful submission
      setTitle("");
      setDescription("");
      setDueDate("");
      setOpen(false);
    } catch (err) {
      console.log(err.message);
    }
    //   finally {

    //   }
  };

  return (
    <React.Fragment>


      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        {/* <AddTask /> */}
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab
            size="small"
            sx={{
              backgroundColor: "gray",
              color: "white",
              ":hover": { backgroundColor: "black" },
            }}
            onClick={handleClickOpen}
            aria-label="add"
          >
            <AddIcon />
          </Fab>
        </Box>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle
          style={{ cursor: "move", backgroundColor: "black" }}
          id="draggable-dialog-title"
        >
          <span style={{ color: "white" }}>Add To Do </span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Box
              sx={{ flexGrow: 0, display: "flex", minwidth: "40%", padding: 1 }}
            >
              <Grid container spacing={1}>
                <Grid item xs={4}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Title"
                    value={title}
                    onChange={handleTitleChange}
                    multiline
                    fullWidth
                    maxRows={4}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Due Date"
                    value={dueDate}
                    onChange={handleDueDateChange}
                    multiline
                    fullWidth
                    maxRows={4}
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Description"
                    value={description}
                    onChange={handleDescriptionChange}
                    multiline
                    fullWidth
                    maxRows={5}
                    minRows={5}
                  />
                </Grid>
              </Grid>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={addTask}>Add Task</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
