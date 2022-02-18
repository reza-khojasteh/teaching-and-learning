// A simple class representing a n-ary tree
class nAryTree {
  constructor(data, children = []) {
    this.data = data;
    this.children = children;
  }
}

// PreOrder traversing of a binary tree
const preOrder = (root) => {
  if (root) {
    console.log(root.data);
    for (const child of root.children) {
      preOrder(child);
    }
  }
};
// T(n) = O(n) where n is the number of nodes in the binary tree
// S(n) = O(h) where h is the height of the binary tree (the additional space comes from the maximum call stack size)

// Testing....
const root = new nAryTree(34, [
  new nAryTree(32),
  new nAryTree(36),
  new nAryTree(30),
]);
console.log(root);

preOrder(root);
