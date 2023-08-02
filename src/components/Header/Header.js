import React from 'react';
import './Header.css';
import { Container, Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';

function Header () {
  return (
    <div className='Header-box'>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">GISMeetsCS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#">Ranking</Nav.Link>
            <NavDropdown title="User" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My Page</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Modify User Info
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;