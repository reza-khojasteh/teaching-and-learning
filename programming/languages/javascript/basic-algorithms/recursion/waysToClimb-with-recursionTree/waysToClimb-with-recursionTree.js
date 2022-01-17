// A class to represent the recursion tree which is going to be printed out at the end
class RecursionTree {
  constructor() {
    this.call = "";
    this.returned = null;
    this.children = [];
  }
}

// The function to calculate the nbways and at the same time, form the recursion tree
const waysToClimbWithRecursionTree = (n, possibleSteps, recursionTree) => {
  recursionTree.call = `${waysToClimbWithRecursionTree.name}(${n})`;

  if (n === 0) {
    recursionTree.returned = 1;
    return 1;
  } else {
    let nbWays = 0;

    for (const steps of possibleSteps) {
      if (n - steps >= 0) {
        const child = new RecursionTree();
        recursionTree.children.push(child);
        nbWays += waysToClimbWithRecursionTree(n - steps, possibleSteps, child);
      }
    }
    recursionTree.returned = nbWays;
    return nbWays;
  }
};

// A recursive function to print the recursion tree, indented
const printRecursionTree = (recursionTree, indent = "") => {
  //   console.log(indent);
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
    printRecursionTree(lastChild, `${indent}    `);
  }
};

// Testing....
const recursionTree = new RecursionTree();
waysToClimbWithRecursionTree(10, [2, 4, 5, 8], recursionTree);
printRecursionTree(recursionTree);
