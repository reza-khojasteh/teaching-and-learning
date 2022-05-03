// The brute force solution
// const maxSubarraySizeK = (array, k) => {
//   let max = 0;
//   let totalK;
//   // Note that for any k bigger than array.length, the following loop won't run at all, hence returning 0 at the end!
//   for (let i = 0; i < array.length - k + 1; i++) {
//     totalK = 0;

//     for (let j = i; j < i + k; j++) {
//       totalK += array[j];
//     }

//     max = Math.max(max, totalK);
//   }

//   return max;
// };
// T(n) = O(nk), S(n) = 1

// Another (better) solution using sliding-window technique
const maxSubarraySizeK = (array, k) => {
  let max = 0;
  let totalK = 0;

  if (k > array.length) return max;

  for (let i = 0; i < k; i++) {
    totalK += array[i];
    max = totalK;
  }

  for (let i = 0; i < array.length - k; i++) {
    totalK = totalK - array[i] + array[i + k];
    max = Math.max(max, totalK);
  }

  return max;
};
// T(n) = O(n), S(n) = 1

// Testing...
const array = [
  12, 9, 23, 17, 25, 19, 4, 8, 21, 34, 26, 17, 19, 14, 27, 22, 15, 7, 2, 14, 5,
  18, 24,
];

console.log(maxSubarraySizeK(array, 5));
