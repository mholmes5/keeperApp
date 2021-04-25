import React, { useState } from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from 'uuid';

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(note) {
        setNotes((prevNotes) => {
            return [...prevNotes, note];
        })
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem) => {
                return <Note key={uuidv4()} title={noteItem.title} content={noteItem.content} />  
            })}
            <Footer />
        </div>
    );
}

export default App;