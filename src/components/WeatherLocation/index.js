import React, {Component} from 'react';
import convert from 'convert-units';
//componentes
import Location from './Location';
import WeatherData from './WeatherData';

import {
    SUN,
} from '../../constants/weathers'

import './styles.css';

const location = 'Mexico';
const api_key = 'c18ae6a1a610902cfcefe27a257c770c';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

// Este componente le envia esta info a weather data (ahora index.js)
const data = {
    temperature: 6,
    weatherState: SUN,
    humidity: 10,
    wind: "10 m/s",
}

class weatherLocation extends Component {

    constructor() {
        super();

        this.state = {
            // Este es el estado local del componente que ayudara a que el estado se renderize
            city: 'Buenos aires',
            data: data
        };
    }

    getTemp = kelvin => {
        return Number(convert(kelvin).from("K").to("C").toFixed(2));
    }

    getWeatherState = weather_data => {
        return SUN
    }

    getData = weather_data => {
        const {humidity, temp} = weather_data.main;
        const {speed} = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);
        const temperature = this.getTemp(temp);


        const data = {
            humidity,
            temperature,
            weatherState,
            wind: `${speed} m/s`,
        }

        return data
    }

    

    handleUpdateClick = () => {
        
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            console.log( 'DATA API',data)
            const newWeather = this.getData(data);
            console.log("APII",newWeather);

            //Actualiza el state
            this.setState({
                city: 'Mexico City',
                data: newWeather
            })
            
        })
        
    }

    render(){
        const {city, data} = this.state;
        return(
            <div className="weatherLocCont">
                <Location city={city} ></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>)
        }
};


export default weatherLocation;

/**Al estar en un class component se debe usar la palabra this para ingresar a las funiones */