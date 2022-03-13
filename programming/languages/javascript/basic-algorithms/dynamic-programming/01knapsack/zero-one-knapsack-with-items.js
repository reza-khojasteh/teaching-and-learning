// Lookup table/memoization
const lookup = {
  knapsack1: 0, //represents the number of times zeroOneKnapsackWithItems1 has been called
  knapsack2: 0, //represents the number of times zeroOneKnapsackWithItems2 has been called
};

// Recursive solution: not a DP solution!
const zeroOneKnapsackWithItems1 = (values, weights, items, k, i = 0) => {
  lookup["knapsack1"]++; // To track how many times we called this function (each call is a node in the call tree)

  if (k < 0) {
    return { value: Number.NEGATIVE_INFINITY /*Or -Infinity?*/, items };
  }

  if (i === values.length || k === 0) return { value: 0, items };

  const returnedValueWithCurrentItem = zeroOneKnapsackWithItems1(
    values,
    weights,
    items,
    k - weights[i],
    i + 1
  );
  const valueWithCurrentItem = values[i] + returnedValueWithCurrentItem.value;

  const returnedValueWithoutCurrentItem = zeroOneKnapsackWithItems1(
    values,
    weights,
    items,
    k,
    i + 1
  );
  const valueWithoutCurrentItem = returnedValueWithoutCurrentItem.value;

  if (valueWithCurrentItem > valueWithoutCurrentItem) {
    items = [i, ...returnedValueWithCurrentItem.items];
    return { value: valueWithCurrentItem, items };
  } else {
    items = returnedValueWithoutCurrentItem.items;
    return { value: valueWithoutCurrentItem, items };
  }
};
// In above solution, T(n) = O(2 ^ n)
// Also, S(n) = O(n) which is the maximum size of the call stack.

// Top-down DP approach: recursive solution, this time utilizing the lookup table/memoization
const zeroOneKnapsackWithItems2 = (values, weights, items, k, i = 0) => {
  lookup["knapsack2"]++; // To track how many times we called this function (each call is a node in the call tree)

  if (lookup[`(${i}, ${k})`]) return lookup[`(${i}, ${k})`];

  if (k < 0) {
    return { value: Number.NEGATIVE_INFINITY /*Or -Infinity?*/, items };
  }

  if (i === values.length || k === 0) return { value: 0, items };

  const returnedValueWithCurrentItem = zeroOneKnapsackWithItems2(
    values,
    weights,
    items,
    k - weights[i],
    i + 1
  );
  const valueWithCurrentItem = values[i] + returnedValueWithCurrentItem.value;

  const returnedValueWithoutCurrentItem = zeroOneKnapsackWithItems2(
    values,
    weights,
    items,
    k,
    i + 1
  );
  const valueWithoutCurrentItem = returnedValueWithoutCurrentItem.value;

  if (valueWithCurrentItem > valueWithoutCurrentItem) {
    items = [i, ...returnedValueWithCurrentItem.items];
    lookup[`(${i}, ${k})`] = { value: valueWithCurrentItem, items };
    return lookup[`(${i}, ${k})`];
  } else {
    items = returnedValueWithoutCurrentItem.items;
    lookup[`(${i}, ${k})`] = { value: valueWithoutCurrentItem, items };
    return lookup[`(${i}, ${k})`];
  }
};
// In above solution, T(n) = O(n * k)
// Also, S(n) = O(n * k) which is the maximum size of the memoization table.

// Testing...
console.time("Execution Time");
const result1 = zeroOneKnapsackWithItems1(
  [20, 30, 15, 25, 10],
  [6, 13, 7, 10, 3],
  [],
  20
);
console.log(result1.value, result1.items, lookup["knapsack1"]); // 55 [ 0, 3, 4 ] 45(no. of nodes in the call tree)
console.timeEnd("Execution Time"); //Around 7.612ms on my device
console.log();

