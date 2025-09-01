import React, { useState } from "react";
import "./App1.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import Footer from './Footer'

const images =[
  {
    src:"/chef-garima.jpg",
    alt: "Crafted by Experts",
    title: "CRAFTED BY EXPERTS",
    desc: "A distinguished roster of world-class talent that embodies culinary excellence worldwide."
  },
  {
    src: "/restaurant2.jpg",
    alt: "Legendary Restaurants",
    title: "LEGENDARY RESTAURANTS",
    desc: "A gathering of iconic restaurants, where authenticity meets extraordinary dining."
  },
  {
    src: "/dish-1.jpg",
    alt: "Signature Recipes",
    title: "SIGNATURE RECIPES",
    desc: "Each dish tells a story of passion, perfected through years of culinary mastery."
  },
  {
    src: "/dish-2.jpg",
    alt: "Gourmet Delights",
    title: "GOURMET DELIGHTS",
    desc: "A harmonious fusion of classic recipes and modern creativity for a truly unique taste."
  },
  {
    src: "/ambience.jpg",
    alt: "Exclusive Ambiance",
    title: "EXCLUSIVE AMBIANCE",
    desc: "Our venues provide an exclusive ambiance, perfect for memorable dining and celebrations."
  }
];

const restaurantData = [
  {
    name: "Rajwada",
    description: "Rajwada takes guests on a regal culinary journey through Rajasthan, showcasing rich flavors, age-old recipes, and royal hospitality.",
    location:{
      name: "Mumbai",
      image:"/rajwada.jpg"
    },
    dish:{
      name:"Dal Baati Fondue",
      line:"A royal Rajasthani delicacy that embodies the grandeur of desert cuisine — golden, ghee-kissed baatis paired with a richly spiced lentil curry and sweet, nutty churma.",
      image:"/dal-baati.jpg"
    },
  },
  {
    name:"Aurora",
    description:"Aurora offers a refined dining experience inspired by Europe’s culinary capitals, with a focus on seasonal produce and artistic plating.",
    location:{
      name:"Bangalore",
      image:"/aurora.jpg"
    }, 
    dish:{
      name:"Truffle Risotto",
      line:"A luxurious Italian classic where creamy Arborio rice meets the earthy aroma of truffles, finished with aged Parmesan.",
      image:"/ravioli.jpg",
    },
  },
  {
    name:"Safforan Court",
    description:"Saffron Court celebrates the rich heritage of Mughlai cuisine, bringing timeless recipes to life with royal finesse.",
    location:{
      name:"Pune",
      image:"/safforan-court.jpg"
    }, 
    dish:{
      name:"Cauliflower Verde",
      line:"Tender roasted cauliflower steaks drizzled with a vibrant herby green sauce for a fresh, elegant finish.",
      image:"/cauliflower.jpg",
    },
  },
  {
    name:"Azura",
    description:"Azura takes guests on a Mediterranean voyage, serving vibrant, fresh flavors from the coasts of Greece, Italy, and Spain.",
    location:{
      name:"Gurugram",
      image:"/azura.jpg"
    }, 
    dish:{
      name:"Grilled Halloumi with Olive Tapenade",
      line:"Golden-grilled halloumi cheese paired with a vibrant olive tapenade, bringing the sun-kissed flavors of the Mediterranean straight to your table.",
      image:"/halloumi.jpg",
    },
  },
  {
    name:"Indigo Bay",
    description:"Indigo Bay specializes in coastal delicacies, blending tropical spices with the freshest catch of the day.",
    location:{
      name:"Chandigarh",
      image:"/indigo-bay.jpg"
    }, 
    dish:{
      name:"Savanna Stew",
      line:"A hearty African-inspired peanut stew, slow-cooked with vegetables and warm spices for a rich, comforting flavor.",
      image:"/savanna.jpg",
    },
  },
  {
    name:"Verdure",
    description:"Verdure is a haven for fresh, wholesome dining, highlighting organic vegetables and globally inspired vegetarian fare.",
    location:{
      name:"Jaipur",
      image:"/verdure.jpg"
    }, 
    dish:{
      name:"Wild Mushroom Ravioli",
      line:"Delicate pasta parcels filled with earthy wild mushrooms, bathed in a silky cream sauce that celebrates the harmony of rustic charm and refined elegance.",
      image:"/ravioli.jpg",
    },
  },
];

