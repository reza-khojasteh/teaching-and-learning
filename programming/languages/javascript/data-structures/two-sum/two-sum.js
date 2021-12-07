/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/** Version 1: Brute Force */
// const twoSum = (nums, target) => {
//   for (let p1 = 0; p1 < nums.length - 1; p1++) {
//     const numberToFind = target - nums[p1];

//     for (let p2 = p1 + 1; p2 < nums.length; p2++) {
//       if (numberToFind === nums[p2]) {
//         return [p1, p2];
//       }
//     }
//   }

//   return null;
// };
// T(n) = O(n ^ 2), S(n) = O(1)

/** Version 2: Using A HashMap (JavaScript Obj.!) And Traversing The Array Twice */
// const twoSum = (nums, target) => {
//   const lookup = {};

//   for (let i = 0; i < nums.length; i++) lookup[nums[i]] = i;

//   for (let p1 = 0; p1 < nums.length; p1++) {
//     let p2 = lookup[target - nums[p1]];

//     if (p2 !== undefined && p2 !== p1) return [p1, p2];
//   }

//   return null;
// };
// T(n) = O(n), S(n) = O(n)

/**  Vresion 3: Using A HashMap (JavaScript Obj.!) And Traversing The Array Just Once! */
const twoSum = function (nums, target) {
  const numsMap = {};

  for (let p = 0; p < nums.length; p++) {
    const currentMapVal = numsMap[nums[p]];

    if (currentMapVal !== undefined) return [currentMapVal, p];
    else {
      const numberToFind = target - nums[p];
      numsMap[numberToFind] = p;
    }
  }

  return null;
};
// T(n) = O(n), S(n) = O(n)

// Testing...
console.log(twoSum([1, 3, 7, 9, 2], 11));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([2], 9));
console.log(twoSum([], 9));
