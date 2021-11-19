const apiURL1 =
"https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=953336065a7c8c590044bd8c972cc6b6";
fetch(apiURL1)
.then((response) => response.json())
.then((weatherData) => {

  const noon =  weatherData.list.filter(x => x.dt_txt.includes('18:00:00'))
  forecast(noon)
})

function forecast(noon) {
    noon.forEach((i,j) => document.querySelector('#temp' + j).textContent = i.main.temp + '°F')
}





// let icon = "https://openweathermap.org/img/w/" + weatherData.weather[0]["icon"] +".png";