import React, {Component} from 'react';
import {connect} from 'react-redux';
import Charts from '../components/chart';
import GoogleMaps from '../components/google_map';
class WeatherList extends Component{
  renderWeather(cityData){
    const temps=cityData.list.map(weather=>weather.main.temp);
    const pressure=cityData.list.map(weather=>weather.main.pressure);
    const humidity=cityData.list.map(weather=>weather.main.humidity);
    const lon=cityData.city.coord.lon;
    const lat=cityData.city.coord.lat;
    return(
      <tr key={cityData.city.name}>
        <td><GoogleMaps lat={lat} lon={lon} /></td>
        <td>
          <Charts height={120} width={180} data={temps} color="red" unit="K"/>
        </td>
        <td>
        <Charts height={120} width={180} data={pressure} color="red" unit="hPa"/>
        </td>
        <td>
        <Charts height={120} width={180} data={humidity} color="red" unit="%"/>
        </td>
      </tr>
    )
  }
  render(){
    return(
<table className="table table-hover">
  <thead>
    <tr>
      <th>City</th>
      <th>Temperature(K)</th>
      <th>Pressure(hPa)</th>
      <th>Humidity(%)</th>
    </tr>
    </thead>
    <tbody>
    {console.log(this.props.weather)}
      {this.props.weather.map(this.renderWeather)}
     
    </tbody>
  
</table>
    );
  }
}
function mapStateToProps({weather}){
  return {weather};
}
export default connect(mapStateToProps)(WeatherList);