const nQueens = (n, i, remainedItems, columnPositions, results) => {
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

        nQueens(n, i + 1, remainedItems, columnPositions, results);

        columnPositions.pop(); // Not really needed though! ;-)
        remainedItems[key] = +key;
      }
    }
};
// T(n) = O(n ^ 2 * n!)

// Testing...
const numberOfQueens = 8;
const results = [];
const remainedItems = {};
for (let i = 0; i < numberOfQueens; i++) {
  remainedItems[i] = i;
}
nQueens(numberOfQueens, 0, remainedItems, [], results);
console.log(results, results.length);
