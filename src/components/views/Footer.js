import React from "react";

import '../../assets/stylesheets/components/footer.scss';


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
      <footer id="footer">
       Footer!
      </footer>
    );
  }
}