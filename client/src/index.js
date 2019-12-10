import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Nav";
import About from "./About";
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";

import "./styles.css";
import "./css/materialize.css";

const { join } = require( "path" );

const express  = require('express');

const app = express();

app.use( express.static( join( __dirname, "build" )));

app.get( "/*", (req, res, next) => { 
   res.sendFile(( join( __dirname, "build", "index.html" )));
})

app.listen(8080, function(){
   console.log('listening on *:80');
});

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <div className="window container red lighten-4">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/myprofile" component={Profile} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
