import React from "react";
import { Link } from "react-router";

import '../../assets/stylesheets/components/header.scss';

import Logo from '../shared/Logo';

export default class Header extends React.Component {


	render() {
		return (
			<header id="header">
			<Logo></Logo>
			<ul>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
			</ul>
			</header>
		);
	}
}