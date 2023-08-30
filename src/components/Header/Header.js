import React from 'react';
import './Header.css';
import { useNavigate } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';

function Header () {

  const navigate = useNavigate();
  
  const goToMyPage = () => {
    navigate("/mypage");
  };

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
            <div className='Header-user'>
              <div className='Header-user-box'>
                <img className='Header-profile' src="https://avatars.githubusercontent.com/u/24736765?v=4" alt="" size="32" height="32" width="32" data-view-component="true" class="avatar circle"></img>
              </div>
              <NavDropdown title="Nayeon Kim" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3" onClick={goToMyPage}>My Page</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Modify User Info
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Header;