// Access the two input fields, the button, and the result field
var input1 = document.getElementById("number1") as HTMLInputElement;
var input2 = document.getElementById("number2") as HTMLInputElement;
var button = document.getElementById("add") as HTMLButtonElement;
var result = document.getElementById("result") as HTMLDivElement;

// Add a click event listener to the button
button.addEventListener("click", function () {
  // Add the two numbers and display the result in the result field
  result.innerHTML = add(+input1.value, +input2.value).toString();
});

// Define the add function that adds two numbers
function add(num1: number, num2: number): number {
  return num1 + num2;
}
