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
