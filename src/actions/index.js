import axios from 'axios';
const API_KEY = '13a8ef0f5501c012382ef0a28f04b0e3';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function  fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    console.log('REq::',request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}