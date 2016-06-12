import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router";

export default class MainLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  render() {
    return (
      <div id="main-wraper">
        <Header></Header>
        <main>
          {this.props.children}
        </main>
        <Footer></Footer>
      </div>
    );
  }
}