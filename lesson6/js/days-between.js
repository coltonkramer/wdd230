
const millisecondsToDays = 8640000;

const lastVisit = localStorage.getItem('lastvisit') || Date.now()
let numOfDays = String(Math.abs(((lastVisit - Date.now()) / millisecondsToDays).toFixed(0)))
document.getElementById("lastvisited").textContent = numOfDays;   
localStorage.setItem('lastvisit', Date.now())