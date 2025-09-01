import { Nav, Navbar, NavDropdown, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <>
        <Navbar bg="transparent" variant="light"   expand="lg" className="shadow-none">
        <Container>
          <Navbar.Brand as={Link} to="/" >
          <img 
          src = "./logo.png"
          alt="logo" style={{height:"80px",width:"80px", marginRight:"24px", marginLeft:"12px"}}
          />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center" style={{width:"100%", justifyContent:"flex-end"}}>
              <Nav.Link as={Link} to="/"  className="text-white mx-3"> HOME</Nav.Link>
              <Nav.Link as={Link} to="/about"className="text-white mx-3">ABOUT US</Nav.Link>
              <Nav.Link href="/blogs" className="text-white mx-3">BLOGS</Nav.Link>
              
              <NavDropdown title={<span className="text-white mx-3 custom-dropdown ">STAY</span>} id="rooms-dropdown" >
                <NavDropdown.Item as={Link} to="/rooms/heritage-deluxe">Deluxe Elegance Room</NavDropdown.Item>
                <NavDropdown.Item href="#royalRoom">Premier Royal Room</NavDropdown.Item>
                <NavDropdown.Item href="#family">Luxury Grand Room</NavDropdown.Item>
                <NavDropdown.Item href="#presidential">Opulent Deluxe Room</NavDropdown.Item>
                <NavDropdown.Item href="#presidential">Presidential Suite</NavDropdown.Item>
              </NavDropdown>

           <NavDropdown title={<span className="text-white mx-3">MEETING & EVENTS</span>} id="meeting-dropdown" >
            <NavDropdown.Item as={Link} to="/meeting/
            ">Banquet Hall</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/meeting/conference">Conference Room</NavDropdown.Item>
          </NavDropdown>

              <Nav.Link as={Link} to="/contact"  className="text-white mx-3">CONTACT</Nav.Link>
              <Nav.Link as={Link} to="/dining"  className="text-white mx-3">DINING</Nav.Link>
              <Button variant="outline-light mx-3" as={Link} to={"/book-now"} className="ms-3">BOOK NOW!</Button>
              <Button variant="outline-light mx-3" as={Link} to={"/login"} className="ms-3">LOGIN</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

        </>
    )
}

export default Header;