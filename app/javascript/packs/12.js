// 

const secretKey = "banana"

let typedKey = [];

// event listeners

document.addEventListener("keyup", (e) => {
  typedKey.push(e.key);
  if (typedKey.length > secretKey.length) {
    typedKey.shift();
  }
  if (secretKey === typedKey.join("")) {
    console.log("match!");
    cornify_add();
  }
  console.log(typedKey.join(""));
})