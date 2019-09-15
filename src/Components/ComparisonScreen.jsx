import React from 'react';
import {
    Card,
    CardTitle,
    CardImg,
    CardBody,
    CardSubtitle,
    Button
  } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

export default class InputScreen extends React.Component {
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
        <Button theme='secondary'>
            <Card style={{ maxWidth: "300px" }}>
            <CardImg src="https://place-hold.it/300x200" />
            <CardBody>
                <CardTitle>Restaurant Name</CardTitle>
                <CardSubtitle>Food type</CardSubtitle>
            </CardBody>
            </Card>
        </Button>
      );
  }
}