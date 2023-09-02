import { React, useState } from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";

const Counter = ({ counter, setCounter }) => {
  //Increase Function
  const increase = () => {
    setCounter(counter + 1);
  };
  //Decrease Function
  const decrease = () => {
    setCounter(counter - 1);
  };
  //Reset Function
  const reset = () => {
    setCounter(1);
  };

  //Validation
  

  if (counter <= 0) {
    setCounter(1);
  }

  if (counter > 5) {
    setCounter(5);
  }

  return (
    <div className="counter-div">
      <div className="counter-h1">
        <h2 className="counter-h2">Cantidad</h2>
      </div>

      <button className="counter-button" onClick={decrease}>
        -
      </button>
      <span className="count-span">{counter}</span>
      <button className="counter-button" onClick={increase}>
        +
      </button>
    </div>
  );
};

export default Counter;
