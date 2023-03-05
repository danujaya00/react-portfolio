import React from "react";
import "bulma/css/bulma.min.css";
import "./index.css";
import MaterialIcon, { colorPalette } from "material-icons-react";

function HomePage() {
  return (
    <section className="hero is-fullheight-with-navbar is-hidden-mobile land mt-6">
      <div className="columns mr-6 ml-6 pl-5">
        <div className="column">
          <div className="textind mb-0 mt-0">
            <br />
            <br />
            <br />
            <br />
            <br /><br />
            <br />
            <br />
            <span className="is-hidden-mobile" style={{ fontSize: "4em" }}>
              HELLO
            </span>
            <br />
            <div className="block ml-4">
              <span
                style={{
                  fontSize: "xx-large",
                  color: "rgba(156, 156, 156, 0.829)",
                  marginBottom: 0,
                }}
              >
                I'M <br />
              </span>
              <span className="mb-0"> DANUJAYA LIYANAGE </span>
              <br />
              <span style={{ fontSize: "x-large", marginTop: 0 }}>
                Information Systems Undergraduate.
              </span>
            </div>
          </div>
        </div>
        <div className="column" />
      </div>
      <div className="hero-foot">
        <center>
          <a href="#about">
            <MaterialIcon
              icon="keyboard_arrow_down"
              color='#ffffff'
              size='large'            />
          </a>
        </center>
      </div>
    </section>
  );
}

export default HomePage;
