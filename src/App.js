// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
export default function App() {

const [count, setCount] = useState(0);

  function handleUp() {
    setCount(count + 1);
    // console.log(count)
  }
  function handleDown() {
    setCount(count - 1);
    // console.log(count)
  }

  
  return (
    <div className="App">
        {count} <br />
      <button onClick={handleUp}>increase count</button>
      <br />
      <button onClick={handleDown}>decrese count</button>
      <br />
      
    </div>
  );
}





  




      