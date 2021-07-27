// Closures are functions that close over their lexical environment or their scope. This allows us to access an outer function scope from an inner function. We use closures in many different places. For example, if we're filtering an array of items, or if we're creating a timeout.
function changeColor(color) {
  return function () {
    document.body.style.background = color;
  };
}

const bgColorBlue = changeColor("#0f62fe");
const bgColorPink = changeColor("#ff7eb6");
const bgColorGreen = changeColor("#42be65");

document.querySelector("#blue").addEventListener("click", bgColorBlue);
document.querySelector("#pink").addEventListener("click", bgColorPink);
document.querySelector("#green").addEventListener("click", bgColorGreen);

//OR (without closures:)
// function changeColor(color) {
//   document.body.style.background = color;
// }

// document
//   .querySelector("#blue")
//   .addEventListener("click", () => changeColor("#0f62fe"));
// document
//   .querySelector("#pink")
//   .addEventListener("click", () => changeColor("#ff7eb6"));
// document
//   .querySelector("#green")
//   .addEventListener("click", () => changeColor("#42be65"));
