'use client';

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Facebook, TwitterX, Pinterest, Instagram, HouseFill, Search, PersonFill, Cart } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Nav className="me-auto">
        <Nav.Link><Facebook /></Nav.Link>
        <Nav.Link><TwitterX /></Nav.Link>
        <Nav.Link><Pinterest /></Nav.Link>
        <Nav.Link><Instagram /></Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link><HouseFill /></Nav.Link>
        <Nav.Link><Search /></Nav.Link>
        <Nav.Link><PersonFill /></Nav.Link>
        <NavDropdown title={<Cart />}>
          <NavDropdown.ItemText>Your cart is currently empty.</NavDropdown.ItemText>
        </NavDropdown>
      </Nav>
    </Container>
  </Navbar>
);

export default TopMenu;