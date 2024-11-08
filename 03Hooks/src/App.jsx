import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter]= useState(0)
  // let counter = 15; 
  const addValue = () =>{
    if (counter === 20) {
      console.log('the value reached the limit');
    }
    else{
      counter++
    }
    console.log("clicked", counter);
    setCounter(counter)
  }

  const removeValue =()=> {
    console.log('removed', counter);
    if (counter === 0) {
      console.log('the values cant be in minus');
    }
    else{
      counter--
    }
    setCounter(counter)
  }
  return (
    <>
      <h1>thelite</h1>
      <h2>counter value</h2>
      <h3>is {counter}</h3>
      <button
      onClick={addValue}>add value</button>
      <br />
      <button
      onClick={removeValue}>remove value</button>
    </>
  );
}

export default App;
