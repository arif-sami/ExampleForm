import React, { Component } from "react";

export default class ExampleForm extends Component {
  handleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    console.log(e);
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <input type="text" name="fName" id="fName" />
        <input type="text" name="lName" id="lName" />
        <input type="number" name="age" id="age" />
        <button type="submit">SEND</button>
      </form>
    );
  }
}
