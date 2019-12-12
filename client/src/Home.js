import React, { Component } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import axios from "./axios.js";

import "./styles.css";
import "./css/materialize.css";

class Home extends Component {
  constructor(props) {
    super(props)

    this.handler = this.handler.bind(this)
  }

  state = {
    loading: true,
    posts: [],
  };

  async componentDidMount() {
    /*
    const url = "http://nodejs-mongo-backend-vuori.rahtiapp.fi/posts";
    const response = await fetch(url);
    const data = await response.json();
    */
    const { data } = await axios.get( "/posts" );
    this.setState({posts: data, loading: false});
  }

  async handler() {
    await this.componentDidMount();
    this.forceUpdate();
  }

  render(){
    return (
      <div className="row">
        <div className="col s10 offset-s1 m10 offset-m1 l8 offset-l2">
          <NewPost handler={this.handler}/>
          {this.state.loading || !this.state.posts ? (
            <Post name="loading..." message="loading..."/>
          ) : (
            this.state.posts.map(post => (
              <Post name={post.name} message={post.message}/>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Home;
