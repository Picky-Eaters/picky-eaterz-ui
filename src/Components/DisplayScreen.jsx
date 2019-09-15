import React from 'react';
import styled from 'styled-components';

export default class DisplayScreen extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = { first:'Mander' , second: 'bleh', third: 'hehe'};
    }
  
    handleChange(e) {
      this.setState( {first: e.target.value} );
    }
    render() {
        return (
            <StyledBody>     
              
                <StyledText style= {{paddingBottom: 10}}> You chose: </StyledText>
                <StyledText>First: {this.state.first}</StyledText>
                <Winners>
                <Rectangle style={{margin: 10, width: 100, heigh: 130}}></Rectangle>

                <Rectangle></Rectangle>

                <Rectangle></Rectangle>
                </Winners>
            </StyledBody>
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
const StyledText = styled.div`
  color: pink;
  text-shadow: 2px 2px 0px #FF0000;
  font-size: 45px;
  font-weight: 900;
  `
const Winners = styled.div`
  display: flex;
  justify-content: flex-end;
`
const Rectangle = styled.div`
    width:500px;
    height:100px;
    background: grey;
`
