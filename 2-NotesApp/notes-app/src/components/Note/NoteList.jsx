import React from "react";
import Note from "./Note";
import NoteAdd from "./NoteAdd";
import { NoteListContainer } from "./styled";

const NoteList = ({ data, handleSaveNote, handleDeleteNote }) => {
  return (
    <NoteListContainer>
      {data.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        );
      })}
      <NoteAdd handleSaveNote={handleSaveNote} />
    </NoteListContainer>
  );
};

export default NoteList;
