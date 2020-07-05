import React, {Component} from "react";
import {Link} from "react-router-dom";
import HelloWorldService from "../../api/todo/HelloWorldService";

class WelcomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            welcomeMessage: ''
        }
    }

    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className={"container"}>
                    Welcome {this.props.match.params.name}.
                    You can manage your todos from <Link
                    to={"/todos"}>here</Link>
                </div>
                <div className={"container"}>
                    Click here to get a customized welcome message
                    <button className="btn btn-success" onClick={this.retrieveWelcomeMessage}>Get welcome
                        message</button>
                </div>

                <div className={"container"}>
                    {this.state.welcomeMessage}
                </div>
            </>
        );
    }

    retrieveWelcomeMessage = () => {
        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
            .then(
                response =>
                    this.handleSuccessResponse(response)

            ).catch(error =>
            this.handleErrorResponse(error)
        )
    }

    handleSuccessResponse = (response) => {
        console.log(response)
        this.setState({
            welcomeMessage: response.data.message
        })
    }

    handleErrorResponse = (error) => {
        this.setState({
            welcomeMessage: error.response.data.message
        })
    }
}

export default WelcomeComponent;