// src/components/Navbar.js
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white font-bold">My Website</div>
          <div className="flex space-x-4 text-white">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/about">About Us</Link>
            <Link to="/login">Login</Link>
            <Link to="/signupp">Signup</Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
