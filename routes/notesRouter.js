const router = require('express').Router();
const uniqid = require('uniqid');
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');

// GET route for the full JSON 'db' file
router.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


// DELETE route for one note (by ID)


// POST route for adding a new note


module.exports = router;
