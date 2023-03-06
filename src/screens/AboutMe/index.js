import React from "react";
import "bulma/css/bulma.min.css";
import "bulma-social/css/all.min.css"
import "../HomePage/index.css";

import me600 from "../../assets/me600.png";

function AboutMe() {
  return (
    <section className="hero is-fullheight-with-navbar mt-6">
      <div className="container">
        <center>
          <div className="container mt-4">
            <h1
              className="title is-2 mb-1"
              style={{ color: "white", fontSize: "large" }}
            >
              I'm
            </h1>
            <h1 className="title is-2 mt-0" style={{ color: "white" }}>
              Danujaya Liyanage
            </h1>
          </div>
          <div className="column is-one-third">
            <figure className="image my-img">
              <img src={me600} />
            </figure>
          </div>
        </center>
        <div className="container">
          <div className="herotext ml-2">
            <span style={{ fontSize: "large" }}>
              {" "}
              Hi there!
              <br />
            </span>
            <p
              className="mt-3 is-hidden-touch"
              style={{ fontFamily: "monospace" }}
            >
              My name is Danujaya Sandeepa Liyanage and I am an Information
              Systems undergraduate at University of Colombo School of
              computing. I have a passion for technology and am particularly
              interested in Software development , Machine Learning ,
              Competitive programming and Cloud computing. I have completed
              coursework in programming languages such as c and Python, as well
              as Database management and Web development. In my spare time, I
              enjoy working on personal projects to improve my skills and stay
              up-to-date with the latest technologies. I am always looking for
              new opportunities to learn and grow my knowledge. My aim is to be
              a talented Software Engineer. Thank you for visiting my page!
            </p>
            <p
              className="mt-3 ml-4 mr-4 is-hidden-desktop"
              style={{ fontFamily: "monospace" }}
            >
              My name is Danujaya Sandeepa Liyanage and I am an Information
              Systems undergraduate at University of Colombo School of
              computing. I have a passion for technology and am particularly
              interested in Software development , Machine Learning ,
              Competitive programming and Cloud computing. I have completed
              coursework in programming languages such as c and Python, as well
              as Database management and Web development. In my spare time, I
              enjoy working on personal projects to improve my skills and stay
              up-to-date with the latest technologies. I am always looking for
              new opportunities to learn and grow my knowledge. My aim is to be
              a talented Software Engineer. Thank you for visiting my page!
            </p>
          </div>
        </div>
      </div>
      {/* <div className="container is-fluid">

					<div className="box mt-6">
						<center> <h1 className="title is-2"> Skills and Certifications</h1></center>
						<div className="columns">
						  <div className="column">
							<h1 className="title is-3">pro</h1>
						  </div>
						  <div className="column">
							Second column
						  </div>
						</div>
					</div>

				</div> */}
    </section>
    
  );
}

export default AboutMe;
