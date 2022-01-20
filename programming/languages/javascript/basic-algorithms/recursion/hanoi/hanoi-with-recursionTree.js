// A class to represent the recursion tree which is going to be printed out at the end
class RecursionTree {
  constructor() {
    this.call = "";
    this.returned = null;
    this.children = [];
  }
}

// The function to calculate the nbways and at the same time, form the recursion tree
function hanoiWithRecursionTree(first, second, third, number, recursionTree) {
  if (number <= 0) {
    console.log("At least one disk is needed!");
    return;
  }

  recursionTree.call = `${hanoiWithRecursionTree.name}(${first}, ${second}, ${third}, ${number})`;

  if (number === 1) {
    recursionTree.returned = `Move from ${first} to ${third}`;
    // console.log(`Move from ${first} to ${third}`);
  } else {
    const child1 = new RecursionTree();
    recursionTree.children.push(child1);
    hanoiWithRecursionTree(first, third, second, number - 1, child1);

    recursionTree.returned = `Move from ${first} to ${third}`;
    // console.log(`Move from ${first} to ${third}`);

    const child2 = new RecursionTree();
    recursionTree.children.push(child2);
    hanoiWithRecursionTree(second, first, third, number - 1, child2);
  }
}

// A recursive function to print the recursion tree, indented
const printRecursionTree = (recursionTree, indent = "") => {
  if (recursionTree === null || recursionTree.children.length === 0) {
    process.stdout.write(
      `${recursionTree.call} returned ${recursionTree.returned}`
    );
    console.log();
  } else {
    process.stdout.write(
      `${recursionTree.call} returned ${recursionTree.returned}`
    );
    console.log();

    for (let index = 0; index < recursionTree.children.length - 1; index++) {
      process.stdout.write(`${indent}|----`);
      printRecursionTree(recursionTree.children[index], `${indent}|    `);
    }

    const lastChild = recursionTree.children[recursionTree.children.length - 1];
    process.stdout.write(`${indent}└----`);
    printRecursionTree(lastChild, `${indent}     `);
  }
};

// Testing....
const recursionTree = new RecursionTree();
hanoiWithRecursionTree("f", "s", "t", 3, recursionTree);
printRecursionTree(recursionTree);
