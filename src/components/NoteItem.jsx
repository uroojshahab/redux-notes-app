// src/components/NoteItem.jsx
import { useDispatch } from 'react-redux';
import { deleteNote, editNote } from '../features/notes/notesSlice';
import { useState, useRef, useEffect } from 'react';

export default function NoteItem({ note }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(note.text);
  const inputRef = useRef();

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editNote({ id: note.id, text: updatedText }));
    }
    setIsEditing(!isEditing);
  };

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  return (
    <div className="note-item">
      {isEditing ? (
        <input
          ref={inputRef}
          className="note-input"
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
        />
      ) : (
        <p className="note-text">{note.text}</p>
      )}
      <div className="note-buttons">
        <button className="edit-btn" onClick={handleEdit}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button className="delete-btn" onClick={() => dispatch(deleteNote(note.id))}>
          Delete
        </button>
      </div>
    </div>
  );
}
