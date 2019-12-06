import React from "react";
import "./styles.css";
import "./css/materialize.css";

function NewPost() {
  return (
    <div className="card hoverable">
      <div className="card-content black-text">
        <span className="card-title">Create New Post</span>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="newpostarea"
                  className="materialize-textarea"
                  type="text"
                />
                <label htmlFor="newpostarea" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPost;
