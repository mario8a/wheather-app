import React from 'react';
import PropTypes from 'prop-types';
//componentes
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
//estilos
import './styles.css';

const WeatherData = ({data: {temperature, weatherState, humidity, wind}}) => ( 
    
    <div className="weatherDataCont">
        <WeatherTemperature 
                temperature={temperature} 
                weatherState={weatherState}
        />
        <WeatherExtraInfo humidity={humidity} wind={wind}/>
    </div>
);
//TEMPERATURE ES UN STRING EN LA API
WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default WeatherData;