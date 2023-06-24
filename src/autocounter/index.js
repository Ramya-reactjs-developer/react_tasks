import { useEffect, useState } from "react";

export default function AutoCounter() {
  const [count, setCount] = useState(0);
  const [Play, setPlay] = useState(false);
  const [resets, setReset] = useState(true);
  const increament = () => {
    setPlay(true);
    setReset(true);
  };
  const decreament = () => {
    setPlay(false);
  };

  const reset = () => {
    setReset(false);
    setPlay(false);
  };
  useEffect(() => {
    if (Play === true) {
      setCount(count + 1);
    } else if (Play === false && resets === false) {
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
