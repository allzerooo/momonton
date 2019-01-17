const COORDS = 'coords';


function saveCoords(coordsObj) {
   localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


function handleSuccess(position) {
   console.log(position);
   const latitude = position.coords.latitude;
   const longitude = position.coords.longitude;
   const coordsObj = {
      latitude,
      longitude
   }
   saveCoords(coordsObj);
}


function handleError() {
   console.log("Can't");
}


function askForCoords() {
   navigator.geolocation.getCurrentPosition(handleSuccess, handleError)
}


function loadCoords() {
   const loadedCoords = localStorage.getItem(COORDS);
   if ( loadedCoords === null ) {
      askForCoords();
   } else {

   }
}


function init() {
   loadCoords();
}

init();