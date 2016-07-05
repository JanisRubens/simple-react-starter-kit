import React from "react";
import { Link } from "react-router";

export default class Header extends React.Component {


	render() {
		return (
			<header>
			<ul>
			<li><Link to="/">SWOOOD</Link></li>
			<li><Link to="/about">Users</Link></li>
			</ul>
			</header>
		);
	}
}