// src/pages/RoomDetails.jsx
import { useParams } from "react-router-dom";
import rooms from "./data/rooms";
import { useState, useEffect } from "react";
import RoomsList from "./RoomsList";
import './App2.css'
import RoomHeader from "./RoomHeader";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faWifi, faSnowflake, faTv, faLock, faPumpSoap, faBroom,
  faMugHot, faGlassMartiniAlt, faWind, faPhone, faShoePrints,
  faTshirt, faBanSmoking, faBell, faClock, faShuttleVan,
  faNewspaper, faSatelliteDish, faConciergeBell
} from "@fortawesome/free-solid-svg-icons";

export default function RoomDetails() {
  const { slug } = useParams();
  const room = rooms.find((r) => r.id === slug);

  const [mainImage, setMainImage] = useState(room?.images[0]);

   useEffect(() => {
    window.scrollTo(0, 0);
    if (room) setMainImage(room.images[0]);
  }, [slug, room]);

  if (!room) {
    return (
      <div className="container my-5">
        <h2>Room not found</h2>
      </div>
    );
  }

  const amenityIcons = {
  "High Speed WiFi access": faWifi,
  "Air Conditioner": faSnowflake,
  "LCD TV": faTv,
  "Safe Deposit Locker (Complimentary)": faLock,
  "Toiletries": faPumpSoap,
  "Daily Housekeeping": faBroom,
  "Coffee/Tea Maker": faMugHot,
  "Mini Bar (Extra Cost)": faGlassMartiniAlt,
  "Hair Dryer": faWind,
  "Telephone (with IDD)": faPhone,
  "Slippers": faShoePrints,
  "Iron and Ironing Board": faTshirt,
  "Non-Smoking Rooms": faBanSmoking,
  "Alarm Clock | Wake up call": faClock,
  "Shoe Shine Service (On Request)": faConciergeBell,
  "Airport Pick up & Drop (Complimentary)": faShuttleVan,
  "Satellite / Cable TV": faSatelliteDish,
  "Newspaper (Upon Request)": faNewspaper,
  "Room Services": faBell
};


  // ✅ unique IDs so Bootstrap can target the right elements
  // const carouselId = `carousel-${room.id}`;
  // const overviewId = `overview-${room.id}`;
  // const amenitiesId = `amenities-${room.id}`;
  // const overviewTabId = `overview-tab-${room.id}`;
  // const amenitiesTabId = `amenities-tab-${room.id}`;

  return (
    <div className="room-page">
    <RoomHeader title={room.name} tagline="Experience heritage luxury and modern comfort" bgImage={room.cardImage} />
    <div className="room-details container my-5">
     

     {/* Image + Booking Form in one row */}
<div className="row mb-4 align-items-start">
  {/* Left: Main Image + Thumbnails */}
  <div className="col-md-8 text-center mb-4">
    <img 
      src={mainImage} 
      alt="Main Room" 
      className="main-img rounded shadow uniform-img" 
    />
    <div className="thumbnail-row mt-3 d-flex justify-content-center flex-wrap">
      {room.images.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={`thumb-${idx}`}
          className={`thumbnail uniform-thumb ${mainImage === src ? "active" : ""}`}
          onClick={() => setMainImage(src)}
        />
      ))}
    </div>
  </div>

  {/* Right: Booking Form */}
  <div className="col-md-4">
    <form className="booking-form p-4 rounded shadow-sm">
      <h5 className="mb-3 text-center">Book This Room</h5>
      <div className="mb-3">
        <label className="form-label">Check-in</label>
        <input type="date" className="form-control" required />
      </div>
      <div className="mb-3">
        <label className="form-label">Check-out</label>
        <input type="date" className="form-control" required />
      </div>
      <button type="submit" className="btn btn-primary w-100 mb-2">
        Check Availability
      </button>
      <button type="button" className="btn btn-success w-100">
        Book Now
      </button>
    </form>
  </div>
</div>


      {/* Features */}
      <div className="row mb-4">
        {room.features.map((f, idx) => (
          <div className="col-6 col-md-3 mb-3" key={idx}>
            <div className="feature-box p-3 rounded shadow-sm text-center">
              <strong>{f.label}</strong>
              <br />
              {f.value}
            </div>
          </div>
        ))}
      </div>

      {/*  Tabs */}
     <ul className="nav nav-tabs custom-tabs mb-3">
        <li className="nav-item">
          <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#overview">Overview</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" data-bs-toggle="tab" data-bs-target="#amenities">Amenities</button>
        </li>
      </ul>

      <div className="tab-content p-3 rounded shadow-sm bg-light">
        <div className="tab-pane fade show active" id="overview">
          <p>{room.overview}</p>
          <h5>Major Facilities</h5>
          <ul>
            {room.majorFacilities.map((f, idx) => <li key={idx}>{f}</li>)}
          </ul>
        </div>
        <div className="tab-pane fade" id="amenities">
  <div className="row row-cols-1 row-cols-md-2">
    {room.amenities.map((a, idx) => {
      const iconClass = amenityIcons[a] || "bi-check-circle"; // fallback
      return (
        <div className="col mb-2 d-flex align-items-center" key={idx}>
         <FontAwesomeIcon 
  icon={amenityIcons[a] || faConciergeBell} 
  className="me-2" 
  style={{ color: "#000000ff", fontSize: "1.2rem" }} 
/>
          {a}
        </div>
      );
    })}
  </div>
</div>

      </div>

      <RoomsList rooms={rooms} currentSlug={slug} />

    </div>
    <Footer />
    </div>
  );
}
