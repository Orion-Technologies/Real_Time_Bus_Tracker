// This array contains the coordinates 
const busStops = [
  [-90.5749, 14.5403],
  [-90.574, 14.537],
  [-90.5757, 14.5374],
  [-90.5773, 14.5379],
  [-90.5797, 14.5381],
  [-90.5815, 14.5381],
  [-90.5836, 14.5392],
  [-90.5841, 14.541],
  [-90.5825, 14.5441],
  [-90.5803, 14.5463],
  [-90.5785, 14.5493],
  [-90.5775, 14.5531],
  [-90.5763, 14.5557],
  [-90.5761, 14.5585],
  [-90.5754, 14.5616],
  [-90.5753, 14.5649],
  [-90.574, 14.5674],
  [-90.5737, 14.5707],
  [-90.5729, 14.5735],
  [-90.5704, 14.5764],
  [-90.5682, 14.5795],

];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoiamFiZWwtb3Jpb24iLCJhIjoiY2t0Zzc2b3FzMGYzaTMwbjQ1a2thbGFuYSJ9.kA_ImIrDMASR5rhC6oo1MQ';

// This is the map instance
let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-90.5749, 14.5403],
  zoom: 14,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"

  var marker = new mapboxgl.Marker().setLngLat([-90.5749, 14.5403]).addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.

  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);

}
// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}
