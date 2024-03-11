import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

export default function Header_Navbar() {
    return (
      <Navbar expand="lg">
      <Image src="pics/logo.jpeg" width={45} className='me-2 ms-4' height={45} rounded />
      <Navbar.Brand href="#home">
        <b>CityPlus</b> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/#home" className='ms-3'>Home</Nav.Link>
          <Nav.Link href="/#footer" className='ms-3'>Info</Nav.Link>
          <Nav.Link href="/terms" className='ms-3'>Terms and Conditions</Nav.Link>
          <Nav.Link className='ms-3' href="/Signup">SignUp</Nav.Link>
          <Nav.Link className='ms-3' href="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
}