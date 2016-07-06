import React from "react";
import logoPath from '../../assets/images/logo.png';


export default class Logo extends React.Component {
	render() {
		return (
			<img src={logoPath}></img>
		);
	}
}