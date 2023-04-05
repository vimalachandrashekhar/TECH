import React, { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = '5481ac8612f662c634c58b5362491984';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
      const data = await response.json();
      setWeather(data);
      setError(null);
    } catch (error) {
      setWeather(null);
      setError('Sorry, we could not find the weather for the city you entered.');
    }
  }

  return (
    <div className="App">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" />
        <button type="submit">Search</button>
      </form>
      {weather && (
        <div>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>{weather.main.temp}&deg;C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
