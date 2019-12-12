import React, {Component, useState} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContextRoute from "./route.js";

import Nav from "./Nav";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import {UserProvider} from "./UserContext";

import "./styles.css";
import "./css/materialize.css";


function App() {

  return (
    <UserProvider>
      <Router>
        <div className="app">
          <Nav />
          <div className="window container blue lighten-4">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path='/myprofile' component={ Profile } />
              <Route path='/login' component={ Login } />
            </Switch>
          </div>
        </div>
      </Router>
    </UserProvider>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
