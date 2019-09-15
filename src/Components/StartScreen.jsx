import React from 'react';
import {
  FormTextarea,
  InputGroup,
  InputGroupAddon,
  FormInput,
  Button
} from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import styled from 'styled-components';

export default class StartScreen extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { key: null };
  }

  handleChange(e) {
    this.setState( {key: e.target.value} );
  }

  render() {
      return (
          <StyledBody >
            <StyledHeader >Picky Eaterz, ready to EAT?</StyledHeader >
             <InputGroup>
              <FormInput
                placeholder="input key" 
                onChange={this.handleChange}
              />
              <InputGroupAddon type="append">
                <Button theme="secondary">Join</Button>
              </InputGroupAddon>
            </InputGroup>
          
            <StyledCreate>
              <Button theme="secondary">CREATE KEY</Button>
            </StyledCreate>
          </StyledBody>
      );
  }
}

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 50px;
`

const StyledHeader = styled.div`
  color: pink;
  font-size: 60px;
  font-weight: 900;
`
const StyledCreate = styled.div`
  font-size: 60px;
  font-weight: 900;
`
