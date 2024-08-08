import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import MediaCard from "./components/Card";
import TodoRender from "./renderPages/todoRender";
import SwipeableEdgeDrawer from "./renderPages/main";


function App() {
  return (
    <div className="App">

  <SwipeableEdgeDrawer/>

    </div>
  );
}

export default App;
