import React, {useState} from "react";
import CurrentDate from "../CurrentDate/CurrentDate";
import Currentweather from "../CurrentWeather/CurrentWeather";
import TodayWeather from "../TodayWeather/TodayWeather";
import Hourlyweather from "../HourlyWeather/HourlyWeather";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./searchBar.css";


function SearchBar () {
    
    const [city, setCity] = useState("");
    const [data, setData] = useState(null);

    const search = () => {
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=a19108012f8345c199672427210910&q=${city}&days=1&aqi=no&alerts=no&lang=RU`)
        .then(res => res.json())
        .then(result => setData(result))
    };

    return (
        <div>
            <div className="row justify-content-center pt-3 pt-lg-4">
                <input className="search-bar col-8 col-lg-7" type="text" onChange={(event)=>{setCity(event.target.value);}} placeholder="Введите название города"/>
                <button className="search-btn col-3 col-sm-2 col-md-1" onClick={search}>Search</button>
            </div>
            {(data !== null && data.location !== undefined) ? (
                <div>
                    <CurrentDate data={data}/>
                    <div className="row justify-content-center justify-content-lg-evenly pt-lg-5">
                        <Currentweather data={data}/>
                        <TodayWeather data={data}/>
                    </div>
                    <Hourlyweather data={data}/>
                </div>
            ):(
                <div>
                    {(data !== null && data.error !== undefined) ? (
                        <div className="error">{data.error.message}</div>
                    ):(
                        <div></div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchBar;