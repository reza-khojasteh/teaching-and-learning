// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

// const binarySearch = (nums, left, right, target) => {
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     const foundVal = nums[mid];
//     if (foundVal === target) {
//       return mid;
//     } else if (foundVal < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }

//   return -1;
// };

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// const searchRange = (nums, target) => {
//   if (nums.length < 1) return [-1, -1];
//   const firstPos = binarySearch(nums, 0, nums.length - 1, target);

//   if (firstPos === -1) return [-1, -1];

//   let endPos = firstPos,
//     startPos = firstPos,
//     temp1,
//     temp2;

//   while (startPos !== -1) {
//     temp1 = startPos;
//     startPos = binarySearch(nums, 0, startPos - 1, target);
//   }
//   startPos = temp1;

//   while (endPos !== -1) {
//     temp2 = endPos;
//     endPos = binarySearch(nums, endPos + 1, nums.length - 1, target);
//   }
//   endPos = temp2;

//   return [startPos, endPos];
// };

// Or even a better solution:

const lowerBoundSearch = (x, list) => {
  let low = 0;
  let high = list.length - 1;
  let mid;

  while (low < high) {
    mid = Math.floor((low + high) / 2);

    if (x <= list[mid]) high = mid;
    else low = mid + 1;
  }

  if (list[low] === x)
    return low; // Or we can do the same for 'high' because at this point, low === high.
  else return -1; // Not found!
};

const upperBoundSearch = (x, list) => {
  let low = 0;
  let high = list.length - 1;
  let mid;

  while (low < high) {
    mid = Math.floor((low + high) / 2);

    if (x < list[mid]) high = mid;
    else low = mid + 1;
  }

  if (list[low] === x)
    return low; // For the special case that we have just one element on the list!
  else if (list[low - 1] === x) return low - 1;
  // Or we can do the same for 'high' because at this point, low === high.
  // Also Note that this is one more than what it should be, hence decreasing that by one!
  else return -1; // Not found!
};

// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
const searchRange = (nums, target) => [
  lowerBoundSearch(target, nums),
  upperBoundSearch(target, nums),
];
