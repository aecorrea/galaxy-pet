import { React, useState } from "react";
import { Alert, AlertIcon,} from "@chakra-ui/react";

const Counter = () => {
  const [count, setCount] = useState(0);

  //Increase Function
  const increase = () => {
    setCount(count + 1);
  };
  //Decrease Function
  const decrease = () => {
    setCount(count - 1);
  };
  //Reset Function
  const reset = () => {
    setCount(0);
  };

  //Validation
  if (count < 0) {
    setCount(0);
  }

  if (count > 5) {
    setCount(5);
  }

  return (
    <div className="counter-div">
      <div className="counter-h1">
        <h1>Cantidad</h1>
      </div>

      <button className="counter-button" onClick={decrease}>
        -
      </button>
      <span className="count-span">{count}</span>
      <button className="counter-button" onClick={increase}>
        +
      </button>
    </div>
  );
};

export default Counter;
