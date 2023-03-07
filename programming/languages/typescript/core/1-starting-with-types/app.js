// Access the two input fields, the button, and the result field
var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");
var button = document.getElementById("add");
var result = document.getElementById("result");
// Add a click event listener to the button
button.addEventListener("click", function () {
    // Add the two numbers and display the result in the result field
    result.innerHTML = add(+input1.value, +input2.value).toString();
});
// Define the add function that adds two numbers
function add(num1, num2) {
    return num1 + num2;
}
