import React, { useState } from "react";

function BasketPage() {
  const [count, setCount] = useState(0);
  const [basketCount, setBasketCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    setBasketCount(basketCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setBasketCount(basketCount - 1);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <header>
        <h1 className="text-3xl font-semibold mb-4">Basket Page</h1>
        <div className="flex items-center">
          <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {basketCount}
          </span>{" "}
          {/* Basket count */}
        </div>
      </header>
      <div className="mt-4">
        <button
          onClick={handleIncrement}
          className="bg-green-500 text-white py-2 px-4 rounded-md mr-2"
        >
          +
        </button>
        <button
          onClick={handleDecrement}
          className="bg-red-500 text-white py-2 px-4 rounded-md"
        >
          -
        </button>
      </div>
      <div className="mt-4">
        <button
          onClick={handleIncrement}
          className="bg-green-500 text-white py-2 px-4 rounded-md mr-2"
        >
          +
        </button>
        <button
          onClick={handleDecrement}
          className="bg-red-500 text-white py-2 px-4 rounded-md"
        >
          -
        </button>
      </div>
      <div className="mt-4">
        <button
          onClick={handleIncrement}
          className="bg-green-500 text-white py-2 px-4 rounded-md mr-2"
        >
          +
        </button>
        <button
          onClick={handleDecrement}
          className="bg-red-500 text-white py-2 px-4 rounded-md"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default BasketPage;
