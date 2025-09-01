import './App.css';
import Footer from './Footer';
import Header from './Header'

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <Header/>
      <div
        className="hero-section d-flex align-items-center justify-content-center text-center text-white"
        style={{
          backgroundImage: 'url("/hero-section.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '70vh',
          position: 'relative'
        }}
      >
        <div className="overlay" style={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }}></div>
        <div className="content position-relative">
          <h1 className="display-4 fw-bold text-light">About Heritage Hotel</h1>
          <p className="lead"></p>
        </div>
      </div>

      <section class="quote-section">
  <div class="quote">
    <h1>
      “Customers may forget what you said<br/>
      but they will never forget how you made<br/>
      them feel”.
    </h1>
  </div>

  <div class="description-columns">
    <div class="column">
      <p>
       Our mission is to create memorable experiences by truly understanding our customers’ needs. We believe in building trust and delivering value through every interaction. By prioritizing empathy and personalized service, we transform ordinary transactions into lasting relationships.
      </p>
    </div>
    <div class="column">
      <p>
        We are committed to excellence and innovation, continuously improving to meet evolving expectations. Our team works tirelessly to provide tailored solutions, ensuring satisfaction at every step. Join us on this journey of connection and success, where your experience matters most.
      </p>
    </div>
  </div>
</section>  

  <section className="video-section">
      <div className="video-responsive">
        <iframe
          width="100%"
          height="50%"
          src={`https://www.youtube.com/embed/JbAVudZfqno?si=xJc4q5aSY2Mojqtd}`}
          frameBorder="0"
          allowFullScreen
          title="YouTube video"
        ></iframe>
      </div>
    </section>

    <section className="hotel-gallery-section">
      <div className="gallery-left">
        <h2 className="gallery-title">Hotel Gallery</h2>
        <p className="gallery-description">
Explore our carefully curated hotel gallery to get an authentic feel of our ambiance and amenities. Each image in the gallery showcases different aspects of our property — from the serene pool and relaxing sauna to the elegantly designed rooms. Our gallery offers a glimpse into the comfort, style, and luxury you can expect during your stay.
        </p>
        <button className="gallery-btn">
          VIEW GALLERY <span className="arrow">→</span>
        </button>
      </div>
      <div className="gallery-right">
        <div className="gallery-grid">
          <img src="featured3.jpg" alt="Pool" className="gallery-img"/>
          <img src="gallery2.jpg" alt="Sauna" className="gallery-img"/>
          <img src="img2.jpg" alt="Room 1" className="gallery-img"/>
          <img src="gallery4.jpg" alt="Room 2" className="gallery-img"/>
        </div>
      </div>
    </section>
       <section className="staff-section">
      <h2 className="staff-title">Our Staff</h2>
      <div className="staff-cards-row">
        {/* Card 1 */}
        <div className="staff-card">
          <div className="staff-img-area">
            <span className="staff-role-overlay">HOTEL MANAGER</span>
            <img src="staff2.jpg" alt="Sarah Doe" className="staff-img" />
          </div>
          <div className="staff-card-footer">
            <span className="staff-name">Rajesh Kumar</span>
            <span className="card-arrow">→</span>
          </div>
        </div>
        {/* Card 2 */}
        <div className="staff-card">
          <div className="staff-img-area">
            <span className="staff-role-overlay">RECEPTION MANAGER</span>
            <img src="staff1.jpg" alt="Jessica Doe" className="staff-img" />
          </div>
          <div className="staff-card-footer">
            <span className="staff-name">Priya Sharma</span>
            <span className="card-arrow">→</span>
          </div>
        </div>
        {/* Card 3 */}
        <div className="staff-card" style={{backgroundColor: ''}}>
          <div className="staff-img-area">
            <span className="staff-role-overlay">IT</span>
            <img src="staff3.jpg" alt="Mike Johnson" className="staff-img" />
          </div>
          <div className="staff-card-footer">
            <span className="staff-name">Neha Kapoor</span>
            <span className="card-arrow">→</span>
          </div>
        </div>
      </div>
    </section>
     <Footer />
    </>
  );
};

export default AboutUs;