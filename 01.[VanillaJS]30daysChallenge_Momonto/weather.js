const locContent = document.querySelector("#location");
const weatherContent = document.querySelector("#weather");

const API_KEY = "a3f80e20a259d6b6794b33cb06bb0e10";
const COORDS = 'coords';

function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const curLoc = json.name;
        const curWeather = json.weather[0].main;
        locContent.innerText = `LOCATION: ${curLoc}`;
        weatherContent.innerText = `WEATHER: ${curWeather}`;
    })
}

function saveCoords(coordOjb){
    localStorage.setItem(COORDS, JSON.stringify(coordOjb));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordOjb ={
        latitude,
        longitude
    };
    saveCoords(coordOjb);
    getWeather(latitue, longitude);
}

function handleGeoError(){
    console.log("Can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords===null){
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
        //getWeather
    }
}

function init(){
    loadCoords();
}

init();
