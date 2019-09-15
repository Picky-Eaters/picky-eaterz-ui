import React from 'react';
import './App.css';
import StartScreen from './Components/StartScreen.jsx'
import InputScreen from './Components/InputScreen.jsx'
import WaitingScreen from './Components/WaitingScreen.jsx'
import DisplayScreen from './Components/DisplayScreen.jsx'
import ComparisonScreen from './Components/ComparisonScreen.jsx'
import styled from 'styled-components';

function App() {
  return (
    <StyledBackground>
      <ComparisonScreen/>
    </StyledBackground>
  );
}

export default App;



const StyledBackground = styled.div`
  background: #89CFF0;
  height: 100vh;
`

