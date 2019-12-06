import React from "react";

import "./styles.css";

function Profile() {
  return (
    <div className="profile">
      <div className="row">
        <div className="col card s12 m6 offset-m3">
          <div className="valign-wrapper">
            <img
              className="responsive-img"
              src="https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"
              alt="Profile"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col card s10 offset-s1 m6 offset-m3 center-align">
          <h3>Mr koira</h3>
          <h4>Innokas somepostaaja</h4>
        </div>

        <div className="card col s12 m8 offset-m2">
          <p>
            Postailu sosiaalisessa mediassa on kivaa. Taitoni olen hankkinut
            facebookin, instagramin ja jodelin kautta. Etsin kokkikoulua, jossa
            pääsen soveltamaan spagetinkeitto taitojani ja kehittymään
            italialaisten koiranruokien ja nuuhkimisen ammattilaisena.
            Suosikkipuuhaani on erityisesti lentäminen ja spagettikuvien
            lähettäminen sosiaalisessa mediassa.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
