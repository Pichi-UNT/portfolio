import React, { memo } from "react";
import { SearchContainer } from "./styled";
import { MdSearch } from "react-icons/md";

const SearchBar = memo(({ value, onChange }) => {
  return (
    <SearchContainer>
      <MdSearch size="1.3em" />
      <input
        onChange={onChange}
        value={value}
        type={"text"}
        placeholder="type to search..."></input>
    </SearchContainer>
  );
});

export default SearchBar;
