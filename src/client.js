import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import MainLayout from "./components/views/MainLayout";
import Home from "./components/views/Home";
import About from "./components/views/About";
//import General from "./components/views/aboutViews/General";
//import Author from "./components/views/aboutViews/Author";
//import HowToUse from "./components/views/aboutViews/HowToUse";
//import FolderStructure from "./components/views/aboutViews/FolderStructure";
import NotFound from "./components/NotFound";

const applicationRoot = document.getElementById('application-root');
//			<Route path="about">
//				<IndexRoute component={About} />
//			  	<Route path="general" component={General} />
//			  	<Route path="howtouse" component={HowToUse} />
//			  	<Route path="folderstructure" component={FolderStructure} />
//				<Route path="author" component={Author} />
//			</Route>
//All sites routing is listed here

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={MainLayout}>
			<IndexRoute component={Home} />
			<Route path="about" component={About} />
			<Route path='*' component={NotFound} />
		</Route>
	</Router>,
applicationRoot);

