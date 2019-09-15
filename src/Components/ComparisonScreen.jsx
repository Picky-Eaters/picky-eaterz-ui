import React from 'react';
import {
    Button,
    Card,
    CardSubtitle,
    CardTitle,
    CardImg,
    CardBody,
    Tooltip,
}
from "shards-react";
import styled from 'styled-components';

export default class ComparisonScreen extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { name1: 'FAT L', left: false, right: false  };
    }
  
    toggle(pos) {
        const newState = {};
        newState[pos] = !this.state[pos];
        this.setState({ ...this.state, ...newState });
      }

    render() {
        return (
            <Container>

            <div1>
            <Button id="first" theme="secondary">
            <Tooltip
                open={this.state.left}
                target="#first"
                toggle={() => this.toggle("left")}
            >
                😁 Choose me!
            </Tooltip>
            <Card style={{ maxWidth: "300px" }}>
            <CardImg src="https://place-hold.it/300x200" />
            <CardBody>
                <CardTitle>{this.state.name1}</CardTitle>
                <CardSubtitle>Cuisine</CardSubtitle>
            </CardBody>
            </Card>
            </Button> 
            </div1>

            <div2>
            <Button id="second" theme="secondary">
            <Tooltip
                open={this.state.right}
                target="#second"
                toggle={() => this.toggle("right")}
            >
                😁 No, choose me!
            </Tooltip>
            <Card style={{ maxWidth: "300px" }}>
            <CardImg src="https://place-hold.it/300x200" />
            <CardBody>
                <CardTitle>{this.state.name1}</CardTitle>
                <CardSubtitle>Cuisine</CardSubtitle>
            </CardBody>
            </Card>
            </Button> 
            </div2>

            </Container>
          );
    }
  }


const Container = styled.div`
    display: flex;
    justify-content: space-around;
    height: 100vh;
    padding-top: 30px;
`