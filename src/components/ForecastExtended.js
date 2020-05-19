import React from 'react';
import PropTypes from 'prop-types';
//Componentes
import ForecastItem from './ForecastItem';
//servicios


import './style.css';

// const api_key = "c18ae6a1a610902cfcefe27a257c770c";
// const url = 'http://api.openweathermap.org/data/2.5/forecast'

const renderForecastItemDays = (forecastData) => {
    return forecastData.map( forecast => (
        <ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay} 
            hour={forecast.hour} 
            data={forecast.data}>
        </ForecastItem>));
}
const renderProgress = () => {
    return <h3>cargando pronostico extendido</h3>
}

const ForecastExtended = ({city, forecastData}) =>  ( 

    <div>
       <h2 className="forecastTitle"> Pronóstico extendido para {city} </h2>
       {forecastData ? 
            renderForecastItemDays(forecastData):
            renderProgress()}
    </div>
        
)

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
    
}

export default ForecastExtended;
