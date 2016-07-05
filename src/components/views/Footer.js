import React from "react";


export default class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <footer>
       Footer!
      </footer>
    );
  }
}