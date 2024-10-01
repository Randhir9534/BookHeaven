import React from 'react'
import { useEffect, useState } from 'react'
import { end_points } from '../../Api/api'
import axiosInstanse from '../../Api/axiosInstance';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


const Horror = () => {
        let api=end_points.books
        console.log("api",api);
        let[state,setState]=useState([])
    
        const getBooks=()=>{
            axiosInstanse.get(api)
            .then((res)=>{
                console.log("res",res);
                setState(res.data)
                
            })
            .catch(err=>console.log(err)
            )
        }
        useEffect(()=>{
            getBooks()
        },[setState,api])
  
  return (
    <div>
         All Book
      <Row>
        {state.filter((book)=>{
            if(book.genre.includes("horror")){
                return book
            }
        }).map((book) => (
          <Col sm={6} lg={3} md={4}>
            <Card className="book-card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={book?.img} />
              <Card.Body>
                <Card.Title>Name:-{book?.name}</Card.Title>
                <Button variant="primary"><Link to={`bookDetails/${book.id}`}>Details</Link></Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Horror