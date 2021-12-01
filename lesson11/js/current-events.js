const url = "https://byui-cit230.github.io/weather/data/towndata.json";

function getEvents(townName){

    fetch(url)
      .then((response) => response.json())
      .then(function (jsonObject) {
        const towns = jsonObject["towns"];
        display(towns);
      });
    
    // display = (towns) => {
      function display(towns){
        let j = 0
      for (let i = 0; i <= towns.length; i++) {
        if (towns[i].name === townName){
            let townEventContainer = document.querySelector('#current-events')
            let eventHeader = document.createElement('h3')
            eventHeader.textContent = 'Events'
            townEventContainer.appendChild(eventHeader)

            for (let j = 0; j <= towns[i].events.length; j++) {
                let townEvent = document.createElement('p')
                townEvent.textContent = towns[i].events[j]
                townEventContainer.appendChild(townEvent)
            }
            

        }
    }
    };
}
