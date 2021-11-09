import React from "react";
import "./currentDate.css";

const CurrentDate = (props) => {

    const data = props.data;

    const getDate = (d) => {
        let months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
        let days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `Сегодня ${day}, ${date} ${month} ${year}`;
    };

    return (
        <div className="row pt-4 justify-content-center">
            <div className="location col-11 col-lg-12">{data.location.name}, {data.location.country}</div>
            <div className="current-date col">{getDate(new Date())}</div>
        </div>
    );
}

export default CurrentDate;