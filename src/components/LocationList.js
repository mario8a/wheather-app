import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

import './style.css';



const LocationList = ({cities, onSelectedLocation}) => {
    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        // Este va hacer el nombre del parametro de LocationFirst
        onSelectedLocation(city);
    }
    // console.log(cities);
    // handleWeatherLocationClick va poseer el dato de la ciudad
    const strToComponents = cities => (
        cities.map(city => 
            <WeatherLocation 
                key={city.key} 
                city={city.name} 
                onWeatherLocationClick={() => handleWeatherLocationClick(city.name)}
                dataa={city.data} />
            )
    );

    return (
        <div className="locationList">
           {  strToComponents(cities)}
        </div>
    )
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;