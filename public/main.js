let myMap = L.map("map").setView([44.4762975, -73.2135472], 12);

var OpenStreetMap_Mapnik = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(myMap);


/*function titelize(sentence) {
    let wordArray = sentence.toLowerCase(),split(' ')
    let newArray = wordArray.map(capitalize)
    return newArray.join(' ')
}*/

let restList = document.getElementById('restList')

//-------------Restaurant Map Location and Details--------------------





//-------------marker set-up-------------------------
var marker = L.marker([44.4757769, -73.2127874]).addTo(mymap);

marker.bindPopup


//-------------pop-up set-up--------------------------
var popup = L.popup()
  .setLatLng([44.4757769, -73.2127874])
  .setContent("<h4>Ahli Baba's Kabob Shop</h4>")
  .openOn(myMap);

var popup = L.popup()
  .setLatLng([44.47655925, -73.21435285244789])
  .setContent("<h4>American Flatbread</h4>")
  .openOn(myMap);

var popup = L.popup()
  .setLatLng([44.47655925, -73.21435285244789])
  .setContent("<h4>August First</h4>")
  .openOn(myMap);

var popup = L.popup()
  .setLatLng([44.4782479, -73.211106])
  .setContent("<h4>City Market</h4>")
  .openOn(myMap);

var popup = L.popup()
  .setLatLng([44.4780302, -73.21200445])
  .setContent("<h4>El Cortijo Taqueria</h4>")
  .openOn(myMap);

var popup = L.popup()
  .setLatLng([44.4784159, -73.21330286185886])
  .setContent("<h4>Farmhouse Tap and Grill</h4>")
  .openOn(myMap);

var popup = L.popup()
  .setLatLng([44.4781994, -73.2126357])
  .setContent("<h4>Gaku Ramen</h4>")
  .openOn(myMap);

var popup = L.popup()
  .setLatLng([44.4792192, -73.2156259])
  .setContent("<h4>Hen of The Wood</h4>")
  .openOn(myMap);

var popup = L.popup()
  .setLatLng([44.4781673, -73.2134946])
  .setContent("<h4>Henry's Diner</h4>")
  .openOn(myMap);

var popup = L.popup()
  .setLatLng([44.4781994, -73.2126357])
  .setContent("<h4>Honey Road</h4>")
  .openOn(myMap);

var popup = L.popup()
  .setLatLng([44.4759406, -73.2123868])
  .setContent("<h4>Kountry Kart Deli</h4>")
  .openOn(myMap);

var popup = L.popup()
  .setLatLng([44.4738025, -73.2123609])
  .setContent("<h4>Leunig's Bistro</h4>")
  .openOn(myMap);

var popup = L.popup()
  .setLatLng([44.4759406, -73.2123868])
  .setContent("<h4>Mr. Mike's</h4>")
  .openOn(myMap);

var popup = L.popup()
  .setLatLng([44.4780447, -73.2129484])
  .setContent("<h4>Pascolo Ristorante</h4>")
  .openOn(myMap);

var popup = L.popup()
  .setLatLng([44.47913845, -73.21999172608216])
  .setContent("<h4>A Single Pebble</h4>")
  .openOn(myMap);

var popup = L.popup()
  .setLatLng([44.4738025, -73.2123609])
  .setContent("<h4>Thai Dishes</h4>")
  .openOn(myMap);

marker.addEventListener("mouseover", () => {
  marker.openPopup();
});
