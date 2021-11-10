import React from "react";
import "./todayWeather.css";

const TodayWeather = (props) => {

    const data = props.data;

    return ( 
        <div className="today-weather col-lg-5 col-md-7 col-11 justify-content-evenly">
            <div className="today-condition_block">
                <div className="temp-today">
                    <div className="temp-day">Днём: {Math.round(data.forecast.forecastday[0].day.maxtemp_c)}</div>
                    <div className="temp-night">Ночью: {Math.round(data.forecast.forecastday[0].day.mintemp_c)}</div>
                </div>
                <img src={data.forecast.forecastday[0].day.condition.icon}
                className="icon" alt=""/>
                <div className="condition">{data.forecast.forecastday[0].day.condition.text}</div>
            </div>
            <div className="weather-info">
                <div className="pressure">Давление: {data.current.pressure_mb}мм</div>
                <div className="humidity">Влажность: {data.current.humidity}%</div>
                <div className="wind_dir">Направление ветра: {data.current.wind_dir}</div>
                <div className="wind_kph">Скорость ветра: {Math.round(data.current.wind_kph)}м/с</div>
            </div>
        </div>      
    );
};

export default TodayWeather;