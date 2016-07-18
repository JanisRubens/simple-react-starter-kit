import dispatcher from "../utilities/dispatcher";
import * as axios from 'axios';


export function login(username, password) {
	axios.post('/auth/login', {
		username: username,
		password: password
	})
		.then(function (response) {
			const loginData = response.data;
			console.log(loginData);
			console.log(dispatcher.dispatch);
			dispatcher.dispatch({
				type: "USER_LOGIN",
				loginData
			});
		})
		.catch(function (error) {
			const loginData = error;
			dispatcher.dispatch({
				type: "USER_LOGIN",
				loginData
			});
		});
};

/*
dispatcher.dispatch({
        type: "RECIVED_SUMMONER_DATA",
        allData
      });
	  */