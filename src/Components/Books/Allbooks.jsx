import React, { useEffect, useState } from "react";
import { end_points } from "../../Api/api";
import axiosInstanse from "../../Api/axiosInstance";
// import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import "./allbooks.css"
import { Link } from "react-router-dom";

const Allbooks = () => {
  let api = end_points.books;
  console.log("api", api);
  let [state, setState] = useState([]);

  const getBookData = () => {
    axiosInstanse
      .get(api)
      .then((res) => {
        console.log("res", res);
        setState(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  useEffect(() => {
    getBookData();
  }, [setState, api]);
  return (
    <div>
      <h2><i><u>All-Books</u></i></h2>
      <Row>
        {state.map((book) => (
          <Col sm={6} lg={3} md={4}>
            <Card className="book-card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={book?.img} />
              <Card.Body>
                <Card.Title>Name:-{book?.name}</Card.Title>
                <Button className="detailBtn" variant="primary"><Link to={`bookDetails/${book.id}`}>Details</Link></Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Allbooks;
