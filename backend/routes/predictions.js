const express = require('express');
const router = express.Router();


const fetchLiveSensorData = () => {
    const sensorData = {
        temperature: Math.random() * (40 - 25) + 25, // Temperature between 25 and 40
        moisture: Math.random() * (80 - 30) + 30, // Moisture between 30 and 60
        humidity: Math.random() * (80 - 50) + 50, // Humidity between 50 and 80
        ph: Math.random() * (8.2 - 5.5) + 5.5, // pH between 5.5 and 8.2
    };
    return sensorData;
};


const predictOptimal = () => {
    const sensorData = fetchLiveSensorData();
    // Predictions for 6 hours from now
    const predictions6Hours = {
        temperature: sensorData.temperature * (Math.random() * (1.03 - 0.97) + 0.97), // Slightly adjusted temperature
        moisture: sensorData.moisture * (Math.random() * (1.03 - 0.97) + 0.97), // Slightly adjusted moisture
        humidity: sensorData.humidity * (Math.random() * (1.03 - 0.97) + 0.97), // Slightly adjusted humidity
        ph: sensorData.ph * (Math.random() * (1.01 - 0.99) + 0.99), // Slightly adjusted pH
    };
    // Predictions for 12 hours from now
    const predictions12Hours = {
        temperature: sensorData.temperature * (Math.random() * (1.05 - 0.95) + 0.95), // More adjusted temperature
        moisture: sensorData.moisture * (Math.random() * (1.05 - 0.95) + 0.95), // More adjusted moisture
        humidity: sensorData.humidity * (Math.random() * (1.05 - 0.95) + 0.95), // More adjusted humidity
        ph: sensorData.ph * (Math.random() * (1.03 - 0.97) + 0.97), // More adjusted pH
    };
    // Predictions for 24 hours from now
    const predictions24Hours = {
        temperature: sensorData.temperature * (Math.random() * (1.1 - 0.9) + 0.9), // Slightly increased temperature
        moisture: sensorData.moisture * (Math.random() * (1.1 - 0.9) + 0.9), // Slightly increased moisture
        humidity: sensorData.humidity * (Math.random() * (1.1 - 0.9) + 0.9), // Slightly increased humidity
        ph: sensorData.ph * (Math.random() * (1.01 - 0.99) + 0.99), // Slightly adjusted pH
    };
    return {
        predictions6Hours,
        predictions12Hours,
        predictions24Hours
    };
};


router.get('/', (req, res) => {
    const predictions = predictOptimal();
    res.render('predictions', { title: 'Predictions', predictions });
});

module.exports = router;
