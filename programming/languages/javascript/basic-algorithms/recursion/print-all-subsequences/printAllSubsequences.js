// Javascript code to print all possible subsequences for a given Array using recursion
/**
 * @param {array} array
 * @param {number} index
 * @param {array} subsequence
 */
function printAllSubsequences(array, index, subsequence) {
  // Print the subsequence when reaching a leaf in the call tree
  if (index === array.length) {
    // Condition to avoid printing empty subsequences
    if (subsequence.length > 0) console.log(`[${subsequence}]`);
  } else {
    // Solution 1:
    // 1-a: Add the element at the current index of the array to the beginning of the next-to-be-formed subsequences
    subsequence.push(array[index]);
    // 1-b: Print all subsequences which do include the element at the current index of the array
    printAllSubsequences(array, index + 1, subsequence);
    // 2-a: Remove the element at the current index of the array from the beginning of the next-to-be-formed subsequences
    subsequence.pop();
    // 2-b: And print all subsequences which don't include the element at the current index of the array
    printAllSubsequences(array, index + 1, subsequence);

    // OR Solution 2:
    // // 1: Print all Subsequences including the element at current index
    // printAllSubsequences(array, index + 1, subsequence.concat([array[index]]));

    // // 2: Print all Subsequences excluding the element at current index
    // printAllSubsequences(array, index + 1, subsequence);
  }
}

// Testing
const array = ["a", "b", "c"];
const subsequence = new Array();

printAllSubsequences(array, 0, subsequence);
