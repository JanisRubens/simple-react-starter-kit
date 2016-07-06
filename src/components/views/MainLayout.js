import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router";

import '../../assets/stylesheets/base.scss';

export default class MainLayout extends React.Component {
	constructor() {
		super();
		this.state = {
			title: "Welcome",
		};
	}

	render() {
		return (
			<div id="page-wrap">
			<Header></Header>
			<main id="main-wrap">
			{ this.props.children }
			</main>
			<Footer></Footer>
			</div>
		);
	}
}