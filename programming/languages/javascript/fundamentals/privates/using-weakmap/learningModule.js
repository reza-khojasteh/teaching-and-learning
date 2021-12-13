// Implementing Using a WeakMap Object (With the help of an IIFE)
const LearningModule = (() => {
  const privates = new WeakMap();

  // return class {
  // OR
  return class LearningModule {
    // the public part/component to be exposed:
    publicCourses = ["JavaScript", "Java"];

    constructor() {
      privates.set(this, {
        // the private part/component:
        privateCourses: ["React", "Next.js"],
        // the private part/component:
        getPrivateCourses: () => {
          console.log(privates.get(this).privateCourses);
        },
      });
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
