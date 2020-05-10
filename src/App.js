import React from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities  = [
  'Ciudad de Mexico,mx',
  'Madrid,es',
  'Bogota,col',
  'Lima,pe',
  'Buenos Aires,ar',
  'Washington,us'
];

function App() {
  return (
    <div className="App">
      <LocationList cities={cities}/>
    </div>
  );
}

export default App;
