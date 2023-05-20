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
          <Nav.Link href="#bemutatkozas">Bemutatkozás</Nav.Link>
          <Nav.Link href="#packages">Csomagok</Nav.Link>
          <Nav.Link href="#reservations">Foglalj most!</Nav.Link>
          <Nav.Link href="#faq">GYIK</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>  );
}

export default MyNavbar;