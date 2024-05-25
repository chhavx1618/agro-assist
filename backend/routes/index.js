const express = require('express');
const router = express.Router();
const axios = require('axios');

// Function to fetch live sensor data (mock implementation)
const fetchLiveSensorData = () => {
    const sensorData = {
        temperature: Math.random() * (40 - 10) + 10,
        moisture: Math.random() * (50 - 10) + 10,
        humidity: Math.random() * (90 - 30) + 30,
        ph: Math.random() * (8.5 - 4.5) + 4.5,
    };
    return sensorData;
};

// Function to predict optimal actions based on live sensor data
const predictOptimal = () => {
    const sensorData = fetchLiveSensorData();
    const adjustedSensorData = {
        temperature: sensorData.temperature * (Math.random() * (1.05 - 0.95) + 0.95),
        moisture: sensorData.moisture * (Math.random() * (1.05 - 0.95) + 0.95),
        humidity: sensorData.humidity * (Math.random() * (1.05 - 0.95) + 0.95),
        ph: sensorData.ph * (Math.random() * (1.05 - 0.95) + 0.95),
    };
    return adjustedSensorData;
};

// Function to fetch current weather data (mock implementation)
const fetchCurrentWeather = async () => {
    // Mock implementation; replace with actual API call
    return {
        temperature: 25, // Replace with actual data
        weather: "Sunny", // Replace with actual data
    };
};

// Home page route
router.get('/home', async (req, res) => {
    const sensorData = fetchLiveSensorData();
    const predictions = predictOptimal();
    const weather = await fetchCurrentWeather();
    const currentTime = new Date().toLocaleString();

    res.render('index', {
        title: 'Home',
        sensorData,
        predictions,
        weather,
        currentTime
    });
});

module.exports = router;
