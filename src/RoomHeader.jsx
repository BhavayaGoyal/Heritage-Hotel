import React from "react";
import "./App2.css";

/**
 * Props:
 *  - title (string)  -> main room name
 *  - tagline (string) -> small subtitle (optional)
 *  - bgImage (string) -> optional URL for subtle background image (optional)
 */
export default function RoomHeader({ title, tagline = "Luxury & comfort awaits", bgImage = "" }) {
  const bgStyle = bgImage ? { backgroundImage: `linear-gradient(180deg, rgba(253,246,240,0.95), rgba(253,246,240,0.9)), url(${bgImage})` } : {};
  return (
    <header className="fancy-header" style={bgStyle} aria-labelledby="room-title">
      <div className="fancy-inner">
        <div className="divider">
          <hr className="line" />
          <span className="ornament" aria-hidden="true">
            {/* Inline SVG ornament — elegant symmetric flourish */}
            <svg width="64" height="18" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
              <path d="M8 20 C 28 10, 52 10, 72 20 S 116 30, 152 20" stroke="#d4af37" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.95"/>
              <circle cx="80" cy="20" r="3.6" fill="#d4af37" />
            </svg>
          </span>
          <hr className="line" />
        </div>

        <h1 id="room-title" className="fancy-title">{title}</h1>

        <p className="fancy-tagline">{tagline}</p>

        <div className="divider divider-bottom" aria-hidden="true">
          <hr className="line" />
          <span className="ornament small">
            {/* smaller ornamental SVG variant */}
            <svg width="36" height="12" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12 C26 6, 54 6, 70 12 S 92 18, 94 12" stroke="#d4af37" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.95"/>
            </svg>
          </span>
          <hr className="line" />
        </div>
      </div>
    </header>
  );
}
