let currentRest = document.location.hash.slice(1);

let restaurant = document.getElementById("restaurant");
let name = document.getElementById("name");
let address = document.getElementById("address");
let phone = document.getElementById("phone");
let website = document.getElementById("website");
let hours = document.getElementById("hours");
let notes = document.getElementById("notes");

//-----------Map with zoomed in restaurant coordinates-------------
let myMap = L.map("map").setView([44.4762975, -73.2135472], 14);
myMap.on("load", loadRestInfo());

//-----------Map tiling--------------------------------------------
var OpenStreetMap_Mapnik = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(myMap);

//--------Fetching restaurant info to be displayed above map-----
function loadRestInfo() {
  fetch(`https://yelpingtonapi.herokuapp.com/api/restaurants/${currentRest}`)
    .then((res) => {
      return res.json();
    })
    .then((restInfo) => {
      name.innerHTML = restInfo.name;
      address.innerHTML = restInfo.address;
      phone.innerHTML = restInfo.phone;
      website.innerHTML = restInfo.website;
      hours.innerHTML = restInfo.hours;
      notes.innerHTML = restInfo.notes;

      let restLink = `<div><a href = "${restInfo.website}"> ${restInfo.name}</a></div>`;
      myMap.setView(restInfo.coords, 17);
      let loc = L.marker(restInfo.coords).addTo(myMap);
      loc.bindPopup(restLink);
    });
}
