// src/WeatherBox.js
import React, { useEffect, useState } from 'react';

const WeatherBox = () => {
    const [weather, setWeather] = useState({
        location: '',
        temperature: '',
        description: ''
    });

    useEffect(() => {
        const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/pune?unitGroup=us&key=YFCAK8TPE6S8NT7X2S56CPL9P&contentType=json";
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setWeather({
                    location: `Location: ${data.address}`,
                    temperature: `Temperature: ${(data.currentConditions.temp - 32) * (5 / 9)} °C`,
                    description: data.currentConditions.conditions
                });
                console.log('API Response', data);
            });
    }, []);

    return (
        <div className="weather-box">
            <p>{weather.location}</p>
            <p>{weather.temperature}</p>
            <p>{weather.description}</p>
        </div>
    );
};

export default WeatherBox;
