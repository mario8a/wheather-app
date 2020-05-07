import React, {Component} from 'react';
import transformWeather from '../../services/transformWeather';
import {api_weather} from '../../constants/api_url';
//componentes
import Location from './Location';
import WeatherData from './WeatherData';

import {
    SUN,
} from '../../constants/weathers'

import './styles.css';



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

    

    

    handleUpdateClick = () => {
        
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            console.log( 'DATA API',data)
            const newWeather = transformWeather(data);
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