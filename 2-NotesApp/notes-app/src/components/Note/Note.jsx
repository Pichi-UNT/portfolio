import React, { memo } from "react";
import TrashIcon from "../Icons/TrashIcon";

import { NoteFooter, NoteContainer } from "./styled";

const Note = memo(({ id, text, date, handleDeleteNote }) => {
  return (
    <NoteContainer>
      <p>{text}</p>
      <NoteFooter>
        <p>{date}</p>
        <TrashIcon size="1.3em" onClick={() => handleDeleteNote(id)} />
      </NoteFooter>
    </NoteContainer>
  );
});

export default Note;
