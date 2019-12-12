import React, { Component, useContext } from "react";
import "./styles.css";
import "./css/materialize.css";
import axios from "./axios.js";
import {UserContext} from "./UserContext.js";


class NewPost extends Component {
  constructor(props) {
    super(props);
    this.text = {text: 'guest'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  
  handleSubmit(event) {
    if(this.state == null) return;
    this.handleBackendSubmit();
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  static contextType = UserContext;

  componentDidMount() {
  };

  //http://nodejs-mongo-backend-vuori.rahtiapp.fi/testAPI
  handleBackendSubmit = async e => {
    const [user, setUser] = this.context;
    const newpost =   {
      name: user[0].username,
      message: this.state.text
    }
    const message = await axios.post( "/posts", { post: newpost });
    console.log(message);
    this.props.handler();
  };

  render(){
    const postStyle = {
      height: 300
    };
    
    const [user, setUser] = this.context;

    return (
      <div className="card hoverable">
        <div className="card-content black-text">
          <span className="card-title">Create a new post, {user[0].username}!</span>
          <form className="col s12" onChange={this.handleChange}>
            <div className="input-field col s12 card">
              <textarea
                id="newpostarea"
                className="materialize-textarea"
                type="text"
                rows="4"
                maxlength = "128"
                height = "6rem"
              />
              <label htmlFor="newpostarea" />
            </div>
          </form>
        </div>
        <div className="container section center-align">
          <div className="">
            <div className="">
              <div 
              className="btn waves-effect waves-light blue darken-4"
              onClick={this.handleSubmit}>
                submit
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPost;