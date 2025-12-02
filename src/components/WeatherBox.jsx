import React from "react";
import WeatherList from "./WeatherList";

function WeatherBox() {
    return (
        <div className="weather-box">
            <h6 className="title">
                CSS Weather Forecast <i className="wi wi-day-sunny"></i>
            </h6>

            <WeatherList />

            <p className="note">
                Have a nice day and don't forget umbrella if you are in New Delhi now!
            </p>
        </div>
    );
}

export default WeatherBox;