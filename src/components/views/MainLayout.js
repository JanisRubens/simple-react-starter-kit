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
			<div className="clear-fix">
			{ this.props.children }
			</div>
			</main>
			<Footer></Footer>
			</div>
		);
	}
}