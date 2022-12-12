# Note Taker App
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This app is a bare bones note taker which allows the user to create, save and delete notes. The notes are comprised of two fields: a title and a body (or text). It is done both on the front-end and the back-end, using a JSON file as a proxy DB.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#tests)
- [Comments/Flaws](#commentsflaws)
- [License](#license)

## Installation

This uses the NodeJS 'Express' package, as well as npm's 'Uniqid' package for generating unique IDs.

## Usage

Upon arrival, the basic 'home' page will present the user with the option to go to the note-taking app (this page is also the wildcard route, so any incorrect path on this domain will go here). On the notes page, the user will see the option to enter a note (title and text/body) on the right hand side. Once filled out, a save icon appears on the navbar (right hand side) which can save that note to a lsit on the left side of the page. If the user clicks on one of their notes, it will appear in the large field on the right. To add a note, the '+' (navbar) can be clicked to remove the saved note content from the big field on the right, allowing them to enter a new ntoe once again. To delete notes from the list, simply click on the red trashcan coinciding with the desired note to be deleted. The user can also navigate to '/api/notes' to see a JSON file of all their saved notes --  each entry will have the two known fields (title/text) as well as a third (ID) unique to each saved note.

Link to live site: 

Screenshot(s):

## Credits

GitHub user 'andreasonny83' for a nice boilerplate '.gitignore' file, and our BCS course for the super-helpful 'fs' functions which expediate reading, writing, and appending our JSON file.

## Tests

N/A

## Comments/Flaws



## License

Covered under the MIT license.