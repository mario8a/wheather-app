import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const weatherLocation = () => (
    <div>
        <Location city={'Mexico'} ></Location>
        <WeatherData></WeatherData>
    </div>
);


export default weatherLocation;