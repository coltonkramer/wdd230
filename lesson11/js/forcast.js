const apiURL1 =
"https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=953336065a7c8c590044bd8c972cc6b6";
fetch(apiURL1)
.then((response) => response.json())
.then((weatherData) => {

  const noon =  weatherData.list.filter(x => x.dt_txt.includes('18:00:00'))
  forecast(noon)
  console.log(noon)
})

function forecast(noon) {
    noon.forEach((i,j) => document.querySelector('#temp' + j).textContent = i.main.temp + '°F')
    noon.forEach((i,j) => document.querySelector('#day' + j).textContent = getDay(new Date(i.dt_txt).getDay()))
    noon.forEach((i,j) => document.querySelector('#icon' + j).setAttribute('src', getIcon(i.weather[0].icon)))
    noon.forEach((i,j) => document.querySelector('#icon' + j).setAttribute('alt', getIcon(i.weather[0].icon)))


}

function getDay(day){
  switch(day){
    case 0:
      return 'Sunday'
    case 1:
      return 'Monday'
    case 2:
      return 'Tuesday'
    case 3:
      return 'Wednesday'
    case 4:
      return 'Thursday'
    case 5:
      return 'Friday'
    case 6:
      return 'Saturday'
  }
}

function getIcon(icon){
  return "https://openweathermap.org/img/w/" + icon + ".png"

}



