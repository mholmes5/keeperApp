import React from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import notes from '../notes';
import CreateArea from "./CreateArea";
import { v4 as uuidv4 } from 'uuid';

function App(){
    return (
        <div>
            <Header />
            {notes.map(note => <Note  key={note.key} title={note.title} content={note.content} /> )}
            <Footer />
        </div>
    );
}

export default App;