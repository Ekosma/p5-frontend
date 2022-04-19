import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';


export default function header() {
  return (
    <div>
      <Navbar collapseOnSelect bg="light" expand="sm">
        <Container>
          <Navbar.Toggle aria-controls='responsive-nav-bar'/>
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Lesson/new">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}


