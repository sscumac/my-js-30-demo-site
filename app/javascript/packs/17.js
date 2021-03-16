// DOM

const list = document.getElementById("bands");


const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 
'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

list.innerHTML = bands.map((band) => {
  return `<li>${band}</li>`;
}).join("");



// function

// we want to sort the bandnames as stripped but without mofifying them
// so we need a strip function to temporarily strip them

function sortContent() {
  const regex = /(?:(the|a|an) +)/i;

  function strip(bandname) {
    return bandname.replace(regex, "");
  }

  const bandsOrdered = bands.sort((a, b) => (strip(a) > strip(b)) ? 1 : -1);

  list.innerHTML = bandsOrdered.map((band) => {
    return `<li>${band}</li>`;
  }).join("");
}


// event listener

window.addEventListener("click", sortContent);
