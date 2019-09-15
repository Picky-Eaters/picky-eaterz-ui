import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  FormInput,
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from "shards-react";
import { checkExists } from '../api/api';
import { Redirect } from 'react-router';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import styled from 'styled-components';

// A screen that handles the joining or creation of a new room.
export default class StartScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "code": "",
      "joining": false,
      "joined": false,
      "created": false,
      "error": ""
    };
  }

  // Handles a change in the code entered by the user.
  handleChange = (e) => {
    this.setState({
      "code": e.target.value
    });
  };

  // Joins the group from the state's code.
  joinGroup = async () => {
    const { code } = this.state;
    const exists = await checkExists(code);

    if (exists) {
      console.log("Group joined");
      this.setState({
        "joining": false,
        "joined": true
      });
    } else {
      this.setState({
        "joining": false,
        "joined": false,
        "error": "Could not find the group, please try again."
      });
    }
  }

  // Handles a case where the user presses the join button.
  handleJoin = (e) => {
    const { code } = this.state;

    // If there is no entered code, do nothing.
    if (!code) {
      this.setState({
        "joining": false,
        "joined": false
      });

      return;
    }

    this.setState({
      "joining": true,
      "joined": false
    }, this.joinGroup);
  };

  // Handles a button press for the creation of a new group.
  handleCreate = (e) => {
    this.setState({
      "created": true
    });
  };

  // Clears any current error.
  clearError = (e) => {
    this.setState({
      "error": ""
    });
  }

  render() {
    const { error, joining, creating, created, joined } = this.state;

    if (created) {
      return <Redirect to={"/input"} />
    }

    if (joined) {
      return <Redirect to={"/comparison"} />
    }

    return (
      <div>
        <StyledBody>
          <StyledHeader>Picky Eaterz, ready to EAT?</StyledHeader>
          <InputGroup>
            <FormInput
              placeholder="Group code"
              onChange={this.handleChange}
            />
            <InputGroupAddon type="append">
              <Button
                onClick={this.handleJoin}
                theme={"secondary"}>
                {joining ? "Joining" : "Join"}
              </Button>
            </InputGroupAddon>
          </InputGroup>
          <StyledCreate>
            <Button
              onClick={this.handleCreate}
              theme={"secondary"}>
              {creating ? "Creating" : "Create group"}
            </Button>
          </StyledCreate>
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
  justify-content: center;
  padding: 50px;
  height: 100vh;
`
const StyledHeader = styled.div`
  color: pink;
  text-shadow: 2px 2px 0px #FF0000;
  font-size: 60px;
  font-weight: 900;
`
const StyledCreate = styled.div`
  font-size: 60px;
  font-weight: 900;
`
