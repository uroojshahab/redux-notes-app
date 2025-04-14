// src/components/NoteForm.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../features/notes/notesSlice';

export default function NoteForm() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addNote(text));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Write your note..." />
      <br />
      <button type="submit">Add Note</button>
    </form>
  );
}
