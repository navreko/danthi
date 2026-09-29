import React, { useState } from "react";
import { galleryImages } from "../data/site";

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section className="page-hero">
        <div>
          <span className="eyebrow">DANTHI HOMESTAY</span>
          <h1>A glimpse of the<br /><em>green escape.</em></h1>
          <p>Regional reference imagery for the first version. The same destination images are used on the Nearby Places page, so the two sections stay in sync. Replace these with your own Danthi photographs anytime.</p>
        </div>
      </section>

      <section className="section">
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <button className={`gallery-item item-${index + 1}`} key={image.src} onClick={() => setSelected(image)}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <span>{image.label}</span>
            </button>
          ))}
        </div>
      </section>

      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <button className="lightbox-close" aria-label="Close">✕</button>
          <img src={selected.src} alt={selected.alt} onClick={(e) => e.stopPropagation()} />
          <p>{selected.label}</p>
        </div>
      )}
    </>
  );
}