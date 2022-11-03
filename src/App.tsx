import React from 'react';
import './App.css';
const { useState } = React;

function App() {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === true) {
      setChecked(false);
    }
    else { setChecked(true) }
  }
  return (
    <div className="App">
      <form>
        <label className="like">
          <input id="kkk" type="checkbox" checked onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}>
          </input>
          <div className="heart"></div>
        </label>
      </form>

    </div>
  );
}

export default App;
