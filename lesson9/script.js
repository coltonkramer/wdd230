const url = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(url)
  .then((response) => response.json())
  .then(function (jsonObject) {
    const towns = jsonObject["towns"];
    display(towns);
  });

display = (towns) => {
  for (let i = 0; i <= towns.length; i++) {
    let town = document.createElement("section");
    town.setAttribute("class", "town-info");

    let townText = document.createElement("article");
    townText.setAttribute("class", "town-text");

    let h3 = document.createElement("h3");
    let h4 = document.createElement("h4");
    h3.setAttribute("class", "town-name");
    h4.setAttribute("class", "town-name");

    h3.textContent = towns[i].name;
    townText.appendChild(h3);

    h4.textContent = towns[i].motto;
    townText.appendChild(h4);

    const year = document.createElement("p");
    year.textContent = "Year Founded: " + towns[i].yearFounded;
    year.setAttribute("class", "text");

    const population = document.createElement("p");
    population.textContent = "Population: " + towns[i].currentPopulation;
    population.setAttribute("class", "text");

    const image = document.createElement("img");
    image.setAttribute("src", "images/" + towns[i].photo);
    image.setAttribute("alt", towns[i].name);
    image.setAttribute("class", "homepage-image");
    image.setAttribute("id", towns[i].yearFounded);

    townText.appendChild(year);
    townText.appendChild(population);
    town.appendChild(townText);
    town.appendChild(image);

    if (
      towns[i].name === "Preston" ||
      towns[i].name === "Soda Springs" ||
      towns[i].name === "Fish Haven"
    ) {
      console.log(towns[i].name);

      document.querySelector("#town-container").appendChild(town);
    }
  }
};
