// src/Edit.jsx

import React, { useState } from "react";

const Edit = ({ text, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // You can add logic here to save the edited text
  };

  const handleDeleteClick = () => {
    onDelete();
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <div className="border border-gray-300 p-4 rounded-md">
      {isEditing ? (
        <input
          type="text"
          className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          value={editedText}
          onChange={handleInputChange}
        />
      ) : (
        <div className="flex items-center">
          <p className="mr-4">{editedText}</p>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-2"
            onClick={handleEditToggle}
          >
            Checkpoint
          </button>
        </div>
      )}
      <div className="mt-2">
        {isEditing ? (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
            onClick={handleSaveClick}
          >
            Save
          </button>
        ) : (
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md mr-2"
            onClick={handleEditToggle}
          >
            Edit
          </button>
        )}
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Edit;
