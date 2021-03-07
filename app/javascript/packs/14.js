// start with strings, numbers and booleans

let string = "word";

let string2 = string;

console.log(string, string2);

string2 = "different word";

console.log(string, string2); // string2 updated as expected


// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.

const team = players;

console.log(players, team);

// You might think we can just do something like this:

// team[3] = "baby";

// console.log(team);
// console.log(players); // the original array is updated too as it always references back! not like strings/numbers/boolean

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

const teamCopy1 = team.slice(); // and the original array (team) will still be the same


// one way

// or create a new array and concat the old one in

const teamCopy2 = team.concat();

// or use the new ES6 Spread

const teamCopy3 = [...team];

const teamCopy4 = Array.from(team);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// and think we make a copy:

// how do we take a copy instead?

const personCopy1 = Object.assign({}, person, { age: 34, number: 777 }); // (empty target, source array, keys to be changed)

// We will hopefully soon see the object ...spread

const personCopy2 = { ...person }; // it works now!

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const deepPerson = {
  name: 'Wes Bos',
  age: 80,
  social: {
    twitter: "@wessybossy",
    insta: "wessy.bossy"
  }
};

const deepPersonCopy = { ...deepPerson }; // it will copy the object but the deep part (social) is still referenced to the original and will update that one too

// the "clone deep" function (from the web) will do it 

// poormans deep clone
const deepPersonCopy2 = JSON.parse(JSON.stringify(deepPerson)); // turns object into string and then into object again