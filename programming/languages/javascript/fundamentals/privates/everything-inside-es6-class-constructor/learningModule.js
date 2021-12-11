// Implementing a class with just one constructor and putting everything inside it:
class LearningModule {
  constructor() {
    // the public part/component to be exposed:
    this.publicCourses = ["JavaScript", "Java"];
    // the private part/component:
    let privateCourses = ["React", "Next.js"];

    // the private part/component:
    const getPrivateCourses = () => {
      console.log(privateCourses);
    };

    // the public part/component to be exposed:
    this.getPublicCourses = () => {
      console.log(this.publicCourses);
    };
  }
}

const learningModule = new LearningModule();
console.log(learningModule.publicCourses); // [ 'JavaScript', 'Java' ]
console.log(learningModule.privateCourses); // undefined
console.log(learningModule.getPublicCourses); // [Function (anonymous)]
console.log(learningModule.getPrivateCourses); // undefined
