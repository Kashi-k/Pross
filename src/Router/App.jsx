import React from "react";
import Navbar from "./Navbar";
import Homme from "./Homme";
import Contact from "./Contact";
import About from "./About";
import Login from "./Login";
import Signupp from "./Signupp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homme />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signupp" element={<Signupp />} />
      </Routes>
    </Router>
  );
};

export default App;
