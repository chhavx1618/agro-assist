const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// // Function to load the model
// async function loadModel() {
//   const model = await tf.loadLayersModel('file://path/to/your/model/model.json');
//   return model;
// }

// // Function to make predictions
// async function makePredictions(inputData) {
//   const model = await loadModel();
//   const inputTensor = tf.tensor2d([Object.values(inputData)], [1, 4]);
//   const predictions = model.predict(inputTensor);
//   const predictionsArray = predictions.arraySync()[0];
//   return {
//       temperature: predictionsArray[0],
//       moisture: predictionsArray[1],
//       humidity: predictionsArray[2],
//       ph: predictionsArray[3]
//   };
// }

// app.get('/', async (req, res) => {
//   const sensorData = {
//       temperature: 25.5,
//       moisture: 55,
//       humidity: 60,
//       ph: 6.8
//   };

//   const predictions6Hours = await makePredictions(sensorData);
//   const predictions12Hours = await makePredictions(sensorData); // Ideally with adjusted input data for 12 hours
//   const predictions24Hours = await makePredictions(sensorData); // Ideally with adjusted input data for 24 hours

//   res.render('index', {
//       sensorData,
//       predictions: {
//           predictions6Hours,
//           predictions12Hours,
//           predictions24Hours
//       }
//   });
// });

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Define routes
app.use('/', require('./routes/index'));
app.use('/sensor-data', require('./routes/sensorData'));
app.use('/predictions', require('./routes/predictions'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
