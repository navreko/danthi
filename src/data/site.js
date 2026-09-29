export const site = {
  name: "Danthi Homestay",
  tagline: "A peaceful green escape in the Western Ghats",
  location: "Near Kaginahare, Sakleshpur, Karnataka",
  phone: "919743029295",
  displayPhone: "+91 97430 29295",
  mapsUrl: "https://maps.app.goo.gl/SvemFZVHF8FQ9KKf6",
  origin: "12.809332,75.663514",
  whatsappMessage:
    "Hi, I would like to enquire about availability and booking at Danthi Homestay."
};

export const places = [
  {
    name: "Kaginahare Viewpoint",
    category: "Viewpoint",
    distance: "Local area",
    time: "Short local drive",
    description: "A scenic viewpoint around Kaginahare with wide Western Ghats greenery and hill views.",
    image: "https://coinventmediastorage.blob.core.windows.net/media-storage-container/gphoto_ChIJM2GehanfpDsRtAnoaJV6HQs_1.jpg",
    source: "Kaginahare Viewpoint photo reference",
    maps: "https://www.google.com/maps/search/?api=1&query=Kaginahare+Viewpoint,Kaginahare,Karnataka"
  },
  {
    name: "Kaginahare Fort",
    category: "Heritage",
    distance: "Approx. 5–10 km*",
    time: "Local drive + walk",
    description: "Historic fort ruins on a hill near Kaginahare, surrounded by open grassland and mountain views.",
    image: "https://4.bp.blogspot.com/-4Dn9nx-lK3Q/UoCn6UE7oLI/AAAAAAAAAJY/TJlT7rDIvBU/s1600/IMG_0078.JPG",
    source: "Kaginahare fort photo reference",
    maps: "https://www.google.com/maps/search/?api=1&query=Kaginahare+Fort,Kaginahare,Karnataka"
  },
  {
    name: "Mookanamane Abbi Falls",
    category: "Waterfall",
    distance: "Approx. 10–15 km*",
    time: "Drive + short walk/trek",
    description: "A broad forest waterfall surrounded by the dense greenery of the Bisle–Kaginahare region.",
    image: "https://www.tuskervalley.in/images/mookana_mane_abbi_waterfall_sightseeing.webp",
    source: "Mookana Mane Abbi Falls photo reference",
    maps: "https://www.google.com/maps/search/?api=1&query=Mookanamane+Abbi+Falls,Karnataka"
  },
  {
    name: "Patla Betta",
    category: "Trekking",
    distance: "Approx. 15–25 km*",
    time: "Drive + trek",
    description: "An open hilltop with sweeping Western Ghats views and a popular trekking route.",
    image: "https://d3fphkxyf5o5bm.cloudfront.net/image-resize/format%3Dwebp%2Cw%3D720/QwRY54Li1HMwD7oNfqKar8gS2QCgYMUZx3raB3gGFz",
    source: "Patla Betta photo reference",
    maps: "https://www.google.com/maps/search/?api=1&query=Patla+Betta,Sakleshpur,Karnataka"
  },
  {
    name: "Bisle Ghat View Point",
    category: "Viewpoint",
    distance: "Approx. 20–30 km*",
    time: "Scenic drive",
    description: "A famous double-level lookout over forested mountain ranges in the Western Ghats.",
    image: "https://www.clubmahindra.com/blog/images/Bisle-Ghat_processed_by_imagy.jpg",
    source: "Bisle Ghat View Point photo reference",
    maps: "https://www.google.com/maps/search/?api=1&query=Bisle+Ghat+View+Point,Karnataka"
  },
  {
    name: "Hosahalli Betta",
    category: "Viewpoint",
    distance: "Approx. 25–35 km*",
    time: "Scenic drive + walk",
    description: "A green hill destination with panoramic views across the surrounding Western Ghats.",
    image: "https://www.trawell.in/admin/images/upload/025326961Hosahalli.jpg",
    source: "Hosahalli Gutta photo reference",
    maps: "https://www.google.com/maps/search/?api=1&query=Hosahalli+Betta,Sakleshpur,Karnataka"
  },
  {
    name: "Mallalli Falls",
    category: "Waterfall",
    distance: "Approx. 25–40 km*",
    time: "Scenic drive",
    description: "A dramatic multi-tiered waterfall in the wider Western Ghats region, suited to a day outing.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Mallalli_falls_1.jpg",
    source: "Mallalli Falls photo reference",
    maps: "https://www.google.com/maps/search/?api=1&query=Mallalli+Falls,Kodagu,Karnataka"
  }
];

// The gallery deliberately reuses the exact same destination records as the
// Nearby Places page, so an attraction can never have two unrelated images.
export const galleryImages = places.map((place) => ({
  src: place.image,
  alt: place.name,
  label: place.name,
  category: place.category
}));
export const amenities = [
  {
    icon: "🅿️",
    title: "Free Parking",
    description: "Convenient parking available for guests."
  },
  {
    icon: "📶",
    title: "Wi-Fi",
    description: "Stay connected with Wi-Fi available for guests."
  },
  {
    icon: "🥗",
    title: "Veg Food",
    description: "Fresh vegetarian meals available."
  },
  {
    icon: "🍗",
    title: "Non-Veg Food",
    description: "Non-vegetarian meals available on request."
  },
  {
    icon: "🏊",
    title: "Swimming Pool",
    description: "Relax and enjoy the pool surrounded by greenery."
  }
];