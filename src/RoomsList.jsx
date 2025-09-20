import React from "react";
import { Link } from "react-router-dom";

function RoomsList({ rooms, currentSlug }) {
  if (!rooms || rooms.length === 0) {
    return <p className="text-center">No rooms available</p>;
  }

  // Remove the current room from "Explore Other Rooms"
  const filteredRooms = rooms.filter((r) => r.id !== currentSlug);

  // Split into chunks of 3
  const chunkedRooms = [];
  for (let i = 0; i < filteredRooms.length; i += 3) {
    chunkedRooms.push(filteredRooms.slice(i, i + 3));
  }

  return (
    <div className="rooms-list mt-5">
      <h2 className="text-center mb-4">Explore Other Rooms</h2>

      <div id="roomsCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {chunkedRooms.map((chunk, idx) => (
            <div
              className={`carousel-item ${idx === 0 ? "active" : ""}`}
              key={idx}
            >
              <div className="d-flex justify-content-center gap-4">
                {chunk.map((room) => (
                  <div className="card room-card" style={{ width: "20rem" }} key={room.id}>
                    <img
                      src={room.images[0]}
                      className="card-img-top"
                      alt={room.name}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{room.name}</h5>
                      <p className="card-text">{room.overview.slice(0, 80)}...</p>
                      <Link to={`/rooms/${room.id}`} className="btn btn-outline-primary">
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

       {/* Controls */}
<button
  className="carousel-control-prev custom-arrow"
  type="button"
  data-bs-target="#roomsCarousel"
  data-bs-slide="prev"
>
  <span className="carousel-control-prev-icon"></span>
</button>
<button
  className="carousel-control-next custom-arrow"
  type="button"
  data-bs-target="#roomsCarousel"
  data-bs-slide="next"
>
  <span className="carousel-control-next-icon" ></span>
</button>

      </div>
    </div>
  );
}

export default RoomsList;
