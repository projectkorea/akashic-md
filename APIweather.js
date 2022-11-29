const weather = document.querySelector('.js-weather');
const COORDS = 'coords';
const API_KEY = '58bef8ad0108353743d158422fd1a35a';

function getWeather(lat, lng) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} @ ${place}`;
        });
}

function saveCoords(coordsObj) {
    console.log(`변수 저장 확인${COORDS}`);
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
    console.log(`변수 저장 확인${COORDS}`);
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude,
    };
    saveCoords(coordsObj);
}

function handleGeoFail() {
    alert('fail to access your location');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFail);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
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
