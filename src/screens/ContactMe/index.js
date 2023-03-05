import React from "react";
import "bulma/css/bulma.min.css";
import "bulma-social/css/all.min.css";
import "./index.css";

import me600 from "../../assets/me600.png";

function AboutMe() {
  return (
    <section classname="hero is-fullheight-with-navbar mt-6">
      <div classname="hero-head">
        <div classname="container mt-4 is-hidden-touch">
          <h1 classname="title is-2" style={{ color: "white" }}>
            CONTACT ME
          </h1>
        </div>
        <div classname="container mt-4 is-hidden-desktop">
          <center>
            <h1 classname="title is-2" style={{ color: "white" }}>
              CONTACT ME
            </h1>
          </center>
        </div>
      </div>
      <div classname="container-fluid contactbkg">
        <div classname="container mt-6">
          <div classname="content is-normal">
            <p
              classname="herotext is-hidden-touch"
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
              you. Whether you have a potential job or internship opportunity,
              or just want to chat about software engineering, I am here to
              listen.
              <br />I look forward to connecting with you!
            </p>
            <p
              classname="herotext is-hidden-desktop pl-4 pr-4"
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
              you. Whether you have a potential job or internship opportunity,
              or just want to chat about software engineering, I am here to
              listen.
              <br />I look forward to connecting with you!
            </p>
            <br />
            <br />
            <br />
            <div classname="level social_set mb-3 is-justify-content-center">
              <center>
                <a classname="button is-medium is-discord is-outlined is-rounded mb-6 mt-6 items is-responsive">
                  <span classname="icon">
                    <i classname="fa-solid fa-envelope mr-3 ml-3" />
                  </span>
                  <span>danujayas00@gmail.com</span>
                </a>
              </center>
            </div>
            <br />
            <div classname="level social_set is-hidden-mobile">
              <a classname="button is-small is-linkedin is-outlined is-rounded">
                <span classname="icon">
                  <i classname="fab fa-linkedin" />
                </span>
                <span style={{ color: "white" }}>LinkedIn</span>
              </a>
              <a classname="button is-small is-linkedin is-outlined is-rounded">
                <span classname="icon">
                  <i classname="fab fa-github" style={{ color: "white" }} />
                </span>
                <span style={{ color: "white" }}>Github</span>
              </a>
              <a classname="button is-small is-linkedin is-outlined is-rounded">
                <span classname="icon">
                  <i style={{ color: "pink" }} classname="fab fa-instagram" />
                </span>
                <span style={{ color: "white" }}>Instagram</span>
              </a>
              <a classname="button is-small is-linkedin is-outlined is-rounded">
                <span classname="icon">
                  <i style={{ color: "purple" }} classname="fab fa-slack" />
                </span>
                <span style={{ color: "white" }}>Salck</span>
              </a>
            </div>
            <div classname="container-fluid level social_set is-hidden-tablet">
              <center>
                <a classname="button is-small is-linkedin is-outlined is-rounded mr-3 mb-3">
                  <span classname="icon">
                    <i classname="fab fa-linkedin" />
                  </span>
                </a>
                <a
                  classname="button is-small is-github is-outlined is-rounded mr-3 mb-3"
                  style={{ borderColor: "white" }}
                >
                  <span classname="icon">
                    <i classname="fab fa-github" style={{ color: "white" }} />
                  </span>
                </a>
                <a classname="button is-small is-instagram is-outlined is-rounded mr-3 mb-3">
                  <span classname="icon">
                    <i classname="fab fa-instagram" />
                  </span>
                </a>
              </center>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
