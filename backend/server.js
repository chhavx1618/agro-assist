const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

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
