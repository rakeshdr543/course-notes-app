const fs = require('fs');
const chalk = require('chalk');

const success = chalk.bold.green;
const error = chalk.bold.red;

const loadNotes = () => {
  try {
    const notesDataJson = fs.readFileSync('./notes.json', {
      encoding: 'utf-8',
    });
    const notesData = JSON.parse(notesDataJson);
    return notesData;
  } catch (error) {
    return [];
  }
};

const loadSingleNote = (title) => {
  const notes = loadNotes();
  return notes.find((note) => note.title === title);
};

const saveNotes = (notes) => {
  fs.writeFileSync('./notes.json', JSON.stringify(notes));
};

const getNotes = () => {
  console.log(loadNotes());
};

const getSingleNote = (title) => {
  const note = loadSingleNote(title);
  if (!note) {
    return console.log(error('Note not found'));
  }
  console.log(success(JSON.stringify(note)));
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({ title, body });
    console.log(success(JSON.stringify(notes)));
    saveNotes(notes);
  } else {
    console.log(error('Note exists already'));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const remainingNotes = notes.filter((note) => note.title !== title);
  saveNotes(remainingNotes);
  if (remainingNotes.length < notes.length) {
    console.log(success('Removed note'));
  } else {
    console.log(error('Note not found'));
  }
};

module.exports = { getNotes, addNote, removeNote, getSingleNote };
