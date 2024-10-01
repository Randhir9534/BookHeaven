import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./Banner.css"

const Banners = () => {
  return (

    <section className='banner'>
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./../../../assests/banner4.avif"
          alt="First slide"
        //   height="450"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../../../assests/banner3.avif"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./../../../assests/banner1.avif"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
    </section>
  )
}

export default Banners