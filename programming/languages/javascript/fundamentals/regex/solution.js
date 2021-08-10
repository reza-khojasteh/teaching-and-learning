// Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec() and test() methods of RegExp, and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String. This chapter describes JavaScript regular expressions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

// If you're seeing the error "TypeError: replaceAll is not a function", it is likely due to the method not implemented/supported by the browser version (or the Node.js version) that you're using. As a substitute for String.prototype.replaceAll(), you may use the String.prototype.replace() method with a regular expression that has the global ("g") flag set. It works in the same way and has great browser support.: https://www.designcise.com/web/tutorial/how-to-fix-replaceall-is-not-a-function-javascript-error

// It also seems that NodeJS supports replaceAll in 15.x versionshttps://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript

function urlify(blogTitle) {
  const punctuation = /[.,/#!$%^&*;:{}=!\-_`~()'"]/g;
  // const punctuation = new RegExp('.,/#!$%^&*;:{}=-_`~()\'"', 'g');
  // const punctuation = new RegExp(/.,\/#!$%^&*;:{}=-_`~()'"/, 'g');

  const blogTitleWithoutPunctuation = blogTitle.replace(punctuation, "");
  return blogTitleWithoutPunctuation.toLowerCase().trim().replace(/\s/g, "-"); //or replace(/ /g, "-") or ES12+: replaceAll(' ', '-')
}

console.log(urlify("How I Got Into Programming!!!"));
console.log(urlify("I've got a new job :)"));
