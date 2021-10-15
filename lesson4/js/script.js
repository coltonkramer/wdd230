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