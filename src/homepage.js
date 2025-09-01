import { Container, Row, Col,  Card, Button,  } from "react-bootstrap";
import Footer from './Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
const Homepage = () => {
  return (
    <>
      <Header/>
       <div
  style={{
    backgroundImage: "url('/hero-section.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    color: "white",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    overflow: "hidden",    // Prevent scrollbars from overlay div
  }}
  className="d-flex flex-column align-items-center justify-content-center text-center"
>
  {/* Overlay */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.5)", // 0.5 is moderate; adjust as needed
      zIndex: 1,
      pointerEvents: "none", // Allows clicks to pass through to buttons/links
    }}
  />
  <div style={{ position: "relative", zIndex: 2 }}>
    <h1 className="display-3 fw-bold hero-text">Welcome to Heritage Hotel</h1>
    <p className="lead hero-text">Experience luxury and comfort like never before</p>
    <Button style={{
      backgroundColor: "#C8A165",
      borderColor: "#C8A165",
      color: "white",
      borderRadius: 0,
      fontWeight: 600,
      letterSpacing: 1
    }} size="lg">Book Now</Button>
  </div>
</div>

        {/* Stay & Enjoy Section */}

    <section className="stay-enjoy-section py-5" style={{ background: "#fff" }}>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <p className="text-uppercase text-muted mb-2 small-heading" >Stay with our luxury rooms</p>
                    <h2 className="fw-bold-mb-3 main-heading">Stay & Enjoy</h2>
                    <p className="mb-4 text-secondary description">
                     Escape to a place where comfort meets indulgence. Enjoy elegant rooms, a refreshing pool, a fully equipped gym, and a fine dining restaurant serving delicious cuisines. Whether you’re relaxing by the water, savoring gourmet meals, or unwinding in our serene spaces, every moment here is crafted to make your stay unforgettable.   
                    </p>
                    <button className="btn btn-dark-cream text-uppercase fw-bold"> More About Us</button>
                </div>    

      <div className="col-lg-6">
        <div className=" g-3 d-flex flex-wrap align-items-stretch jsutify-content-center">
          

         <div className="col-lg-6 d-flex gap-3">
  <img
    src="img1.jpg"
    alt="Luxury Room"
    style={{width: "500px",height: "380px",objectFit: "cover",borderRadius: "18px",boxShadow: "0 2px 16px rgba(0,0,0,0.10)",}}/>

  {/* Right two smaller stacked images */}
  <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
    <img
      src="img2.jpg"
      alt="Pool"
      style={{width: "280px",height: "180px",objectFit: "cover",borderRadius: "16px",boxShadow: "0 2px 16px rgba(0,0,0,0.10)",}}/>
    <img
      src="img4.jpg"
      alt="Bar"
      style={{width: "280px",height: "180px",objectFit: "cover",borderRadius: "16px",boxShadow: "0 2px 16px rgba(0,0,0,0.10)",}}/>
  </div>
</div>
</div>
</div>
      </div>
    </div>
    </section>

