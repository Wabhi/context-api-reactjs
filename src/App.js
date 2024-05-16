import { CounterProvider } from "./context/CounterContext";
import { ThemeProvider } from "./context/ThemeContext";
import CounterOne from "./CounterOne";
import CounterThree from "./CounterThree";
import CounterTwo from "./CounterTwo";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <CounterProvider>
          <CounterOne />
          <hr />
          <CounterTwo />
          <hr />
          <CounterThree />
        </CounterProvider>
      </ThemeProvider>
    </div>
  );
}
