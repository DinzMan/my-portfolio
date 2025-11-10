import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const WeatherApp = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (city.trim() === "") {
      setError("Please enter a city name!");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}&aqi=no`
      );
      const data = await res.json();

      if (data.error) {
        setError("City not found. Please try again!");
      } else {
        setWeather(data);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#1E3A8A]/40 text-white flex flex-col items-center pt-20 px-4 pb-8 relative">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-4 sm:left-6 flex items-center gap-2 px-4 py-2 bg-blue-600/80 hover:bg-blue-600 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 z-10"
      >
        <FaArrowLeft className="text-sm" />
        <span className="hidden sm:inline">Back</span>
      </button>

      <h1 className="text-4xl md:text-5xl font-bold text-blue-400 mb-8 animate-fadeIn">Weather App</h1>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mb-6">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && getWeather()}
          className="flex-1 px-4 py-3 rounded-xl bg-[#1E3A8A]/80 backdrop-blur-sm text-white border border-blue-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder-blue-400/50"
        />
        <button
          onClick={getWeather}
          disabled={loading}
          className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 rounded-xl hover:from-blue-500 hover:to-blue-400 transition-all font-semibold transform hover:scale-105 shadow-lg hover:shadow-blue-500/50 disabled:opacity-60 disabled:transform-none disabled:cursor-not-allowed"
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </div>


      {error && (
        <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 w-full max-w-md text-center">
          {error}
        </div>
      )}

      {weather && (
        <div className="mt-6 bg-[#1E3A8A]/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-blue-700/50 text-center w-full max-w-md animate-fadeIn hover:border-blue-500/50 transition-all duration-300">
          <h2 className="text-3xl font-bold text-blue-300 mb-2">
            {weather.location.name}, {weather.location.country}
          </h2>
          <img
            src={weather.current.condition.icon}
            alt={weather.current.condition.text}
            className="mx-auto w-20 mb-4"
          />
          <p className="text-6xl font-extrabold text-blue-400 mb-2">
            {weather.current.temp_c}°C
          </p>
          <p className="text-blue-200 text-xl capitalize mb-2">
            {weather.current.condition.text}
          </p>
          <div className="flex justify-center gap-6 mt-4 text-blue-300">
            <p>💨 {weather.current.wind_kph} km/h</p>
            <p>💧 {weather.current.humidity}%</p>
          </div>
          <p className="mt-4 text-blue-200 text-sm">
            Last updated: {weather.current.last_updated}
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;