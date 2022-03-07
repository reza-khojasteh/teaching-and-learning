/**
 * @param {number} n
 * @return {array}
 */
const parenthesesGenerator = (n) => {
  const combinations = []; // This array will hold all combinations at the end.

  const generateParantheses = (sum, plusNum, minusNum, combination) => {
    // We can't have a ')' without first having a '('.
    if (sum < 0) return;
    // Whenever the sum is 0 and we have used all parantheses, we add the current combination to the end of 'combinations' array....
    else if (sum === 0 && plusNum === 0 && minusNum === 0)
      combinations.push(combination);
    else {
      // Recursive calls....

      if (plusNum > 0) {
        // We still can add one '(' to the end of our current combination, hence adding one to the sum:
        combination += "("; // Adding '(' to the end of current combination,
        generateParantheses(sum + 1, plusNum - 1, minusNum, combination); // Continue with the rest recursively, and
        combination = combination.slice(0, combination.length - 1); // Removing '(' from the end of combination.
      }

      if (minusNum > 0) {
        // We still can add one ')' to the end of our current combination, hence deducting one from the sum:
        combination += ")"; // Adding ')' to the end of current combination,
        generateParantheses(sum - 1, plusNum, minusNum - 1, combination); // Continue with the rest recursively, and
        combination = combination.slice(0, combination.length - 1); // Removing ')' from the end of combination (this line is redundant, it's just here for symmetry ;-)
      }
    }
  };

  generateParantheses(0, n, n, "");

  return combinations;
};

//OR (Another solution for 'generateParantheses' function; a bit worse though!)

// const generateParantheses = (n, diff, combination) => {
//   if (diff < 0 || diff > n) return;
//   else if (n === 0) {
//     if (diff === 0) combinations.push(combination);
//   } else {
//     combination += "(";
//     generateParantheses(n - 1, diff + 1, combination);
//     combination = combination.slice(0, combination.length - 1);
//     combination += ")";
//     generateParantheses(n - 1, diff - 1, combination);
//     combination = combination.slice(0, combination.length - 1); // This line is redundant, it's just here for symmetry ;-)
//   }
// };
// // And then call it like:
// generateParantheses(2 * n, 0, "");

console.log(parenthesesGenerator(3));
