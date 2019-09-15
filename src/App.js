
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

function AppConnect() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Button</Link>
          </li>
          <li>
            <Link to="/about">ComparisonScreen</Link>
          </li>
          <li>
            <Link to="/topics">DisplayScreen</Link>
          </li>
          <li>
            <Link to="/topics">InputScreen</Link>
          </li>
          <li>
            <Link to="/topics">StartScreen</Link>
          </li>
          <li>
            <Link to="/topics">TextField</Link>
          </li>
          <li>
            <Link to="/topics">WaitingScreen</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Button} />
        <Route exact path="/about" component={ComparisonScreen} />
        <Route path="/topics" component={DisplayScreen} />
        <Route path="/topics" component={InputScreen} />
        <Route path="/topics" component={StartScreen} />
        <Route path="/topics" component={TextField} />
        <Route path="/topics" component={WaitingScreen} />

      </div>
    </Router>
  );
}






