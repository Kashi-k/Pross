import React, { useState } from "react";

const BasketCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex w-full items-center justify-between p-4 bg-orange-500">
      <img
        alt="logo"
        src="logo192.png"
        className=" absolute right-10 top-20 h-16 w-16 rounded-full p-2"
      />

      <div className="flex flex-col items-center justify-center h-screen">
        <ul className="justify-center gap-4 capitalize text-lg font-bold hover:cursor-pointer text-white">
          <li>+</li>
          <li>+</li>
          <li>+</li>
        </ul>
      </div>
      <div>
        <ul className="justify-center gap-4 capitalize text-lg font-bold hover:cursor-pointer text-white">
          <li>-</li>
          <li>-</li>
          <li>-</li>
        </ul>
      </div>
    </div>
  );
};

export default BasketCounter;
