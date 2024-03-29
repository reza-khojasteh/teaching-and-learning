// /**
//  * @param {string} first
//  * @param {string} second
//  * @param {string} third
//  * @param {number} number
//  * @return {undefined}
//  */
function hanoi(first, second, third, number) {
  if (number <= 0) {
    console.log("At least one disk is needed!");
  } else if (number === 1) {
    console.log(`Move from ${first} to ${third}`);
  } else {
    hanoi(first, third, second, number - 1);
    console.log(`Move from ${first} to ${third}`);
    hanoi(second, first, third, number - 1);
  }
}

// Testing....
hanoi("f", "s", "t", 3);
