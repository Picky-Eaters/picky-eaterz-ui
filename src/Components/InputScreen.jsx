import React from 'react';
import {
  FormInput,
  Button
} from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import styled from 'styled-components';

export default class InputScreen extends React.Component {
  constructor(props) {
    super(props);
    this.sendState = this.sendState.bind(this);
    this.state = { dollarAmount: 0, location: null};
  }

  sendState() {
    console.log(this.state.dollarAmount);
  }

  render() {
      return (
          <StyledBody>     
            <StyledHeader >Location</StyledHeader >
              <StyledLocation>
                <FormInput
                  placeholder="Location"
                  onChange={this.handleChange}
                />
              </StyledLocation>
            <StyledHeader >Max Price</StyledHeader >
            <Prices>
              <Button 
                style = {{marginRight: 5}}
                theme='secondary' 
                onClick={() => this.setState( {dollarAmount:1} )}>
                  $</Button>
              <Button 
                style = {{marginRight: 5}} 
                theme='secondary' 
                onClick={() => this.setState( {dollarAmount:2} )}>
                  $$</Button>
              <Button 
                style = {{marginRight: 5}} 
                theme='secondary' 
                onClick={() => this.setState( {dollarAmount:3} )}>
                  $$$</Button>
              <Button 
                style = {{marginRight: 5}} 
                theme='secondary' 
                onClick={() => this.setState( {dollarAmount:4} )}>
                  $$$$</Button>
            </Prices>

            <Begin>
              <Button 
                theme="secondary"
                onClick={this.sendState}
                >BEGIN</Button>
            </Begin>
              
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

const StyledLocation = styled.div`
`
const Prices = styled.div`
  display: flex;
  justify-content: flex-start;
`
const StyledHeader = styled.div`
  color: pink;
  text-shadow: 2px 2px 0px #FF0000;
  font-size: 45px;
  font-weight: 900;
  `
const Begin = styled.div`
  font-size: 60px;
  font-weight: 900;
`
