// const sortedArray = array.slice.sort((a, b) => {
//   //Assuming a and b are any two elements in the array:
//   //if a should come before b, return a negative like -1
//   //if b should come before a, return a positive like 1
//   //if we should leave a and b in the order we found them, return 0
// });

// const ascending = (a, b) => {
//   if (a < b) return -1;
//   else if (a > b) return 1;
//   else return 0;
// };

// const descending = (a, b) => {
//   if (a < b) return 1;
//   else if (a > b) return -1;
//   else return 0;
// };

// console.log([2, 1, 3].slice().sort(ascending));
// console.log([2, 1, 3].slice().sort(descending));
// console.log(["banana", "apple", "carrot"].slice().sort(ascending));
// console.log(["b", "a", "c"].slice().sort(descending));

// OR even simpler (which works for just numbers!)
const ascending = (a, b) => a - b;

const descending = (a, b) => b - a;

console.log([2, 1, 3].slice().sort(ascending));
console.log([2, 1, 3].slice().sort(descending));
