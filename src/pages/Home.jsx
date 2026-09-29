import React from "react";
import { Link } from "react-router-dom";
import { galleryImages, places, site } from "../data/site";
import PlaceCard from "../components/PlaceCard";
import Amenities from "../components/Amenities";
export default function Home() {
  return (
    <>
      <section className="hero">
        <img
          src={galleryImages[0].src}
          alt={galleryImages[0].alt}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow">WELCOME TO DANTHI</span>
          <h1>Stay close to<br /><em>the green.</em></h1>
          <p>{site.tagline}. Wake up to misty hills, forest air and quiet mornings.</p>
          <div className="hero-actions">
            <a className="btn btn-light" href={`https://wa.me/${site.phone}?text=${encodeURIComponent(site.whatsappMessage)}`} target="_blank" rel="noreferrer">
              Enquire on WhatsApp
            </a>
            <Link className="btn btn-outline-light" to="/nearby-places">Explore nearby</Link>
          </div>
        </div>
        <div className="hero-location">📍 {site.location}</div>
      </section>

      <section className="intro section">
        <div className="intro-copy">
          <span className="eyebrow green">A LITTLE ESCAPE</span>
          <h2>Where the Western Ghats become your backyard.</h2>
          <p>
            Danthi Homestay is imagined as a relaxed base for travellers who want
            greenery, fresh air and easy access to the scenic Kaginahare and Bisle region.
          </p>
          <p>
            Spend the morning exploring a viewpoint, return for a slow lunch, and let
            the evening settle into the hills.
          </p>
          <Link className="text-link large" to="/gallery">See the gallery →</Link>
        </div>
        <div className="intro-stats">
          <div><strong>🌿</strong><span>Green surroundings</span></div>
          <div><strong>🏔️</strong><span>Western Ghats views</span></div>
          <div><strong>🥾</strong><span>Nature & trekking</span></div>
          <div><strong>💬</strong><span>Easy WhatsApp enquiry</span></div>
        </div>
      </section>
        <Amenities />
      <section className="photo-strip">
        {galleryImages.slice(0, 4).map((image) => (
          <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />
        ))}
      </section>

      <section className="section nearby-preview">
        <div className="section-heading">
<div className="nearby-heading">
  <span className="eyebrow green">DISCOVER THE REGION</span>
  <h2>Places worth stepping out for.</h2>
</div>
          <Link to="/nearby-places" className="text-link">See all places →</Link>
        </div>
        <div className="place-grid">
          {places.slice(0, 3).map((place) => <PlaceCard key={place.name} place={place} />)}
        </div>
      </section>

      <section className="cta-band">
        <div>
          <span className="eyebrow">PLAN YOUR STAY</span>
          <h2>Ready for a little more green?</h2>
          <p>Message Danthi Homestay directly on WhatsApp for availability and booking details.</p>
        </div>
        <a className="btn btn-light" href={`https://wa.me/${site.phone}?text=${encodeURIComponent(site.whatsappMessage)}`} target="_blank" rel="noreferrer">
          WhatsApp {site.displayPhone}
        </a>
      </section>
    </>
  );
}