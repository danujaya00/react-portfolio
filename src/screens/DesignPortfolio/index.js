import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bulma/css/bulma.min.css";
import "bulma-social/css/all.min.css";
import "../HomePage/index.css";
import { Carousel } from "react-responsive-carousel";

import d1 from "../../assets/design/d1.png";
import d2 from "../../assets/design/d2.png";
import d3 from "../../assets/design/d3.png";
import d4 from "../../assets/design/d4.jpg";
import d5 from "../../assets/design/d5.jpg";
import d6 from "../../assets/design/d6.jpg";
import d7 from "../../assets/design/d7.jpg";
import d8 from "../../assets/design/d8.jpg";
import d9 from "../../assets/design/d9.jpg";
import d10 from "../../assets/design/d10.jpg";
import d11 from "../../assets/design/d11.jpg";

function Design(props) {
  return (
    <div>
      <section className="hero is-fullheight-with-navbar mt-6">
        <div className="hero-head is-hidden-touch">
          <div className="container mt-4">
            <h1 className="title is-2 mt-6" style={{ color: "white" }}>
              DESIGN PORTFOLIO
            </h1>
          </div>
        </div>
        <div className="hero-head is-hidden-desktop">
          <center>
            <div className="container mt-4">
              <h1 className="title is-2" style={{ color: "white" }}>
                DESIGN PORTFOLIO
              </h1>
            </div>
          </center>
        </div>
        <br />
        <div className="container mt-3">
          <div className="herotext ml-2 is-hidden-touch">
            <span style={{ fontSize: "larger" }}>
              {" "}
              Welcome to my design portfolio!
              <br />
            </span>
            <p
              className="mt-3"
              style={{ fontFamily: "monospace", fontSize: "large" }}
            >
              I am a graphic designer with about one year of experience. I have
              always had a love for art and design, while I'm studying, I design
              as a hobby.
            </p>
            <p
              className="mt-2"
              style={{ fontFamily: "monospace", fontSize: "large" }}
            >
              Throughout my year of experience, I have had the opportunity to
              work on a variety of projects, ranging from logo design to social
              media graphics. I am passionate about creating designs that are
              not only visually appealing but also communicate a clear message
              to the audience. In this portfolio, you will find a few of my
              work, showcasing my design process and skills.
              <br />I am always looking for new challenges and opportunities to
              learn and grow as a designer. Thank you for taking the time to
              view my portfolio, and I look forward to the opportunity to work
              with you on your next project.
            </p>
          </div>
          <div className="herotext ml-2 is-hidden-desktop">
            <span style={{ fontSize: "larger" }}>
              {" "}
              Welcome to my design portfolio!
              <br />
            </span>
            <p
              className="mt-3 ml-4 mr-4"
              style={{ fontFamily: "monospace", fontSize: "large" }}
            >
              I am a graphic designer with about one year of experience. I have
              always had a love for art and design, while I'm studying, I design
              as a hobby.
            </p>
            <p
              className="mt-2 ml-4 mr-4"
              style={{ fontFamily: "monospace", fontSize: "large" }}
            >
              Throughout my year of experience, I have had the opportunity to
              work on a variety of projects, ranging from logo design to social
              media graphics. I am passionate about creating designs that are
              not only visually appealing but also communicate a clear message
              to the audience. In this portfolio, you will find a few of my
              work, showcasing my design process and skills.
              <br />I am always looking for new challenges and opportunities to
              learn and grow as a designer. Thank you for taking the time to
              view my portfolio, and I look forward to the opportunity to work
              with you on your next project.
            </p>
          </div>
        </div>
        <br/>
        {/* carousel start */}
        {/* desktop */}
        {/* data-aos="flip-right" data-aos-duration={900} */}
        <div className="slidercontainerd is-hidden-touch" >
          <Carousel>
            <div>
              <img src={d1} />
              <p className="legend">Galle Train Station</p>
            </div>
            <div>
              <img src={d2} />
              <p className="legend">Idalgashinna</p>
            </div>
            <div>
              <img src={d3} />
              <p className="legend">Ohiya</p>
            </div>
            <div>
              <img src={d4} />
              <p className="legend">Idalgashinna</p>
            </div>
            <div>
              <img src={d5} />
              <p className="legend">Idalgashinna</p>
            </div>
            <div>
              <img src={d6} />
              <p className="legend">Jungle beach</p>
            </div>
            <div>
              <img src={d7} />
              <p className="legend">Jungle beach</p>
            </div>
            <div>
              <img src={d8} />
              <p className="legend">Jungle beach</p>
            </div>
            <div>
              <img src={d9} />
              <p className="legend">Jungle beach</p>
            </div>
            <div>
              <img src={d10} />
              <p className="legend">Jungle beach</p>
            </div>
            <div>
              <img src={d11} />
              <p className="legend">Jungle beach</p>
            </div>
          </Carousel>
        </div>
        {/* desktop end */}
        {/* mobile */}
        <div className="slidercontainermobiled is-hidden-desktop ">
        <Carousel>
            <div>
              <img src={d1} />
              <p className="legend">Galle Train Station</p>
            </div>
            <div>
              <img src={d2} />
              <p className="legend">Idalgashinna</p>
            </div>
            <div>
              <img src={d3} />
              <p className="legend">Ohiya</p>
            </div>
            <div>
              <img src={d4} />
              <p className="legend">Idalgashinna</p>
            </div>
            <div>
              <img src={d5} />
              <p className="legend">Idalgashinna</p>
            </div>
            <div>
              <img src={d6} />
              <p className="legend">Jungle beach</p>
            </div>
            <div>
              <img src={d7} />
              <p className="legend">Jungle beach</p>
            </div>
            <div>
              <img src={d8} />
              <p className="legend">Jungle beach</p>
            </div>
            <div>
              <img src={d9} />
              <p className="legend">Jungle beach</p>
            </div>
            <div>
              <img src={d10} />
              <p className="legend">Jungle beach</p>
            </div>
            <div>
              <img src={d11} />
              <p className="legend">Jungle beach</p>
            </div>
          </Carousel>
        </div>

        {/* mobile end  */}
        {/* carousel end */}
        
      </section>
    </div>
  );
}

export default Design;
