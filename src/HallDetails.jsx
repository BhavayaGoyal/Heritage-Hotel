import { useParams } from "react-router-dom";
import hallsData from "./data/halls.js";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import RoomHeader from "./RoomHeader";
import "./App2.css";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import VideocamIcon from "@mui/icons-material/Videocam";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import BuildIcon from "@mui/icons-material/Build"; // for IT Support
import DescriptionIcon from "@mui/icons-material/Description"; // for Stationery
import AccessibleIcon from "@mui/icons-material/Accessible"; // for Wheelchair
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

// ✅ Material UI Icons
import WifiIcon from "@mui/icons-material/Wifi";
import WeekendIcon from "@mui/icons-material/Weekend"; // sofa-like
import TvIcon from "@mui/icons-material/Tv";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import PresentToAllIcon from "@mui/icons-material/PresentToAll";
import AcUnitIcon from "@mui/icons-material/AcUnit"; // Climate Control
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import HandymanIcon from "@mui/icons-material/Handyman"; 
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects"; // for chandeliers
import CelebrationIcon from "@mui/icons-material/Celebration";   // for dance floor
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy"; // for stage
import KitchenIcon from "@mui/icons-material/Kitchen";
import PeopleIcon from "@mui/icons-material/People";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink"; // Water Bottles
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront"; // Video conferencing
import StarIcon from "@mui/icons-material/Star";
// ✅ Overview icons mapping
const overviewIcons = {
  Wifi: WifiIcon,
  Weekend: WeekendIcon,
  Tv: TvIcon,
  Restaurant: RestaurantIcon,
  WbSunny: WbSunnyIcon,
  PresentToAll: PresentToAllIcon,
};

// ✅ Amenities icons mapping
const amenityIcons = {
  "WiFi": WifiIcon,
  "Dedicated WiFi": WifiIcon,   // ✅ extra key
  "Wi-Fi": WifiIcon,            // ✅ extra key
  "wifi": WifiIcon, 
  "Catering Service": RestaurantIcon,
  "Flexible Layout": EventSeatIcon,
  "4K Video Conferencing": VideoCameraFrontIcon,
  "Climate Control": AcUnitIcon,
  "Premium Sound System": MusicNoteIcon,
  "Bar Service": LocalBarIcon,
  "Mineral Water Bottles": LocalDrinkIcon,
  "On-demand Tech Support": HandymanIcon,
  "Multiple Entrances": PeopleIcon,
    "Private Restroom Access": MeetingRoomIcon,
  "High-Definition Recording": VideocamIcon,
  "Complimentary Parking": LocalParkingIcon,
  "Built-in Projector": PresentToAllIcon,
  "Executive Desk Seating": WorkspacePremiumIcon,
  "On-Site IT Support": BuildIcon,
  "Stationery & Writing Pads": DescriptionIcon,
  "Wheelchair Accessibility": AccessibleIcon,
    "Crystal Chandeliers": EmojiObjectsIcon,
  "Dance Floor": CelebrationIcon,
  "Professional Stage": TheaterComedyIcon,
  "Full Catering Kitchen": KitchenIcon,
  "VIP Lounge Access": StarIcon,
};

export default function HallDetails() {
  const { slug } = useParams();

  // Flatten hallsData
  const allHalls = [
    ...hallsData.boardrooms,
    ...hallsData.ballrooms,
    ...hallsData.banquetHalls,
    ...hallsData.largeHalls,
  ];

  const hall = allHalls.find((h) => h.slug === slug);

  const [mainImage, setMainImage] = useState(hall?.images[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (hall) setMainImage(hall.images[0]);
  }, [slug, hall]);

  if (!hall) {
    return (
      <div className="container my-5">
        <h2>Hall not found</h2>
      </div>
    );
  }

  return (
    <div className="hall-page">
      {/* Hero Banner */}
      <RoomHeader
        title={hall.name}
        tagline="Perfect venue for unforgettable gatherings"
        bgImage={hall.images[0]}
      />

      <div className="hall-details container my-5">
        {/* Image + Booking Form */}
        <div className="row mb-4 align-items-start">
          {/* Left: Main Image + Thumbnails */}
          <div className="col-md-8 text-center mb-4">
            <img
              src={mainImage}
              alt="Main Hall"
              className="main-img rounded shadow uniform-img"
              style={{ height: "530px", width: "90%" }}
            />
            <div className="thumbnail-row mt-3 d-flex justify-content-center flex-wrap">
              {hall.images.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`thumb-${idx}`}
                  className={`thumbnail uniform-thumb ${
                    mainImage === src ? "active" : ""
                  }`}
                  onClick={() => setMainImage(src)}
                />
              ))}
            </div>
          </div>

          {/* Right: Booking Form */}
          <div className="col-md-4">
            <form className="booking-form p-4 rounded shadow-sm">
              <h5 className="mb-3 text-center">Book This Hall</h5>
              <div className="mb-3">
                <label className="form-label">Event Date</label>
                <input type="date" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Guests</label>
                <input
                  type="number"
                  className="form-control"
                  min="1"
                  max={hall.capacity}
                  required
                />
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

        {/* Hall Features */}
        <div className="row mb-4">
          <div className="col-6 col-md-3 mb-3">
            <div className="feature-box p-3 rounded shadow-sm text-center">
              <strong>Capacity</strong>
              <br />
              {hall.capacity} Guests
            </div>
          </div>
          <div className="col-6 col-md-3 mb-3">
            <div className="feature-box p-3 rounded shadow-sm text-center">
              <strong>Size</strong>
              <br />
              {hall.size}
            </div>
          </div>
        </div>

        {/* Tabs for Overview & Amenities */}
        <ul className="nav nav-tabs custom-tabs mb-3">
          <li className="nav-item">
            <button
              className="nav-link active"
              data-bs-toggle="tab"
              data-bs-target="#overview"
            >
              Overview
            </button>
          </li>
          <li className="nav-item">
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#amenities"
            >
              Amenities
            </button>
          </li>
        </ul>

        <div className="tab-content p-3 rounded shadow-sm bg-light">
          {/* Overview Tab */}
          <div className="tab-pane fade show active" id="overview">
            <p>{hall.description}</p>

            {/* Overview Highlights */}
            <div className="row mt-3">
              {hall.overview &&
                hall.overview.map((item, index) => {
                  const IconComponent = overviewIcons[item.icon];
                  return (
                    <div
                      key={index}
                      className="col-md-6 mb-3 d-flex align-items-center"
                    >
                      {IconComponent && (
                        <IconComponent
                          className="me-2"
                          style={{ color: "#8B4513", fontSize: "1.6rem" }}
                        />
                      )}
                      <span>{item.text}</span>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Amenities Tab */}
          <div className="tab-pane fade" id="amenities">
            <div className="row row-cols-1 row-cols-md-2">
              {hall.features.map((f, idx) => {
                const IconComponent = amenityIcons[f];
                return (
                  <div
                    className="col mb-2 d-flex align-items-center"
                    key={idx}
                  >
                    {IconComponent && (
                      <IconComponent
                        className="me-2"
                        style={{ color: "#8B4513", fontSize: "1.2rem" }}
                      />
                    )}
                    {f}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
