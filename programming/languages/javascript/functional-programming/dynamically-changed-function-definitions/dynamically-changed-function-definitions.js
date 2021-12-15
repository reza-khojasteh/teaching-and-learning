// Assume just admin should be able to print out the list of private courses....
const privateCourses = ["React", "Next.js"];
const publicCourses = ["JavaScript", "Java"];

// At some point, based on the condition in the code/environment, you could set 'admin' to true:
const admin = true; // But later in the code, we might have it as false (test to see the output changes....)

// And we have this dynamically-changed-function-defintion as:
const myPrintFunction = admin
  ? () => console.log(privateCourses)
  : () => console.log(publicCourses);

//Now, the following function could be one of the above two, based on the value of 'admin'
myPrintFunction();
