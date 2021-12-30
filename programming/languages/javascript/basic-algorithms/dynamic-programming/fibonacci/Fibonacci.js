// Lookup table/memoization
const lookup = {
  fib1: 0, //represents the number of times fib1 has been called
  fib2: 0, //represents the number of times fib2 has been called
};

// Recursive solution: not a DP solution!
// /**
//  * @param {number} n
//  * @return {number}
//  */
const fib1 = (n) => {
  lookup["fib1"]++; // To track how many times we called this function (each call is a node in the call tree)

  if (n === 0 || n === 1) {
    return n;
  } else {
    return fib1(n - 1) + fib1(n - 2);
  }
};
// In above solution, T(n) = O(φ ^ n) where φ ≈ 1.618
// Also, S(n) = n = O(n) which is the maximum size of the call stack.

// Top-down DP approach: recursive solution, this time utilizing the lookup table/memoization
// /**
//  * @param {number} n
//  * @return {number}
//  */
const fib2 = (n) => {
  lookup["fib2"]++; // To track how many times we called this function (each call is a node in the call tree)

  if (lookup[n]) {
    return lookup[n];
  } else if (n === 0 || n === 1) {
    return n;
  } else {
    lookup[n] = fib2(n - 1) + fib2(n - 2);
    return lookup[n];
  }
};
// In above solution, the number of subproblems is n + 1 and cost of solving each of the subproblems is O(1). Therefore, T(n) = (n + 1) * O(1) = O(n)
// Just note that it uses more space-- of O(n)[= number of entries added] * O(1)[= size of each key / value pair for Fibonacci] on lookup-- to do that but seems worth it!
// Also, S(n) = O(n) + (n + 1) * O(1) = O(n)
// Note that the size of call stack storing all these active recursive calls in O(n) in both cases. So, overall, adding memoization doesn't impact the space complexity in here -- O(n) + O(n) = O(n) -- [in some examples it does because either the number of the keys is not simply a "1 changing parameter," or the size of each value in each pair isn't just an integer and hence, not O(1)!].

// Bottom-up DP approach: an iterative solution, this time utilizing tabulation
const fib3 = (n) => {
  const dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i < dp.length; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
// In above solution, T(n) = (n - 1) * O(1) = O(n)
// Also, S(n) = (n + 1) * O(1) = O(n)

// Bottom-up DP approach: this time saving even more space!
const fib4 = (n) => {
  let current,
    previous,
    beforePrevious = 0;
  beforePrevious = 0;
  previous = 1;

  for (let i = 2; i <= n; i++) {
    current = previous + beforePrevious;
    beforePrevious = previous;
    previous = current;
  }
  return previous;
};
// In above solution, T(n) = (n - 1) * O(1) = O(n) and hence, no change.
// But S(n) = 3 = O(1)

// Testing....
console.time("Execution Time");
console.log(fib1(45), lookup["fib1"]); //1134903170 3672623805(no. of nodes in the call tree)
console.timeEnd("Execution Time"); //Around 17 seconds on my device

console.time("Execution Time");
console.log(fib2(45), lookup["fib2"]); //1134903170 89(no. of nodes in the call tree)
console.timeEnd("Execution Time"); //Around 0.45 milliseconds on my device!

console.time("Execution Time");
console.log(fib3(45)); //1134903170
console.timeEnd("Execution Time"); //Around 0.25 milliseconds on my device!

console.time("Execution Time");
console.log(fib4(45)); //1134903170
console.timeEnd("Execution Time"); //Around 0.25 milliseconds on my device (with saving more space of course!)
