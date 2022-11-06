import React from 'react';
import './App.css';
// const { useRef } = React;

function App() {
  // const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="App">
      <label className="like" >
        {/* <input type="checkbox" ref={inputRef}> */}
        <input type="checkbox" >
        </input>
        <div className="heart"></div>
      </label>
    </div>
  );
}

export default App;
