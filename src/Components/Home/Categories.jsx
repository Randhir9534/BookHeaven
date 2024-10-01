import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Cat.css"

const Categories = () => {
  let navigate = useNavigate();
  const navigator1 = () => {
    navigate("/cat");
  };
  const navigator2 = () => {
    navigate("/kid");
  };
  const navigator3 = () => {
    navigate("/fiction");
  };
  const navigator4 = () => {
    navigate("/horror");
  };
  
  return (
    <div className="cat">
        <h2><i><b><u>Categories of Books</u></b></i></h2>
      <Row className="book-section">
        <Col sm={6} lg={3} md={4}>
          <Card
            className="book-card"
            style={{ width: "18rem" }}
            onClick={navigator1}
          >
            <Card.Img
              variant="top"
              height={700}
              src={"../../../../assests/BiographySection.jpg"}
            />
            <Card.Body>
              <Card.Title><i>BioGraphy</i></Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} lg={3} md={4}>
          <Card
            className="book-card"
            style={{ width: "18rem" }}
            onClick={navigator2}
          >
            <Card.Img
              variant="top"
              height={700}
              src={"../../../../assests/ComputerSection.jpg"}
            />
            <Card.Body>
              <Card.Title><i>Kid</i></Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} lg={3} md={4}>
          <Card
            className="book-card"
            style={{ width: "18rem" }}
            onClick={navigator3}
          >
            <Card.Img
              variant="top"
              height={700}
              src={"../../../../assests/fictionSection2.jpg"}
            />
            <Card.Body>
              <Card.Title> <i>Fiction</i></Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} lg={3} md={4}>
          <Card
            className="book-card"
            style={{ width: "18rem" }}
            onClick={navigator4}
          >
            <Card.Img
              variant="top"
              height={700}
              src={"../../../../assests/horrorSection.avif"}
            />
            <Card.Body>
              <Card.Title><i>Horror</i></Card.Title>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </div>
  );
};

export default Categories;
