/**
 * @param {number[]} height
 * @return {number}
 */
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