<section className="featured-rooms-section py-5" style={{ background: "#fafafa" }}>
  <Container>
    <h2 className="text-center mb-5" style={{ fontFamily: "Geneva", fontWeight: 'bold', fontSize: "4rem", color:"#8B7765" }}>Featured Rooms</h2>
    <Row>

      <Col md={6} className="mb-4 mb-md-0">
        <Card className="shadow-sm border-0">
          <div style={{ position: "relative" }}>
            <Card.Img variant="top"
              src="/featured1.png" 
              style={{ height: "400px", objectFit: "cover", filter: "brightness(0.95)" }}
            />

            <div
              style={{position: "absolute",bottom: 12,left: 12,background: "rgba(0,0,0,0.7)",color: "#fff",padding: "2px 14px",fontSize: "0.85rem",borderRadius: "3px",letterSpacing: "1px"}}>
              FEATURED ROOM ★★★
            </div>
          </div>
          <Card.Body>
            <Card.Title className="fw-bold" style={{ color: "#C8A165", fontSize: "1.25rem" }}>Presidential Room</Card.Title>
            <div className="d-flex align-items-center mb-2" style={{ fontSize: "0.9rem", color: "#888" }}>

              <div className="me-3">
                <i className="bi bi-people-fill"></i> 2 Guests
              </div>
              <div>
                <i className="bi bi-aspect-ratio"></i> 2500 ft²
              </div>
            </div>
            <Card.Text style={{ fontSize: "0.98rem", color: "#555" }}>
             Spacious and luxurious, our 2,500 sq ft Presidential Suite offers elegant rooms and premium amenities for an unforgettable stay.
            </Card.Text>
            <Button variant="outline-dark" style={{ background: "#C8A165", border: "none", color: "#fff", fontWeight: 600, borderRadius: 0 }}>
              BOOK NOW FROM ₹50,000
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6}>
        <Row>
          <Col xs={12} md={12} className="mb-4">
            <Card className="shadow-sm border-0">
              <div style={{ position: "relative" }}>
                <Card.Img variant="top" src="/featured2.jpg" style={{ height: "280px", objectFit: "cover" }} />
                <div
                  style={{position: "absolute",bottom: 10,left: 10,background: "rgba(255,207,89,0.9)",color: "#fff",fontWeight: 600,padding: "1px 9px",fontSize: "0.9rem",borderRadius: "3px",
                  }}
                >FROM₹ 8,000</div>
                <div
                  style={{
                    position: "absolute",top: 10, left: 10,background: "rgba(0,0,0,0.7)",color: "#fff",padding: "2px 8px",fontSize: "0.8rem",borderRadius: "3px",
                  }}
                >HOTEL ROOM ★★★</div>
              </div>
            </Card>
          </Col>
          <Col xs={12} md={12}>
            <Card className="shadow-sm border-0">
              <div style={{ position: "relative" }}>
                <Card.Img variant="top" src="/featured3.jpg" style={{ height: "280px",  objectFit: "cover" }} />
                <div
                  style={{position: "absolute",bottom: 10,left: 10,background: "rgba(255,207,89,0.9)",color: "#fff",fontWeight: 600,padding: "1px 9px",fontSize: "0.9rem",borderRadius: "3px"
                  }}
                >FROM ₹5,980</div>
                <div
                  style={{position: "absolute",top: 10,left: 10,background: "rgba(0,0,0,0.7)",color: "#fff",padding: "2px 8px",fontSize: "0.8rem",borderRadius: "3px"
                  }}
                >HOTEL ROOM ★★★</div>
              </div>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
