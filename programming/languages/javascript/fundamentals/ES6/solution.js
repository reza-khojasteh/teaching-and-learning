// De-structuring is an expression, which allows us to extract values from objects and arrays into variables. To destructure values from arrays, we use square brackets and to destructure values from objects, we use curly brackets. The first variable declared in the brackets will receive the first array item as its value. The second variable will receive the second array item as its value, and so on. You can use the spread operator or three dots to replace the remaining array or object values into one variable.
function getStudents(classroom) {
  let { hasTeachingAssistant, classList } = classroom;
  let teacher, teachingAssitant, students;

  if (hasTeachingAssistant) {
    [teacher, teachingAssitant, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }
  return students;
}

console.log(
  getStudents({
    hasTeachingAssistant: false,
    classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],
  })
);
