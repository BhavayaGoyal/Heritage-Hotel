import React from 'react';
import { Container, Row, Col, Card, Carousel, Button, Form } from 'react-bootstrap';
import './App1.css'
import Footer from './Footer'

// Immersive Hero
const HeroSection = () => (
  
  <div style={{
    minHeight: '100vh',
    background: "url('/hero1.jpg') center/cover",
    display: 'flex',
    alignItems: 'center',
    position: 'relative'
  }}>
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
      background: 'linear-gradient(120deg, rgba(33,39,74,0.57) 0%, rgba(225,177,44,0.16) 100%)'
    }}/>
    <Container style={{ zIndex: 2 }}>
      <img src="/heritage-logo.png" style={{ width: 180,height: 180, marginBottom: 0 }} alt="Hotel Logo"/>
      <h1 className="display-1 fw-bold text-light" style={{ fontFamily: 'Playfair Display' }}>Grand Royal Palace</h1>
      <div style={{ color: '#f4f8c7ff', fontWeight: 600, fontSize: '1.25rem', marginBottom: 12 }}>
        ★★★★★ · 5-Star Luxury on the Riverfront
      </div>
      <p className="lead text-light mb-5">A sanctuary of timeless elegance, comfort, and hospitality in the heart of the city.</p>
      <Form style={{ maxWidth: 510, margin: 'auto', padding: '1.2rem', borderRadius: 16, background: '#fff', boxShadow: '0 2px 32px #21274a22' }}>
        <Row className="g-2">
          <Col><Form.Control type="date" /></Col>
          <Col><Form.Control type="date" /></Col>
          <Col>
            <Form.Select>
              <option>Suite</option>
              <option>Deluxe King</option>
              <option>City View</option>
            </Form.Select>
          </Col>
          <Col>
            <Button variant="warning" type="submit">Search</Button>
          </Col>
        </Row>
      </Form>
      <div style={{ marginTop: 34, color: '#fff' }}>
        <span style={{ fontSize: '1.1rem' }}>#1 rated — TripAdvisor Traveler’s Choice</span>
      </div>
    </Container>
  </div>
);

// Rooms Showcase
const FeaturedRooms = () => {
  const rooms = [
    {
      img: '/suite1.jpg',
      title: 'Deluxe Elegance Room',
      desc: 'Experience regal charm with antique furnishings, elegant décor, and unmatched luxury designed for true royalty.',
    },
    {
      img: '/premier.jpg',
      title: 'Premier Royal Room',
      desc: 'A spacious retreat blending heritage elegance with modern comforts, offering a stay fit for kings and queens.',
    },
    {
      img: '/suite3.jpg',
      title: 'Luxury Grand Room',
      desc: 'Perfect for business & leisure, combining sophistication with functionality in a stylish modern setup.',
    },
    {
      img: '/suite4.jpeg',
      title: 'Imperial Suite',
      desc: 'Modern design meets exclusivity, offering premium amenities and personalized luxury for our guests.',
    },
    {
      img: '/suite5.jpg',
      title: 'Opulent Deluxe Room',
      desc: 'A cozy yet lavish escape, featuring plush interiors and refined touches that ensure ultimate relaxation.',
    },
    {
      img: '/suite6.jpg',
      title: 'Presidential Suite',
      desc: 'Contemporary design with smart amenities, crafted for executives and modern travelers.',
    },
  ];
    
  return (
    <Container className="py-5">
      <h2 className="text-center mb-5" style={{ fontFamily: 'Playfair Display', fontWeight: '700', fontSize: '2.6rem' }}>
        Choose Your Experience
      </h2>
      <Row className="g-4">
        {rooms.map((room, idx) => (
          <Col md={4} key={idx}>
            <Card className="shadow-lg border-0" style={{ borderRadius: 16 }}>
              <Card.Img variant="top" src={room.img} alt={room.title} style={{ borderRadius:'16px 16px 0 0', objectFit:'cover', height:250, maxHeight:260 }} />
              <Card.Body style={{ textAlign:'center', fontFamily:'Georgia',maxHeight: 260 }}>
                <Card.Title style={{ fontWeight: 700, color: '#2c2a4a' }}>{room.title}</Card.Title>
                <Card.Text>{room.desc}</Card.Text>
                <Button variant="warning" className="px-4 mt-2">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};


// Amenities & Experiences

const AmenitiesSection = () => (
  <Container className="py-5">
    <h2 className="mb-5 text-center" style={{ fontFamily:'Playfair Display', fontWeight:'700', fontSize:'2.3rem' }}>Amenities & Experiences</h2>
    <Row className="g-4 text-center justify-content-center">
      <Col md={3}>
      <img src="/featured-section1.jpg" style={{width:'100%', borderRadius:12,height: '260px', objectFit: 'cover',  borderRadius: 16 }} alt="Spa"/>
      <div className="mt-2 fw-bold">Luxurious Spa Bath Experience</div>
      </Col> 
      <Col md={3}>
      <img src="/featured-section4.jpg" style={{width:'100%', borderRadius:12,height: '260px', objectFit: 'cover',  borderRadius: 16}} alt="Dining"/>
      <div className="mt-2 fw-bold">In-Room Fine Dining</div>
      </Col>
      <Col md={3}>
      <img src="/featured-section3.jpg" style={{width:'100%', borderRadius:12,height: '260px', objectFit: 'cover',  borderRadius: 16}} alt="Pool"/>
      <div className="mt-2 fw-bold">Private Pool Room</div>
      </Col>
      <Col md={3}>
      <img src="/featured-section2.jpg" style={{width:'100%', borderRadius:12,height: '260px', objectFit: 'cover',  borderRadius: 16}} alt="View"/>
      <div className="mt-2 fw-bold">Scenic View Terrace</div>
      </Col>
    </Row>
  </Container>
);


// Map & About
const LocationAboutSection = () => (
  <Container className="py-5">
    <Row className="align-items-center">
      <Col md={6}>
        <h2 style={{fontFamily:'Playfair Display', fontWeight:'700'}}>Our Story & Location</h2>
        <p>A legacy of hospitality since 1923. Located on the banks of the city’s iconic river, Grand Royal Palace brings you closer to culture, nightlife, and serenity. Discover vibrant neighborhoods and famous city sights just steps away.</p>
      </Col>
      <Col md={6}>
        <iframe title="Map"
          src="https://maps.google.com/maps?q=hotel+city+center&t=&z=13&ie=UTF8&iwloc=&output=embed"
          style={{width:'100%', height:'260px', borderRadius:'14px', border:'none'}}/>
      </Col>
    </Row>
  </Container>
);





// Final Page
const BookNow = () => (

  <div style={{ fontFamily: "'Georgia', serif", color: '#2c2a4a', background: '#f9f9f9' }}>
    {/* <Header/> */}
    <HeroSection />
    <FeaturedRooms />
    <AmenitiesSection />
    <LocationAboutSection />
    <Footer/>

  </div>
);

export default BookNow;
