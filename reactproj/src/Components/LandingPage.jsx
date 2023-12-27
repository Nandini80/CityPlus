import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function UpperPart() {
  const navigate = useNavigate();
  const doNavigate = () => {
    navigate("/Signup");
  };

  return (
    <>
      <Navbar expand="lg">
        <Image src="pics/logo.jpeg" width={45} className='me-2 ms-4' height={45} rounded />
        <Navbar.Brand href="#home">
          <b>CityPlus</b> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='ms-3'>Home</Nav.Link>
            <Nav.Link href="#footer" className='ms-3'>Info</Nav.Link>
            <Nav.Link href="/terms" className='ms-3'>Terms and Conditions</Nav.Link>
            <Nav.Link className='ms-3' href="/Signup">SignUp</Nav.Link>
            <Nav.Link className='ms-3' href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* =================================================== */}
      <Row className="w-100" style={{ height: "35rem" }}>
        <div style={{ width: "49%", height: "100%" }}>

          <Card.Body style={{ width: '35rem', height: '35rem' }}>
            <Card.Title style={{ fontFamily: "os_semi_bold", marginTop: '2rem' }}> <center> <h1>
              Home Services <br />
              at your doorstep
            </h1></center> </Card.Title>
            <Card.Text style={{ fontSize: "larger", fontFamily: "monospace", marginTop: "15px", marginLeft: "20px" }}>
              We offer a diverse array of services designed to meet your various needs.
              Whether you're seeking professional assistance or looking to showcase your skills, our platform facilitates seamless interactions.
              Clients can easily connect with vendors, browse available services, and contact the vendors. Moreover, if you're a vendor,
              our platform provides you with the opportunity to register and explore job opportunities tailored to your expertise.
              Join our community to unlock a world of possibilities, connecting service providers with those in search of top-notch services.
            </Card.Text>
          </Card.Body>

        </div>
        <div style={{ width: "51%", height: "100%", marginTop: "2rem" }}>
          <Col>
            <Image src="pics/s3.jpg" style={{ float: "left" }} width={310} height={355} alt='not available' rounded />
          </Col>
          <Col>
            <Image src="pics/s1.jpg" style={{ float: "right" }} width={280} height={275} rounded />
          </Col>
          <Col>
            <Image src="pics/s2.jpg" style={{ float: "right" }} className='mt-3' width={280} height={290} rounded />
          </Col>
          <Col>
            <Image src="pics/s4.jpg" style={{ float: "right" }} className='mt-3 me-3' width={320} height={210} rounded />
          </Col>

        </div>
      </Row>

      {/* ========================================================= */}
      <Row className="w-100" style={{ height: "200px", marginTop: "7rem" }} id="footer">
        <div className='ms-1' style={{ width: "30%" }} >
          <Image src="pics/card2.jpeg" onClick={doNavigate} style={{ width: '25rem', height: '14rem' }} rounded />
        </div>
        <div style={{ width: "30%" }} className='ms-5'>
          <Image src="pics/card3.jpeg" onClick={doNavigate} style={{ width: '25rem', height: '14rem' }} rounded />
        </div>
        <div style={{ width: "30%" }} className='ms-5'>
          <Image src="pics/card1.jpeg" onClick={doNavigate} style={{ width: '25rem', height: '14rem' }} rounded />
        </div>
      </Row>

      <Row className='w-100 mt-5 mb-5'>
        <center style={{ fontFamily: "os_semi_bold", marginTop: '2rem', marginBottom: "20px" }}>
          <h1>Reveiws</h1>
        </center>
        <Card style={{ width: '18rem', marginLeft: "3rem" }}>
          <Card.Body>
            <Card.Title>Sonia Mittal</Card.Title>
            <Card.Text>
              I've been using this service provider for a while now, and the reliability factor is what keeps me coming back.
              The vendors listed on the platform are consistently high-quality, and the job opportunities available are genuine.
              It's a trustworthy space for both clients and vendors.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', marginLeft: "1rem" }}>
          <Card.Body>
            <Card.Title>Harry Josh</Card.Title>
            <Card.Text>
              I recently utilized this website and was impressed with their seamless system for connecting vendors with the clients in need.
              Theis platform's made it easy to find services that perfectly matched my needs.
              A definite go-to for anyone in search of reliable and diverse services.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', marginLeft: "1rem" }}>
          <Card.Body>
            <Card.Title>Raman Roy</Card.Title>
            <Card.Text>
              As a vendor, I registered on this platform to explore job opportunities, and I must say, it exceeded my expectations.
              The variety of jobs available allowed me to find perfext job for me according to my skills.
              A fantastic resource for job-seeking vendors.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem', marginLeft: "1rem" }}>
          <Card.Body>
            <Card.Title>Kiara Garg</Card.Title>
            <Card.Text>
              This site has created a thriving community for vendors, offering a centralized hub for job seekers.
              The platform not only helps vendors find opportunities but also fosters a sense of community among service providers.
              It's a valuable resource for anyone looking to for jobs.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>

      <Row className='w-100 mt-5 mb-4 bg-body-tertiary' style={{ height: "10rem" }}>

        <div className='w-100 ms-2 mt-5' style={{ height: "8rem" }}>
          <Image src="pics/logo.jpeg" width={65} className='me-2 ms-4' height={60} rounded />
          <span style={{ fontSize: "2rem", fontWeight: "unset" }} >CityPlus</span>
          <center>
            <i> <h1>Thankyou For visiting</h1></i>
          </center>
        </div>
      </Row>
    </>
  );
}
export default UpperPart;