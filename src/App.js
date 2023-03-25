import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return <Router>
    <Routes>
    <Route index path="/" element={<Login/>} />
    <Route path="/signup" element={<SignUp/>} />
    <Route path="/home" element={<Home/>} />
    </Routes>
  </Router>;
}

export default App;