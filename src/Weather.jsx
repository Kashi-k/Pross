import React, { useState } from "react";

const WeatherDisplay = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const API_KEY = "7102403cbbb643f6df22cbde082671aa";

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <button type="submit">Get Weather</button>
      </form>

      {weatherData && (
        <div className="weather-cards">
          <div className="weather-card">
            <p>Temperature: {weatherData.main.temp}°C</p>
            <img
              src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt="Weather Icon"
            />
          </div>
          <div className="weather-card">
            <p>Wind: {weatherData.wind.speed} m/s</p>
          </div>
          <div className="weather-card">
            <p>Humidity: {weatherData.main.humidity}%</p>
          </div>
          <div className="weather-card">
            <p>Pressure: {weatherData.main.pressure} hPa</p>
          </div>
          <div className="weather-card">
            <p>
              Sunrise:{" "}
              {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}
            </p>
          </div>
          <div className="weather-card">
            <p>
              Sunset:{" "}
              {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
