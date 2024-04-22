import React from "react";

const RateButton = (props) => {
  return (
    <div className="relative">
      <button
        className="absolute bottom-14 right-20 px-3 py-2 bg-lime-600 rounded shadow text-white"
        onClick={() => props.setCount()}
      >
        Rate
      </button>
    </div>
  );
};

export default RateButton;
