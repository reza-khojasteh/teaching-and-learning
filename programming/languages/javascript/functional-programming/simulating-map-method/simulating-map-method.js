// Simulating array's map function in JS using either array's for...of
const map = (arr, func) => {
  let newArray = [];
  for (const element of arr) newArray.push(func(element));
  return newArray;
};

//Or using array's forEach

// const map = (arr, func) => {
//   let newArray = [];
//   arr.forEach((element) => newArray.push(func(element)));
//   return newArray;
// };

// Or using array's reduce

// const map = (arr, func) => arr.reduce((acc, x) => [...acc, func(x)], []);

// Testing...
console.log(map([1, 2, 3], (x) => x * 2)); // Should be [2, 4, 6]
console.log(map([5, 6, 7, 8, 9, 10], (x) => -x)); // Should be [-5, -6, -7, -8, -9, -10]
console.log(map(["a", "b", "c", "d"], (x) => x.toUpperCase())); // Should be ['A', 'B', 'C', 'D']
