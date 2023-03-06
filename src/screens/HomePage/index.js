import React from "react";
import "bulma/css/bulma.min.css";
import "bulma-social/css/all.min.css";
import "./index.css";
  

import MaterialIcon, { colorPalette } from "material-icons-react";
import { FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import line1 from "../../assets/Line1.png";
import line_left from "../../assets/line_left.png";
import le_Me from "../../assets/le_Me.png";

function HomePage() {
  return (
    <>
      <section className="hero is-fullheight-with-navbar is-hidden-touch land mt-6">
        <div className="columns mr-6 ml-6 pl-5">
          <div className="column">
            <div className="textind mb-0 mt-0">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
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
                color="#ffffff"
                size="large"
              />
            </a>
          </center>
        </div>
      </section>
      
{/* landing page for mobile devices */}

      <section className="hero is-fullheight-with-navbar is-hidden-desktop land mt-6">
        <div className="columns mr-1 ml-1   ">
          <div className="column">
            <div className="textind mb-0 mt-0">
              <br />
              <br />
              <br />
              <br />
              <br />
              <span  style={{ fontSize: "2em" }}>
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
            <a href="#aboutm">
              <MaterialIcon
                icon="keyboard_arrow_down"
                color="#ffffff"
                size="large"
              />
            </a>
          </center>
        </div>
      </section>
{/* end of landing page */}
{/* start of about me section */}
{/* desktop */}
      <section id="about" className="is-hidden-touch" data-aos="fade-up" data-aos-duration={1200}>
        <div className="columns mt-6 bcol is-hidden-touch">
          <div className="column is-one-fifth">
            <div className="container">
              <h1 className="headingtext">ABOUT ME</h1>
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
              level skills of coding and design. Constant learner with the
              ability to adapt to new technologies. Currently on the way
              improving coding skills and learning Angular , React and Python
              for Machine Learning.
            </p>
            <p className="btext mt-6 stext">
              A Hiker | Car Enthusiast | Traveler | Travel Photographer
            </p>
            <div>
              <button className="button is-twitter is-rounded is-outlined mt-6 twitter">
                <FaTwitter />
                 @danujaya_s
              </button>
            </div>
          </div>
          <div className="column is-one-third">
            <center>
              <figure className="image mainimage ">
                <img data-aos="flip-left" data-aos-duration={900}  src={le_Me} />
              </figure>
            </center>
          </div>
        </div>
      </section>
{/* end desktop */}
{/* start mobile */}
      <section id="aboutm"  className="is-hidden-desktop" data-aos="fade-up" data-aos-duration={900}>
        <div className="columns mt-6  is-hidden-touch">
          <div className="column is-one-fifth">
            <div className="container">
              <h1 className="headingtext">ABOUT ME</h1>
            </div>
          </div>
          <div className="column is-align-self-center">
            <img src={line1} alt="Line" style={{ width: "100%" }} />
          </div>
        </div>
        <div className="columns mt-6 ml-1 mr-1 is-hidden-desktop">
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
        <div className="columns mt-5 ml-3 mr-1 ">
          <div className="column  br-5">
            <p className="btext">
              An Information Systems first year undergraduate with Intermediate
              level skills of coding and design. Constant learner with the
              ability to adapt to new technologies. Currently on the way
              improving coding skills and learning Angular , React and Python
              for Machine Learning.
            </p>
            <p className="btext mt-6 stext">
              A Hiker | Car Enthusiast | Traveler | Travel Photographer
            </p>
            <div>
              <button className="button is-twitter is-rounded is-outlined mt-6 twitter">
                <FaTwitter />
                span @danujaya_s
              </button>
            </div>
          </div>
          <div className="column is-one-third">
            <center>
              <figure className="image mainimage">
                <img data-aos="flip-left" data-aos-duration={900} src={le_Me} />
              </figure>
            </center>
          </div>
        </div>
      </section>
{/* end mobile */}
{/* end of about me section */}
{/* start of education section */}
{/* start desktop */}
      <section id="education" className="is-hidden-touch" data-aos="fade-up" data-aos-duration={1200}>
        <div className="columns mt-6 bcol is-hidden-touch">
          <div className="column is-align-self-center">
            <img src={line_left} alt="Line" style={{ width: "100%" }} />
          </div>
          <div className="column is-one-fifth">
            <div className="container">
              <h1 className="headingtext has-text-right">EDUCATION</h1>
            </div>
          </div>
        </div>
        <div className="columns mt-6 bcol is-hidden-desktop">
          <div className="column is-align-self-center">
            <img src={line_left} alt="Line" style={{ width: "100%" }} />
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
{/* end desktop */}
{/* start mobile */}
<section id="education" data-aos="fade-up" className="is-hidden-desktop" data-aos-duration={900}>
        <div className="columns mt-6 bcol is-hidden-touch">
          <div className="column is-align-self-center">
            <img src={line_left} alt="Line" style={{ width: "100%" }} />
          </div>
          <div className="column is-one-fifth">
            <div className="container">
              <h1 className="headingtext has-text-right">EDUCATION</h1>
            </div>
          </div>
        </div>
        <div className="columns mt-6 ml-1 mr-1 is-hidden-desktop">
          <div className="column is-align-self-center">
            <img src={line_left} alt="Line" style={{ width: "100%" }} />
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
        <div className="container btext ml-5 mr-5">
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
{/* end mobile  */}
{/* end of education section */}

      <section id="about  " className="bkgf bkgif " data-aos="fade-up" data-aos-duration={1200}>
        <div className="columns mt-6 bcol is-hidden-touch">
          <div className="column is-align-self-center">
            <img src={line_left} alt="Line" style={{ width: "100%" }} />
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
        
        {/* mobile */}
        <div className="columns mt-6 ml-1  mr-1 is-hidden-desktop">
          <div className="column is-align-self-center">
            <img src={line_left} alt="Line" style={{ width: "100%" }} />
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
        {/* mobile end */}

        <center>
          <div className="imgfp">
            <img data-aos="flip-left" data-aos-duration={900} src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/media/7ed7d5ca074b48b328150e5a231e8d1f.gif" />
          </div>
        </center>
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
                <FaEnvelope />
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
