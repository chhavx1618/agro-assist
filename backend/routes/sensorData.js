const express = require('express');
const router = express.Router();

const fetchLiveSensorData = () => {
    const sensorData = {
        temperature: Math.random() * (40 - 10) + 10,
        moisture: Math.random() * (50 - 10) + 10,
        humidity: Math.random() * (90 - 30) + 30,
        ph: Math.random() * (8.5 - 4.5) + 4.5,
    };
    return sensorData;
};

router.get('/', (req, res) => {
    const sensorData = fetchLiveSensorData();
    res.render('sensorData', { title: 'Sensor Data', sensorData });
});

module.exports = router;
