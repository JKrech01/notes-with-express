const router = require('express').Router();

// Import the notes router
 const notesRouter = require('./notes');
 

// The following HTML routes should be created:

// * `GET /notes` should return the `notes.html` file.
get.app.get('/notes', (req, res) => {
  // res.sendFile(path.join(__dirname, '/public/pages/notes.html'));
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'));
});

// * `GET *` should return the `index.html` file
get.app.get('*', (req, res) => {
  // res.sendFile(path.join(__dirname, '/public/index.html'));
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// The following API routes should be created:

// * `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

get.app.get('/api/notes', (req, res) => {
  // read the db.json file and return all saved notes as JSON.
  res.json(notes);
});
// * `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

post.app.post('/api/notes', (req, res) => {
  // receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
  const { title, text } = req.body;
  const id = uuid();
  const note = {
    id,
    title,
    text,
  };
  notes.push(note);
  res.json(note);
});
// `DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
app.delete('/api/notes/:id', (req, res) => {
  // receive a query parameter that contains the id of a note to delete.
  const noteId = req.params.id;
  const note = notes.find((note) => note.id === noteId);
  notes.splice(notes.indexOf(note), 1);
  res.json(note);
});

module.exports = routes;