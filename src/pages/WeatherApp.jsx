import React, { useState } from "react";

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (city.trim() === "") return;
    try {
      // Sample API call – replace YOUR_API_KEY later with a real key from https://openweathermap.org
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY`
      );
      const data = await res.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        setWeather(null);
        alert("City not found!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex flex-col items-center pt-20 px-4">
      <h1 className="text-4xl font-bold text-blue-400 mb-8">Weather App</h1>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="flex-1 px-4 py-3 rounded-xl bg-[#1E3A8A] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={getWeather}
          className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-500 transition-all font-semibold"
        >
          Search
        </button>
      </div>

      {weather && (
        <div className="mt-10 bg-[#1E3A8A] p-8 rounded-2xl shadow-lg text-center w-full max-w-md">
          <h2 className="text-3xl font-bold text-blue-300 mb-2">
            {weather.name}, {weather.sys.country}
          </h2>
          <p className="text-6xl font-extrabold text-blue-400 mb-4">
            {Math.round(weather.main.temp)}°C
          </p>
          <p className="text-blue-200 text-xl capitalize mb-2">
            {weather.weather[0].description}
          </p>
          <div className="flex justify-center gap-6 mt-4 text-blue-300">
            <p>💨 {weather.wind.speed} m/s</p>
            <p>💧 {weather.main.humidity}%</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
