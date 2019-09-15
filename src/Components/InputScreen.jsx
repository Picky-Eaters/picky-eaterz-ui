import React from 'react';
import { createGroup } from '../api/api.js'
import {
  FormInput,
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from "shards-react";
import {
  Redirect
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import styled from 'styled-components';

export default class InputScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "price": null,
      "location": null,
      "creating": false,
      "created": false,
      "error": "",
      "gid": ""
    };
  }

  // Creates a new group.
  createGroup = async () => {
    const { location, price } = this.state;

    const gid = await createGroup(location, price);
    this.setState({
      "created": true,
      gid
    });
  };

  // Attempts to create a new group.
  sendState = () => {
    const { location, price } = this.state;

    if (!location || !price) {
      this.setState({
        "creating": false,
        "created": false,
        "error": "Couldn't start picking, please make sure you set a location and a price."
      });
    } else {
      this.setState({
        "creating": true,
        "created": false
      }, this.createGroup);
    }
  };

  // Handles input in the location field.
  handleLocationChange = (e) => {
    this.setState({
      "location": e.target.value
    })
  };

  // Handles input on the pricing buttons.
  handlePriceChange = (val) => {
    this.setState({
      "price": val
    });
  };

  // Clears any current error.
  clearError = (e) => {
    this.setState({
      "error": ""
    });
  }

  render() {
    const { error, creating, created, gid } = this.state;

    if (created) {
      return <Redirect to={`/comparison/${gid}`} />
    }

    return (
      <div>
        <StyledBody>
          <StyledHeader >Location</StyledHeader>
          <StyledLocation>
            <FormInput
              placeholder="Enter a location"
              onChange={this.handleLocationChange}
            />
          </StyledLocation>
          <StyledHeader>Max price</StyledHeader>
          <Prices>
            <Button
              style={{ marginRight: 5 }}
              theme='secondary'
              onClick={() => this.handlePriceChange(1)}>
              $
            </Button>
            <Button
              style={{ marginRight: 5 }}
              theme='secondary'
              onClick={() => this.handlePriceChange(2)}>
              $$
            </Button>
            <Button
              style={{ marginRight: 5 }}
              theme='secondary'
              onClick={() => this.handlePriceChange(3)}>
              $$$
            </Button>
            <Button
              style={{ marginRight: 5 }}
              theme='secondary'
              onClick={() => this.handlePriceChange(4)}>
              $$$$
            </Button>
          </Prices>
          <Begin>
            <Button
              theme="secondary"
              onClick={creating ? null : this.sendState}>
              {creating ? "Starting" : "Start"}
            </Button>
          </Begin>
        </StyledBody>
        <Modal open={error !== ""} toggle={this.clearError}>
          <ModalHeader>Error</ModalHeader>
          <ModalBody>{error}</ModalBody>
        </Modal>
      </div>
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