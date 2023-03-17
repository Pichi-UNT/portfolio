import React from "react";
import { IsDarkContextProvider } from "./context/ThemeContext";
import Main from "./page/main/Main";

const App = () => {
  return (
    <IsDarkContextProvider>
      <Main />
    </IsDarkContextProvider>
  );
};

export default App;
