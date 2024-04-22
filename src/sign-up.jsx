import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = () => {
    // Your signup logic here
    console.log("Signing up with:", { email, password, confirmPassword });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-2 p-2 border border-gray-300 rounded-md"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-2 p-2 border border-gray-300 rounded-md"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="w-full mb-4 p-2 border border-gray-300 rounded-md"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button
        onClick={handleSignup}
        className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700"
      >
        Signup
      </button>
    </div>
  );
};

export default Signup;
