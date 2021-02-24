
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// DOM





// fetch data from endpoint and put it into an empty array

const cities = [];

fetch(endpoint) // fetch returns a promise object (sth. will evtl. come back from this fetch: pending/rejected/fulfilled)
  .then(blob => blob.json()) // then method is called on a promise then(onFulfillment, onRejection[opt])
  .then(data => cities.push(...data)) // spread into push function


// -- functions --


// function to find search matches

function findMatch(search, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(search, "gi"); // create regex with: g(global = check the entire string), i(insensitive);
    return place.city.match(regex) || place.state.match(regex);
  })
};

// function to display matches
const searchInput = document.querySelector(".search");


// function to add points to population
function numberWithPoints(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// function to display matching cities
function displayMatches() {
  search = this.value;
  const resultList = document.querySelector(".on");
  const matches = findMatch(search, cities);
  if (!search) { // if nothing is typed show hints
    while (resultList.firstChild) {
      resultList.removeChild(resultList.lastChild);
    }
    resultList.innerHTML = `<li>Filter for a city</li><li>or a state</li>`;
  } else { // if something is typed show suggestions in list
    while (resultList.firstChild) { // remove hints (as long as at least one child is there)
      console.log(resultList.firstChild);
      resultList.removeChild(resultList.firstChild);
    } // and add content for each mathcing entry from JSON to suggestions list
    matches.forEach((place) => {
      const matchPart = new RegExp(this.value, "gi");
      const cityName = place.city.replace(matchPart, `<span class="hl">${this.value}</span>`);
      const stateName = place.state.replace(matchPart, `<span class="hl">${this.value}</span>`);
      resultList.insertAdjacentHTML("beforeend", `<li>
      <span> ${cityName}, ${stateName} </span>
      <span class="pop"> ${numberWithPoints(place.population)} inh. </span> 
    </li>`);
    })
  }
};

function addList() {
  const list = document.querySelector(".suggestions");
  list.classList.remove("off");
  list.classList.add("on");
}

function removeList() {
  if (!this.value) {
    const list = document.querySelector(".suggestions");
    list.classList.remove("on");
    list.classList.add("off");
  }
}

// eventListeners
searchInput.addEventListener("focus", addList);
searchInput.addEventListener("focusout", removeList);
searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);

