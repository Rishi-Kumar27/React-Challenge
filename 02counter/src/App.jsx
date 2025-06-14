import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";


function App() {
  let [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    if (counter === 20) {
      return;
    } else {
      counter = counter + 1;
      setCounter(counter);
    }
  };

  const removeValue = () => {
    if (counter === 0) {
      return;
    } else {
      counter = counter - 1;
      setCounter(counter);
    }
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
