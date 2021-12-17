/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/** Version 1: Brute Force */
const buildFinalStringArray = (string) => {
  const builtString = [];

  for (let p = 0; p < string.length; p++) {
    if (string[p] !== "#") {
      builtString.push(string[p]);
    } else {
      builtString.pop();
    }
  }

  return builtString;
};

const compareBackspaceStrings = (s, t) => {
  const finalS = buildFinalStringArray(s);
  const finalT = buildFinalStringArray(t);

  if (finalS.length !== finalT.length) {
    return false;
  } else {
    for (let p = 0; p < finalS.length; p++) {
      if (finalS[p] !== finalT[p]) {
        return false;
      }
    }
  }

  return true;
};
// T(m, n) = O(m + n), S(m, n) = O(m + n)

// Testing...
console.log(compareBackspaceStrings("az#z", "ab#z"));
console.log(compareBackspaceStrings("ab##", "c#d#"));
console.log(compareBackspaceStrings("a##c", "#a#c"));
console.log(compareBackspaceStrings("a#c", "b"));
