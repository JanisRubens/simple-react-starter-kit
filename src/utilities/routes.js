import ClientAuth from "../utilities/ClientAuth";

import MainLayout from "../components/views/MainLayout";
import Home from "../components/views/Home";
import About from "../components/views/About";
import Register from "../components/views/Register";
import Login from "../components/views/Login";
import NotFound from "../components/NotFound";

const routes = {
    component: MainLayout,
    getChildRoutes: (location, callback) => {
        if (ClientAuth.isUserAuthenticated()) {
            callback(null, [
                {
                    path: '/',
                    getComponent: (location, callback) => {
                        if (ClientAuth.isUserAuthenticated()) {
                            callback(null, Home);
                        } else {
                            location(null, Login);
                        }
                    }
                },

                {
                    path: '/about',
                    component: About
                },

                {
                    path: '/logout',
                    onEnter: (nextState, replaceState) => {
                        ClientAuth.deauthenticateUser();
                        replaceState(null, '/login');
                    }
                },

                {
                    path: '*',
                    component: NotFound
                }

            ]);
        } else {
            callback(null, [
                {
                    path: '/login',
                    component: Login
                },

                {
                    path: '/register',
                    component: Register
                },

                {
                    path: '*',
                    onEnter: (nextState, replaceState) => {
                        replaceState(null, '/login');
                    }
                },

            ]);
        }
    }
};

export default routes;

// import ClientAuth from "./utilities/ClientAuth";

// import MainLayout from "./components/views/MainLayout";
// import Home from "./components/views/Home";
// import About from "./components/views/About";
// import Register from "./components/views/Register";
// import Login from "./components/views/Login";
// import NotFound from "./components/NotFound";

// const applicationRoot = document.getElementById('application-root');

// ReactDOM.render(
// 	<Router history={browserHistory}>
// 		<Route path="/" component={MainLayout}>
// 			<IndexRoute component={Home} />
// 			<Route path="about" component={About} />
// 			<Route path="login" component={Login} />
// 			<Route path="register" component={Register} />
// 			<Route path='*' component={NotFound} />
// 		</Route>
// 	</Router>,
// 	applicationRoot);