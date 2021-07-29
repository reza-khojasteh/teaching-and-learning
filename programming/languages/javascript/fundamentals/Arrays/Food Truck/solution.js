// The flat() method creates a new array with all sub - array elements concatenated into it recursively up to the specified depth: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

// The for...of statement creates a loop iterating over iterable objects, including: built -in String, Array, array - like objects(e.g., arguments or NodeList), TypedArray, Map, Set, and user - defined iterables.It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

function foodTruckFestival(menus) {
  let flatMenus = menus.flat();

  let combinedMenu = new Set();
  flatMenus.forEach((item) => {
    combinedMenu.add(item);
  });

  const menuNode = document.getElementById("combined-menu"); // OR document.querySelector("#combined-menu");
  for (let item of combinedMenu) {
    let foodNode = document.createElement("li");
    foodNode.textContent = item; // OR foodNode.innerText = item;
    menuNode.appendChild(foodNode);
  }
}

foodTruckFestival([["Tacos", "Burgers"], ["Pizza"], ["Burgers", "Fries"]]);
