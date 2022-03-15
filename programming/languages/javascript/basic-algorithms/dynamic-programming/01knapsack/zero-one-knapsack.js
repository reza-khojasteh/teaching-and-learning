// Lookup table/memoization
const lookup = {
  knapsack1: 0, //represents the number of times zeroOneKnapsack1 has been called
  knapsack2: 0, //represents the number of times zeroOneKnapsack2 has been called
};

// Recursive solution: not a DP solution!
// /**
//  * @param {array} values
//  * @param {array} weights
//  * @param {number} k
//  * @param {number} i
//  * @return {number}
//  */
const zeroOneKnapsack1 = (values, weights, k, i = 0) => {
  lookup["knapsack1"]++; // To track how many times we called this function (each call is a node in the call tree)

  if (k < 0) return Number.NEGATIVE_INFINITY; // Or -Infinity?

  if (i === values.length || k === 0) return 0;

  return Math.max(
    values[i] + zeroOneKnapsack1(values, weights, k - weights[i], i + 1),
    zeroOneKnapsack1(values, weights, k, i + 1)
  );
};
// In above solution, T(n) = O(2 ^ n)
// Also, S(n) = O(n) which is the maximum size of the call stack.

// Top-down DP approach: recursive solution, this time utilizing the lookup table/memoization
const zeroOneKnapsack2 = (values, weights, k, i = 0) => {
  lookup["knapsack2"]++; // To track how many times we called this function (each call is a node in the call tree)

  if (lookup[`(${i}, ${k})`]) return lookup[`(${i}, ${k})`];

  if (k < 0) return Number.NEGATIVE_INFINITY; // Or -Infinity?

  if (i === values.length || k === 0) return 0;

  lookup[`(${i}, ${k})`] = Math.max(
    values[i] + zeroOneKnapsack2(values, weights, k - weights[i], i + 1),
    zeroOneKnapsack2(values, weights, k, i + 1)
  );
  return lookup[`(${i}, ${k})`];
};
// In above solution, T(n) = O(n * k)
// Also, S(n) = O(n * k) which is the maximum size of the memoization table.

// Testing...
console.time("Execution Time");
console.log(
  zeroOneKnapsack1([20, 30, 15, 25, 10], [6, 13, 7, 10, 3], 20),
  lookup["knapsack1"]
); // 55 45(no. of nodes in the call tree)
console.timeEnd("Execution Time"); //Around 6.146ms on my device

console.time("Execution Time");
console.log(
  zeroOneKnapsack2([20, 30, 15, 25, 10], [6, 13, 7, 10, 3], 20),
  lookup["knapsack2"]
); // 55 41(no. of nodes in the call tree)
console.timeEnd("Execution Time"); //Around 0.626ms on my device

// console.log(lookup); // Just to log the lookup....
