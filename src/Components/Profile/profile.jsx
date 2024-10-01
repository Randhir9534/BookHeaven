import React, { useEffect, useState } from 'react'
import { end_points } from '../../Api/api'
import axiosInstanse from '../../Api/axiosInstance';
import { Card,ListGroup, Row} from 'react-bootstrap'

const Profile = () => {
    let api=end_points.auth
    console.log("profile api",api);
    let[state,setState]=useState([])

    const getProDAta=()=>{
        axiosInstanse.get(api)
        .then((res)=>{
            console.log("res",res.data)
            setState(res.data)
            
        })
        .catch(err=>console.log("err",err)
        )
    }
    useEffect(()=>{
        getProDAta()
    },[setState,api])
    
  return (
    <section>
    <Row xxl={3} xl={3} lg={4} md={6} sm={12} className='d-flex justify-content-center p-4'>
  {state.map((v,i)=><Card style={{ width: '20rem' }} className='m-3 p-2 shadow'>
  <Card.Img className="img"  variant="top" src={v.profile_pic} height={330} width={300}/>
  <ListGroup className="list-group-flush mx-1">
  <ListGroup.Item>Username : <b>{v.userName}</b></ListGroup.Item>
    <ListGroup.Item>Email Id : {v.email}</ListGroup.Item>
  </ListGroup>
</Card>
)}
</Row>
</section>
  )
}

export default Profile