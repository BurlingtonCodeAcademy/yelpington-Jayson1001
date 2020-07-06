let restList = document.getElementById("restaurant");

//--------Map with Burlington coordinates-------------
let myMap = L.map("map").setView([44.4762975, -73.2135472], 14);
myMap.on("load", loadMapData());

//--------Map tiling----------------------------------
var OpenStreetMap_Mapnik = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(myMap);

function loadMapData() {
  // Fetching JSON restaurant coodinates
  fetch(`https://yelpingtonapi.herokuapp.com/api/restaurants`)
    .then((res) => {
      return res.json();
    })
    .then((obj) => {
      obj.forEach((restaurant) => {
        // Fetching JSON restaurant info
        fetch(restaurant.infoUrl)
          .then((res) => {
            return res.json();
          })
          .then((restMap) => {
            let restLoc = `<div><a href="/restaurant#${restMap.id}"> ${restMap.name}</a></div>`;
            restList.innerHTML += restLoc;
            restMarker(restMap.coords, restLoc);
          });
      });
    });
}

// adding in restaurant markers to the map
function restMarker(latLongArray, popInfo) {
  let loc = L.marker(latLongArray).addTo(myMap);
  loc.bindPopup(popInfo);
}
