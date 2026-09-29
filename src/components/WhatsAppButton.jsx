import React from "react";
import { site } from "../data/site";

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${site.phone}?text=${encodeURIComponent(site.whatsappMessage)}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Danthi Homestay on WhatsApp"
      title="Chat on WhatsApp"
    >
      <span className="wa-icon">◔</span>
      <span className="wa-text">Chat on WhatsApp</span>
    </a>
  );
}