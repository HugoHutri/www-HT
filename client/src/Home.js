import React, { Component } from "react";
import Post from "./Post";
import NewPost from "./NewPost";

import "./styles.css";
import "./css/materialize.css";

class Home extends Component {

  state = {
    loading: true,
    posts: [],
  };

  async componentDidMount() {
    const url = "http://localhost:9000/posts";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({posts: data, loading: false});
  }

  render(){
    return (
      <div className="row">
        <div className="col s10 offset-s1 m10 offset-m1 l8 offset-l2">
          <NewPost />
          {this.state.loading || !this.state.posts ? (
            <Post name="loading..." message="loading..." likes="0" key="0"/>
          ) : (
            this.state.posts.map(post => (
              <Post name={post.name} message={post.message} likes={post.likes} key={post.id}/>
            ))
          )}
        </div>
      </div>
    );
  }
}

export default Home;
