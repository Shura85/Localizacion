
/* Obtiene la posición del usuario */

var x = document.getElementById("mapa");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";

    }
}

//Muestra la posición del usuario de manera estatica
/*function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
}*/

//Muestra errores en la obtención de posiciones.
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}


//muestra la posición del usuario en un mapa de google
function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var y=getElementById("mapholder");

    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false";

    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
    y.innerHTML="Latitud: "+position.coords.latitude;
    y.innerHTML+="<br/>Longitud: "+position.coords.longitude;
    y.innerHTML+="<br/>Precisión: "+position.coords.accuracy;
    y.innerHTML+="<br/>Altidud: "+position.coords.altitude;
    y.innerHTML+="<br>Precisión de Altidud: "+position.coords.altitudeAccuracy;
    y.innerHTML+="<br>Heading: "+position.coords.heading;
    y.innerHTML+="<br>Velocidad: "+position.coords.speed;
    y.innerHTML+="<br>Fecha (en tiempo Unix): "+position.timestamp;
}
