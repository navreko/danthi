import React from "react";
import { amenities } from "../data/site";

export default function Amenities() {
  return (
    <section className="amenities-section">
<div className="amenities-heading">
            <span className="section-eyebrow">Comfort & Experience</span>

        <h2>Everything You Need for a Relaxing Stay</h2>

        <p>
          Enjoy the peaceful surroundings of Danthi Homestay with
          essential comforts and food options for a memorable getaway.
        </p>
      </div>

      <div className="amenities-grid">
        {amenities.map((amenity) => (
          <div className="amenity-card" key={amenity.title}>
            <div className="amenity-icon">
              {amenity.icon}
            </div>

            <h3>{amenity.title}</h3>

            <p>{amenity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}