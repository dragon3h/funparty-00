import { useState } from "react";

import './Counter.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  }
  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <button type="button" onClick={increment}>Increament</button>
    </div>
  );
};
