import React from "react";
import "./styles.css";

function LoaderCircle() {
  return (
    <div className="container center-align">
        <div class="preloader-wrapper big active">
            <div class="spinner-layer spinner-blue-only">
            <div class="circle-clipper left">
                <div class="circle"></div>
            </div><div class="gap-patch">
                <div class="circle"></div>
            </div><div class="circle-clipper right">
                <div class="circle"></div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default LoaderCircle;
