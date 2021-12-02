/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const lookup = {};

  for (let i = 0; i < nums.length; i++) lookup[nums[i]] = i;

  for (let p1 = 0; p1 < nums.length; p1++) {
    let p2 = lookup[target - nums[p1]];
    if (p2 !== undefined && p2 !== p1) {
      return [p1, p2];
    }
  }

  return null;
};

// Testing...
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([2], 9));
console.log(twoSum([], 9));
