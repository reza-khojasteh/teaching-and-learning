const minimumRemoveToMakeValidParentheses = (s) => {
  let numOfParantheses = 0;
  const stack = [];
  let result = "";

  for (let i = s.length - 1; i >= 0; i--) {
    let currentChar = s.charAt(i);

    if (currentChar === "(" && numOfParantheses - 1 >= 0) {
      stack.push(currentChar);
      numOfParantheses--;
    } else if (currentChar === ")") {
      stack.push(currentChar);
      numOfParantheses++;
    } else if (currentChar !== "(") {
      // It is a lower-case!
      stack.push(currentChar);
    }
  }

  //   console.log(stack);

  while (stack.length != 0) {
    currentChar = stack.pop();

    if (numOfParantheses === 0) result += currentChar;
    else {
      if (currentChar === ")") numOfParantheses--;
      else result += currentChar;
    }
  }

  return result;
};

// Testing....
console.log(minimumRemoveToMakeValidParentheses("))(("));
console.log(minimumRemoveToMakeValidParentheses("a)bc(d)"));
console.log(minimumRemoveToMakeValidParentheses("(ab(c)d"));
console.log(minimumRemoveToMakeValidParentheses("lee(t(c)o)de)"));
console.log(minimumRemoveToMakeValidParentheses("a)b(c)d"));
