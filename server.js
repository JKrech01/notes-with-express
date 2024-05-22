const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const filePath = path.join(__dirname, 'db.json');

// Ensure db.json exists
if (!fs.existsSync(filePath)) {
    const initialNotes = {
        notes: {
            1: {
                id: 1,
                title: 'Note 1',
                text: 'This is note 1'
            },
            2: {
                id: 2,
                title: 'Note 2',
                text: 'This is note 2'
            },
            3: {
                id: 3,
                title: 'Note 3',
                text: ''
            }
        }
    }
    fs.writeFileSync(filePath, JSON.stringify(initialNotes), 'utf8');
    console.log('db.json file created');
}

app.get('/your-route', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        // Your logic here...
        res.json(JSON.parse(data));
    });
});

app.listen(3001, () => {
    console.log('App listening at http://localhost:3001');
});

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, './public/notes.html'))
);

app.get('/notes', (req, res) => {
    fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        const notes = JSON.parse(data)
        res.json(notes);
    });
});

app.get('/index', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
);

app.post('/notes', (req, res) => {
    const { title, text } = req.body;
    if (!title || !text) {
        return res.status(400).json({ error: 'Request body is incomplete' });
    }

    const newNote = {
        id: uuidv4(),
        title,
        text,
    };
    fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        app.listen(3001, () => {
            console.log('App listening on PORT 3001');
        })
        const notes = JSON.parse(data);
        notes.push(newNote);
        fs.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(notes), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            res.json(newNote);
        });
    });
});

app.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: 'Request body is incomplete' });
    }
    fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ erro: 'Internal Server Error' });
        }
        let notes = json.parse(data);
        notes = notes.filter(note => note.id !== id);
        fs.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(notes), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            res.json({ success: true });
        });
    });
});

 app.listen(3001, () => {
     console.log('App listening at http://localhost:3001');
   });