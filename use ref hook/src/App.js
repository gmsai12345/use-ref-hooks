import React, { useRef } from "react";

export default function MyCounter() {
  const value = useRef(0);

  const incrementValue = () => {
    value.current++;
  };
  //  the use ref allows us to store the value of the variable across re renders
  return (
    <div>
      <button onClick={incrementValue}>Increment value</button>
      <div>Current value: {value.current}</div>
    </div>
  );
}
