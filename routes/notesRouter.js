const router = require('express').Router();
const uniqid = require('uniqid');
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');


// GET route for the full JSON 'db' file
router.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// DELETE route for one note (by ID)
router.delete('/:id', (req, res) => {
    // Grab the specific ID from req.params
    const noteId = req.params.id;
    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            // The array in db.json without the _one_ that is to be deleted, then overwrite db.json with this new array
            const dbAfterDelete = json.filter((note) => note.id !== noteId);
            writeToFile('./db/db.json', dbAfterDelete);
    
            res.json(`Note with the ID '${noteId}' has been deleted.`);     // may need to change this response
    });
});

// POST route for adding a new note
router.post('/', (req, res) => {
    // Destructure title and text of out req.body
    const { title, text } = req.body;
  
    if (req.body) {
        const newNote = {
            title,
            text,
            id: uniqid(),
        };
  
        // Call helper fs util function to modify 'db'
        readAndAppend(newNote, './db/db.json');
        res.json(newNote);
    } else {
        res.error('Error in adding note');
    }
});


module.exports = router;
