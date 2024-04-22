import React from "react";
import QuoteCard from "./QuoteCard";

const AppQuote = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Kashif Khan</h1>
      <div className="max-w-md w-full">
        <QuoteCard />
      </div>
    </div>
  );
};

export default AppQuote;
