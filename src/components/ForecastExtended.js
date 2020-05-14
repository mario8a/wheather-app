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
        const url_foreast = `${url}?q=${this.props.city}&appid=${api_key}`;

        fetch(url_foreast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                this.setState({forecastData})
            }
        )
    }
    

    renderForecastItemDays() {
        return <h1>Render de items</h1>
        //return days.map(day => <ForecastItem weekDay={day} hour={10} data={data} />)
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
                    this.renderForecastItemDays():
                    this.renderProgress()}
            </div>
        )
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;
