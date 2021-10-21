// Lookup/memorization table
const lookup = {
  fib1: 0, //represents the number of times fib1 has been called
  fib2: 0, //represents the number of times fib2 has been called
};

//Recursive solution
const fib1 = (n) => {
  if (n === 0 || n === 1) {
    lookup["fib1"]++;
    return n;
  } else {
    lookup["fib1"]++;
    return fib1(n - 1) + fib1(n - 2);
  }
};

//Recursive solution, this time with utilizing the lookup table
const fib2 = (n) => {
  if (n === 0 || n === 1) {
    lookup["fib2"]++;
    return n;
  } else if (lookup[n]) {
    lookup["fib2"]++;
    return lookup[n];
  } else {
    lookup["fib2"]++;
    lookup[n] = fib2(n - 1) + fib2(n - 2);
    return lookup[n];
  }
};

//Testing....
console.time("Execution Time");
console.log(fib1(45), lookup["fib1"]); //1134903170 3672623805
console.timeEnd("Execution Time"); //Around 13 seconds on my device

console.time("Execution Time");
console.log(fib2(45), lookup["fib2"]); //1134903170 89
console.timeEnd("Execution Time"); //Around 0.4 milliseconds on my device
