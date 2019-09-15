import React from 'react';
import {
  InputGroup,
  FormInput,
  ListGroupItem,
  ButtonGroup,
  Button
} from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import styled from 'styled-components';

export default class WaitingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { participants: 1 , code: 'bleh'};
  }

  handleChange(e) {
    this.setState( {participants: e.target.value} );
  }
  render() {
      return (
          <StyledBody>     
            
             <StyledText style= {{paddingBottom: 10}}> Group Code: </StyledText>
             <ListGroupItem theme="light">{this.state.code}</ListGroupItem>
            <StyledLayer>
            <StyledText>Participants: {this.state.participants}</StyledText>
            <StyledButton>
            <Button theme="secondary">Start</Button>
            </StyledButton>
            </StyledLayer>
          </StyledBody>
      );
  }
}

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 50px;
  height: 100vh;
`
const StyledText = styled.div`
  color: pink;
  text-shadow: 2px 2px 0px #FF0000;
  font-size: 45px;
  font-weight: 900;
  `

const StyledLayer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 25px;
  
  `
const StyledButton = styled.div`
  align-self: center;
`