import React from 'react';
import { getRestaurants, voteForRestaurant } from '../api/api';
import {
  Button,
  Card,
  CardSubtitle,
  CardTitle,
  CardImg,
  CardBody,
  Tooltip,
  Modal,
  ModalHeader,
  ModalBody
} from "shards-react";
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

export default class ComparisonScreen extends React.Component {
  constructor(props) {
    super(props);

    this.gid = props.match.params.gid;
    this.restaurants = [];
    this.state = {
      "loading": true,
      "step": 0,
      "voting": false,
      "error": "",
      "redirect": false
    };
  }

  // Shuffles an array in place.
  shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  async componentDidMount() {
    const restaurants = await getRestaurants(this.gid);
    const arr = Object.values(restaurants);
    this.shuffle(arr);
    this.restaurants = arr;
    this.setState({
      "loading": false
    });
  }

  // Vote for a restaurant.
  vote = async (rid) => {
    const { step } = this.state;
    const success = await voteForRestaurant(this.gid, rid);

    if (success) {
      this.setState({
        "step": step + 1,
        "voting": false
      });
    } else {
      this.setState({
        "error": "Couldn't vote, this probably means the group was closed. Redirecting to the main screen.",
        "voting": false
      });
    }
  };

  // Handle a vote request.
  handleVote = async (rid) => {
    this.setState({
      "voting": true
    }, () => this.vote(rid));
  };

  // Clears the error and redirects to the home page.
  clearError = () => {
    this.setState({
      "error": "",
      "redirect": true
    });
  };

  // Converts a restaurant element into a display element.
  itemToDisplay = (place) => {
    return (
      <Button onClick={() => this.handleVote(place.id)}>
        <Card style={{ maxWidth: "300px" }}>
          <CardImg src="https://via.placeholder.com/300x200" />
          <CardBody>
            <CardTitle>{place.name}</CardTitle>
            <CardSubtitle>{place.categories[0]}</CardSubtitle>
          </CardBody>
        </Card>
      </Button>
    );
  };

  render() {
    const { error, redirect, step, loading, voting } = this.state;

    if (redirect) {
      return <Redirect to={"/"} />;
    }

    if (step >= 5) {
      return <Redirect to={`/display/${this.gid}`} />;
    }

    return (
      <div>
        <Container>
          {!loading && this.itemToDisplay(this.restaurants[step * 2])}
          {!loading && this.itemToDisplay(this.restaurants[step * 2 + 1])}
        </Container>
        <Modal open={error !== ""} toggle={this.clearError}>
          <ModalHeader>Error</ModalHeader>
          <ModalBody>{error}</ModalBody>
        </Modal>
      </div>
    );
  }
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    height: 100vh;
    padding-top: 30px;
`
