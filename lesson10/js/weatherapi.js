const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=953336065a7c8c590044bd8c972cc6b6";
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherData) => {
    console.log(weatherData);

    let description = weatherData.weather[0]["main"];
    let temp = Math.floor(convertTemp(weatherData.main.temp));
    let highTemp = Math.floor(convertTemp(weatherData.main.temp_max));
    let lowTemp = Math.floor(convertTemp(weatherData.main.temp_min));

    let icon =
      "https://openweathermap.org/img/w/" +
      weatherData.weather[0]["icon"] +
      ".png";
    let windSpeed = weatherData.wind.speed.toFixed(1);
    let windChill = getWindChill(temp, windSpeed)
    let humidity = weatherData.main.humidity

    display(description, temp, highTemp, lowTemp, icon, windChill, windSpeed, humidity);
  });

  function display(description, temp, highTemp, lowTemp, icon, windChill, windSpeed, humidity) {
    let descriptionSelector = document.querySelector("#currently");
    descriptionSelector.textContent = description;
    
    let tempSelector = document.querySelector("#temp");
    tempSelector.textContent = temp + '°';
    
    let highLowTempSelector = document.querySelector("#high-low-temp");
    highLowTempSelector.textContent = ' ↑' + highTemp + '°' + '/' + ' ↓' + lowTemp + '°';
    
    
    let chillSelector = document.querySelector("#wind-chill");
    if (windChill === 'N/A'){
      chillSelector.textContent = windChill;
    }
    else{
      chillSelector.textContent = windChill + '°F';
    }
    
    let speedSelector = document.querySelector('#wind-speed');
    speedSelector.textContent = windSpeed + 'MPH';
    
    let humidSelector = document.querySelector("#humidity");
    humidSelector.textContent = humidity + '%';
    
    let linkSelector = document.querySelector("#imagesrc");
    linkSelector.textContent = icon;
    
    
    let imgSelector = document.querySelector("#icon");
    imgSelector.setAttribute("src", icon);
    imgSelector.setAttribute("alt", "Descriptive weather icon");
  }

  function convertTemp(temperature) {
    return ((temperature - 273.15) * 9) / 5 + 32;
  }
  
  function getWindChill(temp, speed){
    if (temp <= 50 && speed > 3) {
      return Math.round(35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16));
    }
    else {
      return 'N/A'
    }
  }
  