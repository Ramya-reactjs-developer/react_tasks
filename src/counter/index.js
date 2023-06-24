import React, { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const inc = () => {
    setCounter(counter + 1);
  };
  const dec = () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <p>{counter}</p>
      <button onClick={inc}>Increament</button>
      <button onClick={dec}>Decreament</button>
    </div>
  );
}

export default Counter;
