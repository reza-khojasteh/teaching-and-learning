/** Version 1: Brute Force */
// const buildFinalStringArray = (string) => {
//   const builtString = [];

//   for (let p = 0; p < string.length; p++) {
//     if (string[p] !== "#") {
//       builtString.push(string[p]);
//     } else {
//       builtString.pop();
//     }
//   }

//   return builtString;
// };

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// const compareBackspaceStrings = (s, t) => {
//   const finalS = buildFinalStringArray(s);
//   const finalT = buildFinalStringArray(t);

//   if (finalS.length !== finalT.length) {
//     return false;
//   } else {
//     for (let p = 0; p < finalS.length; p++) {
//       if (finalS[p] !== finalT[p]) {
//         return false;
//       }
//     }
//   }

//   return true;
// };
// T(m, n) = O(m + n), S(m, n) = O(m + n)

/** Version 2: A better solution... */
// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
const compareBackspaceStrings = (s, t) => {
  let p1 = s.length - 1,
    p2 = t.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (s[p1] === "#") {
      let backCount = 2;

      while (backCount > 0) {
        p1--;
        backCount--;

        if (s[p1] === "#") {
          backCount += 2;
        }
      }
    }

    if (t[p2] === "#") {
      let backCount = 2;

      while (backCount > 0) {
        p2--;
        backCount--;

        if (t[p2] === "#") {
          backCount += 2;
        }
      }
    }

    if (s[p1] !== t[p2]) {
      return false;
    } else {
      p1--;
      p2--;
    }
  }

  return true;
};
// T(m, n) = O(m + n), S(m, n) = O(1)

// Testing...
console.log(compareBackspaceStrings("az#z", "ab#z"));
console.log(compareBackspaceStrings("ab##", "c#d#"));
console.log(compareBackspaceStrings("a##c", "#a#c"));
console.log(compareBackspaceStrings("a#c", "b"));
