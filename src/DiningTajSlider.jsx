import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DiningSlider.css";

const tajSlides = [
  { img: "/dining1.jpg", caption: "Celebrated Chefs" },
  { img: "/dining2.jpg", caption: "Royal Ambience" },
  { img: "/dining3.jpg", caption: "Signature Recipes" },
  { img: "/dining4.jpg", caption: "Gourmet Plating" },
  { img: "/dining5.jpg", caption: "Beyond the Ordinary" }
];

const settings = {
  slidesToShow: 3, 
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2200,
  speed: 700,
  infinite: true,
  dots: false,
  arrows: true,
  cssEase: "ease-in-out",
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } }
  ]
};

 function DiningTajSlider() {
  return (
    <div className="taj-slider-section">
      {/* Header with lines, tall, elegant, paragraph */}
  <div style={{ paddingTop: "3.2rem", paddingBottom: "2.4rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center"}}>
  
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.2rem", marginBottom: "1.7rem", width: "100%"}}>
      <span style={{flex: 1,height: "2px",background: "#928267",opacity: 0.38,minWidth: "60px",maxWidth: "95px",borderRadius: "2px"}}/>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 600, color: "#4f4130", letterSpacing: "0.05em", margin: 0, padding: "0 1rem"}}>
        FINE DINING AT TAJ RESTAURANTS
      </h2>
      <span style={{ flex: 1, height: "2px", background: "#928267", opacity: 0.38, minWidth: "60px", maxWidth: "95px", borderRadius: "2px"}}/>
    </div>
    <p style={{ fontFamily: "'Source Sans Pro', Arial, sans-serif", fontSize: "1.18rem", color: "#606462", fontWeight: 400, lineHeight: 1.6, opacity: 0.9, margin: "0 auto", maxWidth: "700px"}}
>
      Embark on a journey of exquisite experiences for the discerning connoisseur,
      seamlessly woven together with impeccable service, sophisticated ambience and
      masterful culinary artistry.
    </p>
  </div>
      <Slider {...settings} style={{margin: "0 -2px"}}>
        {tajSlides.map((slide, idx) => (
          <div className="taj-slide" style={{padding: "0 4px !important;"}} key={idx}>
            <div className="taj-image-frame">
              <img src={slide.img} className="taj-img" alt={slide.caption} />
              <div className="taj-caption">{slide.caption}</div>
            </div>
          </div>
        ))} 
      </Slider>
    </div>
  );
}


export default DiningTajSlider;