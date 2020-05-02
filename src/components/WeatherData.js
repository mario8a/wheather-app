import React from 'react';
//componentes
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
//constantes
import {
    SUN,
    CLOUDY
} from '../constants/weathers'
//Esto logra un codigo mas estructurado y ver los errores mas claros

const WeatherData = () => (
    <div>
        <WeatherTemperature 
                temperature={20} 
                weatherState={SUN}
        />
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>
    </div>
);

export default WeatherData;