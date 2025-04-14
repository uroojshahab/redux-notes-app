// src/features/notes/Notes.jsx
import { useSelector } from 'react-redux';
import NoteItem from '../../components/NoteItem';
import './Notes.css'; // Optional: link a CSS file for Notes component styles

export default function Notes() {
  const notes = useSelector((state) => state.notes);

  return (
    <div className="notes-container">
      {notes.length === 0 ? (
        <p className="empty-message">No notes yet 📝</p>
      ) : (
        notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))
      )}
    </div>
  );
}
