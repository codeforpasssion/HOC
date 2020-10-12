import React from 'react';
import './App.css';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import MouseUpCounter from './MouseUpCounter';

function App() {
  return (
    <div className="App">
      <ClickCounter name="mohan"/>
      <HoverCounter name="ram"/>
      <MouseUpCounter/>
    </div>
  );
}

export default App;
