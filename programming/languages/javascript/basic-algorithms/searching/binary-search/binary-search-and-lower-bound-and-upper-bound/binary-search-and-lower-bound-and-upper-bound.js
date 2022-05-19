// The order of all the following algorithms are O(log(n))
// Also, the last two could be combined by passing in a function to do the comparison (the rest are the same!)
const binarySearch = (x, list) => {
  let low = 0;
  let high = list.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);

    if (x === list[mid]) return mid;
    else if (x < list[mid]) high = mid - 1;
    else low = mid + 1;
  }

  return -1; // We have not found that!
};

// The lowerBoundSearch based on BS above (with minor modifications)
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

// The upperBoundSearch based on BS above (with minor modifications)
const upperBoundSearch = (x, list) => {
  let low = 0;
  let high = list.length - 1;
  let mid;

  while (low < high) {
    mid = Math.floor((low + high) / 2);

    if (x < list[mid]) high = mid;
    else low = mid + 1;
  }

  if (list[low - 1] === x) return low - 1;
  // Or we can do the same for 'high' because at this point, low === high.
  // Also Note that this is one more than what it should be, hence decreasing that by one!
  else return -1; // Not found!
};

// Testing...
let nums = [1, 2];
console.log(binarySearch(2, nums)); // returns 1

nums = [1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 6, 8, 9];
console.log(binarySearch(3, nums)); // returns 7 in this example which is neither the first nor the last!
//Even worse, if we add some elements to or remove some from the end of the array, the result would be different, each time we run(which is unreliable!)

console.log(lowerBoundSearch(3, nums)); // returns 5 which is the actual first index of '3' in this example.

console.log(upperBoundSearch(3, nums)); // returns 8 which is the actual last index of '3' in this example.

// Hence, to get the number of a specific element in the sorted array, we can do
console.log(upperBoundSearch(3, nums) - lowerBoundSearch(3, nums) + 1); // returns 4 in this example

// And note that for a non-existent element, such as 7 in this case:
console.log(upperBoundSearch(7, nums) - lowerBoundSearch(7, nums)); // returns 0 in this example
