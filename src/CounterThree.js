import React from "react";
import { useContext } from "react";
import { MyCounterContext } from "./context/CounterContext";
import { MyThemeContext } from "./context/ThemeContext";
const CounterThree = () => {
  const { handleThemeChange, isDarkMode } = useContext(MyThemeContext);
  const { count, increment, decrement, reset } = useContext(MyCounterContext);
  const styleContainer = {
    background: isDarkMode ? "black" : "white",
    padding: "2rem",
    color: isDarkMode ? "red" : "green",
  };
  return (
    <div style={styleContainer}>
      <p>THE COUNTER - 1 | {count}</p>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
      <button onClick={handleThemeChange}>DARK/LIGHT</button>
    </div>
  );
};

export default CounterThree;
