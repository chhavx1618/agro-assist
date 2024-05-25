const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
//const { predictOptimalAction } = require('./predict'); // Import function to predict optimal actions
//const tf = require('@tensorflow/tfjs-node');

console.log("check")

const app = express();

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Serve the React frontend
app.use(express.static(path.join(__dirname, '../src')));

console.log("check")


// // Function to load the trained model
// const loadModel = async () => {
//     try {
//       // Load the model from the specified path
//       const model = await tf.loadLayersModel('/model/farm_health_model_nn.h5');
  
//       console.log('Model loaded successfully');
//       return model;
//     } catch (error) {
//       console.error('Error loading the model:', error);
//       throw error;
//     }
//   };
  
//   module.exports = { loadModel };

console.log("check")

// Function to fetch live sensor data (mock implementation)
const fetchLiveSensorData = () => {
    // Mock sensor data
    const sensorData = {
      temperature: Math.random() * (40 - 10) + 10, // Random temperature between 10 and 40
      moisture: Math.random() * (50 - 10) + 10, // Random moisture between 10 and 50
      humidity: Math.random() * (90 - 30) + 30, // Random humidity between 30 and 90
      ph: Math.random() * (8.5 - 4.5) + 4.5, // Random pH between 4.5 and 8.5
      // Add more sensor data fields as needed
    };
    console.log(fetchLiveSensorData)
    return sensorData;
  };
  console.log("check")
  fetchLiveSensorData()
  console.log("check")
  
  // API endpoint to fetch live sensor data
  app.get('/api/sensor-data', (req, res) => {
    const sensorData = fetchLiveSensorData();
    res.json(sensorData);
  });


// Function to predict optimal actions based on live sensor data
const predictOptimal = () => {
    try {
      // Fetch live sensor data
      const sensorData = fetchLiveSensorData();
  
      // Adjust sensor values slightly
      const adjustedSensorData = {
        temperature: sensorData.temperature * (Math.random() * (1.05 - 0.95) + 0.95), // Adjust temperature slightly
        moisture: sensorData.moisture * (Math.random() * (1.05 - 0.95) + 0.95), // Adjust moisture slightly
        humidity: sensorData.humidity * (Math.random() * (1.05 - 0.95) + 0.95), // Adjust humidity slightly
        ph: sensorData.ph * (Math.random() * (1.05 - 0.95) + 0.95), // Adjust pH slightly
        // Add more sensor data fields as needed
        // return temperature, moisture, humidity, ph;
      };
      console.log(adjustedSensorData)
  
      // Log adjusted sensor data
      return adjustedSensorData;

    } catch (error) {
      console.error('Error predicting optimal action:', error);
    }
  };


// Endpoint to predict optimal actions for the next 10 hours
app.get('/api/predictions', (req, res) => {
  // Logic to predict optimal actions
  const predictions = predictOptimal(); // Use your function to predict optimal actions
  res.json(predictions);
});


// Catch-all endpoint to serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src'));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
