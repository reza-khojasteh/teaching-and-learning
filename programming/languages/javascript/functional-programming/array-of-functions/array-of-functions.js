// Assume we have several funcitons, stored as data, in variables....
const double = (x) => x * 2;
const triple = (x) => x * 3;
const sqrt = Math.sqrt;
const power = (x) => Math.pow(x, 2);

// And we have a number that we want to apply some of these functions on:
let myNumber = 2;

// Instead of doing this, one step at a time, as in the commented out code snippet below:
// const doubled = double(myNumber);
// const sqrted = sqrt(doubled);
// const powered = power(sqrted);
// console.log(powered);

// We can form an array of functions as:
const functionsArray = [double, sqrt, power];

// And then, loop through the elements of the array (a bit non-functional though, as we are changing the value):
functionsArray.forEach((func) => (myNumber = func(myNumber)));

// And print the final result....
console.log(myNumber);
