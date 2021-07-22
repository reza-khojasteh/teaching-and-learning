// JavaScript Symbols where a new primitive data type introduced with ES6. Every value returned from a symbol is unique, meaning that we can use them as identifiers for object properties. Symbols are extremely useful for creating private variables.

// (Also from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol:)
// Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that’s guaranteed to be unique. Symbols are often used to add unique property keys to an object that won’t collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object. That enables a form of weak encapsulation, or a weak form of information hiding....

const username = Symbol("username");

console.log(username); //Prints Symbol(username)

const user = {
  [username]: "reza",
  [Symbol("password")]: "123",
  age: 27,
};

console.log(user.username); //Prints 'undefined' but user[username] will return "reza"! However:

console.log(user.password); //Now, this time, this one and even the below ones to access 'password', all return 'undefined'! Note that: Symbol('reza') !== Symbol('reza')
console.log(user["password"]);
console.log(user[Symbol("password")]);

console.log(user.age); //Prints 27
