//================================================================================================================
// SERVER CONFIGURATION
//================================================================================================================
const express = require('express');
const path = require('path');
const router = require('./routes/index.js');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3080;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use('/api', router);

//================================================================================================================
// APPLICATION SERVER ROUTES
//================================================================================================================

// Handle GET requests to /api route
app.get('/api/*', (req, res) => {
  res.json({ message: `Hello from server at ${process.env.DB_USER}!` });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

//================================================================================================================
// SERVER LISTENING
//================================================================================================================
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}. To get started, visit: http://localhost:${PORT}`);
});