</section>
  {/* ===== Dining SECTION ===== */}  

  <div className="container-fluid py-5" style={{fontFamily: "'SegoeUI',Tahoma, Geneva, Verdana, sans-serif", backgroundColor: "#f1f3f5"}}>
    <div className="row">
      <div className="col-12 mb-4 text-center ">
        <h1 className="display-4 fw-bold mb-3" style={{letterSpacing: "0.12rem", fontSize: "3.4rem",color:"#8B7765", marginBottom:"0.5rem", textTransform:"uppercase"}}> Signature DINING</h1> 
        <p
            className="lead mx-auto mb-3"
            style={{ maxWidth: "760px", fontSize: "1.15rem", color: "#4a4a4a", lineHeight:"1.7", margin:"0 auto" }}
          >Embark on a journey of exquisite experiences, encompassing impeccable<br/>
            service, sophisticated ambience and masterful culinary artistry.</p>
            <a href="#" className="text-decoration-none fw-semibold" style={{color: "#ad9762", fontSize:"1.1rem", transition:"color 0.3s"}}>
              Explore<span style={{fontWeight:"bold", fontSize:"1.3rem"}}>&#x2192;</span>
            </a>
      </div>
    </div>
    <div className="row justify-content-center">
      {[{
          img: "/chef.jpg",
          alt: "Chef",
          title: "Celebrated Chefs"
        }, {
          img: "/restaurant1.jpg",
          alt: "Restaurant",
          title: "Legendary Restaurants"
        }, {
          img: "/dish.jpg",
          alt: "Dish",
          title: "Signature Recipes"
        }].map(({ img, alt, title }, idx) => (
          <div key={idx} className="col-md-4 mb-4">
            <Card className="shadow-sm rounded border-0" style={{ width: "95%", background:"#fff", borderRadius: "1.1rem", overflow: "hidden"}}>           
              <Card.Img
                variant="top"
                src={img}
                alt={alt}
                style={{ objectFit: "cover", height: "250px" }}
              />
            </Card>
          </div>
        ))}
    </div>
    <div className="row text-center mt-3">
      <div className="col-md-4">
        <h5 className="text-uppercase fw-semibold mb-0" style={{color: "#6b5b3a", fontWeight: 700, fontSize:"1.15rem", letterSpacing:"0.05"}}>Celebrated Chefs</h5>

      </div>
      <div className="col-md-4">
          <h5 className="text-uppercase fw-semibold" style={{ color: "#6b5b3a" ,fontWeight: 700, fontSize:"1.15rem", letterSpacing:"0.05" }}>
            Legendary Restaurants
          </h5>
        </div>
        <div className="col-md-4">
          <h5 className="text-uppercase fw-semibold" style={{ color: "#6b5b3a",fontWeight: 700, fontSize:"1.15rem", letterSpacing:"0.05" }}>
            Signature Recipes
          </h5> </div>
    </div>
  </div>
     {/* ===== Events SECTION ===== */}
     <div className="container-fluid py-5" style={{backgroundColor:"#e3e7ea", fontFamily:"Tahoma, Geneva, Verdana, sans-serif"}}>
      <div className="row justify-content-center" mb-4>
        <div className="col-md-10 text-center">
          <div
          style={{borderTop: "2px solid #d8c3a5",width: "120px",margin: "0 auto 18px auto",
          }}/>
        <h1 style={{fontSize: "2.6rem",fontWeight: 600,letterSpacing: "0.09em",color:"#8B7765",marginBottom: "12px",textTransform: "uppercase"}}>
          EVENTS & CONFERENCES
        </h1>
        <p style={{ color:"#4a4a4a",fontSize: "1.14rem",   maxWidth: "760px",margin:"0 auto",marginBottom: "12px",}}>
          Heritage elevates every occasion into an awe-inspiring, immersive experience to cherish forever.
        </p>
      </div>
    </div>
    <br/>
    <div className="row justify-content-center align-items-end">
      <div className="col-md-4 mb-4 d-flex justify-content-center">
        <Card className="shadow-sm h-100" style={{ width: "90%", borderRadius: "1rem", background: "#fff", minHeight: "300px"}}>

          <Card.Img variant="top" src="/meetings.jpg" alt="Meetings and Conferences" style={{ height: "400px", objectFit: "cover", borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", background: "#eee",}}/>

          <Card.Body className="d-flex align-items-center justify-content-center" style={{ minHeight: "65px" }}>

            <Card.Title className="mb-0 text-center" style={{ fontWeight: 600, fontSize: "1.18rem", letterSpacing: "0.04em", color: "#6b5b3a", textTransform: "uppercase"}}>
              Meetings &amp; Conferences
            </Card.Title>
          </Card.Body>
        </Card>
      </div>

      <div className="col-md-4 mb-4 d-flex justify-content-center">
        <Card
          className="shadow-sm h-100"
          style={{
            width: "90%",
            borderRadius: "1rem",
            background: "#fff",
            minHeight: "300px",
          }}
        >
          <Card.Img
            variant="top"
            src="/events.jpg"
            alt="Events"
            style={{
              height: "400px",
              objectFit: "cover",
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
              background: "#eee",
            }}
          />
          <Card.Body
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "65px" }}
          >
            <Card.Title
              className="mb-0 text-center"
              style={{
                fontWeight: 600,
                fontSize: "1.18rem",
                letterSpacing: "0.04em",
                color: "#6b5b3a",
                textTransform: "uppercase",
              }}
            >
              Events
            </Card.Title>
          </Card.Body>
        </Card>
      </div>

      {/* Card 3 */}
      <div className="col-md-4 mb-4 d-flex justify-content-center">
        <Card
          className="shadow-sm h-100"
          style={{
            width: "90%",
            borderRadius: "1rem",
            background: "#fff",
            minHeight: "30px",
          }}
        >
          <Card.Img
            variant="top"
            src="wedding.jpg"
            alt="Timeless Weddings"
            style={{
              height: "400px",
              objectFit: "cover",
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
              background: "#eee",
            }}
          />
          <Card.Body
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "65px" }}
          >
            <Card.Title
              className="mb-0 text-center"
              style={{
                fontWeight: 600,
                fontSize: "1.18rem",
                letterSpacing: "0.04em",
                color: "#6b5b3a",
                textTransform: "uppercase",
              }}
            >
              Timeless Weddings
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
        
     

      {/* ===== RECENT BLOG SECTION ===== */}
