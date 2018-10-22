import React, {Component} from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component{

    renderWeather(cityData)
    {
        console.log('renderweather',cityData);
        return(
            <tr>
                <td>{cityData.city.name}</td>
                <td>{cityData.city.name}</td>
                <td>{cityData.city.name}</td>
                <td>{cityData.city.name}</td>
            </tr>
        );
    }
   
    render()
    {
        return (
        <table className="table talbe-hover">
        <thead>
            <tr>
               <th>City</th>
               <th>Temperature</th>
               <th>Pressure</th>
               <th>Humidity</th>
            </tr>
        </thead>
        <tbody>
        {console.log(this.props.weather)}
        {this.props.weather.map((ele)=>{ this.renderWeather(ele)})}
        </tbody>
        </table>
        );
    }
}

function mapStateToProps({weather}){
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);