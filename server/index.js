//================================================================================================================
// SERVER CONFIGURATION
//================================================================================================================
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3030;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

//================================================================================================================
// APPLICATION SERVER ROUTES
//================================================================================================================

app.get('/', (req, res) => {
  res.send('Hello from the server!');
})

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: `Hello from server at ${process.env.MYSQL_USER}!` });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

//================================================================================================================
// SERVER LISTENING
//================================================================================================================
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}. To get started, visit: http://localhost:${PORT}`);
});