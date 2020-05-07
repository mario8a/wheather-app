const location = 'Mexico';
const api_key = 'c18ae6a1a610902cfcefe27a257c770c';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather';

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;