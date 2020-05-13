import React, {Component} from 'react';
import PropTypes from 'prop-types';
//Componentes
import ForecastItem from './ForecastItem';

import './style.css';

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
];

class ForecastExtended extends Component {
    renderForecastItemDays() {
        return days.map(day => <ForecastItem weekDay={day}/>)
    }
    render() {
        const {city} = this.props;
        return(
            <div>
               <h2 className="forecastTitle"> Pronóstico extendido para {city} </h2>
               {this.renderForecastItemDays()}
            </div>
        )
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;
