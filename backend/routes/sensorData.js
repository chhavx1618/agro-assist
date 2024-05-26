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


router.get('/', (req, res) => {
    const sensorData = fetchLiveSensorData();
    res.render('sensorData', { title: 'Sensor Data', sensorData });
});

module.exports = router;
