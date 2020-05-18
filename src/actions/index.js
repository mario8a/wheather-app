import transformForecast from "../services/transformForecast";

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA'

const setCity = payload => ({type: 'SET_CITY', payload});

const setForecastData = payload  => ({type: SET_FORECAST_DATA, payload});

const api_key = "c18ae6a1a610902cfcefe27a257c770c";
const url = 'http://api.openweathermap.org/data/2.5/forecast'

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