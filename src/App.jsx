// src/App.jsx
import NoteForm from "./components/NoteForm";
import Notes from "./features/notes/Notes";
import "./App.css"; // for overall styling

function App() {
  return (
    <div className="app">
      <h1>Redux Notes App</h1>
      <div className="note-card">
        <NoteForm />
        <Notes /> {/* Now inside the styled container */}
      </div>
    </div>
  );
}

export default App;

