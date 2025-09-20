import { Nav, Navbar, NavDropdown, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './App.css'
const Header = () => {
    return(
        <>
        <Navbar expand="lg" className="shadow-none custom-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" >
          <img 
          src = "./logo.png"
          alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} to="/"  className="text-white mx-3"> HOME</Nav.Link>
              <Nav.Link as={Link} to="/about"className="text-white mx-3">ABOUT US</Nav.Link>
              <Nav.Link href="/blogs" className="text-white mx-3">BLOGS</Nav.Link>
              
              <NavDropdown title="STAY" id="rooms-dropdown" className="custom-dropdown">
         <NavDropdown.Item as={Link} to="/rooms/heritage-deluxe"> Deluxe Elegance Room</NavDropdown.Item>
         <NavDropdown.Item href="/rooms/premier-royal">Premier Royal Room</NavDropdown.Item>
         <NavDropdown.Item href="/rooms/luxury-grand">Luxury Grand Room</NavDropdown.Item>
         <NavDropdown.Item href="/rooms/imperial">Imperial Suite</NavDropdown.Item>
         <NavDropdown.Item href="/rooms/opulent-deluxe">Opulent Deluxe Room</NavDropdown.Item>
         <NavDropdown.Item href="/rooms/presidential">Presidential Suite</NavDropdown.Item>
         </NavDropdown>


          <NavDropdown title="MEETINGS & EVENTS" className="custom-dropdown" id="halls-dropdown">
              <NavDropdown title="Boardrooms" drop="end" id="boardroom-submenu">
                <NavDropdown.Item as={Link} to="/hall/boardroom-1">
                Executive Boardroom
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/hall/boardroom-2">
                Directors Boardroom
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/hall/boardroom-3">
                Conference Boardroom
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Ballroom" drop="end" id="ballroom-submenu">
                <NavDropdown.Item as={Link} to="/hall/grand-ballroom">
                Grand Ballroom
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Banquet Halls" drop="end" id="banquet-halls-submenu">
                 <NavDropdown.Item as={Link} to="/hall/mid-banquet-1">
                Sapphire Banquet Hall
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/hall/mid-banquet-2">
                Emerald Banquet Hall
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/hall/mid-banquet-3">
                Ruby Banquet Hall
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/hall/large-hall-1"> 
                Majestic Hall
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/hall/large-hall-2">
                Imperial Hall
                </NavDropdown.Item>
              </NavDropdown>
          </NavDropdown>

              <Nav.Link as={Link} to="/contact"  className="text-white mx-3">CONTACT</Nav.Link>
              <Nav.Link as={Link} to="/dining"  className="text-white mx-3">DINING</Nav.Link>
              <Button  as={Link} to={"/book-now"} className="ms-3 btn-book">BOOK NOW!</Button>
              <Button  as={Link} to={"/login"} className="ms-3 btn-book">LOGIN</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

        </>
    )
}

export default Header;