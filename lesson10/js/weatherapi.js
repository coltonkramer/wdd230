const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=953336065a7c8c590044bd8c972cc6b6";
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherData) => {
    console.log(weatherData);

    let temp = Math.floor(convertTemp(weatherData)) 
    let icon = 'https://openweathermap.org/img/w/' + weatherData.weather[0]['icon'] + '.png'
    display(temp, icon)
  });

function convertTemp(weatherData){
    return (weatherData.main.temp - 273.15) * 9/5 + 32
}

function display(temp, icon){
    let tempSelector = document.querySelector('#current-temp')
    tempSelector.textContent = temp

    let linkSelector = document.querySelector('#imagesrc')
    linkSelector.textContent = icon

    let imgSelector = document.querySelector('#icon')
    imgSelector.setAttribute('src', icon)
    imgSelector.setAttribute('alt', 'Descriptive weather icon')
}

