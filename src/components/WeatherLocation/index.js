import React from 'react';
//componentes
import Location from './Location';
import WeatherData from './WeatherData';

import './styles.css'

const weatherLocation = () => (
    <div className="weatherLocCont">
        <Location city={'Mexico'} ></Location>
        <WeatherData></WeatherData>
    </div>
);


export default weatherLocation;