<section className="py-5"  style={{backgroundColor: "#d4d8db"}}>
  <Container>
    {/* Section header */}
    <div className="text-center mb-5">
      <p className="text-uppercase text-muted mb-2" style={{ letterSpacing: "2px" }}>
        Our Blog
      </p>
      <h2 className="fw-bold mb-0"
        style={{fontSize: "2.7rem",fontFamily: "serif",letterSpacing: ".5px"}}>
        Our Recent Blog
      </h2>
    </div>

    {/* Blog cards */}
    <Row className="gy-4 justify-content-center">
      <Col md={4} sm={10}>
        <Card className="h-100 border-0 shadow-sm" style={{ borderRadius: "14px" }}>
          <Card.Img
            variant="top"
            src="img1.jpg"
            style={{objectFit: "cover",width: "100%",height: "270px",borderTopLeftRadius: "14px",borderTopRightRadius: "14px"}}/>
          <Card.Body>
            <p className="text-uppercase text-muted mb-2" style={{ fontSize: "0.93rem", letterSpacing: "2px" }}>
              ROOMS
            </p>
            <Card.Title style={{ color: "#C8A165", fontWeight: 600, fontSize: "1.55rem", fontFamily: "serif" }}>
              New Rooms
            </Card.Title>
            <Card.Text style={{ color: "#616161", fontSize: "1.06rem" }}>
              Experience our recently renovated luxury rooms, blending timeless elegance with modern comfort for an unforgettable stay.
            </Card.Text>
            <Button variant="outline-dark" style={{ borderColor: "#C8A165", color: "#C8A165", borderRadius: 0 }}>
              READ MORE
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4} sm={10}>
        <Card className="h-100 border-0 shadow-sm" style={{ borderRadius: "14px" }}>
          <Card.Img
            variant="top"
            src="staff.jpg"
            style={{objectFit: "cover",width: "100%",height: "210px",borderTopLeftRadius: "14px",borderTopRightRadius: "14px"
            }}
          />
          <Card.Body>
            <p className="text-uppercase text-muted mb-2" style={{ fontSize: "0.93rem", letterSpacing: "2px" }}>
              NEWS
            </p>
            <Card.Title style={{ color: "#C8A165", fontWeight: 600, fontSize: "1.55rem", fontFamily: "serif" }}>
              New Staff Added
            </Card.Title>
            <Card.Text style={{ color: "#616161", fontSize: "1.06rem" }}>
              Meet our newly joined hospitality experts, dedicated to providing you with warm, personalized service during your stay.
            </Card.Text>
            <Button variant="outline-dark" style={{ borderColor: "#C8A165", color: "#C8A165", borderRadius: 0 }}>
              READ MORE
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4} sm={10}>
        <Card className="h-100 border-0 shadow-sm" style={{ borderRadius: "14px" }}>
          <Card.Img
            variant="top"
            src="img2.jpg"
            style={{objectFit: "cover",width: "100%",height: "210px",borderTopLeftRadius: "14px",borderTopRightRadius: "14px"}}
          />
          <Card.Body>
            <p className="text-uppercase text-muted mb-2" style={{ fontSize: "0.93rem", letterSpacing: "2px" }}>
              AMENITIES
            </p>
            <Card.Title style={{ color: "#C8A165", fontWeight: 600, fontSize: "1.55rem", fontFamily: "serif" }}>
              Relax by Our Pool
            </Card.Title>
            <Card.Text style={{ color: "#616161", fontSize: "1.06rem" }}>
              Unwind in our crystal-clear swimming pool, surrounded by serene views and comfortable loungers — perfect for a refreshing dip or a lazy afternoon.
            </Card.Text>
            <Button variant="outline-dark" style={{ borderColor: "#C8A165", color: "#C8A165", borderRadius: 0 }}>
              READ MORE
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
</section>

<Footer />

    </>
  );
};

export default Homepage;
