import React from "react";


export default class Register extends React.Component {

	saveAndContinue(e) {
		e.preventDefault()

		// Get values via this.refs
		var data = {
			name     : this.refs.name.value,
			password : this.refs.password.value,
			email    : this.refs.email.value,
		}
		console.log(data);
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

				<label>Email</label>
				<input type="email"
				ref="email"
				defaultValue="email@email.com" />

				<button onClick={ this.saveAndContinue.bind(this) }>Save and Continue</button></div>
			   )
	}
}