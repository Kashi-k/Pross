import React, { useState, useEffect } from "react";

const QuoteCard = () => {
  const [quoteData, setQuoteData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex];
      setQuoteData(randomQuote);
      setLoading(false);
      setError(null);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setLoading(false);
      setError("Failed to fetch quote");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const handleNextClick = () => {
    setLoading(true);
    fetchQuote();
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-gradient-to-r from-blue-200 to-blue-300 rounded-lg shadow-lg text-center relative">
      {loading && <p className="text-gray-800 text-lg mb-4">Loading...</p>}
      {!loading && quoteData && (
        <>
          <p className="text-xl font-semibold mb-4">{quoteData.text}</p>
          <p className="text-sm text-gray-600 mb-8">
            - {quoteData.author?.split(",")[0]}
          </p>
        </>
      )}
      {error && <p className="text-red-600 text-lg mb-4">{error}</p>}
      {!loading && !quoteData && !error && (
        <p className="text-red-600 text-lg mb-4">No quote available.</p>
      )}
      {!loading && (
        <button
          className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md focus:outline-none focus:ring"
          onClick={handleNextClick}
        >
          Next Quote
        </button>
      )}
    </div>
  );
};

export default QuoteCard;
