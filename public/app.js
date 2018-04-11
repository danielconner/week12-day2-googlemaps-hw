const initialize = function(){

  const container = document.getElementById('main-map');
  const center ={lat: 52.392743, lng: -2.090143};
  const zoom = 15;

  const map =  new MapWrapper(container, center, zoom);
  map.addMarker(center);

  const homeButton = document.getElementById('home-button');
  homeButton.addEventListener('click', map.getHome);

  };



window.addEventListener('DOMContentLoaded', initialize);
