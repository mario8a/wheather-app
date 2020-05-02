import React from 'react';
//componentes
import Location from './Location';
import WeatherData from './WeatherData';

const weatherLocation = () => (
    <div>
        <Location city={'Mexico'} ></Location>
        <WeatherData></WeatherData>
    </div>
);


export default weatherLocation;