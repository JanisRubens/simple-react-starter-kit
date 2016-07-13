import dispatcher from "../utilities/dispatcher";
import * as axios from 'axios';


export function login( username, password ) {
	axios.post('/auth/login', {
		username: username,
		password: password
	})
		.then(function (response) {
		console.log(response);
	})
		.catch(function (error) {
		console.log(error);
	});
};

/*
dispatcher.dispatch({
        type: "RECIVED_SUMMONER_DATA",
        allData
      });
	  */