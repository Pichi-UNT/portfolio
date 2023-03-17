import React, { useCallback, useEffect, useState } from "react";

import NoteList from "../../components/Note/NoteList";
import { Container } from "./styled";
import SearchBar from "../../components/Search/Search";
import Bar from "../../components/Bar/Bar";
import Wrapper from "../../components/Wrapper/Wrapper";
import { nanoid } from "nanoid";

const notes = JSON.parse(localStorage.getItem("notes")) || [
  {
    id: nanoid(),
    text: "Hello! This is our first note! Hurray",
    date: "6/5/2020",
  },
  {
    id: nanoid(),
    text: "Hello, I'm pichi",
    date: "17/5/2021",
  },
  {
    id: nanoid(),
    text: "Read about Context API",
    date: "7/3/2022",
  },
];

const Main = () => {
  const [data, setData] = useState(notes);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(data));
  }, [data]);

  const saveNote = useCallback((text) => {
    setData((CurrentData) => [
      ...CurrentData,
      {
        id: nanoid(),
        text: text,
        date: new Date().toLocaleDateString("es-AR"),
      },
    ]);
  }, []);

  const deleteNote = useCallback((id) => {
    setData((CurrentData) =>
      Array.from(CurrentData).filter((element) => {
        return element.id !== id;
      })
    );
  }, []);

  const handleOnChange = useCallback((e) => {
    const { value } = e.target;
    setSearchText(value);
  }, []);

  const filterData = (search) => {
    return data.filter((note) =>
      note.text.toLowerCase().includes(search.trim().toLowerCase())
    );
  };

  return (
    <Wrapper>
      <Container>
        <Bar />
        <SearchBar value={searchText} onChange={handleOnChange} />
        <NoteList
          data={filterData(searchText)}
          handleSaveNote={saveNote}
          handleDeleteNote={deleteNote}
        />
      </Container>
    </Wrapper>
  );
};

export default Main;
