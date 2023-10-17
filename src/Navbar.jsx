import React from "react";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./index.css"
import Cookies from 'cookies-js'


const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
          <Container>
            <Nav className="">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse  id="basic-navbar-nav" className="justify-content-end">
                <Nav.Link href="#home">Pens/Pencils</Nav.Link>
                <Nav.Link href="#link">Inks</Nav.Link>
                <NavDropdown title="Paints and Brushes" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Paints</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Brushes
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Home
                  </NavDropdown.Item>
                </NavDropdown>
                </Navbar.Collapse>
            </Nav>

            <Navbar.Brand className="brand" href="#home"><h3>Cottage Crafts</h3></Navbar.Brand>
            <Nav className="">
                {Cookies.get('token') ? <Nav.Link href="/login">{Cookies.get('user')}</Nav.Link> : <Nav.Link href="/login">Sign In</Nav.Link>}
                <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      );
    }





export default Navigation;
