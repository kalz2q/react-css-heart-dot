import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "react-css-heart-dot"
  })
  return (
    <div className="App">
      <i className="heart">heart</i>
    </div>
  );
}

export default App;
