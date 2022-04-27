// const minimumRemoveToMakeValidParentheses = (s) => {
//   let numOfParantheses = 0;
//   const stack = [];
//   let result = "";

//   for (let i = s.length - 1; i >= 0; i--) {
//     let currentChar = s.charAt(i);

//     if (currentChar === "(" && numOfParantheses - 1 >= 0) {
//       stack.push(currentChar);
//       numOfParantheses--;
//     } else if (currentChar === ")") {
//       stack.push(currentChar);
//       numOfParantheses++;
//     } else if (currentChar !== "(") {
//       // It is a lower-case!
//       stack.push(currentChar);
//     }
//   }

//   while (stack.length != 0) {
//     currentChar = stack.pop();

//     if (numOfParantheses === 0) result += currentChar;
//     else {
//       if (currentChar === ")") numOfParantheses--;
//       else result += currentChar;
//     }
//   }

//   return result;
// };
// T(n) = O(n) and S(n) = O(n)

// OR (another solution)

const minimumRemoveToMakeValidParentheses = (s) => {
  const res = s.split("");
  const stack = [];

  for (let i = 0; i < res.length; i++) {
    if (res[i] === "(") {
      stack.push(i);
    } else if (res[i] === ")" && stack.length) {
      stack.pop();
    } else if (res[i] === ")") {
      res[i] = "";
    }
  }

  while (stack.length) {
    const curIdx = stack.pop();
    res[curIdx] = "";
  }

  return res.join("");
};
// T(n) = O(n) and S(n) = O(n)

// Testing....
console.log(minimumRemoveToMakeValidParentheses("))(("));
console.log(minimumRemoveToMakeValidParentheses("a)bc(d)"));
console.log(minimumRemoveToMakeValidParentheses("(ab(c)d"));
console.log(minimumRemoveToMakeValidParentheses("lee(t(c)o)de)"));
console.log(minimumRemoveToMakeValidParentheses("a)b(c)d"));
