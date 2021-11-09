import React from "react";
import "./currentWeather.css";

const Currentweather = (props) => {

    const data = props.data;

    return ( 
        <div className="current-weather col-12 col-lg-5">
            <div className="current-condition_block">
                <img src={data.current.condition.icon} className="icon" alt=""/>
                <div className="condition">{data.current.condition.text}</div>
            </div>
            <div className="current-temp_block">
                <div className="current-temp">{Math.round(data.current.temp_c)}</div>
                <div className="feelslike">Ощущается как {Math.round(data.current.feelslike_c)}</div>
            </div>
        </div>
    );
};

export default Currentweather;