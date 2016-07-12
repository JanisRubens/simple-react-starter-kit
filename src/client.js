import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import MainLayout from "./components/views/MainLayout";
import Home from "./components/views/Home";
import About from "./components/views/About";
import Register from "./components/views/Register";
import Login from "./components/views/Login";
import NotFound from "./components/NotFound";

const applicationRoot = document.getElementById('application-root');

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={MainLayout}>
			<IndexRoute component={Home} />
			<Route path="about" component={About} />
			<Route path="login" component={Login} />
			<Route path="register" component={Register} />
			<Route path='*' component={NotFound} />
		</Route>
	</Router>,
applicationRoot);

