//Save the url to a string variable
const url =
  "https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json";

fetch(url)
  .then((response) => response.json())
  .then(function (jsonObject) {
    // console.table(jsonObject);

    const prophets = jsonObject['prophets'];
    display(prophets)
  }
  );

  display = (prophets) => {

    for (let i = 0; i <= prophets.length; i++) {
      let card = document.createElement('section')
      card.setAttribute('class', 'card')
      let h2 = document.createElement('h2')

      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      card.appendChild(h2)


      const date = document.createElement('p')
      date.textContent = 'Date of birth: ' + prophets[i].birthdate
      date.setAttribute('class', 'text')

      const birth = document.createElement('p')
      birth.textContent = 'Place of birth: ' + prophets[i].birthplace
      birth.setAttribute('class', 'text')

      const image = document.createElement('img')
      image.setAttribute('src',prophets[i].imageurl)
      image.setAttribute('alt',prophets[i].name + prophets[i].lastname + '-' + prophets[i].order)

      card.appendChild(date)
      card.appendChild(birth)
      card.appendChild(image)


      document.querySelector('#root').appendChild(card)
    }
  }
  