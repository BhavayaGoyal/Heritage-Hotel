import React from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import './App1.css';
import Header from './Header';
import Footer from './Footer';

const Blogs = () => {
  const[visibleRows, setVisibleRows] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const totalRows = 2;

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(()=>{
       setVisibleRows(prev => Math.min(prev + 1, totalRows));
       setLoading(false);
    }, 1000);
  };
    return(
        <>
         <Header/>
        <div className="header-banner" style={{backgroundImage: "url('/blog-header.jpg')"}}>
           
           <div className="header-overlay">
            <h1 clasName="header-title" style={{fontFamily: "Playfair Display"}}>
                News & Events
            </h1>
            <p className="header-subtitle">
                Discover luxury stays, fine dining, and unforgettable experiences. </p>
           </div>
        </div> 

       <Container className="py-5">
           <Row className="g-4">
            <Col md={4} sm={6} xs={12}>
            <Card className="blog-card h-100 blog-section">
                <Card.Img variant='top' src="/blog1.jpg"/>
                <Card.Body>
                    <Card.Title>
                        Infinity Pool with a Stunning View
                    </Card.Title>
                    <Card.Text>Dive into relaxation at our infinity pool overlooking the mountains and ocean horizon.</Card.Text>
                <Button variant="custom">Read More</Button>
                </Card.Body>
                </Card> 
            </Col>
              <Col md={4} sm={6} xs={12}>
            <Card className="blog-card h-100">
              <Card.Img variant="top" src="/blog2.jpg" />
              <Card.Body>
                <Card.Title>Rooftop Lounge & Bar Experience</Card.Title>
                <Card.Text>Enjoy handcrafted cocktails as the sun sets, offering a perfect end to your day.</Card.Text>
                <Button variant="custom">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
           <Col md={4} sm={6} xs={12}>
            <Card className="blog-card h-100">
              <Card.Img variant="top" src="/blog3.jpg" />
              <Card.Body>
                <Card.Title className='card-title'>Complimentary Breakfast Delights</Card.Title>
                <Card.Text>Wake up to a delightful breakfast buffet with fresh pastries, tropical fruits, and coffee.</Card.Text>
                <Button variant="custom">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
           </Row> <br/>
           <Row className="g-4">
            <Col md={4} sm={6} xs={12}>
            <Card className="blog-card h-100">
                <Card.Img variant='top' src="/bog4.jpg"/>
                <Card.Body>
                    <Card.Title>
                        Discover the Best Local Gems Around Heritage Hotel 
                    </Card.Title>
                    <Card.Text>From historic landmarks to hidden cafés, here’s your guide to exploring like a local.</Card.Text>
                <Button variant="custom">Read More</Button>
                </Card.Body>
                </Card> 
            </Col>
              <Col md={4} sm={6} xs={12}>
            <Card className="blog-card h-100">
              <Card.Img variant="top" src="/blog5.jpg" />
              <Card.Body>
                <Card.Title>Mark Your Calendar: Must-See Events This Season</Card.Title>
                <Card.Text>Don’t miss the festivals, concerts, and cultural happenings right outside our doors.</Card.Text>
                <Button variant="custom">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
           <Col md={4} sm={6} xs={12}>
            <Card className="blog-card h-100">
              <Card.Img variant="top" src="/blog6.jpg" />
              <Card.Body>
                <Card.Title className='card-title'>A Day Behind the Scenes at Heritage Hotel</Card.Title>
                <Card.Text>Meet the people and passion that make your stay unforgettable.</Card.Text>
                <Button variant="custom">Read More</Button>
              </Card.Body>
            </Card>
          </Col>
           </Row>

           {visibleRows >= 2 && (
            <>
              <br/>
              <Row className="g-4">
                <Col md={4} sm={6} xs={12}>
                   <Card className="blog-card h-100">
                    <Card.Img variant='top' src="/blog8.jpg"/>
                    <Card.Body>
                     <Card.Title className="card-title">Savor the Flavors: Chef’s Signature Dishes </Card.Title>
                     <Card.Text className=''> Get an insider’s look at our head chef’s favorite recipes and the story behind each dish.</Card.Text>
                     <Button variant="custom"> Read More</Button>
                     </Card.Body>
                   </Card>
                </Col>
                <Col md={4} sm={6} xs={12}>
                   <Card className="blog-card h-100">
                    <Card.Img variant='top' src="/blog7.jpg"/>
                    <Card.Body>
                     <Card.Title className="card-title">Wellness Retreat: Yoga & Spa Experiences </Card.Title>
                     <Card.Text className=''> Discover how our yoga sessions and luxury spa treatments can rejuvenate your mind and body.</Card.Text>
                     <Button variant="custom"> Read More</Button>
                     </Card.Body>
                   </Card>
                </Col>
                <Col md={4} sm={6} xs={12}>
                   <Card className="blog-card h-100">
                    <Card.Img variant='top' src="/blog9.jpg"/>
                    <Card.Body>
                     <Card.Title className="card-title">Family Fun at Heritage Hotel </Card.Title>
                     <Card.Text className=''> A guide to kid-friendly activities, games, and special treats for families staying with us.</Card.Text>
                     <Button variant="custom"> Read More</Button>
                     </Card.Body>
                   </Card>
                </Col>
              </Row>
              <br/>
              <Row className="g-4">
                <Col md={4} sm={6} xs={12}>
                   <Card className="blog-card h-100">
                    <Card.Img variant='top' src="/bolg12.jpg"/>
                    <Card.Body>
                     <Card.Title className="card-title">Photography Hotspots Around the Heritage Hotel </Card.Title>
                     <Card.Text className=''> Capture unforgettable moments at the most scenic locations just steps from our property.</Card.Text>
                     <Button variant="custom"> Read More</Button>
                     </Card.Body>
                   </Card>
                </Col>
                <Col md={4} sm={6} xs={12}>
                   <Card className="blog-card h-100">
                    <Card.Img variant='top' src="/blog10.jpg"/>
                    <Card.Body>
                     <Card.Title className="card-title">Mixology Magic: Signature Drinks You Must Try</Card.Title>
                     <Card.Text className=''> Discover the creative cocktails and mocktails crafted by our talented bartenders.</Card.Text>
                     <Button variant="custom"> Read More</Button>
                     </Card.Body>
                   </Card>
                </Col>
                <Col md={4} sm={6} xs={12}>
                   <Card className="blog-card h-100">
                    <Card.Img variant='top' src="/medium-shot-musicians-working-studio.jpg"/>
                    <Card.Body>
                     <Card.Title className="card-title">Cultural Evenings: Music & Dance at the Hotel</Card.Title>
                     <Card.Text className=''>Experience the magic of live cultural performances right within our hotel premises.</Card.Text>
                     <Button variant="custom"> Read More</Button>
                     </Card.Body>
                   </Card>
                </Col>
              </Row>
            </>
           )}

           {visibleRows < totalRows && (
            <div className='text-center mt-4'>
              <Button 
              onClick={handleLoadMore}
              disabled={loading}
              style = {{
                backgroundColor: "#e0bc90ff",
                color: "#fff",
                border: "none",
                minWidth: "150px"
              }}>  {loading ? <span className="spinner-border spinner-border-sm"></span> : "Load More"}</Button>
            </div>
           )}
        </Container>  
        <Footer/> 
        </>
    )
}

export default Blogs;