import React, { useContext, Component } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import LoginFirst from "./LoginFirst";
import LoaderCircle from "./LoaderCircle.js";
import axios from "./axios.js";
import {UserContext} from "./UserContext.js";

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
    const { data } = await axios.get( "/posts" );
    this.setState({posts: data, loading: false});
  }

  async handler() {
    await this.componentDidMount();
    this.forceUpdate();
  }
  
  static contextType = UserContext;

  render(){
    const [user, setUser] = this.context;
    const username = user[0].username;
    return (
      <div className="row">
        <div className="col s10 offset-s1 m10 offset-m1 l8 offset-l2">

          {(username === "guest" || username === "") ? (
            <LoginFirst/>
          ) : (
            <NewPost handler={this.handler}/>
          )}

          {this.state.loading || !this.state.posts ? (
            <LoaderCircle/>
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
