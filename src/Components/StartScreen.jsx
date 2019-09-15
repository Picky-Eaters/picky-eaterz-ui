import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  FormInput,
  Button
} from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

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
          <div>
            <h>Ready to eat?</h>
             <InputGroup>
              <FormInput
                placeholder="input key" 
                onChange={this.handleChange}
              />
              <InputGroupAddon type="append">
                <Button theme="secondary">Join</Button>
              </InputGroupAddon>
            </InputGroup>

            <InputGroup>
              <Button theme="secondary">CREATE</Button>
            </InputGroup>
          </div>
      );
  }
}