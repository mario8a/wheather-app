import React, {Component} from 'react';
import ProtoType from 'prop-types';

import transformWeather from '../../services/transformWeather';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';
// import {api_weather} from '../../constants/api_url';
//componentes
import Location from './Location';
import WeatherData from './WeatherData';
//Material UI
import CircularProgress from '@material-ui/core/CircularProgress';


import './styles.css';


class weatherLocation extends Component {

    constructor(props) {
        super(props);
        const {city} = props;
        this.state = {
            // Este es el estado local del componente que ayudara a que el estado se renderize
            city,
            data: null
        };
    }
    
    componentDidMount() {
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        
    }
    
    

    handleUpdateClick = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            // console.log( 'DATA API',data)
            const newWeather = transformWeather(data);
            // console.log("APII",newWeather);

            //Actualiza el state
            this.setState({
                data: newWeather
            })
            
        })
        
    }

    render(){
        const {city, data} = this.state;
        return(
            <div className="weatherLocCont">
                <Location city={city} ></Location>
                {
                   data ? <WeatherData data={data}></WeatherData> :
                   <CircularProgress size={50}/>
                }
            </div>)
        }
};

weatherLocation.propTypes = {
    city: ProtoType.string.isRequired
}

export default weatherLocation;

/**Al estar en un class component se debe usar la palabra this para ingresar a las funiones */