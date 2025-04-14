// src/features/notes/notesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loadNotes = () => JSON.parse(localStorage.getItem('notes')) || [];

const notesSlice = createSlice({
  name: 'notes',
  initialState: loadNotes(),
  reducers: {
    addNote: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
      localStorage.setItem('notes', JSON.stringify(state));
    },
    deleteNote: (state, action) => {
      const newState = state.filter(note => note.id !== action.payload);
      localStorage.setItem('notes', JSON.stringify(newState));
      return newState;
    },
    editNote: (state, action) => {
      const { id, text } = action.payload;
      const note = state.find(n => n.id === id);
      if (note) note.text = text;
      localStorage.setItem('notes', JSON.stringify(state));
    }
  },
});

export const { addNote, deleteNote, editNote } = notesSlice.actions;
export default notesSlice.reducer;
