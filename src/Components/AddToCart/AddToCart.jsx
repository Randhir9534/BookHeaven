import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { end_points } from '../../Api/api'
import axiosInstanse from '../../Api/axiosInstance'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";

const AddToCart = () => {
    let {id}=useParams()
    let api=end_points.books+"/"+id
    let api2=end_points.cart

    let[state,setState]=useState([])
    const getForCart=()=>{
        axiosInstanse.get(api)
        .then((res)=>{
            console.log(" res",res);
            setState(res.data)
            axiosInstanse.post(api2,res.data)
        .then((res)=>{
          console.log("cart res",res);
          
        })
        .catch(err=>console.log(" cart err",err)
        )
            
        })
        .catch(err=>console.log(err)
        )
        
        
        
    }
    useEffect(()=>{
        getForCart()
    },[setState,api])

    

      
    
  

  return (
    <div>
        <Row>
          <Col sm={6} lg={3} md={4}>
            <Card className="book-card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={state?.img} />
              <Card.Body>
                <Card.Title>Name:-{state?.name}</Card.Title>
                {/* <Card.Title>price: {state?.price}$</Card.Title> */}
                <Button variant="primary">Buy Now</Button>
                <Button variant="primary">Delete</Button>
              </Card.Body>
            </Card>
          </Col>
      </Row>
        
    </div>
  )
}

export default AddToCart