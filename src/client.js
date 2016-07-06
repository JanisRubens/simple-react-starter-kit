import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import MainLayout from "./components/views/MainLayout";
import Home from "./components/views/Home";
import About from "./components/views/About";
import NotFound from "./components/NotFound";

const applicationRoot = document.getElementById('application-root');

//All sites routing is listed here

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={MainLayout}>
			<IndexRoute name="active" component={Home} />
			<Route path="about"  name="active" component={About} />
			<Route path='*' component={NotFound} />
		</Route>
	</Router>,
applicationRoot);