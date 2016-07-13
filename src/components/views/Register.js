import React from "react";
import * as registerActions from "../../actions/register";

export default class Register extends React.Component {

	saveAndContinue(e) {
		e.preventDefault()

		// Get values via this.refs
		var data = {
			name     : this.refs.name.value,
			password : this.refs.password.value//,
			//email    : this.refs.email.value
		}
		registerActions.register( data.name, data.password );
	}
	render() {
		return ( <div>
				<label>Name</label> 
				<input type="text"
				ref="name"
				defaultValue="name" />

				<label>Password</label>
				<input type="password"
				ref="password"
				defaultValue="pass" />
				<button onClick={ this.saveAndContinue.bind(this) }>Save and Continue</button></div>
			   )
	}
}


				//<label>Email</label>
				//<input type="email"
				//ref="email"
				//defaultValue="email@email.com" />