import React from "react";
import { site } from "../data/site";

export default function PlaceCard({ place }) {
  const directions =
    `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(site.origin)}&destination=${encodeURIComponent(place.name + ", Karnataka")}&travelmode=driving`;

  return (
    <article className="place-card">
      <div className="place-image-wrap">
        <img src={place.image} alt={place.name} loading="lazy" />
        <span className="place-category">{place.category}</span>
      </div>
      <div className="place-body">
        <div className="place-title-row">
          <h3>{place.name}</h3>
          <span className="distance">{place.distance}</span>
        </div>
        <p>{place.description}</p>
        <div className="place-meta">🚗 {place.time}</div>
        <div className="place-actions">
          <a href={directions} target="_blank" rel="noreferrer" className="btn btn-small btn-primary">
            Get Directions
          </a>
          <a href={place.maps} target="_blank" rel="noreferrer" className="text-link">
            View on Maps ↗
          </a>
        </div>
      </div>
      <div className="image-reference">Reference image · replace with Danthi/original licensed photo for production</div>
    </article>
  );
}