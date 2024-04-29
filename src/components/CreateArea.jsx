import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import Fab from '@mui/material/Fab';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
// use package toast for showing the error alert
  function submitNote(event) {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please enter both title and text.");
    } else {
      props.onAdd(note);
      setNote({
        title: "",
        content: ""
      });
    }
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <Fab onClick={submitNote}><MdAdd/></Fab>
      </form>
      {/* toast container  */}
            <ToastContainer /> 

    </div>
  );
}

export default CreateArea;
