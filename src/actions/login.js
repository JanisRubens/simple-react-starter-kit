import dispatcher from "../utilities/dispatcher";
import ClientAuth from "../utilities/ClientAuth";
import * as axios from 'axios';


export function login(username, password) {
	axios.post('/auth/login', {
		username: username,
		password: password
	})
		.then(function (response) {
			const message = response.data.message;
			ClientAuth.authenticateUser(response.data.token);
			dispatcher.dispatch({
				type: "USER_LOGIN",
				message
			});
		})
		.catch(function (error) {
			const message = error.data.message;
			dispatcher.dispatch({
				type: "USER_LOGIN",
				message
			});
		});
};