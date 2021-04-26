import React, { useState } from "react";

function CreateArea(props) {
    const [note, setInputNote] = useState({
        title: "",
        content: ""
    });
    

    function handleNoteChange(event) {
        const {name, value} = event.target;
        setInputNote((note) => {
            return { ...note, [name]: value };
        });
    }

    function submitNote(event){
        props.onAdd(note);
        setInputNote({
            title: "",
            content: ""
        })
        event.preventDefault();

    }

    return (
        <div>
            <form>
                <input 
                    name="title" 
                    placeholder="Title" 
                    value={note.title} 
                    onChange={handleNoteChange} 
                />
                <textarea 
                    name="content"  
                    placeholder="Take a note..." 
                    rows="3" 
                    value={note.content} 
                    onChange={handleNoteChange} 
                />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;