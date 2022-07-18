// The following solutions try to run tests against (assumed) inputs on a web form, in a functional programming manner:

// Solution 1:
// const currentInputValues = {
//   firstName: "reza", // Must be at least 2 characters
//   lastName: "", // Must be at least 2 characters
//   zipCode: "12345", // Must be exactly 5 characters
//   state: "", // Must be exactly 2 characters
// };

// const inputCriteria = {
//   firstName: [
//     (value) => value.length >= 2,
//     "First name must be at least 2 characters",
//   ],
//   lastName: [
//     (value) => value.length >= 2,
//     "Last name must be at least 2 characters",
//   ],
//   zipCode: [
//     (value) => value.length === 5,
//     "Zip code must be exactly 5 characters",
//   ],
//   state: [(value) => value.length === 2, "State must be exactly 2 characters"],
// };

// const getErrorMessages = (inputs, criteria) =>
//   Object.keys(criteria)
//     .filter((key) => !criteria[key][0](inputs[key]))
//     .map((key) => criteria[key][1]);

// console.log(getErrorMessages(currentInputValues, inputCriteria));

// OR even a better solution:

// Solution 2:
const currentInputValues = {
  firstName: "Reza", // Must be at least 2 characters
  lastName: "", // Must be at least than 2 characters
  zipCode: "12345", // Must be exactly 5 characters
  state: "", // Must be exactly 2 characters
};

// Each property in the following object could contatin any arbitrary number of functions to check for that field validation...
const inputCriteria = {
  firstName: [
    (value) =>
      value.length >= 2 ? "" : "First name must be at least 2 characters",
  ],
  lastName: [
    (value) =>
      value.length >= 2 ? "" : "Last name must be at least 2 characters",
  ],
  zipCode: [
    (value) =>
      value.length === 5 ? "" : "Zip code must be exactly 5 characters long",
  ],
  state: [
    (value) =>
      value.length === 2 ? "" : "State must be exactly 2 characters long",
  ],
};

const getErrorMessages = (inputs, criteria) => {
  return Object.keys(inputs)
    .reduce(
      (acc, fieldName) => [
        ...acc,
        ...criteria[fieldName].map((test) => test(inputs[fieldName])),
      ],
      []
    )
    .filter((message) => message);
};

console.log(getErrorMessages(currentInputValues, inputCriteria));

/*
    Expected Output in case of all errors: [
        'First name must be at least 2 characters',
        'Last name must be at least 2 characters',
        'Zip code must be exactly 5 characters',
        'State must be exactly 2 characters',
    ]
*/
