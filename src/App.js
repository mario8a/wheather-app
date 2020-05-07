import React from 'react';
import './App.css';

import WeatherLocation from './components/WeatherLocation';

function App() {
  return (
    <div className="App">
      <WeatherLocation city="Bogota"/>
    </div>
  );
}

export default App;
