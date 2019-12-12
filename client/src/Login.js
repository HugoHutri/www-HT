import React, {useState, useContext, Component} from "react";
import "./styles.css";
import {UserContext} from "./UserContext.js";
import {Redirect} from "react-router-dom";

const logoStyle = {
    fontSize: 200
  };
const logoStyleSmall = {
    fontSize: 100
  };


class Login extends Component {
    constructor(props) {
        super(props);
        this.newuser = {username: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    static contextType = UserContext;

    login = e => {
        e.preventDefault();
        const [user, setUser] = this.context;
        setUser([this.newuser]);
        this.setState(() => ({toHomepage: true}))
    }

    handleChange(event) {
        const account = {username: event.target.value};
        this.newuser = account;
    }
      
    state = {
        toHomepage: false,
    }


    render() {
        const [user, setUser] = this.context;
        if (this.state.toHomepage === true) {
          return <Redirect to='/' />
        }
        return (
            <div className="login">
                <div className="row">
                    <div className="col s12 center-align">
                        <i className="material-icons white-text hide-on-small-and-down" style={logoStyle}>
                            person
                        </i>
                        <i className="material-icons white-text hide-on-med-and-up" style={logoStyleSmall} >
                            person
                        </i>
                    </div>
                </div>
                <div className="row">
                    <div className="col card s10 offset-s1 m6 offset-m3 center-align">
                        <h5>{user[0].username}</h5>
                        <div className="row">
                            <form className="col s12" onChange={this.handleChange}>
                                <div className="row">
                                    <div className="input-field col s12">
                                    <input id="username" type="text" className="validate"/>
                                    <label for="username" className="active">Username</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                    <input id="password" type="password" className="validate"/>
                                    <label for="password" className="active">Password</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="container section center-align">
                            <div 
                            className="btn waves-effect waves-light blue darken-4"
                            onClick={this.login}>
                                login
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
