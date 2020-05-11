import React from 'react';
import PropTypes from 'prop-types';
//componentes
import WeatherIcons from 'react-weathericons';
//constantes
import {
    SUN,
    CLOUD,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from '../../../constants/weathers';
//estilos
import './styles.css'
// diccionario
const icons = {
    [CLOUD] : 'cloud',
    [SUN] : 'day-sunny',
    [RAIN] : 'rain',
    [SNOW] : 'snow',
    [THUNDER]: 'day-thunderstorm',
    [DRIZZLE]: 'day-showers' 
}

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];

    const sizeIcon = '4x'

    if(icon) 
        return <WeatherIcons className="wicon" name= {icon} size={sizeIcon} />
    else 
        return <WeatherIcons className="wicon" name= {"day-sunny"} size={sizeIcon}/>
}

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className="weatherTempCont">
        {
            getWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{` C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    //Aqui se va poner la valdaciones de las dos propiedades del componente (temperature, WeState)
    // Isrequired: Espera ese valor diferente de nulo
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired

}

export default WeatherTemperature;