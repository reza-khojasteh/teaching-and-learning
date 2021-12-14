// Implementing Using TC39 Private Class Field Proposal
class LearningModule {
  // the private part/component:
  #privateCourses = ["React", "Next.js"];
  // the private part/component:
  #getPrivateCourses = () => console.log(this.#privateCourses);

  constructor() {
    // the public part/component to be exposed:
    this.publicCourses = ["JavaScript", "Java"];
  }

  // the public part/component to be exposed:
  getPublicCourses() {
    console.log(this.publicCourses);
  }
}

const learningModule = new LearningModule();
console.log(learningModule.publicCourses); // [ 'JavaScript', 'Java' ]
console.log(learningModule.privateCourses); // undefined
console.log(learningModule.getPublicCourses); // [Function: getPublicCourses]
console.log(learningModule.getPrivateCourses); // undefined
