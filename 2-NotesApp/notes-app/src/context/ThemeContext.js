import React, { useEffect, useState } from "react";

export const isDarkContext = React.createContext(false);

export const IsDarkContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkSelected = localStorage.getItem("isDarkSelected");
    if (isDarkSelected) {
      setIsDark(JSON.parse(isDarkSelected));
    }
  }, []);

  const toggleTheme = () => {
    localStorage.setItem("isDarkSelected", !isDark);
    setIsDark(!isDark);
  };

  return (
    <isDarkContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </isDarkContext.Provider>
  );
};
