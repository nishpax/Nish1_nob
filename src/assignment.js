// import { useState } from "react";
// export default function App() {

// const[inputText,setInputText]=useState(" ")
// const[updatedInputText,updatedSetInputText]=useState([])
//   function inputData(event){

//     setInputText(event.target.value)

//   }

//   function handleInputData(){

//     updatedSetInputText([...updatedInputText,updatedSetInputText])
//     setInputText(" ")

//   }
//   return (
//     <div className="App">
//       <input placeholder="enter your name" type="text" onClick={inputData}></input> <br />
//       <button onChange={handleInputData}>add</button>
//     </div>
//   );
// }

import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [inputList, setInputList] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddInput = () => {
    setInputList([...inputList, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddInput}>Add Input</button>
      <ul>
        {inputList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
