import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '../../bootstrap.css'
import AuthenticatedRoute from "./AuthenticatedRoute";
import LoginComponent from "./LoginComponent";
import ListTodosComponent from "./ListTodosComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import WelcomeComponent from "./WelcomeComponent";
import LogoutComponent from "./LogoutComponent";
import ErrorComponent from "./ErrorComponent";

class TodoApp extends Component {
    render() {
        return (
            <div className={TodoApp}>
                <Router>
                    <HeaderComponent/>
                    <Switch>
                        {/*if this doesn't work then add <Route in an empty div ex.. <> </>*/}
                        <Route exact path={"/"} component={LoginComponent}/>
                        <Route path={"/login"} component={LoginComponent}/>
                        <AuthenticatedRoute path={"/welcome/:name"} component={WelcomeComponent}/>
                        <AuthenticatedRoute path={"/todos"} component={ListTodosComponent}/>
                        <AuthenticatedRoute path={"/logout"} component={LogoutComponent}/>
                        <Route component={ErrorComponent}/>
                    </Switch>
                    <FooterComponent/>
                </Router>
            </div>
        );
    }
}


export default TodoApp;


