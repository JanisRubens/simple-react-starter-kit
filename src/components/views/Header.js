import React from "react";
//import { Link } from "react-router";
import NavLink from '../shared/NavLink'
import Logo from '../shared/Logo';

import '../../assets/stylesheets/components/header.scss';

export default class Header extends React.Component {


	render() {
		return (
			<header id="header">
			<Logo></Logo>
				<ul>
					<NavLink to="/"><span>Home</span></NavLink>
					<NavLink to="/about"><span>About</span></NavLink>
					<NavLink to="/login"><span>Login</span></NavLink>
					<NavLink to="/register"><span>register</span></NavLink>
				</ul>
			</header>
		);
	}
}