import React from 'react'
import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoBusinessOutline } from "react-icons/io5";


const Footer = () => {
  return (
    <div>
  <footer className="footer" id="footer">
    <div className="box-container">
      <div className="box">
        <h3>About Us</h3>
        <p>
          We Believe in Safe &amp; Happy Travel. Do make yourself feel like
          party of TheRoyalBharat Family. Visit any destination at very ease and
          safety with us.
        </p>
      </div>
      <div className="box">
        <h3>Branch Locations</h3>
        <a href="https://goo.gl/maps/mY35jZTYQYhWmYGb6">Lucknow</a>
        <a href="https://goo.gl/maps/dr3KkhhbK5wZakHz6">Bombay</a>
        <a href="https://goo.gl/maps/xFnQZtzojUph5HKM6">Nagpur</a>
        <a href="https://goo.gl/maps/ZHkr1Cx1uEdoS1zU6">Delhi</a>
      </div>
      <div className="box">
        <h3>Quick links</h3>
        <a href="/">Home</a>
        <a href="/books">Book</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="box">
        <h3>Contact us</h3>
        <p>
        <FaPhoneSquareAlt /> +1 9534723495
        </p>
        <p>
        <IoBusinessOutline /> BookHeaven@agency.com
        </p>
        <p>
        <IoHomeOutline/>saltlake sevtor v, Near metro station,
          Kolkata
        </p>
      </div>
      <div className="box">
        <h3>Follow us</h3>
        <a href="#facebook">
        <FaFacebook /> Facebook
        </a>
        <a href="#instagram">
        <FaInstagram /> Instagram
        </a>
        <a href="#twitter">
        <FaSquareTwitter /> Twitter
        </a>
        <a href="#linkedin">
        <FaLinkedin /> Linkedin
        </a>
        <a href="#github">
        <FaGithub /> Github
        </a>
      </div>
    </div>
    <hr />
    <h3 className="credit">
      {" "}
      Created by <span> Randhir Singh</span> | © All rights reserved! by
      BookHeaven
    </h3>
  </footer>

    </div>
  )
}

export default Footer