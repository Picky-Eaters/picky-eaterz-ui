import React from 'react';
import './App.css';
import StartScreen from './Components/StartScreen.jsx'
import InputScreen from './Components/InputScreen.jsx'
import styled from 'styled-components';

function App() {
  return (
    <StyledBackground>
      <InputScreen/>
    </StyledBackground>
  );
}

export default App;

const StyledBackground = styled.div`
  background: #89CFF0;
  height: 100vh;
`