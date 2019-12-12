import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

function Nav() {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper blue lighten-2">
          <div className="nav-wrapper container">
            <ul className="left">
              <Link to="/about" className="">
                <i className="material-icons">terrain</i>
              </Link>
            </ul>
            <ul className="">
              <li>
                <Link
                  to="/"
                  className="btn waves-effect waves-light blue darken-4"
                >
                  <i className="material-icons">home</i>
                </Link>
              </li>
              <li>
                <Link
                  to="/myprofile"
                  className="btn waves-effect waves-light blue darken-4"
                >
                  <i className="material-icons">person</i>
                </Link>
              </li>
              <li>
                <Link
                  to="/users"
                  className="btn waves-effect waves-light blue darken-4"
                >
                  <i className="material-icons">people</i>
                </Link>
              </li>
            </ul>

            <ul className="right">
              <form className="" id="form1">
                <div className="input-field hide-on-small-and-down">
                  <input id="search" type="search" className="white" />
                  <label className="label-icon" htmlFor="search">
                    <i className="material-icons black-text">search</i>
                  </label>
                  <i className="material-icons">close</i>
                  <div id="searchResults" />
                </div>
              </form>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
