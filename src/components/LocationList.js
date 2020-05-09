import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
    <div>
        <WeatherLocation city="Mexico City"/>
        <WeatherLocation city="Bogota,col"/>
        <WeatherLocation city="ottawa"/>
    </div>
);

export default LocationList;