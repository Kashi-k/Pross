import React, { useState } from "react";

// logo home my progress contact us userImage
const Navbar = (props) => {
  return (
    <div className="flex w-full items-center justify-between p-4 bg-blue-600">
      <img
        alt="logo"
        src="logo192.png"
        className="h-16 w-16 rounded-full p-2"
      />
      <div className="flex items-center justify-center gap-2">
        <ul className="flex gap-4 capitalize text-lg font-bold hover:cursor-pointer text-white">
          <li onClick={() => props.setPageNumber(1)}>home</li>
          <li onClick={() => props.setPageNumber(2)}>my progress</li>
          <li onClick={() => props.setPageNumber(3)}>contact us</li>
        </ul>
        <img
          alt="user-image"
          src="logo192.png"
          className="h-16 w-16 rounded-full p-2"
        />
      </div>
    </div>
  );
};

export default Navbar;
