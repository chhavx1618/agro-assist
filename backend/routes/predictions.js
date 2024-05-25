const express = require('express');
const router = express.Router();


const fetchLiveSensorData = () => {
    const sensorData = {
        temperature: Math.random() * (40 - 25) + 25,
        moisture: Math.random() * (75 - 25) + 25,
        humidity: Math.random() * (90 - 30) + 30,
        ph: Math.random() * (8.4 - 5.9) + 5.9,
    };
    return sensorData;
};

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

router.get('/', (req, res) => {
    const predictions = predictOptimal();
    res.render('predictions', { title: 'Predictions', predictions });
});

module.exports = router;
