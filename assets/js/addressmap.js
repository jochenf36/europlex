function initMap() {
  var myLatLng = {
    lat: 50.5838761,
    lng: 4.3597969,
  };

  var mapDiv = document.getElementById('addressMap');
  var map = new google.maps.Map(mapDiv, {
    center: myLatLng,
    zoom: 14,
  });

  var image = 'img/work.png';

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Europlex',
  });
}

$(document).ready(function documentReady() {
  initMap();
});
