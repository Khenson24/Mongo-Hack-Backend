let url = "https://www.eventbriteapi.com/v3/events/search?location.address=";


let clientApiKey = "EQQUOLO4G4JELWDWVBNB7M53MFYUJUOJFKBFPBZ2Q2ZLU6TFNY";
let privateApiKey = "PGDVTHRFUWXEIRHR2FQW";
let publicApiKey = "RY757NJ2ZBKML5M2ECGM";
// let location = window.document.getElementById('search').value;
let location1 = "&location.address=";
// let radius = window.document.getElementById('radius').value;
let theRest = "mi&expand=venue";
let rect = window.document.getElementById('rectangle')
let rect1 = window.document.getElementById('rectangle1')
function blah() {
    // input = window.document.getElementById('city').value;
    // // let temp1 = myJson.main.temp
    // let fetchURL = url += input += apiKey += imp;
    fetch("https://www.eventbriteapi.com/v3/events/search/?q=hack&location.address=alabama&token=PGDVTHRFUWXEIRHR2FQW")
        .then(function (response) {
            return response.json()
        })
        .then(function (myJson) {
            const data = JSON.stringify(myJson.events);
                for(i=0;i<data.length;i++){
                    let date = myJson.events[i].start.local
                    let eDate = myJson.events[i].end.local
                    let d = new Date(date);
                    let e = new Date(eDate)
                    let hh = d.getHours();
                    let m = d.getMinutes();
                    let s = d.getSeconds();
                    let ehh = e.getHours();
                    let em = e.getMinutes();
                    let es = e.getSeconds();


                    let dd = "AM";
                    let h = hh;
                    if (h >= 12) {
                      h = hh - 12;
                      dd = "PM";
                    }
                    if (h == 0) {
                      h = 12;
                    }
                    m = m < 10 ? "0" + m : m;
                  
                    s = s < 10 ? "0" + s : s;
                  
                    /* if you want 2 digit hours:
                    h = h<10?"0"+h:h; */
                  
                    let pattern = new RegExp("0?" + hh + ":" + m + ":" + s);
                  
                    let replacement = h + ":" + m;

                    replacement += " " + dd;
                    let nD = date.replace(pattern, replacement).split("T")


                    let edd = "AM";
                    let eh = ehh;
                    if (eh >= 12) {
                      eh = ehh - 12;
                      edd = "PM";
                    }
                    if (eh == 0) {
                      eh = 12;
                    }
                    em = em < 10 ? "0" + em : em;
                  
                    es = es < 10 ? "0" + es : es;
                  
                    let epattern = new RegExp("0?" + ehh + ":" + em + ":" + es);
                  
                    let ereplacement = eh + ":" + em;
                    /* if you want to add seconds
                    replacement += ":"+s;  */
                    ereplacement += " " + edd;
                    let enD = eDate.replace(epattern, ereplacement).split("T")
                    console.log(nD, enD)
                    let urll = JSON.stringify(myJson.events[i].url)
                    
                    rect.innerHTML += JSON.stringify(myJson.events[i].name.text) + "<br>" + "<a>" + urll + "</a>"+ "<br>" + "Start: " + JSON.stringify(nD[1]) + " " + JSON.stringify(nD[0]) + "<br/>" + "End: " +  JSON.stringify(enD[1]) + " " + JSON.stringify(enD[0]) + "<br/>" + "<br/>";
                  } 
            }
        );
}
