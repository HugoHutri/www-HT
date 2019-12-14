import React from "react";
import "../styles.css";
import "../css/materialize.css";

function Post({ name, message}) {
  return (
    <div className="card hoverable">
      <div className="card-content black-text">
        <span className="card-title">@{name}</span>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Post;
