import React from "react";
import { MdDelete } from "react-icons/md";
import Fab from '@mui/material/Fab';



function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab onClick={handleClick}><MdDelete/></Fab>
    </div>
  );
}

export default Note;
