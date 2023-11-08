mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
container: 'map', // container ID
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/mapbox/satellite-streets-v12', // style URL
center: listing.geometry.coordinates, // starting position [lng, lat]
zoom: 4 // starting zoom
});

// console.log(coordinates);

const marker = new mapboxgl.Marker({color: 'red'})
  .setLngLat(listing.geometry.coordinates)
  .setPopup(new mapboxgl.Popup({offset: 25,})
.setHTML(`<h4>${listing.title}</h4> <p>Your destination is here, book and enjoy</p>`))
  .addTo(map);