import React, { createContext, useState } from "react";

export const MyThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <MyThemeContext.Provider value={{ isDarkMode, handleThemeChange }}>
      {children}
    </MyThemeContext.Provider>
  );
};
