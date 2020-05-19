import React from 'react';
import PropTypes from 'prop-types';

// import transformWeather from '../../services/transformWeather';
// import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';
// import {api_weather} from '../../constants/api_url';

//componentes
import Location from './Location';
import WeatherData from './WeatherData';
//Material UI
import CircularProgress from '@material-ui/core/CircularProgress';


import './styles.css';


const weatherLocation =  ({onWeatherLocationClick, city, data}) => ( 


            <div className="weatherLocCont" onClick={onWeatherLocationClick}>
                <Location city={city} ></Location>
                {
                   data ? <WeatherData data={data}></WeatherData> :
                   <CircularProgress size={50}/>
                }
            </div>

);

weatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default weatherLocation;

/**Al estar en un class component se debe usar la palabra this para ingresar a las funiones */