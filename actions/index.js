import axios from 'axios';

const API_KEY='b741724b9557fa7b45879b15f708e545';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);  // returns a promise

    return {
        type: FETCH_WEATHER,
        payload: request  // axios stops this action and creates a new action (with response) 
                          // and sends it to reducer
    };
}