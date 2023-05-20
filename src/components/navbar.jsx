import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/esm/Nav';
import Button from 'react-bootstrap/esm/Button';
import Navbar from 'react-bootstrap/esm/Navbar';
import NavDropdown from 'react-bootstrap/esm/NavDropdown';
import {Link} from "react-router-dom"

function MyNavbar() {
    return (  <Navbar className='navbar' >
    <Container>
      <Navbar.Brand href="#home"  >SelfieFlash</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link style={{scrollBehavior: 'smooth'}} href="#bemutatkozas">Bemutatkozás</Nav.Link>
          <Nav.Link href="#packages">Csomagok</Nav.Link>
          <Nav.Link href="#reservations">Foglalj most!</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>  );
}

export default MyNavbar;