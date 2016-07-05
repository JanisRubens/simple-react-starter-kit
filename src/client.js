import './assets/stylesheets/base.scss';

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import MainLayout from "./components/views/MainLayout";
import Home from "./components/views/Home";
import About from "./components/views/About";

const applicationRoot = document.getElementById('application-root');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
       <IndexRoute component={Home} />
       <Route path="about" component={About} />
    </Route>
  </Router>,
applicationRoot);