console.time("Execution Time");
const result2 = zeroOneKnapsackWithItems1(
  [20, 5, 10, 40, 15, 25],
  [1, 2, 3, 8, 7, 4],
  [],
  10
);
console.log(result2.value, result2.items, lookup["knapsack1"]); // 60 [ 0, 3 ] 122(no. of nodes in the call tree)
console.timeEnd("Execution Time"); //Around 0.288ms on my device
console.log();

console.time("Execution Time");
const result3 = zeroOneKnapsackWithItems1(
  [55, 10, 47, 5, 4, 50, 8, 61, 85, 87],
  [95, 4, 60, 32, 23, 72, 80, 62, 65, 46],
  [],
  269
);
console.log(result3.value, result3.items, lookup["knapsack1"]); // 295 [ 1, 2, 3, 7, 8, 9 ] 1571(no. of nodes in the call tree)
console.timeEnd("Execution Time"); //Around 1.782ms on my device
console.log();

console.time("Execution Time");
const result4 = zeroOneKnapsackWithItems1(
  [
    44, 46, 90, 72, 91, 40, 75, 35, 8, 54, 78, 40, 77, 15, 61, 17, 75, 29, 75,
    63,
  ],
  [
    92, 4, 43, 83, 84, 68, 92, 82, 6, 44, 32, 18, 56, 83, 25, 96, 70, 48, 14,
    58,
  ],
  [],
  878
);
console.log(result4.value, result4.items, lookup["knapsack1"]); // 1024 [
//   0,  1,  2,  3,  4,  5,  6,
//   7,  8,  9, 10, 11, 12, 14,
//  16, 18, 19
// ] 2093406(no. of nodes in the call tree)
console.timeEnd("Execution Time"); //Around 71.168ms on my device
console.log();

console.time("Execution Time");
const result5 = zeroOneKnapsackWithItems2(
  [20, 30, 15, 25, 10],
  [6, 13, 7, 10, 3],
  [],
  20
);
console.log(result5.value, result5.items, lookup["knapsack2"]); // 55 [ 0, 3, 4 ] 41(no. of nodes in the call tree)
console.timeEnd("Execution Time"); //Around 0.575ms on my device
console.log();

console.time("Execution Time");
const result6 = zeroOneKnapsackWithItems2(
  [20, 5, 10, 40, 15, 25],
  [1, 2, 3, 8, 7, 4],
  [],
  10
);
console.log(result6.value, result6.items, lookup["knapsack2"]); // 60 [ 0, 3 ] 86(no. of nodes in the call tree)
console.timeEnd("Execution Time"); //Around 0.281ms on my device
console.log();

console.time("Execution Time");
const result7 = zeroOneKnapsackWithItems2(
  [55, 10, 47, 5, 4, 50, 8, 61, 85, 87],
  [95, 4, 60, 32, 23, 72, 80, 62, 65, 46],
  [],
  269
);
console.log(result7.value, result7.items, lookup["knapsack2"]); // 295 [ 1, 2, 3, 7, 8, 9 ] 1143(no. of nodes in the call tree)
console.timeEnd("Execution Time"); //Around 1.248ms on my device
console.log();

console.time("Execution Time");
const result8 = zeroOneKnapsackWithItems2(
  [
    44, 46, 90, 72, 91, 40, 75, 35, 8, 54, 78, 40, 77, 15, 61, 17, 75, 29, 75,
    63,
  ],
  [
    92, 4, 43, 83, 84, 68, 92, 82, 6, 44, 32, 18, 56, 83, 25, 96, 70, 48, 14,
    58,
  ],
  [],
  878
);
console.log(result8.value, result8.items, lookup["knapsack2"]); // 1024 [
//   0,  1,  2,  3,  4,  5,  6,
//   7,  8,  9, 10, 11, 12, 14,
//  16, 18, 19
// ] 16304(no. of nodes in the call tree)
console.timeEnd("Execution Time"); //Around 30.813ms on my device
console.log();
