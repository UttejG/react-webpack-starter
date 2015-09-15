import React, { Component } from "react";

export default class Greeting extends Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}
