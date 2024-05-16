import React, { createContext, useState } from "react";

export const MyCounterContext = createContext(null);

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <MyCounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </MyCounterContext.Provider>
  );
};
