import React, { useContext } from "react";
import { isDarkContext } from "../../context/ThemeContext";
import { dark, white } from "../../Theme";
import { WrapperStyled } from "./styled";

const Wrapper = ({ children }) => {
  const { isDark } = useContext(isDarkContext);

  return (
    <WrapperStyled theme={isDark ? dark : white}>{children}</WrapperStyled>
  );
};

export default Wrapper;
