import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import MediaCard from "./components/Card";
import TodoRender from "./renderPages/todoRender";
import Home from "./renderPages/Home";
import Login from "./renderPages/SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./renderPages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
