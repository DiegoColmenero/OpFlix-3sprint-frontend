import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/App';
import Titulos from './pages/Titulos/Titulos'
import Login from './pages/Login/Login'
import Administrador from './pages/Administrador/Administrador'
// import { authenticationService } from '@/_services';
import * as serviceWorker from './serviceWorker';

import {Route, Link, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/titulos" component={Titulos}/>
                <Route path="/login" component={Login}/>
                <Route paht="/administrador" component={Administrador}/>
            </Switch>
        </div>
    </Router>
);
// const RotaPrivada = ({component : Component, ...rest}) =>{
//     <Route {...rest}>
//         render={props => 
//             localStorage.getItem("usuario-opflix") !== null
//             ? <Component {...props}/>
//             :
//             <Redirect
//                 to={{pathname: "/login", state: {from: props.location}}}
//             />
            
//         }
//     </Route>
// }

// export const PrivateRoute = ({ component: Component, roles, ...rest }) => (
//     <Route {...rest} render={props => {
//         const currentUser = authenticationService.currentUserValue;
//         if (!currentUser) {
//             // not logged in so redirect to login page with the return url
//             return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//         }

//         // check if route is restricted by role
//         if (roles && roles.indexOf(currentUser.role) === -1) {
//             // role not authorised so redirect to home page
//             return <Redirect to={{ pathname: '/'}} />
//         }

//         // authorised so return component
//         return <Component {...props} />
//     }} />
// )
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
