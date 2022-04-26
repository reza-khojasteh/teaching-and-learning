const validParantheses = (s, i) => {
  if (s === "") return true;

  if ((s.length % 2 !== 0 && i === 0) || i === s.length) return false;

  const top = s.charAt(i);

  if (top === "(" || top === "[" || top === "{")
    return validParantheses(s, i + 1);
  else {
    switch (top) {
      case ")":
        if (s.charAt(i - 1) !== "(") return false;
        break;
      case "}":
        if (s.charAt(i - 1) !== "{") return false;
        break;
      case "]":
        if (s.charAt(i - 1) !== "[") return false;
        break;
    }
    return validParantheses(s.slice(0, i - 1) + s.slice(i + 1), i - 1);
  }
};

// Testing....
console.log(validParantheses("", 0));
console.log(validParantheses("(", 0));
console.log(validParantheses(")", 0));
console.log(validParantheses("()", 0));
console.log(validParantheses("()[]", 0));
console.log(validParantheses("()[{}]", 0));
console.log(validParantheses("({[()]}[])", 0));
console.log(validParantheses("((", 0));
