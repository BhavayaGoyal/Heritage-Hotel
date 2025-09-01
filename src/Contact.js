import './App.css'
import Footer from './Footer';
import Header from './Header'

const Contact = () => {
    return(
        <>
        <Header/>
      <div
        className="hero-section d-flex align-items-center justify-content-center text-center text-white fade-in-hero"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url("/lobby.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '70vh',
          position: 'relative'
        }}
      >
        <div className="overlay" style={{
          backgroundColor: 'rgba(0, 0, 0, 0.35)',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }}></div>
        <div className="content position-relative ">
          <h1 className="display-4 fw-bold text-light" style={{fontFamily: "Palyfair Display, Georgia, serif"}}>Contact Us </h1>
          <p className="lead"> Have questions or requests? We’re just a message away.</p>
        </div>
      </div>

      <div className="container my-5 custom-font-section " style={{maxWidth: '1400px', background: "#faf9f7", borderRadius: "12px"}}>
  <div className="row g-5">

    <div className="col-lg-6 col-12 ">
      <div className="bg-white p-5 rounded shadow-sm custom-head ">
        <h2 className="fw-bold mb-4" style={{fontSize: '2rem', fontFamily: "Playfair Display, Georgia, serif"}}>Contact Form</h2>
        <form>
          <div className="mb-4">
            <label className="form-label" style={{ fontFamily: "Roboto, Arial, sans-serif" }}>Name</label>
            <input type="text" className="form-control form-control-lg" />
          </div>
          <div className="mb-4">
            <label className="form-label" style={{ fontFamily: "Roboto, Arial, sans-serif" }}>Phone</label>
            <input type="tel" className="form-control form-control-lg" />
          </div>
          <div className="mb-4">
            <label className="form-label" style={{ fontFamily: "Roboto, Arial, sans-serif" }}>Email</label>
            <input type="email" className="form-control form-control-lg" />
          </div>
          <div className="mb-4">
            <label className="form-label" style={{ fontFamily: "Roboto, Arial, sans-serif" }}>Write Message</label>
            <textarea className="form-control form-control-lg" rows="4"></textarea>
          </div>
          <button type="submit" className="btn btn-outline-dark px-4 py-2 text-uppercase" style={{letterSpacing:'2px', borderRadius: "4px"}}>Send Message</button>
        </form>
      </div>
    </div>

    <div className="col-lg-6 col-12 ">
      <div className="bg-white p-5 rounded shadow-sm">
        <h2 className="fw-bold mb-4" style={{fontSize:'2rem', fontFamily: "Playfair Display, Georgia, serif"}}>Plan Your Stay With Us</h2>
        <img src="/hotel.jpg" alt="Hotel Room" className="mb-2 d-block " style={{maxWidth:'320px',borderRadius: '8px', boxShadow: '0 4px 18px rgba(0,0,0,0.10)'}}/>
        <p className="mb-2" style={{ fontFamily: "Roboto, Arial, sans-serif", color: "#545454", lineHeight: "1.7" }}>Your comfort begins long before you check in. Our dedicated team is on hand to answer any questions, provide recommendations, and tailor your experience to your preferences. From booking rooms to arranging private tours or dining experiences, we’re ready to make your visit unforgettable. Simply send us your message, and we’ll take care of the rest.</p>
      </div>
    </div>
  </div>
</div>
<Footer/>
        
       </>
    )
}

export default Contact;