const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("Hello Baby!");

// Interpolated
console.log("Hello %s !", "you")
// console.log(`Hello ${const} `)

// Styled
console.log(`%c I am awesome`, `font-size: 50px; background: pink; text-shadow: 5px 5px 0 green`)

// warning!
console.warn("nooooo");

// Error :|
console.error("shit");

// Info
console.info("The weather is nice today!");

// Testing
const p = document.querySelector("p");

console.assert(p.classList.contains("love"), "it is wrong!"); // only fires if something is wrong, so no if statement needed

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`The dog ${dog.name} is pretty dirty!`);
  console.log(`It is ${dog.age} years old!`);
  console.groupEnd();
});

// counting
console.count("love");
console.count("love");
console.count("love");
console.count("hug");
console.count("love");
console.count("love");
console.count("love");
console.count("hug");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then(data => data.json())
  .then(data => {
    console.timeEnd("fetching data");
    console.log(data);
  });

// table

console.table(dogs);