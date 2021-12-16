const url = "http://api.openweathermap.org/data/2.5/onecall?lat=35.227085&lon=-80.843124&exclude=hourly,minutely&units=imperial&appid=953336065a7c8c590044bd8c972cc6b6"

fetch(url)
.then((response) => response.json())
.then((weather) => {
    let temp = Math.round(weather.current.temp)
    let condition = weather.current.weather[0].main;
    let humidity = weather.current.humidity
    let forcast = weather.daily

    displayCurrent(temp,condition,humidity);
    displayForcast(forcast)
})

function displayCurrent(temp, condition, humidity){

    let container = document.querySelector("#current-weather-container")

    let dateGet = getToday()
    let date = document.createElement('p')
    date.textContent = dateGet
    container.append(date)

    let Temp = document.createElement('p')
    Temp.setAttribute('id','temp')
    Temp.textContent = temp + '°f'
    container.appendChild(Temp)

    let Seperator = document.createElement('p')
    Seperator.setAttribute('id','seperator')
    Seperator.textContent = '----------------------'
    container.appendChild(Seperator)

    let Cond = document.createElement('p')
    Cond.setAttribute('id','cond')
    Cond.textContent = condition
    container.appendChild(Cond)

    let Humid = document.createElement('p')
    Humid.setAttribute('id','humid')
    Humid.textContent = 'Humidity ' + humidity + '%'
    container.appendChild(Humid)

}

function displayForcast(forcast){
    
    forcast.forEach((i,j) => {
        if(j<=2){

            let date = getForcastDate(j)
            let temp = Math.round(i.temp.day)
            let condition = i.weather[0].main;
            let high = i.temp.max;

            let dayContainer = document.createElement('div')
            dayContainer.setAttribute('class','forcast-day-container')

            let dateText = document.createElement('p')
            dateText.setAttribute('id','forcast-date')
            dateText.textContent = date
            dayContainer.appendChild(dateText)

            let tempText = document.createElement('p')
            tempText.setAttribute('id','forcast-temp')
            tempText.textContent = temp +'°'
            dayContainer.appendChild(tempText)

            let conditionText = document.createElement('p')
            conditionText.setAttribute('id','forcast-condition')
            conditionText.textContent = condition
            dayContainer.appendChild(conditionText)

            let highText = document.createElement('p')
            highText.setAttribute('id','forcast-high')
            highText.textContent = 'High around ' + high + '°'
            dayContainer.appendChild(highText)

            let container = document.querySelector('#forcast-container')
            container.appendChild(dayContainer)
        }
    })
}


function getForcastDate(j){
    let today = new Date();

    var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];


    let day = days[today.getDay() + j + 1];
    let date = today.getDate();
    date += j + 1

    let formattedDate = day + ' ' + date

    return formattedDate
}

function getToday(){
    let today = new Date();

    var days = ['Sunday','Monday','Tuesday','Wednesday','Thurday','Friday','Saturday'];
    var months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];

    let day = days[today.getDay()];
    let date = today.getDate();
    let month = months[today.getMonth()];

    let formattedDate = day + ', ' + month + ' ' + date

    return formattedDate
}