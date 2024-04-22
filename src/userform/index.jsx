import React, { useState } from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-gray-200 p-4">
      <div className="flex space-x-4">
        <a href="#home" className="text-blue-500 hover:text-blue-700">
          Home
        </a>
        <a href="#about" className="text-blue-500 hover:text-blue-700">
          About Us
        </a>
        <a href="#contact" className="text-blue-500 hover:text-blue-700">
          Contact
        </a>
        <a href="#location" className="text-blue-500 hover:text-blue-700">
          Location
        </a>
      </div>
    </nav>
  );
};

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [emailError, setEmailError] = useState("");
  const [ageError, setAgeError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateAge = (age) => {
    const ageNumber = parseInt(age);
    return !isNaN(ageNumber) && ageNumber >= 18 && ageNumber <= 120;
  };

  const handleClick = () => {
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    if (!validateAge(age)) {
      setAgeError("Please enter a valid age (between 18 and 120).");
      return;
    } else {
      setAgeError("");
    }
  };

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 gap-5 items-center justify-center h-screen w-full">
        <div className="flex flex-col space-y-3 w-96">
          <h1>User Form</h1>
          <input
            className="border rounded shadow-md p-2"
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            className="border rounded shadow-md p-2"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {emailError && <p className="text-red-500">{emailError}</p>}
          <input
            className="border rounded shadow-md p-2"
            placeholder="Age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
          {ageError && <p className="text-red-500">{ageError}</p>}
          <input
            className="border rounded shadow-md p-2"
            placeholder="Address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
          <div className="flex justify-center">
            <button
              className="bg-slate-500 py-2 px-3 rounded shadow text-white"
              onClick={handleClick}
            >
              Save
            </button>
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <h1>Output</h1>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Age: {age}</p>
          <p>Address: {address}</p>
        </div>
      </div>
    </>
  );
};

export default UserForm;
