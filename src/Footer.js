import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const socialIcons = [
  { icon: "fab fa-facebook-f", link: "#" },
  { icon: "fab fa-twitter", link: "#" },
  { icon: "fab fa-instagram", link: "#" },
  { icon: "fab fa-linkedin-in", link: "#" },
];

const linkStyle = {
  color: "#fff",
  textDecoration: "underline",
  transition: "color 0.2s",
};
const hoverStyle = {
  color: "#f5c063",
};
function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3" style={{ fontFamily: "inherit" }}>
      <div className="container">
        
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center">
            <img src="/logo.png" alt="Logo" style={{ height: "50px", marginRight: "15px" }} />
            <h2 className="mb-0 fw-bold">Sign up for newsletter</h2>
          </div>
           <div className="col-md-3 text-end">
            <div className="mb-1 fw-bold fs-5">Connect with us</div>
            <div>
              {socialIcons.map((s, idx) => (
                <a href={s.link} target="_blank" rel="noopener noreferrer" className="text-light ms-3 fs-4" key={idx}
                  style={{ transition: "color .2s" }}
                  onMouseOver={e => e.currentTarget.style.color = "#f5c063"}
                  onMouseOut={e => e.currentTarget.style.color = "#fff"}
                >
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
            <div className="text-muted small mt-1" style={{ fontSize: "0.9rem" }}>SOCIAL MEDIA CHANNEL</div>
          </div>
        </div>
        

        {/* Newsletter input, centered */}
        <div className="d-flex justify-content-center mb-5">
          <form className="input-group" style={{ maxWidth: "700px", width: "100%" }}>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email address..."
              style={{ borderRadius: ".5rem 0 0 .5rem", fontSize: "1.25rem" }}
            />
            <button className="btn btn-danger" type="submit" style={{ borderRadius: "0 .5rem .5rem 0", fontSize: "1.5rem" }}>
              &#8594;
            </button>
          </form>
        </div>

        
       

        {/* Main grid: 4 columns equally spaced */}
        <div className="row mb-5">
          {/* CONTACT */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h4>Contact</h4>
            <div>Plot No. 3, Near Connaught Place,<br />Barakhamba Road, <br/> New Delhi- 110001 <br/> India</div>
            <div className="mt-2 small">EMAIL ADDRESS: </div>
            <div>info@baseraboutiquehotel.com.np</div>
            <div className="mt-2 small">PHONE NO.: </div>
            <div>+91 1234567890, +91 0987654321</div>
  
          </div>
          {/* HOTEL */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h4>Hotel</h4>
            <div><a href="#" className="text-light text-decoration-underline">About Us</a></div>
            <div><a href="#" className="text-light text-decoration-underline">Photos</a></div>
            <div><a href="#" className="text-light text-decoration-underline">Services</a></div>
            <div><a href="#" className="text-light text-decoration-underline">Rooms & Suites</a></div>
            <div><a href="#" className="text-light text-decoration-underline">Dining & Bar</a></div>
          </div>
          {/* INQUIRES */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h4>Inquires</h4>
            <div><a href="#" className="text-light text-decoration-underline">Book A Room</a></div>
            <div><a href="#" className="text-light text-decoration-underline">Book An Event</a></div>
          </div>
          {/* LATEST TWEET */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h4>Latest Tweet</h4>
          </div>
        </div>

        <hr className="border-light my-4" />

        {/* Bottom bar: Copyright left, cards center, website right */}
        <div className="d-flex flex-wrap justify-content-between align-items-center">
          <div className="small" style={{ flexBasis: "33.3%" }}>
            Copyright © 2025 | All Rights Reserved | Heritage Hotel
          </div>
          <div className="text-center" style={{ flexBasis: "33.3%" }}>
            <img src="/footer1.png" alt="AMEX" height="30" className="me-2" />
            <img src="/footer2.png" alt="VISA" height="30" className="me-2" />
            <img src="/payment.png" alt="Rupay card" height="40"width="40" className="me-2" />
            <img src="/footer3.png" alt="visa" height="30" />
          </div>
          <div className="small text-end" style={{ flexBasis: "33.3%" }}>
            Website by: Bhavaya Goyal
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
