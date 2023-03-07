# Starting With Types in TS

This is a basic TypeScript program that demonstrates how to add two numbers and display the result using HTML and TypeScript.

## Installation

To run this program, you will need to have TypeScript installed. You can install it using the following command:

```bash
npm install -g typescript
```

## Usage

Navigate to the project directory and compile the TypeScript file using the following command:

```bash
tsc app.ts
```

This will generate a JavaScript file named app.js in the same directory. You can then open the index.html file in your browser to see the program in action.

The program will display two input fields, a button to add the two numbers, and a div to display the result. To add two numbers, simply enter the two numbers in the input fields and click on the "Add" button. The program will then display the result in the div.

# TypeScript Features Used

## Type Annotations

In TypeScript, you can specify the type of a variable using a type annotation. In this program, we use type annotations for the following variables:

```typescript
var input1 = document.getElementById("number1") as HTMLInputElement;
var input2 = document.getElementById("number2") as HTMLInputElement;
var button = document.getElementById("add") as HTMLButtonElement;
var result = document.getElementById("result") as HTMLDivElement;
```

Here, we specify that input1, and input2 are of type HTMLInputElement. Similarly, we specify that button is of type HTMLButtonElement and result is of type HTMLDivElement.

## Functions

In TypeScript, you can specify the types of a function's parameters and return value using type annotations. In this program, we define a function named add that takes two numbers as input and returns their sum:

```typescript
function add(num1: number, num2: number): number {
  return num1 + num2;
}
```

Here, we specify that num1 and num2 are of type number, and that the function returns a value of type number.

## Type Assertion

In TypeScript, you can use a type assertion to tell the compiler that you know the type of a value better than it does.

In this program, we use a type assertion to tell the compiler that the values returned by document.getElementById are of the expected type:

```typescript
var input1 = document.getElementById("number1") as HTMLInputElement;
var input2 = document.getElementById("number2") as HTMLInputElement;
var button = document.getElementById("add") as HTMLButtonElement;
var result = document.getElementById("result") as HTMLDivElement;
```

Here, we use the as keyword to assert that the values returned by document.getElementById are of type HTMLInputElement, HTMLButtonElement, and HTMLDivElement respectively.
