import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import MediaCard from "./components/card";
import TodoRender from "./renderPages/TodoRender";
import Home from "./renderPages/Home";
import Login from "./renderPages/SignIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./renderPages/Profile";
import ThemeToggler from './components/themetoggler';
import Chat from "./components/chat";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        {/* <Route path="/chat" element={<Chat />} /> */}
        
      </Routes>
    </Router>

  );
}

export default App;
