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

    // constructor(props) {
    //     super(props);
    //     const {city} = props;
    //     this.state = {
    //         // Este es el estado local del componente que ayudara a que el estado se renderize
    //         city,
    //         data: null
    //     };
    // }
    
    // componentDidMount() {
    //     const api_weather = getUrlWeatherByCity(this.state.city);
    //     fetch(api_weather).then(resolve => {
    //         return resolve.json();
    //     }).then(data => {
    //         // console.log( 'DATA API',data)
    //         const newWeather = transformWeather(data);
    //         // console.log("APII",newWeather);

    //         //Actualiza el state
    //         this.setState({
    //             data: newWeather
    //         })
            
    //     })
    // }

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