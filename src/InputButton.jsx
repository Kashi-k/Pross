import { useState } from "react";
import Edit from "./Edit";

const InputButton = () => {
  const [inputText, setInputText] = useState("");
  const [editedText, setEditedText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddClick = () => {
    setEditedText(inputText);
    setInputText("");
  };

  const handleDeleteClick = () => {
    setEditedText("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Input with Add Button</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Write a task..."
          value={inputText}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring"
          onClick={handleAddClick}
        >
          Add
        </button>
      </div>
      {editedText && <Edit text={editedText} onDelete={handleDeleteClick} />}
    </div>
  );
};

export default InputButton;
