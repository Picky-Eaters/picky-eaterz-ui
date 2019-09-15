import React from 'react';
import { getRestaurants, voteForRestaurant } from '../api/api';
import {
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
    const { voting } = this.state;
    const categories = place.categories;

    return (
      <RestaurantContainer
        onClick={voting ? null : () => this.handleVote(place.id)}>
        <RestaurantImage
          style={{
            backgroundImage: `url('${place.image_url}')`
          }}>
          <LabelContainer>
            <StyledLabel>{place.name}</StyledLabel>
            {categories && categories.map(category => {
              return <StyledCategory>{category}</StyledCategory>;
            })}
          </LabelContainer>
        </RestaurantImage>
      </RestaurantContainer>
    );
  };

  render() {
    const { error, redirect, step, loading } = this.state;

    if (redirect) {
      return <Redirect to={"/"} />;
    }

    if (step >= 5) {
      return <Redirect to={`/display/${this.gid}`} />;
    }

    return (
      <StyledBody>
        <StyledLabel>{"Group: " + this.gid.toUpperCase()}</StyledLabel>
        <Container>
          {!loading && this.itemToDisplay(this.restaurants[step * 2])}
          {!loading && this.itemToDisplay(this.restaurants[step * 2 + 1])}
        </Container>
        <Modal open={error !== ""} toggle={this.clearError}>
          <ModalHeader>Error</ModalHeader>
          <ModalBody>{error}</ModalBody>
        </Modal>
      </StyledBody>
    );
  }
}

const StyledBody = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 3em;
      height: 100%;
      width: 100%;
    `
const Container = styled.div`
      display: flex;
      justify-content: space-around;
      height: 100%;
      width: 100%;
      margin: 2em auto;
    `
const RestaurantContainer = styled.div`
      width: 40%;
      height: 100%;
    `
const RestaurantImage = styled.div`
      width: 100%;
      height: 100%; 
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 8px;
    `

const LabelContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, .6);
      border-radius: 8px;
    `

const StyledLabel = styled.div`
      color: pink;
      text-shadow: 2px 2px 0px #FF0000;
      font-size: 2em;
      font-weight: 900;
      text-align: center;
    `

const StyledCategory = styled.div`
      color: pink;
      text-shadow: 1px 1px 0px #FF0000;
      font-size: 1em;
      font-weight: 900;
      text-align: center;
      margin-top: 5px;
    `