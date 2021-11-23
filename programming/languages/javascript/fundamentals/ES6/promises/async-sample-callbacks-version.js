// Version 1: using just callbacks (compare with version 2 please :-)

const asyncFunction = (callback) =>
  setTimeout(
    () =>
      callback(
        "Printing after another two seconds, inside the callback passed when calling 'asyncFunction', and in an async way!"
      ),
    2000
  );

setTimeout(() => {
  console.log("Two seconds is up now! Let's call asyncFunction....");
  asyncFunction((text) => {
    console.log(text);

    // Off to a (nested) callback hell!
    asyncFunction((text) => console.log(text));
  });
}, 2000);

console.log("Printing first, with no delay, and sync!");
