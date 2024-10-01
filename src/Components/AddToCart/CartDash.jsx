import React, { useEffect, useState } from 'react'
import { end_points } from '../../Api/api'
import axiosInstanse from '../../Api/axiosInstance';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";

const CartDash = () => {
    let api=end_points.cart
    console.log(api);
    let[state,setState]=useState([])

    const getCart=()=>{
        axiosInstanse.get(api)
        .then((res)=>{
            console.log("cart res",res);
            setState(res.data)
            
        })
        .catch(err=>console.log(err)
        )
    }
    useEffect(()=>{
        getCart()
    },[setState,api])
    const deleteItem=(cart_id)=>{
        axiosInstanse.delete(`http://localhost:1000/cart/${cart_id}`)
        .then((res)=>{
            console.log("delete res",res);
            alert("product deleted successfully!")
            getCart();
            
        })
        .catch(err=>console.log(err)
        )
    }
    
  return (
    <div>
        <h1 className='text-info'><u><i>CART</i></u></h1>
        <Row>
        {state.map((cart) => (
          <Col sm={6} lg={3} md={4}>
            <Card className="book-card" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={cart?.img} />
              <Card.Body>
                <Card.Title>Name:-{cart?.name}</Card.Title>
                <Card.Title>Price:-{cart?.price}</Card.Title>
                <Button className="detailBtn" variant="primary">Buy Now</Button>
                <Button className="detailBtn" variant="primary" onClick={()=>{deleteItem(cart.id)}}>Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default CartDash