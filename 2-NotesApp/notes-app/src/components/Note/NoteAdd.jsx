import React, { useState } from "react";
import Button from "../Button/Button";
import { NoteAddContainer, NoteFooter, NoteInput } from "./styled";
const lettersLimit = 200;
const NoteAdd = ({ handleSaveNote }) => {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    if (lettersLimit - value.length >= 0) {
      setText(value);
    }
  };
  
  return (
    <NoteAddContainer>
      <NoteInput
        placeholder="Type to add a note..."
        onChange={handleOnChange}
        value={text}
      />
      <NoteFooter>
        <p>{lettersLimit - text.length} remaining</p>
        <Button
          onClick={() => {
            if (text.trim().length > 0) {
              setText("");
              handleSaveNote(text);
            }
          }}>
          Save
        </Button>
      </NoteFooter>
    </NoteAddContainer>
  );
};

export default NoteAdd;
