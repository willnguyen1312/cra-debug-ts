import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function Counter(props: { value: number }) {
  return <p>{props.value}</p>;
}

function App() {
  const [counter, setCounter] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter value={counter} />
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </header>
    </div>
  );
}

export default App;
