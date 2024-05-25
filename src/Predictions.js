// src/Predictions.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Predictions.css'; // Add CSS file for styling if needed

const Predictions = () => {
    const [predictions, setPredictions] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPredictions = async () => {
            try {
                const response = await axios.get('/api/predictions');
                setPredictions(response.data);
            } catch (error) {
                setError('Error fetching predictions');
                console.error(error);
            }
        };

        fetchPredictions();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    if (!predictions) {
        return <div>Loading...</div>;
    }

    return (
        <div className="predictions-container">
            <h2>Optimal Sensor Data Predictions</h2>
            <div className="prediction-item">
                <label>Temperature:</label>
                <span>{predictions.temperature.toFixed(2)}°C</span>
            </div>
            <div className="prediction-item">
                <label>Moisture:</label>
                <span>{predictions.moisture.toFixed(2)}%</span>
            </div>
            <div className="prediction-item">
                <label>Humidity:</label>
                <span>{predictions.humidity.toFixed(2)}%</span>
            </div>
            <div className="prediction-item">
                <label>pH:</label>
                <span>{predictions.ph.toFixed(2)}</span>
            </div>
            {/* Add more sensor data fields as needed */}
        </div>
    );
};

export default Predictions;
