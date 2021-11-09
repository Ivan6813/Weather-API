import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.min.css";
import "./hourlyWeather.css";

function Hourlyweather(props) {

    const data = props.data.forecast.forecastday[0].hour; 

    return (
        <div className="pt-4 pb-3 pt-md-5 ">
            <Swiper
            slidesPerGroup={3}
            slidesPerView={3}
            speed={1000}
            breakpoints={{
                "320": {
                    "slidesPerView": 3
                },
                "640": {
                    "slidesPerView": 4
                },
                "1024": {
                    "slidesPerView": 8
                }
            }}>
            {data.map( (item, index) =>{
                return (
                    <SwiperSlide>
                        <div key={item.time_epoch} className="item">
                            <div className="time">{index}:00</div>
                            <img src={item.condition.icon} className="icon" alt=""/>
                            <div className="temp">{Math.round(item.temp_c)}</div>
                            <div className="pressure">{item.pressure_mb}мм</div>
                            <div className="humidity">{item.humidity}%</div>
                            <div className="wind_dir">{item.wind_dir}</div>
                            <div className="wind_kph">{Math.round(item.wind_kph)}м/с</div>
                        </div>
                    </SwiperSlide>
                )})}
            </Swiper>
        </div>
    );
};

export default Hourlyweather;