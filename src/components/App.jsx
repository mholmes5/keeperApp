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

    function deleteNote(id){
        setNotes((prevNotes) =>{
            return prevNotes.filter((note, index) =>{
                return index !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote} />
            {notes.map((noteItem, index) => {
                return <Note 
                            key={uuidv4()}
                            id={index} 
                            title={noteItem.title} 
                            content={noteItem.content} 
                            onDelete={deleteNote}
                            />  
            })}
            <Footer />
        </div>
    );
}

export default App;