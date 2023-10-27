// 1. Importar React
import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// 2. Crear componente
const Newnavbar = () => {
  return (
    <Navbar expand="lg" className="navbar navbar-dark bg-dark mb-4">
      <Container fluid>
        <Navbar.Brand href="#">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="col me-auto mt-3 my-2 my-lg-0 justify-content-end"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="nav-link active">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#">
              Services
            </Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  };

  
// 3. Exportar componente
export default Newnavbar

