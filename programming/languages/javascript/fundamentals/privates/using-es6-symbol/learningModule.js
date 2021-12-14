// Implementing Using ES6 Symbol Primitive Data Type (With the help of an IIFE)
const LearningModule = (() => {
  // Symbols hidden in the IIFE
  const privateCourses = Symbol("privateCourses");
  const getPrivateCourses = Symbol("getPrivateCourses");

  // return class {
  // OR
  return class LearningModule {
    // the public part/component to be exposed:
    publicCourses = ["JavaScript", "Java"];

    constructor() {
      // the private part/component:
      this[privateCourses] = ["React", "Next.js"];
      // the private part/component:
      this[getPrivateCourses] = () => {
        console.log(privates.get(this).privateCourses);
      };
    }

    // the public part/component to be exposed:
    getPublicCourses() {
      console.log(this.publicCourses);
    }
  };
})();

const learningModule = new LearningModule();
console.log(learningModule.publicCourses); // [ 'JavaScript', 'Java' ]
console.log(learningModule.privateCourses); // undefined
console.log(learningModule.getPublicCourses); // [Function: getPublicCourses]
console.log(learningModule.getPrivateCourses); // undefined
