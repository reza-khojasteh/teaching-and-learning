// 1- Spread operator sample for an object:
const person = {
  name: "Reza",
  greet() {
    console.log("Hi, I am " + this.name);
  },
};

const copiedPerson = { ...person };

console.log(copiedPerson); // { name: 'Reza', greet: [Function: greet] }

copiedPerson.name = "John";

copiedPerson.greet = () => console.log("Hello world!");
//STILL:
console.log(person); // { name: 'Reza', greet: [Function: greet] }
//BUT
console.log(copiedPerson); // { name: 'John', greet: [Function (anonymous)] }

// 2- Spread operator sample for an array:
const courses = ["Java", "JS"];
console.log(courses); // [ 'Java', 'JS' ]

const copiedArray = [...courses];
console.log(copiedArray); // [ 'Java', 'JS' ]

copiedArray.push("React");
console.log(copiedArray); // [ 'Java', 'JS', 'React' ]
//BUT:
console.log(courses); // [ 'Java', 'JS' ]

// 3- Rest operator sample (used as an array argument):
const foo = (first, ...rest) => {
  console.log(rest);
};

foo(1, 2, 3, 4); // [ 2, 3, 4 ]
