// /**
//  * @param {string} first
//  * @param {string} second
//  * @param {string} third
//  * @param {number} number
//  * @param {string[]} callStack
//  * @return {undefined}
//  */
const hanoiWithCallStack = (first, second, third, number, callStack) => {
  if (number <= 0) {
    console.log("At least one disk is needed!");
    return;
  }

  callStack.push(
    `hanoiWithCallStack(${first}, ${second}, ${third}, ${number})`
  );
  console.log(callStack);

  if (number === 1) {
    console.log(`Move from ${first} to ${third}`);
    console.log();

    callStack.pop();
    console.log(callStack);
  } else {
    hanoiWithCallStack(first, third, second, number - 1, callStack);

    console.log(`Move from ${first} to ${third}`);
    console.log();

    hanoiWithCallStack(second, first, third, number - 1, callStack);

    callStack.pop();
    console.log(callStack);
  }
};

// Testing....
hanoiWithCallStack("f", "s", "t", 3, []);
