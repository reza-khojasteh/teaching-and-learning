//reference: https://www.linkedin.com/learning/learning-functional-programming-with-javascript-es6-plus/higher-order-functions?autoAdvance=true&autoSkip=false&autoplay=true&resume=false&u=2169170

const divide = (x, y) => x / y;

const secondArgumentIsntZero =
  (func) =>
  (...args) => {
    if (args[1] === 0) {
      console.log("Error: dividing by zero");
      return null;
    }

    return func(...args);
  };

const divideSafe = secondArgumentIsntZero(divide);

console.log(divideSafe(7, 0));
console.log(divideSafe(5, 3));
//OR
// console.log(secondArgumentIsntZero(divide)(7, 0));
// console.log(secondArgumentIsntZero(divide)(5, 3));
