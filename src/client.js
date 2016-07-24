import React from "react";
import ReactDOM from "react-dom";
import routes from './utilities/routes';
import { Router, Route, IndexRoute, browserHistory } from "react-router";

const applicationRoot = document.getElementById('application-root');

ReactDOM.render(
	<Router
		history={browserHistory}
		routes={routes} />
	, applicationRoot);

