document.getElementById("copyrightyear").textContent = new Date().getFullYear();

document.getElementById("lastmodified").innerHTML = document.lastModified;

function toggleMenu(){
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}