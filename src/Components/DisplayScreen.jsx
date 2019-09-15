import React from 'react';
import styled from 'styled-components';
import { getRestaurants } from '../api/api';

export default class DisplayScreen extends React.Component {
  constructor(props) {
    super(props);

    this.gid = props.match.params.gid;
    this.state = {
      loading: true,
      data: null,
      maxVotes: 0
    };
  }

  async componentDidMount() {
    const data = await getRestaurants(this.gid);
    const restaurants = Object.values(data);
    restaurants.sort((a, b) => {
      return b.votes - a.votes;
    });

    this.setState({
      loading: false,
      data: restaurants.slice(0, 3),
      maxVotes: restaurants[0].votes
    });
  }

  itemToDisplay = (place) => {
    const { maxVotes } = this.state;
    const width = (place.votes / maxVotes) * 100;

    return (
      <StyledContainer key={place.id}>
        <StyledLabel style={{ marginBottom: '0.1em' }}>
          {place.name}
        </StyledLabel>
        <Rectangle style={{
          width: `${width}%`,
          backgroundImage: `url('${place.image_url}')`
        }} />
      </StyledContainer>
    );
  };

  render() {
    const { data, loading } = this.state;

    return (
      <StyledBody>
        <StyledLabel>{"Group: " + this.gid.toUpperCase()}</StyledLabel>
        <StyledText>Leaders:</StyledText>
        <Winners>
          {data && data.map(this.itemToDisplay)}
        </Winners>
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
const StyledText = styled.div`
      color: pink;
      text-shadow: 2px 2px 0px #FF0000;
      font-size: 45px;
      font-weight: 900;
    `
const StyledLabel = styled.div`
      color: pink;
      text-shadow: 2px 2px 0px #FF0000;
      font-size: 2em;
      font-weight: 900;
    `
const Winners = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      width: 100%;
      height: 100%;
    `
const StyledContainer = styled.div`
      width: 100%;
    `
const Rectangle = styled.div`
      height: 6em;
      background: grey;
      background-repeat: repeat;
      background-size: auto 6em;
      border-radius: 8px;
    `
