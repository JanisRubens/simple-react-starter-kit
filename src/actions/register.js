import dispatcher from "../utilities/dispatcher";
import * as axios from 'axios';


export function register( username, password ) {
	axios.post('/auth/signup', {
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