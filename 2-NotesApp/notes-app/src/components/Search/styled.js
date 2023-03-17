import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  background-color: rgb(233, 233, 233);
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 1.5rem;
  align-items: center;

  & input {
    outline: none;
    width: 100%;
    border: none;
    background-color: transparent;
    padding: 1px 2px;
  }
`;
