import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';

export default function CityPlusNavbar() {
  const CustomNavLink = ({ href, children }) => {
    return (
      <Nav.Link href={href} className="mx-2 text-white custom-nav-link">
        {children}
      </Nav.Link>
    );
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#">
        <Image src="pics/logo.jpeg" width={45} height={45} className="me-2 ms-4" alt="Logo" rounded />
        <b>CityPlus</b>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <CustomNavLink href="/#home">Home</CustomNavLink>
          <CustomNavLink href="/#footer">Info</CustomNavLink>
          <CustomNavLink href="/terms">Terms and Conditions</CustomNavLink>
          <CustomNavLink href="/signup">SignUp</CustomNavLink>
          <CustomNavLink href="/login">Login</CustomNavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}




