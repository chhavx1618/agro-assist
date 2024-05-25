// src/WeatherBox.js
import React, { useEffect, useState } from 'react';

const WeatherBox = () => {
    const [weather, setWeather] = useState({
        location: '',
        temperature: '',
        description: ''
    });
    const [coords, setCoords] = useState(null);

    useEffect(() => {
        // Get the user's coordinates
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCoords({ latitude, longitude });
        }, (error) => {
            console.error("Error getting geolocation: ", error);
        });
    }, []);

    useEffect(() => {
        if (coords) {
            const { latitude, longitude } = coords;
            const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?unitGroup=us&key=YFCAK8TPE6S8NT7X2S56CPL9P&contentType=json`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    setWeather({
                        location: `Location: ${data.address}`,
                        temperature: `Temperature: ${(data.currentConditions.temp - 32) * (5 / 9)} °C`,
                        description: data.currentConditions.conditions
                    });
                    console.log('API Response', data);
                })
                .catch(error => console.error("Error fetching weather data: ", error));
        }
    }, [coords]);

    return (
        <div className="weather-box">
            <p>{weather.location}</p>
            <p>{weather.temperature}</p>
            <p>{weather.description}</p>
        </div>
    );
};

export default WeatherBox;
