import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { site } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }) => isActive ? "nav-link active" : "nav-link";

  return (
    <header className="navbar">
      <div className="nav-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)} aria-label="Danthi Homestay home">
          <span className="brand-mark">
            <img className="brand-logo" src="/images/danthi-logo.jpeg" alt="Danthi Homestay" />
          </span>
          <span className="brand-copy">
            <strong>Danthi</strong>
            <small>Homestay · Kaginahare</small>
          </span>
        </NavLink>

        <button
          className="menu-btn"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={open ? "menu-line top open" : "menu-line top"}></span>
          <span className={open ? "menu-line middle open" : "menu-line middle"}></span>
          <span className={open ? "menu-line bottom open" : "menu-line bottom"}></span>
        </button>

        <nav className={open ? "nav-links open" : "nav-links"}>
          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/gallery" className={linkClass} onClick={() => setOpen(false)}>Gallery</NavLink>
          <NavLink to="/nearby-places" className={linkClass} onClick={() => setOpen(false)}>Nearby Places</NavLink>
          <a
            className="nav-cta"
            href={`https://wa.me/${site.phone}?text=${encodeURIComponent(site.whatsappMessage)}`}
            onClick={() => setOpen(false)}
          >
            <span className="nav-cta-dot"></span>
            Enquire on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
