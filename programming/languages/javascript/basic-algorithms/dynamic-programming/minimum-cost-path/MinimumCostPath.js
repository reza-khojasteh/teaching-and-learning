// Lookup/memoization table
const lookup = {
  cost1: 0, //represents the number of times cost1 has been called
  cost2: 0, //represents the number of times cost2 has been called
};

//Recursive solution
const cost1 = (matrix, i = 0, j = 0) => {
  const n = matrix.length;
  const m = matrix[0].length;

  lookup["cost1"]++; // To track how many times we called this function (each call is a node in the call tree)

  if (i === n - 1 && j === m - 1) {
    return matrix[i][j];
  } else if (i === n - 1) {
    return matrix[i][j] + cost1(matrix, i, j + 1);
  } else if (j === m - 1) {
    return matrix[i][j] + cost1(matrix, i + 1, j);
  } else {
    return (
      matrix[i][j] + Math.min(cost1(matrix, i + 1, j), cost1(matrix, i, j + 1))
    );
  }
};
// In above solution, the number of subproblems is 2 and number of levels of the recursion tree is (n + m -1), therefore, T(n, m) = O(2 ^ (n + m))
// Also, S(n, m) = n + m - 1 and therefore, is equal to O(n + m)

//Recursive solution, this time utilizing the lookup table
const cost2 = (matrix, i = 0, j = 0) => {
  const n = matrix.length;
  const m = matrix[0].length;

  lookup["cost2"]++; // To track how many times we called this function (each call is a node in the call tree)

  if (lookup[`(${i}, ${j})`]) {
    return lookup[`(${i}, ${j})`];
  } else if (i === n - 1 && j === m - 1) {
    return matrix[i][j];
  } else if (i === n - 1) {
    lookup[`(${i}, ${j})`] = matrix[i][j] + cost2(matrix, i, j + 1);
    return lookup[`(${i}, ${j})`];
  } else if (j === m - 1) {
    lookup[`(${i}, ${j})`] = matrix[i][j] + cost2(matrix, i + 1, j);
    return lookup[`(${i}, ${j})`];
  } else {
    lookup[`(${i}, ${j})`] =
      matrix[i][j] + Math.min(cost2(matrix, i + 1, j), cost2(matrix, i, j + 1));
    return lookup[`(${i}, ${j})`];
  }
};
// In above solution, T(n, m) = nm * O(1) = O(nm)
// Also, S(n, m) = O(n + m) + nm = O(nm)

//Testing....
console.time("Execution Time");
console.log(
  cost1([
    [3, 2, 12, 15, 10],
    [6, 19, 7, 11, 17],
    [8, 5, 12, 32, 21],
    [3, 20, 2, 9, 7],
  ]),
  lookup["cost1"]
); //52 125
console.timeEnd("Execution Time"); //Around 7 milliseconds on my device

console.time("Execution Time");
console.log(
  cost2([
    [3, 2, 12, 15, 10],
    [6, 19, 7, 11, 17],
    [8, 5, 12, 32, 21],
    [3, 20, 2, 9, 7],
  ]),
  lookup["cost2"]
); //52 32
console.timeEnd("Execution Time"); //Around 0.5 milliseconds on my device
