const router = require('express').Router();
const uniqid = require('uniqid');
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');

// GET route for the full JSON 'db' file
router.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


// DELETE route for one note (by ID)


// POST route for adding a new note
router.post('/', (req, res) => {
    // Destructure title and text of out req.body
    const { title, text } = req.body;
  
    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uniqid(),
        };
  
        // Call helper fs util function to modify 'db'
        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully`);        // may want a different response here
    } else {
        res.error('Error in adding note');
    }
});


module.exports = router;
