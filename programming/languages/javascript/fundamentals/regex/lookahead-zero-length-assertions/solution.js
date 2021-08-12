// Regular expressions or RegEx are sequences of characters that define a pattern in a string.We can use regular expressions to do things like remove certain characters in a string or check whether a string matches a set of criteria.
// Regular expressions are really difficult to learn. And many developers end up using different tools and websites to help them construct regular expressions.

// Lookahead and lookbehind, collectively called “lookaround”, are zero - length assertions.Lookaround actually matches characters, but then gives up the match, returning only the result: match or no match.That is why they are called “assertions”.They do not consume characters in the string, but only assert whether a match is possible or not.Lookaround allows you to create regular expressions that are impossible to create without them, or that would get very longwinded without them: https://www.regular-expressions.info/lookaround.html

//In answer to "RegEx to make sure that the string contains at least one lower case char, upper case char, digit and symbol," you could also check: https://stackoverflow.com/questions/1559751/regex-to-make-sure-that-the-string-contains-at-least-one-lower-case-char-upper

//Lookaheads are of zero width meaning they do not consume any string. In simple words the position of checking resets to the original position after each condition of lookahead is met. You could learn more on that at: https://riptutorial.com/regex/example/18996/a-password-containing-at-least-1-uppercase--1-lowercase--1-digit--1-special-character-and-have-a-length-of-at-least-of-10

// Also, have a look at: https://stackoverflow.com/questions/43919606/i-could-not-seem-to-understand-a-z-this-expression to know more about non-greedy version of regex (.*? is a non-greedy match against anything or nothing. The question-mark here also does not mean 'optional'. '.*?' means "ignore zero or more of any character, trying to ignore as few as possible whilst still matching the rest of this expression")!

//I also found this website intersting to explore regex: https://regex101.com/

function checkPassword(password) {
  //Based on above explanations, '.*' should do the same as '.+'!
  let oneLowerCaseLetter = /(?=.+[a-z])/;
  let oneUpperCaseLetter = /(?=.+[A-Z])/;
  let oneDigit = /(?=.+[0-9])/;
  let oneSpecialCharacter = /(?=.+[!@#$%^&*])/;
  let minimumEightCharacters = /(?=.{8,})/;

  let isValid =
    oneLowerCaseLetter.test(password) &&
    oneUpperCaseLetter.test(password) &&
    oneDigit.test(password) &&
    oneSpecialCharacter.test(password) &&
    minimumEightCharacters.test(password);
  //OR
  // let isValid = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W)/.test(
  //   password
  // );

  return isValid
    ? "Your password is valid"
    : "Your password is invalid, try again";
}

console.log(checkPassword("ab#0"));
console.log(checkPassword("9Ab!4567"));
