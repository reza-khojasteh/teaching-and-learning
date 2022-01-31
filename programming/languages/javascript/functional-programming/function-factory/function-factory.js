// Assume we have a funciton which returns another function....
const createMultiplier = (y) => (x) => x * y;

// Instead of doing this, one step at a time, as in the commented out code snippet below:
// const double = (myNumber) => myNumber * 2;
// const triple = (myNumber) => myNumber * 3;
// const quadruple = (myNumber) => myNumber * 4;

// We can do the following using our function factory
const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

// And as an example:
console.log(double(3));
