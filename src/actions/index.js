import axios from 'axios';
const API_KEY='9887fc9536693cf4ae389045e3ae981d';
const ROOT_URL=`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER='FETCH_WEATHER';
export function fetchWeather(city,country){
  const url=`${ROOT_URL}&q=${city},${country}`;
  const request=axios.get(url);
  console.log(request);
  return {
    type:FETCH_WEATHER,
    payload:request
  };
  
}