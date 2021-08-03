// Generators are functions that can be exited, and at a later point in time, reentered while maintaining their context. Generator functions used to be really great in solving problems with asynchronous programming, but recently, they've kind of been replaced by JavaScripts async await.

// We declare generator functions with an asterisk following the function keyword.Calling a generator function doesn't immediately execute the body of the function. Instead, an iterator object for the function is returned. We must call the iterator's next method to hit the next yield value.The next method returns an object with a value property that contains the yielded value and a done property, which tells us whether the generator has yielded its last value.

// (An async function-ES7 can be decomposed into a generator-ES6 and promise implementation which is good to know stuff: https://towardsdatascience.com/javascript-generator-yield-next-async-await-8442d2c77185)

// The function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.
// From <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*>

// The Generator object is returned by a generator function and it conforms to both the iterable protocol and the iterator protocol.
// This object cannot be instantiated directly. Instead, a Generator instance can be returned from a generator function:
// From <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator>

function* getStop() {
  yield "Poughkeepsie";
  yield "Newburgh";
  yield "Peekskill";
  yield "Yonkers";
  yield "Bronx";
  yield "Grand Central";
}

const nycTrainline = getStop();
const nextStopButton = document.querySelector("#next-stop");
const listOfStops = document.getElementById("list");
const title = document.getElementById("title");

nextStopButton.addEventListener("click", () => {
  let currStop = nycTrainline.next();
  if (currStop.done) {
    title.textContent = "We Made it!";
    nextStopButton.setAttribute("disabled", true);
  } else {
    createListItem(currStop.value);
  }
});

function createListItem(text) {
  const child = document.createElement("li");
  child.textContent = text;
  listOfStops.appendChild(child);
}
