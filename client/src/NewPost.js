import React, { Component } from "react";
import "./styles.css";
import "./css/materialize.css";
import axios from "./axios.js";

function autosize(){
  var el = this;
  setTimeout(function(){
    el.style.cssText = 'height:auto; padding:0';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.text = {text: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.test();
  }

  handleSubmit(event) {
    if(this.state == null) return;
    this.handleBackendSubmit();
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({text: event.target.value});
  }

  componentDidMount() {
    return;
    let textarea = document.querySelector('textarea');
    textarea.addEventListener('keydown', autosize);
  };

  async test() {
    const message = await axios.post( "/testAPI", { message: "Testi" });
  }

  //http://nodejs-mongo-backend-vuori.rahtiapp.fi/testAPI
  handleBackendSubmit = async e => {
    const newpost =   {
      name: "häkkeri",
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
    return (
      <div className="card hoverable">
        <div className="card-content black-text">
          <span className="card-title">Create New Post</span>
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