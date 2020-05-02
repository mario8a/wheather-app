import React from 'react';
import PropTypes from 'prop-types';
//componentes
import WeatherIcons from 'react-weathericons';
//constantes
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../constants/weathers';
// diccionario
const icons = {
    [CLOUD] : 'cloud',
    [CLOUDY] : 'cloudy',
    [SUN] : 'day-sunny',
    [RAIN] : 'rain',
    [SNOW] : 'snow',
    [WINDY]: 'windy'
}

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if(icon) 
        return <WeatherIcons name= {icon} size="2x" />
    else 
        return <WeatherIcons name= {"day-sunny"} size="2x" />
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
        {
            getWeatherIcon(weatherState)
        }
        <span>{`${temperature} C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    //Aqui se va poner la valdaciones de las dos propiedades del componente (temperature, WeState)
    // Isrequired: Espera ese valor diferente de nulo
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired

}

export default WeatherTemperature;