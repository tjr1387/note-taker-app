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

Upon arrival, the basic 'home' page will present the user with the option to go to the note-taking app (this page is also the wildcard route, so any incorrect path on this domain will go here). On the notes page, the user will see the option to enter a note (title and text/body) on the right hand side. Once filled out, a save icon appears on the navbar (right hand side) which can save that note to a list on the left side of the page. If the user clicks on one of their notes, it will appear in the large field on the right. To add a note, the '+' (navbar) can be clicked to remove the saved note content from the big field on the right, allowing them to enter a new note once again. To delete notes from the list, simply click on the red trashcan coinciding with the desired note to be deleted. The user can also navigate to '/api/notes' to see a JSON file of all their saved notes --  each entry will have the two known fields (title/text) as well as a third (ID) unique to each saved note.

Link to live site: https://vast-ridge-84600.herokuapp.com/

Screenshot(s):
![Main page with sample notes](./public/assets/images/main-page-with-notes.png?raw=true "Sample main page with some notes added")
![JSON 'db' with sample notes](./public/assets/images/GET-api-notes.png?raw=true "GET '/api/notes' of the sample notes from above shot")

## Credits

GitHub user 'andreasonny83' for a nice boilerplate '.gitignore' file, and our BCS course for the super-helpful 'fs' functions ('fsUtils.js' in the helpers directory) which expediate reading, writing, and appending the JSON file.

## Tests

N/A

## Comments/Flaws

The practice exercises and mini-project for this week's material were extremely helpful in accomplishing this challenge. It was mainly a matter of not getting lines crossed when doing all of the import statements and routing stuff, and remembering which middlewares to use (and the order in which they should be placed). The 'DELETE' route was pretty easy as well (I'd argue it's easier than the 'POST' route). Once I deployed to Heroku, I noticed a console error about being unable read properties of null when trying to read 'id' of an empty object, but this was coming from the _front-end_ 'index.js' file when there were no existing notes. This occurs when the user does a click event on the 'No Saved Notes' message on the left. This may have been an oversight and doesn't break anything. The only other thing I can think of is I took the 'fsUtils.js' file straight from our practice exercises; it was extremely helpful. I fear that's a tad lazy but it was exactly what I needed so I can't imagine that's too bad a thing to do.


## License

Covered under the MIT license.
