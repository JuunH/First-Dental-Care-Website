/*

Menu Icon Function

*/


const menuicon = document.getElementById('menu');
const menu = document.querySelector('.nav');


menuicon.addEventListener('click', () => {
  menuicon.classList.toggle('active');
  menu.classList.toggle('active');
})


/*

Google Maps Function

*/


function myMap() {
  var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }
