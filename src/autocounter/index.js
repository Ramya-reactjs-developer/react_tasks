import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [Play, setPlay] = useState(false);
  const increament = () => {
    setPlay(true);
  };
  const decreament = () => {
    setPlay(false);
  };

  const reset = () => {
    setPlay(false);
  };
  useEffect(() => {
    if (Play === true) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  });

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={increament}>Play</button>
      <button onClick={decreament}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
