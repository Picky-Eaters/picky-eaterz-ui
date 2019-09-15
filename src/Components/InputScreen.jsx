import React from 'react';
import {
  InputGroup,
  FormInput,
  ButtonGroup,
  Button
} from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default class InputScreen extends React.Component {
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
          <div>     
            <InputGroup>
              <FormInput
                placeholder="Location"
                onChange={this.handleChange}
              />
            </InputGroup>  

            <ButtonGroup>
              <Button theme='secondary'>$</Button>
              <Button theme='secondary'>$$</Button>
              <Button theme='secondary'>$$$</Button>
              <Button theme='secondary'>$$$$</Button>
            </ButtonGroup>

            <InputGroup>
              <Button theme="secondary">BEGIN</Button>
            </InputGroup>
          </div>
      );
  }
}