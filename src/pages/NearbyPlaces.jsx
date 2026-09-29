import React, { useMemo, useState } from "react";
import PlaceCard from "../components/PlaceCard";
import { places, site } from "../data/site";

const categories = ["All", ...new Set(places.map((p) => p.category))];

export default function NearbyPlaces() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(
    () => active === "All" ? places : places.filter((p) => p.category === active),
    [active]
  );

  return (
    <>
      <section className="page-hero nearby-hero">
        <div>
          <span className="eyebrow">EXPLORE AROUND DANTHI</span>
          <h1>Nearby places,<br /><em>one beautiful drive away.</em></h1>
          <p>
            Discover viewpoints, waterfalls, hills and heritage spots around
            the Kaginahare–Bisle region.
          </p>
        </div>
      </section>

      <section className="section places-page">
        <div className="distance-note">
          <div>
            <strong>Distances are approximate</strong>
            <span>Values marked with * are planning estimates and should be verified with live Google Maps from the final homestay entrance.</span>
          </div>
          <a href={site.mapsUrl} target="_blank" rel="noreferrer" className="btn btn-small btn-primary">Open homestay map</a>
        </div>

        <div className="filter-row">
          {categories.map((category) => (
            <button
              key={category}
              className={active === category ? "filter active" : "filter"}
              onClick={() => setActive(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="place-grid">
          {filtered.map((place) => <PlaceCard key={place.name} place={place} />)}
        </div>
      </section>
    </>
  );
}