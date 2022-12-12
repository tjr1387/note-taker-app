const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 5000;      // Heroku seems to want this port number

const app = express();

// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 'Use' the imported routing middleware
app.use('/api', api);

// Serve public assets
app.use(express.static('public'));


// Other handlers (not counting the three that have been routed):

// GET route for '/notes'
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Wildcard route (which will send user to 'index.html')
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);


// Listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
