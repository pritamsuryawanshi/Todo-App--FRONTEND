import React, {Component} from 'react';
import '../../bootstrap.css'
import AuthenticationService from "./AuthenticationService.js";

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "in28minutes",
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false,
        }
    }

    handleChange = (event) => {
        // console.log(this.state) //to check the states updating as we update the value
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginClicked = (event) => {
        //pritam,dummy
        if (this.state.username === "in28minutes" && this.state.password === "dummy") {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
            //above method of router lets you redirect to any route path which was set in main class u want
            //this.setState({showSuccessMessage: true, hasLoginFailed: false})
        } else {
            this.setState({showSuccessMessage: false, hasLoginFailed: true})
            console.log("failed")
        }
    }

    render() {
        return (

            <div>
                <h1>Login</h1>
                <div className={"container"}>
                    {this.state.hasLoginFailed && <div className={"alert alert-warning"}>Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    User Name: <input type="text" name="username" value={this.state.username}
                                      onChange={this.handleChange}/>
                    Password: <input type={"password"} name="password" value={this.state.password}
                                     onChange={this.handleChange}/>
                    <button className={"btn btn-success"} onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        );
    }
}

export default LoginComponent;