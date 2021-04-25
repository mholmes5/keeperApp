import React from 'react';


function Note(props){
    return(
        <div 
            className="note"
            onClick={() =>{
                props.onDelete(props.id);
            }}
        >
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button>DELETE</button>
        </div>
    )
}

export default Note;