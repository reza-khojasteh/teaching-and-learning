const findLine = (x0, y0, x1, y1) => {
  if (y0 === y1) return [0, y0];
  else if (x0 === x1) return [x0, null];
  else {
    const slope = (y1 - y0) / (x1 - x0);
    const intercept = y0 - slope * x0;
    return [slope, intercept];
  }
};

const maxPoints = (points) => {
  if (points.length === 1) return 1;

  const lines = {};

  for (let i = 0; i < points.length; i++)
    for (let j = i + 1; j < points.length; j++) {
      const [x0, y0] = points[i];
      const [x1, y1] = points[j];
      const line = findLine(x0, y0, x1, y1);
      if (!lines[line]) lines[line] = new Set();
      lines[line].add(i);
      lines[line].add(j);
    }

  const array = [];
  for (const line in lines) {
    array.push(lines[line].size);
  }
  console.log(array);

  return Math.max(...array);
};
// T(n) = O(n ^ 2) and S(n) = O(n ^ 2)

// Testing...
let points = [
  [3, 8],
  [4, 3],
  [5, 7],
  [6, 1],
  [9, 5],
  [10, 9],
  [11, 4],
  [14, 7],
  [15, 2],
  [15, 6],
  [16, 9],
  [19, 4],
];
console.log(maxPoints(points));

points = [
  [1, 1],
  [2, 2],
  [3, 3],
];
console.log(maxPoints(points));

points = [
  [1, 1],
  [3, 2],
  [5, 3],
  [4, 1],
  [2, 3],
  [1, 4],
];
console.log(maxPoints(points));
