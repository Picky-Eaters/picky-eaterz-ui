import React from 'react';
import './App.css';
import StartScreen from './Components/StartScreen.jsx'
import InputScreen from './Components/InputScreen.jsx'
import WaitingScreen from './Components/WaitingScreen.jsx'
import ComparisonScreen from './Components/ComparisonScreen'

function App() {
  return (
    <div>
      <ComparisonScreen theme='secondary'/>
    </div>
  );
}

export default App;
