import React from 'react';
import {
  InputGroup,
  FormInput,
  ButtonGroup,
  Button
} from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default class WaitingScreen extends React.Component {  
  render() {
      return (
          <div>     
            
            <InputGroup>
              <FormInput
                placeholder="Group Key:"
              />
            </InputGroup>  

            <InputGroup>
              <p>Participant #: </p>
              <FormInput/>
              <Button>Start</Button>
            </InputGroup>
          </div>
      );
  }
}