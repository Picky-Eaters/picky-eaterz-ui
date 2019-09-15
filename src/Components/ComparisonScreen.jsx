import React from 'react';

export default class ComparisonScreen extends React.Component {
  constructor(props) {
    super(props);

    this.gid = props.match.params.gid;
  }

  render() {
    return <div>{this.gid}</div>
  }
}