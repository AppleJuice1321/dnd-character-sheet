"use client";

import { useState } from "react";

export default function AbilityScore({ minValue = 8, maxValue = 20 }) {

  const [count, setCount] = useState(minValue);

  const [point, setPoint] = useState(maxValue)

  const [proficiency, setProficiency] = useState(0)

  const removeHandler = () => {
    if (count > minValue) {
      setCount((prevState) => prevState - 1);
      setPoint((prevState) => prevState + 1)
    }
  };

  // Add 1 for each click
  const addHandler = () => {
    if (count < maxValue) {
      setCount((prevState) => prevState + 1);
      setPoint((prevState) => prevState - 1)
    } if (count >= 12) {
      setCount((prevState) => prevState + 2);
      setPoint((prevState) => prevState - 2)
    } if (count >= 14) {
      setCount((prevState) => prevState + 3);
      setPoint((prevState) => prevState - 3)
    }
  };

  return (
    <>
    <div>
      <button onClick={removeHandler}>-</button>

      <span>{count}</span>

      <button onClick={addHandler}>+</button>
      <span>{point}</span>
    </div>
    </>
  );
}
