import React, {Component} from 'react';
import PropTypes from 'prop-types';
//Componentes
import ForecastItem from './ForecastItem';
//servicios
import transformForecast from '../services/transformForecast';

import './style.css';

// const days = [
//     'Lunes',
//     'Martes',
//     'Miercoles',
//     'Jueves',
//     'Viernes'
// ];

// const data = {
//     temperature: 10,
//     weatherState: 'normal',
//     humidity: 10,
//     wind: 'normal'
// }

const api_key = "c18ae6a1a610902cfcefe27a257c770c";
const url = 'http://api.openweathermap.org/data/2.5/forecast'

class ForecastExtended extends Component {

    constructor() {
        super();

        this.state = {forecastData: null}
    }

    componentDidMount() {
        //fetch or axios
        this.updateCity(this.props.city)
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps !== this.props.city) {
            this.setState({forecastData: null})
            this.updateCity(nextProps.city);
        }
    }
    

    updateCity = city => {
        const url_foreast = `${url}?q=${city}&appid=${api_key}`;

        fetch(url_foreast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({forecastData})
            }
        )
    }

    renderForecastItemDays(forecastData) {
        return forecastData.map( forecast => (
            <ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data}>
            </ForecastItem>));
    }
    renderProgress = () => {
        return <h3>cargando pronostico extendido</h3>
    }

    render() {
        const {city} = this.props;
        const {forecastData} = this.state;
        return(
            <div>
               <h2 className="forecastTitle"> Pronóstico extendido para {city} </h2>
               {forecastData ? 
                    this.renderForecastItemDays(forecastData):
                    this.renderProgress()}
            </div>
        )
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    
}

export default ForecastExtended;
