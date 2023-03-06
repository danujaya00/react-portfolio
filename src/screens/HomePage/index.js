import React from "react";
import "bulma/css/bulma.min.css";
import "bulma-social/css/all.min.css"
import "./index.css";
import MaterialIcon, { colorPalette } from "material-icons-react";

import line1 from "../../assets/Line1.png";
import line_left from "../../assets/line_left.png";
import le_Me from "../../assets/le_Me.png";

function HomePage() {
  return (
    <>
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

    <section id="about" data-aos="fade-up" data-aos-duration={900}>
    <div className="columns mt-6 bcol is-hidden-touch">
      <div className="column is-one-fifth">
        <div className="container">
          <h1 className="headingtext">About Me</h1>
        </div>
      </div>
      <div className="column is-align-self-center">
        <img src={line1} alt="Line" style={{ width: "100%" }} />
      </div>
    </div>
    <div className="columns mt-6 bcol is-hidden-desktop">
      <div className="column is-align-self-center">
        <img
        className="image"
          src={line_left}
          alt="Line"
          style={{ width: "100%" }}
        />
      </div>
      <div className="column is-one-quarter has-text-centered">
        <div className="container">
          <h1 className="headingtext">ABOUT ME</h1>
        </div>
      </div>
      <div className="column is-align-self-center">
        <img src={line1} alt="Line" style={{ width: "100%" }} />
      </div>
    </div>
    <div className="columns mt-5 bcol">
      <div className="column ml-5 br-5">
        <p className="btext">
          An information Systems first year undergraduate with Intermediate
          level skills of coding and design. Constant learner with the ability
          to adapt to new technologies. Currently on the way improving coding
          skills and learning Angular , React and Python for Machine Learning.
        </p>
        <p className="btext mt-6 stext">
          A Hiker | Car Enthusiast | Traveler | Travel Photographer
        </p>
        <div>
          <button className="button is-twitter is-rounded is-outlined mt-6 twitter">
            <i className="fa-brands fsc fa-twitter mr-2" />
            @danujaya_s
          </button>
        </div>
      </div>
      <div className="column is-one-third">
        <center>
          <figure className="image mainimage">
            <img src={le_Me}/>
          </figure>
        </center>
      </div>
    </div>
  </section>
  <section id="education" data-aos="fade-up" data-aos-duration={900}>
    <div className="columns mt-6 bcol is-hidden-touch">
      <div className="column is-align-self-center">
        <img
          src={line_left}
          alt="Line"
          style={{ width: "100%" }}
        />
      </div>
      <div className="column is-one-fifth">
        <div className="container">
          <h1 className="headingtext has-text-right">Education</h1>
        </div>
      </div>
    </div>
    <div className="columns mt-6 bcol is-hidden-desktop">
      <div className="column is-align-self-center">
        <img
          src={line_left}
          alt="Line"
          style={{ width: "100%" }}
        />
      </div>
      <div className="column is-one-quarter has-text-centered">
        <div className="container">
          <h1 className="headingtext">EDUCATION</h1>
        </div>
      </div>
      <div className="column is-align-self-center">
        <img src={line1} alt="Line" style={{ width: "100%" }} />
      </div>
    </div>
    <div className="container bcol btext pl-6">
      <ul>
        <li className="mb-5">
          <dl>
            <dt>Bachelor of Science in Information Systems.</dt>
            <dd>
              <span style={{ fontSize: "medium", opacity: "0.75" }}>
                University of Colombo School of Computing.
              </span>
              <br />
              <span style={{ fontSize: "small", opacity: "0.55" }}>
                First year undergraduate, <br />
                Present.
              </span>
            </dd>
          </dl>
        </li>
        <li className="mb-5">
          <dl>
            <dt>General Certificate of Education Advanced Level.</dt>
            <dd>
              <span style={{ fontSize: "medium", opacity: "0.75" }}>
                St. Anne’s College - Kurunegala..
              </span>
              <br />
              <span style={{ fontSize: "small", opacity: "0.55" }}>
                2017-2019. <br />
              </span>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  </section>
  <section id="about  " className="bkgf">
    <div className="columns mt-6 bcol">
      <div className="column is-align-self-center">
        <img
          src={line_left}
          alt="Line"
          style={{ width: "100%" }}
        />
      </div>
      <div className="column is-one-quarter has-text-centered">
        <div className="container">
          <h1 className="headingtext">CONTACT ME</h1>
        </div>
      </div>
      <div className="column is-align-self-center">
        <img src={line1} alt="Line" style={{ width: "100%" }} />
      </div>
    </div>
    <div className="mt-5 bcol pb-6">
      <p className="btext ml-5">
        Thank you for visiting my portfolio! <br />
        <span className="is-size-6 stext">
          If you have any questions or would like to connect, please don't
          hesitate to reach out.
        </span>
      </p>
      <div className="level social_set mb-3 is-justify-content-center">
        <a className="button is-medium is-discord is-outlined is-rounded mb-6 mt-6 items is-responsive">
          <span className="icon">
            <i className="fa-solid fa-envelope mr-3 ml-3" />
          </span>
          <span>danujayas00@gmail.com</span>
        </a>
      </div>
      <div className="level social_set is-hidden-mobile">
        <a className="button is-small is-linkedin is-outlined is-rounded">
          <span className="icon">
            <i className="fab fa-linkedin" />
          </span>
          <span style={{ color: "white" }}>LinkedIn</span>
        </a>
        <a className="button is-small is-linkedin is-outlined is-rounded">
          <span className="icon">
            <i className="fab fa-github" style={{ color: "white" }} />
          </span>
          <span style={{ color: "white" }}>Github</span>
        </a>
        <a className="button is-small is-linkedin is-outlined is-rounded">
          <span className="icon">
            <i style={{ color: "pink" }} className="fab fa-instagram" />
          </span>
          <span style={{ color: "white" }}>Instagram</span>
        </a>
        <a className="button is-small is-linkedin is-outlined is-rounded">
          <span className="icon">
            <i style={{ color: "purple" }} className="fab fa-slack" />
          </span>
          <span style={{ color: "white" }}>Salck</span>
        </a>
      </div>
      <div
        className="container-fluid level social_set is-hidden-tablet"
        data-aos="fade-left"
        data-aos-duration={900}
      >
        <center>
          <a className="button is-small is-linkedin is-outlined is-rounded mr-3 mb-3">
            <span className="icon">
              <i className="fab fa-linkedin" />
            </span>
          </a>
          <a
            className="button is-small is-github is-outlined is-rounded mr-3 mb-3"
            style={{ borderColor: "white" }}
          >
            <span className="icon">
              <i className="fab fa-github" style={{ color: "white" }} />
            </span>
          </a>
          <a className="button is-small is-instagram is-outlined is-rounded mr-3 mb-3">
            <span className="icon">
              <i className="fab fa-instagram" />
            </span>
          </a>
        </center>
      </div>
    </div>
  </section>
    </>             
  );
}

export default HomePage;
