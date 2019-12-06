import React from "react";

import "./styles.css";

function Login() {
    const logoStyle = {
        fontSize: 300
      };
      const logoStyleSmall = {
        fontSize: 150
      };
    return (
    <div className="login">
        <div className="row">
            <div className="col s12 center-align">
                <i
                    className="material-icons white-text hide-on-small-and-down"
                    style={logoStyle}
                >
                    person
                </i>
                <i
                    className="material-icons white-text hide-on-med-and-up"
                    style={logoStyleSmall}
                >
                    person
                </i>
            </div>
        </div>
        <div className="row">
            <div className="col card s10 offset-s1 m6 offset-m3 center-align">
                <h3>Login</h3>
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

export default Login;
