const MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom
  })
  this.markers =[]
};

MapWrapper.prototype.addMarker = function (coords) {
  const info = "Welcome to bell end the home of piers morgan"
  const infowindow = new google.maps.InfoWindow({
    content: info
  })
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  })
  marker.addListener('click', function(){
    infowindow.open(this.googleMap, marker);
  })
};

MapWrapper.prototype.getHome = function () {
  this.googleMap = new google.maps.Map(
    container = document.getElementById('main-map'), {
    center: {lat:55.864622, lng:-4.263903},
    zoom: 15
  })
  const info = "This is where I spend all my money"
  const infowindow = new google.maps.InfoWindow({
    content: info
  })
  const marker = new google.maps.Marker({
    position: {lat:55.864622, lng:-4.263903},
    map: this.googleMap
  })
  marker.addListener('click', function(){
    infowindow.open(this.googleMap, marker);
  })
};
