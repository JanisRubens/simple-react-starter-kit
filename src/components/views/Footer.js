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
       This is a FREE 3rd-party software and is created to compete in league of legends api April 2016 challenge
      </footer>
    );
  }
}