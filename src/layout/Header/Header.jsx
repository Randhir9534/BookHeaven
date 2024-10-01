import React from "react";
// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaCartPlus } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Header = () => {
  let navigate=useNavigate()
 
  const cleared=()=>{
    window.sessionStorage.clear()
    navigate("/adminLogin")
  }

  return (
    <section className="header">
      <Navbar expand="lg" className="nav">
        <Navbar.Brand>
          <img src="../../../../../assests/logo2.png" width={130}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/books">
              Books
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact-us
            </Nav.Link>
            <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/regist">
                Registration
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/login">
                Log-in
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/profile">
                Profile
              </NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Admin" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/admin">
                Admin-Dashboard
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/adminLogin">
                Admin-Login
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <Button onClick={cleared}>Log-Out</Button>
            </NavDropdown>
          </Nav>
          <Nav.Link as={Link} to="/cartdash">
          <div className="icon-section">   
          <div><FaCartPlus /></div>
          </div>    
          </Nav.Link>
          <div><FaSearch /></div> 
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
};

export default Header;
