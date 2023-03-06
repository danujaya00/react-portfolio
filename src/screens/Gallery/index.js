import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bulma/css/bulma.min.css";
import "bulma-social/css/all.min.css";
import "../HomePage/index.css";
import { Carousel } from "react-responsive-carousel";

import t1 from "../../assets/travel/t1.png";
import t2 from "../../assets/travel/t2.png";
import t3 from "../../assets/travel/t3.png";
import t4 from "../../assets/travel/t4.png";
import t5 from "../../assets/travel/t5.png";
import t6 from "../../assets/travel/t6.png";
import t7 from "../../assets/travel/t7.png";
import t8 from "../../assets/travel/t8.png";

function Gallery(props) {
  return (
    <div>
      <section className="hero is-fullheight-with-navbar mt-6">
        <div className="hero-head is-hidden-touch">
          <div className="container mt-4">
            <h1 className="title is-2 mt-6" style={{ color: "white" }}>
              TRAVEL GALLERY
            </h1>
          </div>
        </div>
        <div className="hero-head is-hidden-desktop">
          <center>
            <div className="container mt-4">
              <h1 className="title is-2" style={{ color: "white" }}>
                TRAVEL GALLERY
              </h1>
            </div>
          </center>
        </div>
        <br />
        {/* carousel start */}
        {/* desktop */}
        <div className="slidercontainer is-hidden-touch">
          <Carousel>
            <div>
              <img src={t1} />
              <p className="legend">Galle Train Station</p>
            </div>
            <div>
              <img src={t2} />
              <p className="legend">Idalgashinna</p>
            </div>
            <div>
              <img src={t3} />
              <p className="legend">Ohiya</p>
            </div>
            <div>
              <img src={t4} />
              <p className="legend">Idalgashinna</p>
            </div>
            <div>
              <img src={t5} />
              <p className="legend">Idalgashinna</p>
            </div>
            <div>
              <img src={t6} />
              <p className="legend">Jungle beach</p>
            </div>
            <div>
              <img src={t7} />
              <p className="legend">Jungle beach</p>
            </div>
            <div>
              <img src={t8} />
              <p className="legend">Jungle beach</p>
            </div>
          </Carousel>
        </div>
        {/* desktop end */}
        {/* mobile */}
        <div className="slidercontainermobile is-hidden-desktop ">
          <Carousel>
            <div>
              <img src={t1} />
              <p className="legend">Galle Train Station</p>
            </div>
            <div>
              <img src={t2} />
              <p className="legend">Idalgashinna</p>
            </div>
            <div>
              <img src={t3} />
              <p className="legend">Ohiya</p>
            </div>
            <div>
              <img src={t4} />
              <p className="legend">Idalgashinna</p>
            </div>
            <div>
              <img src={t5} />
              <p className="legend">Idalgashinna</p>
            </div>
            <div>
              <img src={t6} />
              <p className="legend">Jungle beach</p>
            </div>
            <div>
              <img src={t7} />
              <p className="legend">Jungle beach</p>
            </div>
            <div>
              <img src={t8} />
              <p className="legend">Jungle beach</p>
            </div>
          </Carousel>
        </div>

        {/* mobile end  */}
        {/* carousel end */}
        <div className="container mt-3">
          <div className="herotext ml-2 is-hidden-touch">
            <span style={{ fontSize: "larger" }}>
              {" "}
              Hi there!
              <br />
            </span>
            <p
              className="mt-3"
              style={{ fontFamily: "monospace", fontSize: "large" }}
            >
              Welcome to my travel gallery. Though I’m a IT student I love
              exploration, camping and adventure. These are a collection of
              memories form the best places that I went. I have had the
              opportunity to visit some truly amazing places around Sri Lanka.
            </p>
            <p
              className="mt-2"
              style={{ fontFamily: "monospace", fontSize: "large" }}
            >
              I have compiled a collection of my travel experiences and
              adventures. From solo backpacking trips to group tours, each trip
              has taught me something new and allowed me to broaden my
              perspective on the world. I have included photos, stories, and
              insights from each of these trips to give you a better
              understanding of my travels and the places I have been fortunate
              enough to visit. you will be inspired to explore the world and
              make your own unforgettable memories. Thank you.
            </p>
          </div>
          <div className="herotext ml-2 is-hidden-desktop">
            <span style={{ fontSize: "larger" }}>
              {" "}
              Hi there!
              <br />
            </span>
            <p
              className="mt-3 ml-4 mr-4"
              style={{ fontFamily: "monospace", fontSize: "large" }}
            >
              Welcome to my travel gallery. Though I’m a IT student I love
              exploration, camping and adventure. These are a collection of
              memories form the best places that I went. I have had the
              opportunity to visit some truly amazing places around Sri Lanka.
            </p>
            <p
              className="mt-2 ml-4 mr-4"
              style={{ fontFamily: "monospace", fontSize: "large" }}
            >
              I have compiled a collection of my travel experiences and
              adventures. From solo backpacking trips to group tours, each trip
              has taught me something new and allowed me to broaden my
              perspective on the world. I have included photos, stories, and
              insights from each of these trips to give you a better
              understanding of my travels and the places I have been fortunate
              enough to visit. you will be inspired to explore the world and
              make your own unforgettable memories. Thank you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
