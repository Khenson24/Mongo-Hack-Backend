var url = "https://www.eventbriteapi.com/v3/events/search?location.address=";


var clientApiKey = "EQQUOLO4G4JELWDWVBNB7M53MFYUJUOJFKBFPBZ2Q2ZLU6TFNY";
var privateApiKey = "PGDVTHRFUWXEIRHR2FQW";
var publicApiKey = "RY757NJ2ZBKML5M2ECGM";
// var location = window.document.getElementById('search').value;
var location1 = "&location.address=";
// var radius = window.document.getElementById('radius').value;
var theRest = "mi&expand=venue";
var rect = window.document.getElementById('rectangle')
var rect1 = window.document.getElementById('rectangle1')
function blah() {
    // input = window.document.getElementById('city').value;
    // // var temp1 = myJson.main.temp
    // var fetchURL = url += input += apiKey += imp;
    fetch("https://www.eventbriteapi.com/v3/events/search/?q=hack&location.address=alabama&token=PGDVTHRFUWXEIRHR2FQW")
        .then(function (response) {
            return response.json()
        })
        .then(function (myJson) {
            const data = JSON.stringify(myJson.events);
                for(i=0;i<data.length;i++){
                    console.log(JSON.stringify(myJson.events[i].name.text));
                    
                    rect.innerHTML += JSON.stringify(myJson.events[i].name.text) + "<br>" + JSON.stringify(myJson.events[i].start.local) + " " + JSON.stringify(myJson.events[i].end.local) + "<br/>" + "<br/>";
            }
        });
}