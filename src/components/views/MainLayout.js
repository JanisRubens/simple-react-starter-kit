import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router";
import ClientAuth from "../../utilities/ClientAuth";

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
					<div className="child-container clear-fix">
						{ this.props.children }
					</div>
				</main>
				<Footer></Footer>
			</div>
		);
	}
}