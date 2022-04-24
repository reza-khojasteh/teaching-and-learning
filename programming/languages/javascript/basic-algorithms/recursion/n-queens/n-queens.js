// An object used as a hash to count the frequencies of recursive calls!
const frequencies = {
  nQueens1: 0,
  nQueens2: 0,
};

const nQueens1 = (n, i, result, results) => {
  frequencies.nQueens1++;

  if (i === n) {
    for (let j = 0; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++)
        if (
          result[k] === result[j] ||
          k - j === Math.abs(result[k] - result[j])
        )
          return;
    }
    results.push([...result]);
    return;
  }

  for (let index = 0; index < n; index++) {
    result[i] = index;
    nQueens1(n, i + 1, result, results);
  }
};
// T(n) = O(n ^ n)

// OR a better way:

const nQueens2 = (n, i, remainedItems, columnPositions, results) => {
  frequencies.nQueens2++;

  if (i === n) results.push([...columnPositions]);
  else
    for (const key in remainedItems) {
      let doable = true;

      for (let index = 0; index < i; index++)
        if (i - index === Math.abs(remainedItems[key] - columnPositions[index]))
          doable = false;

      if (doable) {
        columnPositions[i] = remainedItems[key];
        delete remainedItems[key];

        nQueens2(n, i + 1, remainedItems, columnPositions, results);

        columnPositions.pop(); // Not really needed though! ;-)
        remainedItems[key] = +key;
      }
    }
};
// T(n) = O(n ^ 2 * n!)

// Testing...
const numberOfQueens = 8;
let results = [];
const result = [];
nQueens1(numberOfQueens, 0, result, results);
console.log(results, results.length, frequencies.nQueens1); // ... 92 19173961

results = [];
let remainedItems = {};
for (let i = 0; i < numberOfQueens; i++) {
  remainedItems[i] = i;
}
nQueens2(numberOfQueens, 0, remainedItems, [], results);
console.log(results, results.length, frequencies.nQueens2); // ... 92 2057
