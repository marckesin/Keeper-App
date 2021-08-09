import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [state, setState] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand() {
    setState(true);
  }

  return (
    <div>
      <form className="create-note">
        {state && (
          <input
            onChange={handleChange}
            name="title"
            value={note.title}
            placeholder="Título"
            autoComplete="off"
          />
        )}
        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          value={note.content}
          placeholder="Escreva uma nota..."
          rows={state ? "3" : "1"}
        />
        <Zoom in={state}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
