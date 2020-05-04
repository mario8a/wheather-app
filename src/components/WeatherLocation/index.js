import React, {Component} from 'react';
//componentes
import Location from './Location';
import WeatherData from './WeatherData';

import {
    SUN,
    CLOUDY
} from '../../constants/weathers'

import './styles.css';
// Este componente le envia esta info a weather data (ahora index.js)
const data = {
    temperature: 6,
    weatherState: SUN,
    humidity: 10,
    wind: "10 m/s",
}

const data2 = {
    temperature: 5,
    weatherState: CLOUDY,
    humidity: 13,
    wind: "23 m/s",
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
        console.log('Actualizado');
        //Actualiza el state
        this.setState({
            city: 'Mexico City',
            data: data2
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