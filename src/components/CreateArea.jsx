import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
    const [note, setInputNote] = useState({
        title: "",
        content: ""
    });
    
    const [contentClicked, setContentClicked] = useState(false);

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

    function handleClick() {
        setContentClicked(true);
      }

    return (
        <div>
            <form className="create-note">
                {contentClicked && (
                    <input
                        name="title"
                        onChange={handleNoteChange}
                        value={note.title}
                        placeholder="Title"
                    />
                )}
                <textarea 
                    name="content"  
                    placeholder="Take a note..." 
                    rows={contentClicked ? 3 : 1}
                    value={note.content} 
                    onChange={handleNoteChange}
                    onClick={handleClick}
                />
                <Zoom in={contentClicked}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;