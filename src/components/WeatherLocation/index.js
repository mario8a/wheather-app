import React, {Component} from 'react';
import transformWeather from '../../services/transformWeather';
import {api_weather} from '../../constants/api_url';
//componentes
import Location from './Location';
import WeatherData from './WeatherData';
//Material UI
import CircularProgress from '@material-ui/core/CircularProgress';


import './styles.css';


class weatherLocation extends Component {

    constructor() {
        super();

        this.state = {
            // Este es el estado local del componente que ayudara a que el estado se renderize
            city: 'Buenos aires',
            data: null
        };
    }
    
    componentDidMount() {
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        
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
                {
                   data ? <WeatherData data={data}></WeatherData> :
                   <CircularProgress size={50}/>
                }
            </div>)
        }
};


export default weatherLocation;

/**Al estar en un class component se debe usar la palabra this para ingresar a las funiones */