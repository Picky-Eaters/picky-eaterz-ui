import React from 'react';
import styled from 'styled-components';
import {deleteGroup} from '../api/api.js'


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

export default class DisplayScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = { first:'matt' , second: 'steph', third: 'mander'};
    }
  

    render() {
        return (
            <StyledBody> 
                <StyledText style= {{marginBottom: 20}}> Picky Eaterz Picked:</StyledText>

                <Button style = {{marginBottom:50}} theme="secondary" >
                    End Voting
                </Button>
                <StyledText >First</StyledText>
                <div>
                    <Button id="first" theme = "secondary" >
                    <Card style={{ maxWidth: "300px" }}>
                    <CardImg src="https://library.kissclipart.com/20180905/ohq/kissclipart-emoji-of-monkey-clipart-emoji-emoticon-monkey-2ac99f49d1533ada.jpg" />
                    <CardBody>
                        <CardTitle>{this.state.first}</CardTitle>
                        <CardSubtitle>Cuisine</CardSubtitle>
                    </CardBody>
                    </Card>
                    </Button> 
                </div>

                <StyledText>Second</StyledText>

                <div>
                    <Button id="second" theme="secondary">
                    <Card style={{ maxWidth: "300px" }}>
                    <CardImg src="https://i.kym-cdn.com/entries/icons/original/000/024/523/sad.jpg" />
                    <CardBody>
                        <CardTitle>{this.state.second}</CardTitle>
                        <CardSubtitle>Cuisine</CardSubtitle>
                    </CardBody>
                    </Card>
                    </Button> 
                </div>

                <StyledText>Third</StyledText>

                <div>
                    <Button id="third" theme="secondary">
                    <Card style={{ maxWidth: "300px" }}>
                    <CardImg src="https://mondrian.mashable.com/uploads%252Fcard%252Fimage%252F929108%252F46c9313d-32d0-4da8-8d41-f5e50936a926.png%252Ffull-fit-in__950x534.png?signature=_R0yeIihD3oDvF1bulncd718gR0=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com" />
                    <CardBody>
                        <CardTitle>{this.state.third}</CardTitle>
                        <CardSubtitle>Cuisine</CardSubtitle>
                    </CardBody>
                    </Card>
                    </Button> 
                </div>
            </StyledBody>
        );
    }
  }

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
  height: 100vh;
  overflow: auto;
`
const StyledText = styled.div`
  color: pink;
  text-shadow: 2px 2px 0px #FF0000;
  font-size: 45px;
  font-weight: 900;
  `


