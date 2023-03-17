import styled from "styled-components";

export const BarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h1 {
    color: ${(props) => props.theme.color};
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }
`;
