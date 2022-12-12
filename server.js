const express = require('express');
const path = require('path');

// also require the 'index.js' file in 'routes'

const PORT = process.env.PORT || 5000;

const app = express();

// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// will also want to 'app.use' the routed vbl that was imported up top

app.use(express.static('public'));

// 5 routes total:

// GET '/notes' (wont route this one)

// GET '/api/notes' (will be routed)
// POST '/api/notes' (will be routed)
// DELETE '/api/notes' (will be routed)

// GET '*' (index.html) (wont route this one)


// Will want to change this log msg once deployed
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
