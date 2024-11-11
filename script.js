let url = "https://ajax.test-danit.com/api/swapi/films";

let container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

fetch(url)
  .then((response) => response.json())
  .then((json) => {
    for (const object of json) {
      let filmCard = document.createElement("div");
      let filmCardTitle = document.createElement("h3");
      let filmCardText = document.createElement("p");
      let listCharacters = document.createElement("ul");
      let listCharElement = document.createElement("li");

      filmCard.className = "film-card";
      filmCardTitle.className = "film-card__title";
      filmCardText.className = "film-card__text";
      listCharacters.className = "film-card__characters";
      listCharElement.className = "film-card__characters-name";

      filmCardTitle.innerText = object["name"];
      filmCardText.innerText = object["openingCrawl"];

      let characterListHTML = "";

      for (const char of object["characters"]) {
        fetch(char)
          .then((response) => response.json())
          .then((data) => {
            characterListHTML += `<li class="film-card__characters-name" >${data.name}</li>`; // Добавляем новый элемент в строку
            listCharacters.innerHTML = characterListHTML; // Обновляем содержимое списка
          });
      }

      filmCard.appendChild(filmCardTitle);
      filmCard.appendChild(filmCardText);
      filmCard.appendChild(listCharacters);
      container.appendChild(filmCard);
    }
  });

let ss = {
  id: 1,
  characters: [
    "https://ajax.test-danit.com/api/swapi/people/1",
    "https://ajax.test-danit.com/api/swapi/people/2",
    "https://ajax.test-danit.com/api/swapi/people/3",
    "https://ajax.test-danit.com/api/swapi/people/4",
    "https://ajax.test-danit.com/api/swapi/people/5",
    "https://ajax.test-danit.com/api/swapi/people/6",
    "https://ajax.test-danit.com/api/swapi/people/7",
    "https://ajax.test-danit.com/api/swapi/people/8",
    "https://ajax.test-danit.com/api/swapi/people/9",
    "https://ajax.test-danit.com/api/swapi/people/10",
    "https://ajax.test-danit.com/api/swapi/people/12",
    "https://ajax.test-danit.com/api/swapi/people/13",
    "https://ajax.test-danit.com/api/swapi/people/14",
    "https://ajax.test-danit.com/api/swapi/people/15",
    "https://ajax.test-danit.com/api/swapi/people/16",
    "https://ajax.test-danit.com/api/swapi/people/18",
    "https://ajax.test-danit.com/api/swapi/people/19",
    "https://ajax.test-danit.com/api/swapi/people/81",
  ],
  director: "George Lucas",
  episodeId: 4,
  openingCrawl:
    "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.\r\nDuring the battle, Rebel spies managed to steal secret plans to the Empire`s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.\r\nPursued by the Empire`s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy...",
  planets: [
    "https://ajax.test-danit.com/api/swapi/planets/1",
    "https://ajax.test-danit.com/api/swapi/planets/2",
    "https://ajax.test-danit.com/api/swapi/planets/3",
  ],
  producer: "Gary Kurtz, Rick McCallum",
  releaseDate: "1977-05-25",
  species: [
    "https://ajax.test-danit.com/api/swapi/species/1",
    "https://ajax.test-danit.com/api/swapi/species/2",
    "https://ajax.test-danit.com/api/swapi/species/3",
    "https://ajax.test-danit.com/api/swapi/species/4",
    "https://ajax.test-danit.com/api/swapi/species/5",
  ],
  starships: [
    "https://ajax.test-danit.com/api/swapi/starships/2",
    "https://ajax.test-danit.com/api/swapi/starships/3",
    "https://ajax.test-danit.com/api/swapi/starships/5",
    "https://ajax.test-danit.com/api/swapi/starships/9",
    "https://ajax.test-danit.com/api/swapi/starships/10",
    "https://ajax.test-danit.com/api/swapi/starships/11",
    "https://ajax.test-danit.com/api/swapi/starships/12",
    "https://ajax.test-danit.com/api/swapi/starships/13",
  ],
  name: "A New Hope",
  url: "https://ajax.test-danit.com/api/swapi/films/1",
  vehicles: [
    "https://ajax.test-danit.com/api/swapi/vehicles/4",
    "https://ajax.test-danit.com/api/swapi/vehicles/6",
    "https://ajax.test-danit.com/api/swapi/vehicles/7",
    "https://ajax.test-danit.com/api/swapi/vehicles/8",
  ],
};
