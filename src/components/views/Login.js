import React from "react";
import * as loginActions from "../../actions/login";
import LoginStore from "../../stores/login";


export default class Login extends React.Component {

	constructor() {
		super();
		this.state = {
			username: '',
			password: ''
		};
	}

	handleFormChange(key) {
		return function (event) {
			var state = {};
			state[key] = event.target.value;
			this.setState(state);
			console.log(state);
		}.bind(this);
	}
	
	login(event){
		event.preventDefault();
		loginActions.login(this.state.username, this.state.password);
	}

	render() {
		return (
			<form>
			<input
			type="text"
			value={this.state.username}
			onChange={this.handleFormChange('username') }
			/>
			<input
			type="password"
			value={this.state.password}
			onChange={this.handleFormChange('password') }
			/>
			<input
			type="submit"
			value="submit"
			onClick={this.login.bind(this)}
			/>
			</form>
		);
	}
}
