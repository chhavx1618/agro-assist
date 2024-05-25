const express = require('express');
const router = express.Router();

const predictOptimal = () => {
    const sensorData = fetchLiveSensorData(); // Assuming fetchLiveSensorData is accessible here
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
