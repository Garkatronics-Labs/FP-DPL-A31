import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(prevCount => prevCount + 1);
  const handleDecrement = () => setCount(prevCount => prevCount - 1);
  const handleReset = () => setCount(0);

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}   