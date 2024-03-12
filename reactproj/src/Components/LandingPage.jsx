import Header_Navbar from './Header_Navbar';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive'

// import Media from 'react-media';
function UpperPart() {
  const navigate = useNavigate();
  const doNavigate = () => {
    navigate("/Signup");
  };
  const desktop_index_styles = {
    
    mainRow:{
      minWidth:'100%',
      display:'flex',
    },
    parentDiv: { 
      display:"flex",
      
    },
    landingCard: {
      // maxWidth:'50%', 
    },
    imageContainer:{
      display:'grid',
      maxWidth:'50%', 
      gridTemplateColumns: 'repeat(2, minmax(250px, 1fr))', 
      gridGap: '20px',  

    },
    images:{
      display:'flex',
      width:' 200px',  
      height: '200px',  
      objectFit: 'cover',
    },  
    footerPicsContainer: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between', 
      marginY:'10px',
      marginX:'50px',
    },
    footerPics: {
      display:'flex',
      margin:'5px',
      maxWidth:'500px',  
      objectFit: 'cover',  
    },
     
    reviewCards:{
      display:'flex',
      flexDirection:'row',
      margin:'2rem',
      maxWidth:'25%',


    }
  }
  const tablet_index_styles = {
    
    mainRow:{
      minWidth:'100%',
      display:'flex',
      flexDirection:'column',
    },
    parentDiv: { 
      flexDirection:'column',
      display:"flex",
      
    },
    landingCard: {
      // maxWidth:'50%', 
    },
    imageContainer:{
      paddingLeft:'2rem',
      paddingRight:'2rem',
      display:'grid',
      maxWidth:'50%', 
      gridTemplateColumns: 'repeat(2, minmax(250px, 1fr))', 
      gridGap: '20px',  
      
    },
    images:{
      display:'flex',

      width:' 200px',  
      height: '200px',  
      objectFit: 'cover',
    },  
    footerPicsContainer: {
      display: 'flex',
      paddingTop:'2rem',
      flexDirection:'column',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'center', 
      marginY:'10px',
      marginX:'50px',
    },
    footerPics: {
      display:'flex',
      flexDirection:'column',
      margin:'2rem',
      maxWidth:'500px',  
      objectFit: 'cover',  
    },
    reviewCards:{
      display:'flex',
      flexDirection:'column',
      margin:'2rem',

    }
     
  }
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  // const Tablet = ({ children }) => {
  //   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  //   return isTablet ? children : null
  // } # For Tablet ONLY
  const Tablet = ({ children }) => { // Tablet+ Mobile Included
    const isTablet = useMediaQuery({ maxWidth: 991 })
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
  }
  

  return (
    <> 
    <Header_Navbar></Header_Navbar> 

      {/* =================================================== */}
    <Desktop>
      <div style={desktop_index_styles.parentDiv}>
        <div style={desktop_index_styles.cardDiv} >

          <Card.Body style={desktop_index_styles.landingCard} >
            <Card.Title style={{ fontFamily: "os_semi_bold", marginTop: '2rem' }}> <center> <h1>
              Home Services <br/>
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
        <div style={desktop_index_styles.imageContainer}>
          <Col>
            <Image src="pics/s3.jpg" style={desktop_index_styles.images} rounded />
          </Col>
          <Col>
            <Image src="pics/s1.jpg" style={desktop_index_styles.images} rounded />
          </Col>
          <Col>
            <Image src="pics/s2.jpg" style={desktop_index_styles.images} rounded />
          </Col>
          <Col>
            <Image src="pics/s4.jpg" style={desktop_index_styles.images} rounded />
          </Col>

        </div>
      </div>

      {/* ========================================================= */}
      <div style={desktop_index_styles.footerPicsContainer} id="footer">
        <div   >
          <Image src="pics/card2.jpeg" onClick={doNavigate} style={desktop_index_styles.footerPics} rounded />
        </div>
        <div  >
          <Image src="pics/card3.jpeg" onClick={doNavigate} style={desktop_index_styles.footerPics} rounded />
        </div>
        <div   >
          <Image src="pics/card1.jpeg" onClick={doNavigate} style={desktop_index_styles.footerPics} rounded />
        </div>
      </div>

        <center style={{ fontFamily: "os_semi_bold", marginTop: '2rem', marginBottom: "20px" }}><h1>Reveiws</h1></center>
      <div style={{width:'100%',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:'2rem',marginBottom:'2rem'}}>
        <Card style={desktop_index_styles.reviewCards}>
          <Card.Body>
            <Card.Title>Sonia Mittal</Card.Title>
            <Card.Text>
              I've been using this service provider for a while now, and the reliability factor is what keeps me coming back.
              The vendors listed on the platform are consistently high-quality, and the job opportunities available are genuine.
              It's a trustworthy space for both clients and vendors.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={desktop_index_styles.reviewCards }>
          <Card.Body>
            <Card.Title>Harry Josh</Card.Title>
            <Card.Text>
              I recently utilized this website and was impressed with their seamless system for connecting vendors with the clients in need.
              Theis platform's made it easy to find services that perfectly matched my needs.
              A definite go-to for anyone in search of reliable and diverse services.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={ desktop_index_styles.reviewCards}>
          <Card.Body>
            <Card.Title>Raman Roy</Card.Title>
            <Card.Text>
              As a vendor, I registered on this platform to explore job opportunities, and I must say, it exceeded my expectations.
              The variety of jobs available allowed me to find perfext job for me according to my skills.
              A fantastic resource for job-seeking vendors.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={ desktop_index_styles.reviewCards}>
          <Card.Body>
            <Card.Title>Kiara Garg</Card.Title>
            <Card.Text>
              This site has created a thriving community for vendors, offering a centralized hub for job seekers.
              The platform not only helps vendors find opportunities but also fosters a sense of community among service providers.
              It's a valuable resource for anyone looking to for jobs.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>


      </Desktop>
    <Tablet>
      <div style={tablet_index_styles.parentDiv}>
        <div style={tablet_index_styles.cardDiv} >

          <Card.Body style={tablet_index_styles.landingCard} >
            <Card.Title style={{ fontFamily: "os_semi_bold", marginTop: '2rem' }}> <center> <h1>
              Home Services <br/>
              at your doorstep
            </h1></center> </Card.Title>
            <Card.Text style={{ fontSize: "larger", fontFamily: "monospace", paddingLeft:'2rem', paddingRight:'2rem'}}>
              We offer a diverse array of services designed to meet your various needs.
              Whether you're seeking professional assistance or looking to showcase your skills, our platform facilitates seamless interactions.
              Clients can easily connect with vendors, browse available services, and contact the vendors. Moreover, if you're a vendor,
              our platform provides you with the opportunity to register and explore job opportunities tailored to your expertise.
              Join our community to unlock a world of possibilities, connecting service providers with those in search of top-notch services.
            </Card.Text>
          </Card.Body>

        </div>
        <div style={{display:'flex',justifyContent:'center',alignContent:'center',width:'100%',marginBottom:"2rem",marginTop:"2rem"}}>

        <div style={tablet_index_styles.imageContainer}>
          <Col>
            <Image src="pics/s3.jpg" style={tablet_index_styles.images} rounded />
          </Col>
          <Col>
            <Image src="pics/s1.jpg" style={tablet_index_styles.images} rounded />
          </Col>
          <Col>
            <Image src="pics/s2.jpg" style={tablet_index_styles.images} rounded />
          </Col>
          <Col>
            <Image src="pics/s4.jpg" style={tablet_index_styles.images} rounded />
          </Col>

        </div>
        </div>
      </div>

      {/* ========================================================= */}
      <div style={tablet_index_styles.footerPicsContainer} id="footer">
        <div   >
          <Image src="pics/card2.jpeg" onClick={doNavigate} style={tablet_index_styles.footerPics} rounded />
        </div>
        <div  >
          <Image src="pics/card3.jpeg" onClick={doNavigate} style={tablet_index_styles.footerPics} rounded />
        </div>
        <div   >
          <Image src="pics/card1.jpeg" onClick={doNavigate} style={tablet_index_styles.footerPics} rounded />
        </div>
      </div>

      <div style={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'2rem',marginBottom:'2rem'}}>
        <center style={{ fontFamily: "os_semi_bold", marginTop: '2rem', marginBottom: "20px" }}>
          <h1>Reveiws</h1>
        </center>
        <Card style={tablet_index_styles.reviewCards}>
          <Card.Body>
            <Card.Title>Sonia Mittal</Card.Title>
            <Card.Text>
              I've been using this service provider for a while now, and the reliability factor is what keeps me coming back.
              The vendors listed on the platform are consistently high-quality, and the job opportunities available are genuine.
              It's a trustworthy space for both clients and vendors.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={tablet_index_styles.reviewCards }>
          <Card.Body>
            <Card.Title>Harry Josh</Card.Title>
            <Card.Text>
              I recently utilized this website and was impressed with their seamless system for connecting vendors with the clients in need.
              Theis platform's made it easy to find services that perfectly matched my needs.
              A definite go-to for anyone in search of reliable and diverse services.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={ tablet_index_styles.reviewCards}>
          <Card.Body>
            <Card.Title>Raman Roy</Card.Title>
            <Card.Text>
              As a vendor, I registered on this platform to explore job opportunities, and I must say, it exceeded my expectations.
              The variety of jobs available allowed me to find perfext job for me according to my skills.
              A fantastic resource for job-seeking vendors.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={ tablet_index_styles.reviewCards}>
          <Card.Body>
            <Card.Title>Kiara Garg</Card.Title>
            <Card.Text>
              This site has created a thriving community for vendors, offering a centralized hub for job seekers.
              The platform not only helps vendors find opportunities but also fosters a sense of community among service providers.
              It's a valuable resource for anyone looking to for jobs.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      </Tablet>
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