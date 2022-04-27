// // This is the recursive solution:
// const validParantheses = (s, i) => {
//   if (s === "") return true;

//   if ((s.length % 2 !== 0 && i === 0) || i === s.length) return false;

//   const top = s.charAt(i);

//   if (top === "(" || top === "[" || top === "{")
//     return validParantheses(s, i + 1);
//   else {
//     switch (top) {
//       case ")":
//         if (s.charAt(i - 1) !== "(") return false;
//         break;
//       case "}":
//         if (s.charAt(i - 1) !== "{") return false;
//         break;
//       case "]":
//         if (s.charAt(i - 1) !== "[") return false;
//         break;
//     }
//     return validParantheses(s.slice(0, i - 1) + s.slice(i + 1), i - 1);
//   }
// };

// // Testing....
// console.log(validParantheses("", 0));
// console.log(validParantheses("(", 0));
// console.log(validParantheses(")", 0));
// console.log(validParantheses("()", 0));
// console.log(validParantheses("()[]", 0));
// console.log(validParantheses("()[{}]", 0));
// console.log(validParantheses("({[()]}[])", 0));
// console.log(validParantheses("((", 0));

// And the following is an iterative one (using a stack!)
// class StackNode {
//   constructor(val, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }

// class Stack {
//   constructor(val) {
//     this.top = new StackNode(val);
//   }

//   push(val) {
//     const newNode = new StackNode(val, this.top);
//     this.top = newNode;
//   }

//   pop() {
//     if (this.top !== null) {
//       const prevTop = this.top;
//       this.top = this.top.next;
//       return prevTop.val;
//     } else throw new Error("Stack is Empty");
//   }

//   peek() {
//     if (this.top !== null) {
//       return this.top.val;
//     } else throw new Error("Stack is Empty");
//   }
// }

// const paranthesesValidator = (s) => {
//   if (s === "") return true;

//   if (s.length % 2 !== 0) return false;

//   let currentChar = s.charAt(0);
//   if (currentChar === ")" || currentChar === "}" || currentChar === "]")
//     return false;

//   const stack = new Stack(s.charAt(0));

//   for (let i = 1; i < s.length; i++) {
//     currentChar = s.charAt(i);

//     if (currentChar === "(" || currentChar === "{" || currentChar === "[")
//       stack.push(currentChar);
//     else {
//       try {
//         let top = stack.pop();

//         if (currentChar === ")" && top !== "(") return false;
//         else if (currentChar === "}" && top !== "{") return false;
//         else if (currentChar === "]" && top !== "[") return false;
//       } catch (e) {
//         return false;
//       }
//     }
//   }

//   try {
//     stack.peek();
//     return false;
//   } catch (e) {
//     return true;
//   }
// };
// T(n) = O(n) and S(n) = O(n)

// And yet even, another solution
const parens = {
  "(": ")",
  "{": "}",
  "[": "]",
};

var paranthesesValidator = (s) => {
  if (s.length === 0) return true;

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (parens[s[i]]) {
      stack.push(s[i]);
    } else {
      const leftBracket = stack.pop();
      const correctBracket = parens[leftBracket];
      if (s[i] !== correctBracket) return false;
    }
  }

  return stack.length === 0;
};
// T(n) = O(n) and S(n) = O(n)

// Testing....
console.log(paranthesesValidator(""));
console.log(paranthesesValidator("("));
console.log(paranthesesValidator(")"));
console.log(paranthesesValidator("()"));
console.log(paranthesesValidator("()[]"));
console.log(paranthesesValidator("()[{}]"));
console.log(paranthesesValidator("({[()]}[])"));
console.log(paranthesesValidator("(("));
