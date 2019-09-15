import React from 'react';
import './App.css';
import StartScreen from './Components/StartScreen';
import InputScreen from './Components/InputScreen';
import ComparisonScreen from './Components/ComparisonScreen'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

function App() {
  return (
    <Router>
      <StyledBackground>
        <Switch>
          <Route exact path="/" component={StartScreen} />
          <Route path="/input" component={InputScreen} />
          <Route path="/comparison/:gid" component={ComparisonScreen} />
        </Switch>
      </StyledBackground>
    </Router>
  );
}

export default App;

const StyledBackground = styled.div`
      background: #89CFF0;
      height: 100vh;
`