// Implementing a module using IIFE
const learningModule = (() => {
  let privateCourses = ["React", "Next.js"];
  let publicCourses = ["JavaScript", "Java"];

  const getPrivateCourses = () => {
    console.log(privateCourses);
  };

  const getPublicCourses = () => {
    console.log(publicCourses);
  };

  // the public parts/component to be exposed:
  return {
    publicCourses,
    getPublicCourses,
  };
})();

console.log(learningModule.publicCourses); // [ 'JavaScript', 'Java' ]
console.log(learningModule.privateCourses); // undefined
console.log(learningModule.getPublicCourses); // [Function: getPublicCourses]
console.log(learningModule.getPrivateCourses); // undefined
