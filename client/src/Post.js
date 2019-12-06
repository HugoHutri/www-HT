import React from "react";
import "./styles.css";
import "./css/materialize.css";

function Post({ name, message, likes}) {
  return (
    <div className="card hoverable">
      <div className="card-content black-text">
        <span className="card-title">{name}</span>
        <p>{message}</p>
      </div>
      <div className="card-action">
        <div className="row valign-wrapper left-align">
          <div className="col">
            <i className="material-icons">thumb_up</i>
          </div>
          <div className="col">
            <p>{likes} likes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
