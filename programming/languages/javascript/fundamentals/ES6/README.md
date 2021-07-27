# Classroom Attendance

Using some ES6 features (incl. destructuring and spread operator) in a simple application.

## What You'll Do

Given an object, classroom, return an array of student names

- The classroom object is structured with two values: hasTeachingAssistant (boolean) and classList (array of strings)

```js
  {
    hasTeachingAssistant: false,
    classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],
  }
```

- The teacher will always be the first item in the classList array
- If `hasTeachingAssitant` is true, the teaching assistant will be the second item in the classList array

## Requirements

- Use object and array destructuring
