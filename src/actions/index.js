export const SET_CITY = 'SET_CITY';

export const setCity = payload => ({type: 'SET_CITY', payload});

const api_key = "c18ae6a1a610902cfcefe27a257c770c";
const url = 'http://api.openweathermap.org/data/2.5/forecast'

export const fetchForeast = payload => {
    return dispatch => {
        const url_foreast = `${url}?q=${city}&appid=${api_key}`;
        //activar en el estado un iniciador de busqueda de datos
        fetch(url_foreast).then(
            data => (data.json())
        ).then(
            weather_data => {
                
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                //modificar el estado con el resutado de la promesa
            }
        );

        return;
    };
};