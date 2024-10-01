import React from "react";
import "./About.css";
import { Col, Row } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Row>
        <section className="about" id="about">
          <div className="container">
            <div className="row">
              {/* <Col sm={6} md={4}> */}
                <div className="about-part1">
                  <div className="frame">
                    <div className="about-img">
                      <img src="../../../../assests/admin1.avif" alt="" />
                    </div>
                  </div>
                  <div className="intro">
                    <h2>Book Heaven</h2>
                  </div>
                </div>
              {/* </Col> */}
              {/* <Col sm={6} md={4}> */}
              <div className="about-part2">
                <div className="about-details">
                  <div className="dj-img">
                    <img src="../../../../assests/admin2.avif" alt="" />
                  </div>
                  <div className="dj-details">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis ratione rerum fugit asperiores vel provident
                      similique, consectetur officiis quibusdam voluptatum!
                    </p>
                    <button type="button">more info</button>
                  </div>
                </div>

                <div className="about-details">
                  <div className="dj-details">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis ratione rerum fugit asperiores vel provident
                      similique, consectetur officiis quibusdam voluptatum!
                    </p>
                    <button type="button">more info</button>
                  </div>
                  <div className="dj-img">
                    <img src="../../../../assests/admin3.avif" alt="" />
                  </div>
                </div>
              </div>
              {/* </Col> */}
            </div>
          </div>
        </section>
      </Row>
    </div>
  );
};

export default About;