const Dining = () =>{

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;
  const [animating, setAnimating] = useState(false);
  const totalImages = images.length;
  const [direction, setDirection] = useState("");
 const goPrev = () => {
    triggerAnimation("left");
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - visibleCount : prevIndex - 1
    );
  };
  const triggerAnimation = (dir) => {
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => setAnimating(false), 500); // match CSS duration
  };
  const goNext = () => {
    triggerAnimation("right");
    setStartIndex((prevIndex) =>
      prevIndex + visibleCount >= totalImages ? 0 : prevIndex + 1
    );
  };

  const visibleImages = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleImages.push(images[(startIndex + i) % totalImages]);
  }

    return(

      <>
      <Header/>
        <div className="dining-header">
           <div className="dining-left" style={{ backgroundImage: `url('/dining-header.jpg')` }}></div>
           <div className="dining-right">
              <h1 className="dining-title"> Signature Dining Experience</h1>
              <div className="dining-divider"></div>
              <p className="dining-intro">
                Indulge in an extraordinary culinary journey with exquisite flavors, crafted by master chefs in a sophisticated ambiance. Our dining
                experience combines world-class service and artistry for unforgettable moments.
              </p>
            </div>    
        </div>  

        {/* Section 2 */}
        <div className="container-fluid section-container d-flex flex-column align-items-center">
          <div style={{textAlign: "center", marginBottom:"32px", marginTop: '10px', width:"100%"}}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 600, color: "#4f4130", letterSpacing: "0.05em", margin: 0, padding: "0 1rem"}}>
        FINE DINING AT HERITAGE RESTAURANTS
      </h2>
      <div style={{ margin:"18px auto 0 auto", height: "2.5px", width:"85px", background: "#928267", opacity: 0.38, minWidth: "60px", maxWidth: "95px", borderRadius: "2px"}}/>

       <p style={{ fontFamily: "'Source Sans Pro', Arial, sans-serif", fontSize: "1.18rem", color: "#606462", fontWeight: 400, lineHeight: 1.6, opacity: 0.9, margin: "16px auto 0 auto", maxWidth: "700px", textAlign:"center"}}><i>
      Embark on a journey of exquisite experiences for the discerning connoisseur, seamlessly woven together with impeccable service, sophisticated ambience and masterful culinary artistry.Embark on a journey of refined indulgence, where impeccable service, sophisticated ambience, and masterful culinary artistry come together to delight the discerning connoisseur.
    </i></p>
          </div>

           <div className={`card-row ${animating ? `slide-${direction}` : ""}`}>
            <button className="arrow-btn left" aria-label="Previous" onClick={goPrev}>
              &lt;
            </button>
           {visibleImages.map((img, idx) => (
            <div key={startIndex + idx} className=" col-12 sol-sm-6 col-lg-3 col-md-4 col-sm-12 col-lg-3 px-3 d-flex" style={{ maxWidth: "320px" }}>
              <div className="card custom-card">
                <img src={img.src} alt={img.alt} className="image-round" />
                <div className="card-body px-1">
                  <div className="card-title">{img.title}</div>
                  <div className="card-desc">{img.desc}</div>
                </div>
              </div>
            </div>
          ))}
          <button className="arrow-btn right" aria-label="Next" onClick={goNext}>&gt;</button>
           </div>
        </div>
      

      {/* Section 3 */}

      <div className="container my-4">
        <div className="row mb-4">
          <div className="col-lg-6">
            <h2 className="mb-4" style={{
          fontSize: "2.8rem",
          fontWeight: 700,
          letterSpacing: "1px",
          fontFamily: "Playfair Display, Arial, sans-serif",
          color: "#24282A",
        }}> OUR LEGENDARY<br/>RESTAURANT BRANDS</h2>
          </div>
          <div className="col-lg-6"  style={{
          fontSize: "2.8rem",
          fontWeight: 700,
          letterSpacing: "1px",
          fontFamily: "Montserrat, Arial, sans-serif",
          color: "#24282A",
        }}>
            <p  style={{
          fontSize: "1.2rem",
          fontFamily: "Georgia, Times New Roman, serif",
          fontStyle: "italic",
          color: "#212529",
          marginTop: "1.2rem",
        }}><i>Step into our world of culinary mastery, where each flavor is a note in a harmonious symphony, the ambiance drapes you in refined elegance, and our gracious service ensures every moment feels royally indulgent.</i></p>
          </div>
        </div>
        <div className="row">
          {restaurantData.map((rest, idx)=>(
            <div className="col-md-6 mb-4" key={idx}>
              <div className="card h-100 shadow-sm">
                <div className="card-header bg-white border-bottom-0">
                  <h4 className="mb-2">{rest.name}</h4>
                  <p className="text-muted"> {rest.description}</p>
                </div>
                <div className="card-body">
                  <div className="row"> 
                    {/* Location */}
                    <div className="col-6">
                      <div className="mb-2" style={{ fontSize: "1.09rem", fontWeight: "500", color: "#212529"}}>
                        <strong> Location: {rest.location.name}</strong>
                      </div>  
                      <img src= {rest.location.image}
                      alt={rest.location.name} className="img-fluid rounded"/>
                     </div>
                     {/* Dishes */}
                     <div className="col-6">
                      <div className="mb-2" style={{ fontSize: "1.09rem", fontWeight: "500", color: "#212529"}}>
                        <strong> Signature Dish: {rest.dish.name}</strong>
                      </div>
                      <div className="mb-2 text-secondary" style={{fontSize: "1rem", fontFamily:"Georgia, Times New Roman, serif", color:"#6c757d"}}>
                         {rest.dish.line}
                      </div>
                      <img src={rest.dish.image}
                      alt={rest.dish.name}
                      className="img-fluid rounded"/>
                     </div>
                  </div>
                </div>
                 <div className="card-footer bg-white border-top-0">
                  <a href="#" className="text-decoration-none text-warning fw-semibold" style={{ fontSize: "1rem" }}>MORE &gt;</a>
                 </div>
              </div>  
            </div>
          ))}
        </div>
      </div>

      {/* Section 4 */}

      <div className="container gift-section">
      {/* Section Heading */}
      <div className="row justify-content-center mb-5 ">
        <div className="col-12 text-center">
          <div className="gift-section__heading-wrapper">
            <div className="gift-section__divider" />
            <h1 className="gift-section__title">Culinary Treasures to Cherish</h1>
            <div className="gift-section__divider" />
          </div>
        </div>
      </div>

      {/* Content Row */}
      <div className="row gift-section__content-row justify-content-center align-items-center flex-wrap">
        <div className="col-12 col-md-6 d-flex justify-content-center" style={{padding: "0 1rem"}}>
          <div className="gift-section__image-wrapper">
            <img
              className="gift-section__image"
              src="/hampers.png"
              alt="Premium Gift Hamper"
              style={{}}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center text-center gift-section__text-col">
          <div className="gift-section__subheading-wrapper">
            <div className="gift-section__subdivider" />
            <h2 className="gift-section__subheading">HAMPERS</h2>
          </div>

          <p className="gift-section__description">
            Immerse yourself in our exclusive collection of meticulously curated hampers, each thoughtfully designed to transform every occasion into a celebration of refined taste. Showcasing exceptional craftsmanship, an array of sumptuous delicacies, and a presentation that exudes timeless elegance, these treasures are more than gifts—they are unforgettable experiences to be cherished.
          </p>

          <a href="#" className="gift-section__link">
            DISCOVER Our HAMPERS &rsaquo;
          </a>
        </div>
      </div>
    </div>

    {/* Section 5 */}

    <div className="container my-5 celebration-section">
  <div className="row g-0 align-items-center">
    {/* LEFT: TEXT BLOCK */}
    <div className="col-12 col-lg-6 px-4 py-5 d-flex flex-column justify-content-center">
      <div className="d-flex align-items-center mb-3">
        <div
          className="celebration-divider"
          style={{ borderBottom: "2px solid #b6ab8f", opacity: "0.5", width: "60px", marginRight: "1.5rem" }}
        />
        <h2
          className="celebration-title"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "2.6rem",
            fontWeight: 600,
            color: "#6c5944",
            margin: 0
          }}
        >
          CELEBRATION PACKAGES
        </h2>
      </div>
      <p
        style={{
          fontFamily: "'Source Sans Pro', Arial, sans-serif",
          color: "#7a6a52",
          fontSize: "1.18rem",
          marginTop: "2rem",
          marginBottom: "1.5rem",
          lineHeight: "1.65",
          maxWidth: "80%",
          alignContent: "center"
        }}
      >
        Make every occasion unforgettable with our bespoke celebration packages. Elegant venues, gourmet dining, and thoughtful touches ensure your milestones become cherished memories. Whether it's an intimate dinner, festive gathering, or grand event, our service delivers perfection.
      </p>
      <a
        href="#"
        style={{
          color: "#b6a46e",
          fontFamily: "'Montserrat', Arial, sans-serif",
          fontWeight: 600,
          fontSize: "1.08rem",
          textDecoration: "underline",
          letterSpacing: "0.04em"
        }}
      >
        LEARN MORE ABOUT CELEBRATION PACKAGES &rsaquo;
      </a>
    </div>
    {/* RIGHT: IMAGE BLOCK */}
    <div className="col-12 col-lg-6 px-0 d-flex justify-content-center align-items-center">
      <div
        style={{
          width: "100%",
          maxWidth: "550px",
          borderRadius: "2rem",
          overflow: "hidden",
          boxShadow: "0 4px 24px 0 rgba(80,80,80,0.09)",
          background: "#fff",
        }}
      >
        <img
          src="package.png"
          alt="Celebration Package"
          style={{
            width: "100%",
            height: "450px",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    </div>
  </div>
</div>
<Footer/>
      </>
    );
}

export default Dining;