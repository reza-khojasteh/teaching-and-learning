/** @author Reza Khojasteh */
// Version 2: using promises (compare with version 1 please :-)

const asyncFunction = () => {
  // The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
  const promise = new Promise((resolve, reject) =>
    setTimeout(
      () =>
        // 'resolve' is called when the asynchronous task completes successfully and returns the results of the task as a value.
        // 'reject' is called when the task fails, and returns the reason for failure, which is typically an error object (not used in here though ;-)
        resolve(
          "Printing after another two seconds, inside the callback passed to 'then', and in an async way!"
        ),
      2000
    )
  );

  return promise;
};

setTimeout(() => {
  console.log("Two seconds is up now! Let's call asyncFunction....");
  asyncFunction()
    // The then() method returns a Promise.
    .then((text) => {
      console.log(text);
      return asyncFunction();
    })
    // hence, here, getting rid of callback hells (please compare with version 1 ;-)
    .then((text) => console.log(text));
}, 2000);

console.log("Printing first, with no delay, and sync!");
