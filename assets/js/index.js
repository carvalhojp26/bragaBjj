var btn = document.getElementById('moving-btn');
var presentText = document.querySelector('.present-text'); 
var pastText = document.querySelector('.past-text'); 

function leftClick() {
    btn.style.left = '0';
    presentText.style.display = 'block'; 
    pastText.style.display = 'none'; 
}

function rightClick() {
    btn.style.left = '200px';
    presentText.style.display = 'none'; 
    pastText.style.display = 'block'; 
}

document.addEventListener('DOMContentLoaded', leftClick);


let map
function initMap() {
    map = new google.maps.Map(document.getElementById('map'),{
        center:{lat:41.53, lng:-8.41},
        zoom:13
    });
    directionsRenderer.setMap(map); // Associa o DirectionsRenderer ao mapa
    google.maps.event.addListener(map, "click", function(event){
        this.setOptions({scrollWheel:true});
    });
}

let directionsService = new google.maps.DirectionsService();
let directionsRenderer = new google.maps.DirectionsRenderer();

function getLocation() {
    //inicializada quando aperta o botao
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}

const successCallback = (position) => {
    console.log(position);
    
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    // Chama compareDistance 
    compareDistance(latitude, longitude);
};

const errorCallback = (error) => {
    console.error(error);
};

function compareDistance(latitude, longitude) {
    let destinationLatLng = new google.maps.LatLng(41.53915966898499, -8.410085691669995); 
    
    let request = {
        origin: new google.maps.LatLng(latitude, longitude),
        destination: destinationLatLng, 
        travelMode: "DRIVING",
    };
    
    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
        } else {
            console.error('Directions request failed due to ' + status);
        }
    });
}
