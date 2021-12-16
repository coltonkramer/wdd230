const link = "json/businesses.json"

fetch(link)
.then((response) => response.json())
.then((business) => {

    displayBusiness(business)
})

function displayBusiness(business){
    

    for (i in business.businesses){

        console.log(business.businesses[i])
        
        let name = business.businesses[i].name
        let address = business.businesses[i].address
        let number = business.businesses[i].number
        let site = business.businesses[i].site

        let container = document.querySelector('#directory-container')
        let businessContainer = document.createElement('div')
        businessContainer.setAttribute('class','business-container')
        
        let nameText = document.createElement('h3')
        nameText.textContent = name

        let addressText = document.createElement('p')
        addressText.textContent = address

        let numberText = document.createElement('p')
        numberText.textContent = number

        let siteText = document.createElement('p')
        siteText.textContent = site

        container.appendChild(nameText)
        container.appendChild(addressText)
        container.appendChild(numberText)
        container.appendChild(siteText)
    }
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