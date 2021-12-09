/**
 * @param {number[]} height
 * @return {number}
 */

/** Version 1: Brute Force */
// const findMaxWaterContainer = (heights) => {
//   let maxArea = 0;

//   for (let i = 0; i < heights.length - 1; i++) {
//     for (let j = i + 1; j < heights.length; j++) {
//       const height = Math.min(heights[i], heights[j]);
//       const width = j - i;
//       const area = height * width;
//       maxArea = Math.max(maxArea, area);
//     }
//   }

//   return maxArea;
// };
// T(n) = O(n ^ 2), S(n) = O(1)

/** Version 2: A better solution... */
const findMaxWaterContainer = function (heights) {
  let i = 0,
    j = heights.length - 1,
    maxArea = 0;

  while (i < j) {
    const height = Math.min(heights[i], heights[j]);
    const width = j - i;
    const area = height * width;
    maxArea = Math.max(maxArea, area);

    if (heights[i] <= heights[j]) {
      i++;
    } else {
      j--;
    }
  }

  return maxArea;
};
// T(n) = O(n), S(n) = O(1)

// Testing...
console.log(findMaxWaterContainer([4, 8, 1, 2, 3, 9]));
console.log(findMaxWaterContainer([7, 1, 2, 3, 9]));
console.log(findMaxWaterContainer([]));
console.log(findMaxWaterContainer([7]));
console.log(findMaxWaterContainer([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(findMaxWaterContainer([6, 9, 3, 4, 5, 8]));
