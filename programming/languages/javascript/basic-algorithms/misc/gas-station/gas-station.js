// Brute Force
// const canTraverse = (gasArray, costArray, start) => {
//   const n = gasArray.length;
//   let remaining = 0;
//   let i = start;
//   let started = false;

//   while (i !== start || !started) {
//     started = true;
//     remaining += gasArray[i] - costArray[i];

//     if (remaining < 0) return false;

//     i = (i + 1) % n;
//   }

//   return true;
// };

// const gasStation = (gasArray, costArray) => {
//   for (let index = 0; index < gasArray.length; index++) {
//     if (canTraverse(gasArray, costArray, index)) return index;
//   }
//   return -1;
// };

// A better way though
// /**
//  * @param {array} gasArray
//  * @param {array} costArray
//  * @return {number}
//  */
const gasStation = (gasArray, costArray) => {
  let remaining = 0;
  let previousRemaining = 0;
  let candidate = 0;

  for (let i = 0; i < gasArray.length; i++) {
    remaining += gasArray[i] - costArray[i];

    if (remaining < 0) {
      candidate = i + 1;
      previousRemaining = remaining;
      remaining = 0;
    }
  }

  if (candidate === gasArray.length || remaining + previousRemaining < 0)
    return -1;
  else return candidate;
};

// Testing....
const gasArray = [1, 5, 3, 3, 5, 3, 1, 3, 4, 5];
const costArray = [5, 2, 2, 8, 2, 4, 2, 5, 1, 2];
console.log(gasStation(gasArray, costArray));
