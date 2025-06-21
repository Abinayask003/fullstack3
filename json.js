const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

const jsObject = {
  name: "John Doe",
  age: 25,
  display: function () {
    console.log("Hello");
  },
};

// JavaScript Object Notation - JSON
let jsonObject = {
  "name": "John Doe",
  "age": 25,
};
// methods(function inside objects) are not supported

// JSON Methods
let stringJSON = JSON.stringify(jsObject);
console.log(stringJSON);
console.log(typeof stringJSON);

let normalJSON = JSON.parse(stringJSON);
console.log(normalJSON);
console.log(typeof normalJSON);

// localStorage
localStorage.setItem("username", "John Doe");
let item = localStorage.getItem("username");
console.log(item);

localStorage.removeItem("username");
let item2 = localStorage.getItem("username");
console.log(item2);