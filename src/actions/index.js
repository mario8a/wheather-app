import transformForecast from "../services/transformForecast";

import transformWeather from '../services/transformWeather';
// import getUrlWeatherByCity from '../services/getUrlWeatherByCity';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload });
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload });

const api_key = "c18ae6a1a610902cfcefe27a257c770c";
const url = 'http://api.openweathermap.org/data/2.5/forecast';
const url_weather = "http://api.openweathermap.org/data/2.5/weather";

export const setSelectedCity = payload => {
    return dispatch => {
        const url_foreast = `${url}?q=${payload}&appid=${api_key}`;
        
        //activar en el estado un iniciador de busqueda de datos
        dispatch(setCity(payload));

        return fetch(url_foreast).then(
            data => (data.json())
        ).then(
            weather_data => {
                
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);

                //modificar el estado con el resutado de la promesa
                dispatch(setForecastData({city: payload, forecastData}))
            }
        );

        
    };
};

export const setWeather = payload => {

    // return dispatch => { 

    //     payload.forEach((city) => {

    //         const api_weather = getUrlWeatherByCity(city);
    //         dispatch(getWeatherCity(city));
            
    //         fetch(api_weather).then(
    //             data => (data.json())  
    //         ).then( weather_data => {
    //             const weather = transformWeather(weather_data);
    //             dispatch(setWeatherCity({city: city, weather: weather}));
    //         });
    //     });
    // };

    return dispatch => {
        payload.forEach(city => {
            
            dispatch(getWeatherCity(city));

            const api_weather = `${url_weather}?q=${city}&appid=${api_key}`;
            fetch(api_weather).then( data => {
                return data.json();
            }).then( weather_data => {
                const weather = transformWeather(weather_data);
                
                dispatch(setWeatherCity({city, weather}));
            });
        });
    }

    
};