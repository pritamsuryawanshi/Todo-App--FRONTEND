import React, {Component} from 'react';
import AuthenticationService from "./AuthenticationService.js";
import {Redirect, Route} from "react-router-dom";

class AuthenticatedRoute extends Component {
    render() {

        if (AuthenticationService.isUserLoggedIn()) {
            return <Route {...this.props}/>
        } else {
            return <Redirect to="/login"/>
        }
    }
}

export default AuthenticatedRoute;