import React from 'react';
import Navbar from './Composition_Components/Navbar';
import WeatherDetails from './Components/WeatherDetails';
function App() {
  return (
    <div className="App">
      <Navbar/>
       <WeatherDetails/>
    </div>
  );
}

export default App;
