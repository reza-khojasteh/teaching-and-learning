// Javascript code to print all possible subsequences for a given Array using recursion

function findAllSubsequences(array, index, subsequence) {
  // Print the subsequence when reaching a leaf in the call tree
  if (index === array.length) {
    // Condition to avoid printing empty subsequences
    if (subsequence.length > 0) console.log(`[${subsequence}]`);
  } else {
    // 1-a: Add the element at the current index of the array to the beginning of the next-to-be-formed subsequences
    subsequence.push(array[index]);

    // 1-b: Find all subsequences which do include the element at the current index of the array
    findAllSubsequences(array, index + 1, subsequence);

    // 2-a: Remove the element at the current index of the array from the beginning of the next-to-be-formed subsequences
    subsequence.pop();

    // 2-b: And find all subsequences which don't include the element at the current index of the array
    findAllSubsequences(array, index + 1, subsequence);
  }
}

// Testing
const array = ["a", "b", "c"];
const subsequence = new Array();

findAllSubsequences(array, 0, subsequence);
