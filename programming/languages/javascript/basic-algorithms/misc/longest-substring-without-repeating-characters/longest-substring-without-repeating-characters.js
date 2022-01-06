/** Version 1: Brute Force */
// /**
//  * @param {string} s
//  * @return {number}
//  */
// const lengthOfLongestSubstring = (s) => {
//   if (s.length <= 1) return s.length; // Even if removed, code works correctly!

//   let longest = 0;

//   for (let left = 0; left < s.length /*&& s.length - left > longest*/; left++) {
//     // The snippet in the comment above makes it 'a bit' more efficient/intelligent
//     const seenChars = {};
//     let currentLength = 0;

//     for (let right = left; right < s.length; right++) {
//       const currentChar = s[right];

//       if (!seenChars[currentChar]) {
//         currentLength++;
//         seenChars[currentChar] = true;
//         longest = Math.max(longest, currentLength);
//       } else {
//         break;
//       }
//     }
//   }

//   return longest;
// };
// T(n) = O(n ^ 2), S(n) = O(n)

/** Version 2: A (slightly) better solution... */
/**
 * @param {string} s
 * @return {number}
 */
//  function lengthOfLongestSubstring(inputStr) {
//   let maxLen = 1;
//   let subStr = inputStr[0];
//   // let result = subStr; // un-comment in case you want to print the result subStr

//   // Edge cases for zero or one char strings!
//   if (inputStr.length <= 1) {
//     maxLen = inputStr.length;
//     // console.log(`result: ${inputStr}`); // un-comment in case you want to print the result subStr
//     return maxLen;
//   }

//   for (let i = 1; i < inputStr.length; i++) {
//     let index = subStr.indexOf(inputStr[i]);
//     subStr += inputStr[i];

//     if (index >= 0) {
//       subStr = subStr.slice(index + 1);
//     } else if (subStr.length > maxLen) {
//       maxLen = subStr.length;
//       // result = subStr; // un-comment in case you want to print the result
//     }
//   }

//   // console.log(`result: ${result}`); // un-comment in case you want to print the result subStr
//   return maxLen;
// }
// // T(n) = O(n ^ 2), S(n) = O(n)

/** Version 3: A better solution... */
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  if (s.length <= 1) return s.length;

  const seen = {};
  let left = 0,
    longest = 0;

  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const previouslySeenChar = seen[currentChar];

    if (previouslySeenChar >= left) {
      left = previouslySeenChar + 1;
    }

    seen[currentChar] = right;

    longest = Math.max(longest, right - left + 1);
  }

  return longest;
};
// T(n) = O(n), S(n) = O(n)

// Testing...
console.log(lengthOfLongestSubstring("abccabbqwertyuiopxzghf"));
console.log(lengthOfLongestSubstring("abccabb"));
console.log(lengthOfLongestSubstring("abcdabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring("p"));
console.log(lengthOfLongestSubstring(""));
