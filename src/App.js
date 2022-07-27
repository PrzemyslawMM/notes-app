import { useEffect, useState } from 'react';
import Note from './components/Note';
import { NewButton, Wrapper } from './App.style';

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem('notes')) ?? [
      { id: 1, text: 'Click to edit', number: 137 },
    ]
  );

  const handleClick = () => {
    const id = notes[notes.length - 1].id + 1;
    setNotes((prevState) => {
      return [...prevState, { id, number: 137, text: 'Click to edit' }];
    });
  };

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <Wrapper>
      {notes.map((note) => (
        <Note
          text={note.text}
          number={note.number}
          key={note.id}
          index={note.id}
          setNotes={setNotes}
        />
      ))}
      <NewButton type="button" onClick={handleClick}>
        Click to add
      </NewButton>

      <button type="button" onClick={() => localStorage.clear()}>
        {/* develop */}
        Clear local storage
      </button>
    </Wrapper>
  );
};

export default App;
