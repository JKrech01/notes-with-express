const express = require('express');
const path = require('path');
const fs = require('fs');
//const { clog } = require('./middleware/clog');
const clog = require('./middleware/clog');

const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage. This should return the index.html file/ GET should return the index.html file
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
// GET notes should return the notes.html file
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);
// Define the route to get all notes
app.get('/api/notes', (req, res) => {

  // Read the contents of the db.json file
  fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Parse the JSON data into a JavaScript object
    const notes = JSON.parse(data);

    // Return the notes as JSON response
    res.json(notes);
  });
});

// GET Route for feedback page
app.get('/index', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
app.post('/api/notes', (req, res) => {
  // Destructure the request body
  const { title, text } = req.body;
  // If the request body is empty, return a 400 error
  if (!title || !text) {
    return res.status(400).json({ error: 'Request body is incomplete' });
  }


  // Create a new note object with the title and text from the request body
  const newNote = {
    id: uuidv4(),
    title,
    text,
  };
  // Read the contents of the db.json file
  fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    // Parse the JSON data into a JavaScript object
    const notes = JSON.parse(data);
    // Add the new note to the notes array
    notes.push(newNote);
    // Write the updated notes array back to the db.json file
    fs.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(notes), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      // Return the new note as JSON response
      res.json(newNote);
    });
  });
});

app.delete('/api/notes/:id', (req, res) => {
  // Destructure the id from the request parameters
  const { id } = req.params;
  // If the request body is empty, return a 400 error
  if (!id) {
    return res.status(400).json({ error: 'Request body is incomplete' });
  }

  // Read the contents of the db.json file
  fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    // Parse the JSON data into a JavaScript object
    let notes = JSON.parse(data);
    // Filter out the note with the specified id
    notes = notes.filter(note => note.id !== id);
    // Write the updated notes array back to the db.json file
    fs.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(notes), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      // Return success response
      res.json({ success: true });
    });
  });
});
// POST API/Notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client
app.post('/api/notes', (req, res) => {
  //Destructure the request body
  const { title, text } = req.body;
  // If the request body is empty, return a 400 error
  if (!title || !text) {
    return res.status(400).json({ error: 'Request body is incomplete' });
  }
})
// You'll need to find a way to give each note a unique id when it's saved.
// We'll use the uuid package for this.
const { v4: uuidv4 } = require('uuid');
//Create a new note object with the title and text from the request body
// const newNote = {
//   id: uuidv4(),
//   title,
//   text,
// };
//   // Read the contents of the db.json file
fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
})
// Parse the JSON data into a JavaScript object
//const notes = JSON.parse(data);

// DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete.  In order to delete a note, you'll need to read all notes from the db.json file, remove the note given id property, and then rewrite the notes to the db.json file.
app.delete('/api/notes/:id', (req, res) => {
  // Destructure the id from the request parameters
  const { id } = req.params;
  // If the request body is empty, return a 400 error
  if (!id) {
    return res.status(400).json({ error: 'Request body is incomplete' });
  }
})
// Read the contents of the db.json file
fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
})
// // Parse the JSON data into a JavaScript object
// const notes = JSON.parse(data);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
