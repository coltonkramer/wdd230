let today = new Date();

var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

let day = days[today.getDay()];
let date = today.getDate();
let month = months[today.getMonth()];
let year = today.getFullYear();

let formattedDate = day + ", " + date + " " + month + " " + year

document.getElementById("current-full-date").textContent = formattedDate;

document.getElementById("lastmodified").innerHTML = document.lastModified;

function toggleMenu(){
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
function announcement(){
        const announce = document.getElementById('announcement');
        const p = document.createElement('p');
        const text = 'Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion';
        p.append(text);
        announce.appendChild(p);

        announce.style.display = "block" 

}
if(day == 'Friday'){
    announcement();
}

let temp = parseFloat(document.querySelector("#temp").textContent);

let speed = parseFloat(document.querySelector("#speed").textContent);

if (temp <= 50 && speed >= 3){
    let windChill = Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16))  
    document.querySelector('#wind-chill').innerHTML = windChill + "°F"
}
