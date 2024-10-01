import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { end_points } from "../../../Api/api";
import { Card, Button } from "react-bootstrap";
import axiosInstanse from "../../../Api/axiosInstance";
import "./BookDetails.css";

const BookDetails = () => {
  let { id } = useParams();
  let api = end_points.books + "/" + id;
  console.log("api book", api);
  let [state, setState] = useState([]);

  const getBookDetails = () => {
    axiosInstanse
      .get(api)
      .then((res) => {
        console.log("bookDetails", res.data);
        setState(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getBookDetails();
  }, [setState, api]);

  return (
    <div className="bookDetails">
      <Card className="book-card">
        <div className="details">
          <div className="bookImg">
            <Card.Img variant="top" src={state?.img} />
          </div>
          <div className="bookDesc">
            <Card.Body>
              <Card.Title>Name:-{state?.name}</Card.Title>
              <Card.Text>
                <b>Genre:-</b>{state?.genre} <br /><b>Author:-</b>{state?.writer}
              </Card.Text>
              
              <Card.Text><b>Description:-</b>{state?.description}</Card.Text>
                
              <Card.Text><b>Price:-{state?.price}$</b></Card.Text>
              <Button>Buy Now</Button>
              <Button><Link to={`/cart/${state.id}`}>Add to Card</Link></Button>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BookDetails;
