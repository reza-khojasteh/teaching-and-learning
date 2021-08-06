// The Fetch API provides an interface for fetching resources(including across the network).It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.
// The Response interface of the Fetch API represents the response to a request. Response.json() takes a Response stream, reads it to completion, and returns a promise that resolves with the result of parsing the response body text as JSON. Note that despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.

// Named asynchronous function
async function getUsers() {
  let people = await fetch("https://randomuser.me/api/?results=5");
  console.log(people); //A Response
  let data = await people.json();
  console.log(data); //A JavaScript object, having an array named results
  const timeline = document.querySelector("#timeline");
  data.results.forEach((person) => {
    let image = document.createElement("img");
    image.src = person.picture.medium;
    timeline.appendChild(image);
  });
}

// Anonymous asynchronous function
// const getUsers = async () => {
//   let people = await fetch("https://randomuser.me/api/?results=5");
//   let data = await people.json();
//   const timeline = document.querySelector("#timeline");
//   data.results.forEach(person => {
//     let image = document.createElement("img");
//     image.src = person.picture.medium;
//     timeline.appendChild(image);
//   });
// };

getUsers();
