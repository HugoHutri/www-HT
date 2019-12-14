import React, {Component} from "react";
import {UserContext} from "./UserContext.js";
import {Redirect} from "react-router-dom";

import "../styles.css";

class Profile extends Component {
  static contextType = UserContext;

  async logout(context) {
      const [,setUser] = context;
      setUser([{username: "guest"}]);
      this.setState(() => ({toHomepage: true}))
  }
  state = {
    toHomepage: false,
  }

  render() {
    if (this.state.toHomepage === true) {
      return <Redirect to='/' />
    }

    const [user] = this.context;
    const username = user[0].username;

    if(username === "guest") {
        return <Redirect to='/login' />
    }

    return (
      <div className="profile">
        <div className="row">
          <div className="container center-align pt15">
            <img
              className="responsive-img circle"
              src="https://picsum.photos/200"
              alt="Profile"
            />
          </div>
        </div>
        <div className="row">
          <div className="col card s10 offset-s1 m6 offset-m3 center-align">
            <h4>{user[0].username}</h4>
          </div>
          <div className="card col s10 offset-s1 m6 offset-m3">
            <p className="center-align">
              Active user since 2019
            </p>
          </div>
          <div className="container section center-align">
            <div 
            className="btn waves-effect waves-light blue darken-4"
            onClick={() => this.logout(this.context)}>
              log out
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
