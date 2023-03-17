import styled from "styled-components";

export const NoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fef68a;
  min-height: 202px;
  border-radius: 10px;
  padding: 5%;
  box-sizing: border-box;
  & p {
    width: 100%;
    height: 100%;
    word-wrap: break-word;
    overflow-y: auto;
  }
`;

export const NoteFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & p {
    font-size: 0.8rem;
  }
`;

export const NoteListContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;
export const NoteAddContainer = styled(NoteContainer)`
  background-color: #67d7cc;
`;
export const NoteInput = styled.textarea`
  background-color: transparent;
  resize: none;
  height: 80%;
  border: none;
  outline: none;
`;
