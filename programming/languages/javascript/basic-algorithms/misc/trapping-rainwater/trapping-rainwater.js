/**
 * @param {number[]} height
 * @return {number}
 */

/** Version 1: Brute Force */
// const findTrappingRainwater = (height) => {
//   let totalWater = 0;

//   for (let p = 0; p < height.length; p++) {
//     let leftP = p,
//       rightP = p,
//       maxLeft = 0,
//       maxRight = 0;

//     while (leftP >= 0) {
//       maxLeft = Math.max(maxLeft, height[leftP]);
//       leftP--;
//     }

//     while (rightP < height.length) {
//       maxRight = Math.max(maxRight, height[rightP]);
//       rightP++;
//     }

//     const currentWater = Math.min(maxLeft, maxRight) - height[p];

//     if (currentWater >= 0) {
//       totalWater += currentWater;
//     }
//   }

//   return totalWater;
// };
// T(n) = O(n ^ 2), S(n) = O(1)

/** Version 2: A better solution... */
// const findTrappingRainwater = function (height) {
//   let left = 0,
//     right = height.length - 1,
//     totalWater = 0,
//     maxLeft = 0,
//     maxRight = 0;

//   while (left < right) {
//     if (height[left] <= height[right]) {
//       if (height[left] >= maxLeft) {
//         maxLeft = height[left];
//       } else {
//         totalWater += maxLeft - height[left];
//       }

//       left++;
//     } else {
//       if (height[right] >= maxRight) {
//         maxRight = height[right];
//       } else {
//         totalWater += maxRight - height[right];
//       }

//       right--;
//     }
//   }

//   return totalWater;
// };
// T(n) = O(n), S(n) = O(1)

// OR

/** Another version 2: A better solution... */
const findTrappingRainwater = (height) => {
  const maxHeightIndex = height.indexOf(Math.max(...height));
  if (maxHeightIndex === -1) return 0;

  let trappingWater = 0;

  let beginnigIndex = 0;
  let currentMax = height[beginnigIndex];

  while (beginnigIndex !== maxHeightIndex) {
    if (height[beginnigIndex + 1] >= currentMax)
      currentMax = height[beginnigIndex + 1];
    else trappingWater += currentMax - height[beginnigIndex + 1];

    beginnigIndex++;
  }

  let endIndex = height.length - 1;
  currentMax = height[endIndex];

  while (endIndex !== maxHeightIndex) {
    if (height[endIndex - 1] >= currentMax) currentMax = height[endIndex - 1];
    else trappingWater += currentMax - height[endIndex - 1];

    endIndex--;
  }

  return trappingWater;
};
// T(n) = O(n), S(n) = O(1)

// Testing...
console.log(findTrappingRainwater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
console.log(findTrappingRainwater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(findTrappingRainwater([4, 2, 0, 3, 2, 5]));
console.log(findTrappingRainwater([]));
console.log(findTrappingRainwater([3]));
console.log(findTrappingRainwater([3, 4, 3]));
console.log(findTrappingRainwater([2, 0, 2]));
