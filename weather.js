const COORDS = 'coords';
const API_KEY = 'db2081aece7de6c4ffa2052cf3840ff4';

const weather = document.querySelector(".js-weather");


function getWeather(lat, lon) {
   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
   .then(function(response){
      return response.json();
   }).then(function(json){
      const temperature = json.main.temp;
      const place = json.name;
      weather.innerText = `${temperature} @${place}`;
   });
}


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
      const parsedCoords = JSON.parse(loadedCoords);
      getWeather(parsedCoords.latitude, parsedCoords.longitude);
   }
}


function init() {
   loadCoords();
}

init();