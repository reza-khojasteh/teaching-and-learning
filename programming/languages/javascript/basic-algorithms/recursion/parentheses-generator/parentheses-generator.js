const combinations = [];

const parenthesesGenerator = (sum, plusNum, minusNum, combination) => {
  if (sum < 0) return;
  else if (sum === 0 && plusNum === 0 && minusNum === 0)
    combinations.push(combination);
  else {
    if (plusNum > 0) {
      combination += "(";
      parenthesesGenerator(sum + 1, plusNum - 1, minusNum, combination);
      combination = combination.slice(0, combination.length - 1);
    }
    if (minusNum > 0) {
      combination += ")";
      parenthesesGenerator(sum - 1, plusNum, minusNum - 1, combination);
      combination = combination.slice(0, combination.length - 1); // This line is redundant, it's just here for symmetry ;-)
    }
  }
};
parenthesesGenerator(0, 3, 3, "");

// OR (Another solution; a bit worse though!)

// const parenthesesGenerator = (n, diff, combination) => {
//   if (diff < 0 || diff > n) return;
//   else if (n === 0) {
//     if (diff === 0) combinations.push(combination);
//   } else {
//     combination += "(";
//     parenthesesGenerator(n - 1, diff + 1, combination);
//     combination = combination.slice(0, combination.length - 1);
//     combination += ")";
//     parenthesesGenerator(n - 1, diff - 1, combination);
//     combination = combination.slice(0, combination.length - 1); // This line is redundant, it's just here for symmetry ;-)
//   }
// };
// parenthesesGenerator(2 * 3, 0, "");

console.log(combinations);
