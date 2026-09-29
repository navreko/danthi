import React from "react";
import { Link } from "react-router-dom";
import { site } from "../data/site";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${site.phone}?text=${encodeURIComponent(
    site.whatsappMessage
  )}`;

  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Brand */}
        <div className="footer-brand-column">
          <Link to="/" className="footer-logo-link" aria-label="Danthi Homestay home">
            <img
              src="/images/danthi-logo.jpeg"
              alt="Danthi Homestay"
              className="footer-logo"
            />
          </Link>

          <p>
            A peaceful green escape near Kaginahare, Sakleshpur,
            surrounded by the beauty of the Western Ghats.
          </p>
        </div>

        {/* Explore */}
        <div className="footer-column">
          <h4>Explore</h4>

          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/nearby-places">Nearby Places</Link>
        </div>

        {/* Booking */}
        <div className="footer-column footer-booking">
          <h4>Book Your Stay</h4>

          <p>
            Planning a peaceful getaway?
            <br />
            Reach us directly on WhatsApp.
          </p>

          <a
            href={whatsappUrl}
            className="footer-whatsapp"
            target="_blank"
            rel="noreferrer"
          >
            <span className="footer-whatsapp-icon">◉</span>
            Enquire on WhatsApp
          </a>

          <a
            href={`tel:+${site.phone}`}
            className="footer-phone"
          >
            {site.displayPhone}
          </a>
        </div>

      </div>

      {/* Location */}
      <div className="footer-location">
        <span>📍</span>
        <span>{site.location}</span>

        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          Open location
        </a>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Danthi Homestay
        </span>

        <span>
          Where the Jungle Holds You Gently.
        </span>
      </div>
    </footer>
  );
}