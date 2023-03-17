import React, { memo, useContext } from "react";
import { isDarkContext } from "../../context/ThemeContext";
import { dark, white } from "../../Theme";
import Button from "../Button/Button";
import { BarContainer } from "./styled";

const Bar = memo(() => {
  const { isDark, toggleTheme } = useContext(isDarkContext);
  return (
    <BarContainer theme={isDark ? dark : white}>
      <h1>Notes</h1>
      <Button onClick={toggleTheme}>Toggle Mode</Button>
    </BarContainer>
  );
});

export default Bar;
