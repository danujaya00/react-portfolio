import React from "react";
import "bulma/css/bulma.min.css";
import "bulma-social/css/all.min.css";
import "./index.css";
import { FaEnvelope } from "react-icons/fa";

function AboutMe() {
  return (
    <>
  <section className="hero is-fullheight-with-navbar mt-6">
    <div className="hero-head">
      <div className="container mt-6  is-hidden-touch">
        <h1 className="title is-2 mt-6 " style={{ color: "white" }}>
          CONTACT ME
        </h1>
      </div>
      <div className="container mt-4 is-hidden-desktop">
        <center>
          <h1 className="title is-2" style={{ color: "white" }}>
            CONTACT ME
          </h1>
        </center>
      </div>
    </div>
    <center>
    <div className="image">
      <img src="https://camo.githubusercontent.com/cae12fddd9d6982901d82580bdf321d81fb299141098ca1c2d4891870827bf17/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966"/>
    </div></center>
    <div className="container-fluid contactbkg">
      <div className="container mt-6">
        <div className="content is-normal">
          <p
            className="herotext is-hidden-touch"
            style={{ fontFamily: "monospace", fontSize: "x-large" }}
          >
            Thank you for visiting my personal portfolio!
            <br />
            <br />
            If you have any questions or would like to get in touch, please
            don't hesitate to reach out.
            <br />
            You can contact me by email -
            <a href="mailto:danujayas00@gmail.com">danujayas00@gmail.com</a>
            <br />
            or connect with me on LinkedIn at -
            <a href="https://www.linkedin.com/in/danujayaliyanage">
              danujayaliyanage
            </a>
            <br />
            <br />
            I am always open to new opportunities and would love to hear from
            you. Whether you have a potential job or internship opportunity, or
            just want to chat about software engineering, I am here to listen.
            <br />I look forward to connecting with you!
          </p>
          <p
            className="herotext is-hidden-desktop pl-4 pr-4"
            style={{ fontFamily: "monospace", fontSize: "large" }}
          >
            Thank you for visiting my personal portfolio!
            <br />
            <br />
            If you have any questions or would like to get in touch, please
            don't hesitate to reach out.
            <br />
            You can contact me by email -
            <a href="mailto:danujayas00@gmail.com">danujayas00@gmail.com</a>
            <br />
            or connect with me on LinkedIn at -
            <a href="https://www.linkedin.com/in/danujayaliyanage">
              danujayaliyanage
            </a>
            <br />
            <br />
            I am always open to new opportunities and would love to hear from
            you. Whether you have a potential job or internship opportunity, or
            just want to chat about software engineering, I am here to listen.
            <br />I look forward to connecting with you!
          </p>
          <br />
          <br />
          <br />
          <div className="level social_set mb-3 is-justify-content-center">
            <center>
              <a className="button is-medium is-discord is-outlined is-rounded mb-6 mt-6 items is-responsive">
                <span className="icon">
                  <FaEnvelope />
                </span>
                <span>danujayas00@gmail.com</span>
              </a>
            </center>
          </div>
          <br />
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
          <div className="container-fluid level social_set is-hidden-tablet">
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
      </div>
    </div>
  </section>
</>

  );
}

export default AboutMe;
