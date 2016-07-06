import React from "react";
import { Link } from "react-router";
import logoPath from '../../assets/images/logo.png';


export default class Logo extends React.Component {
	render() {
		return (
			<div className="page-logo">
			<Link to="/">
			<img src={logoPath}></img>
			</Link>
			</div>
		);
	}
}