import React from "react";

const cities = [
    { name: "Lisbon", temp: "21°C", icon: "wi-day-sunny", className: "lisbon" },
    { name: "Paris", temp: "11°C", icon: "wi-rain", className: "paris" },
    { name: "Belgrade", temp: "15°C", icon: "wi-cloudy", className: "belgrade" },
    { name: "Venice", temp: "21°C", icon: "wi-showers", className: "venice" },
    { name: "Tel-Aviv", temp: "32°C", icon: "wi-hot", className: "telaviv" },
    { name: "Cairo", temp: "21°C", icon: "wi-day-sunny", className: "cairo" },
    { name: "New-York", temp: "17°C", icon: "wi-rain", className: "newyork" },
    { name: "New-Delhi", temp: "17°C", icon: "wi-rain-mix", className: "newdelhi" },
    { name: "San-Francisco", temp: "15°C", icon: "wi-day-sunny-overcast", className: "sanfrancisco" },
    { name: "Tokyo", temp: "8°C", icon: "wi-night-clear", className: "tokyo" },
    { name: "Sydney", temp: "25°C", icon: "wi-cloud", className: "sydney" }
];

function WeatherList() {
    return (
        <ul className="weather-list">
            {cities.map((city, index) => (
                <li key={index} className={`city ${city.className}`}>
                    {city.name}<br />
                    <span>{city.temp} </span>
                    <i className={`wi ${city.icon}`}></i>
                </li>
            ))}
        </ul>
    );
}

export default WeatherList;