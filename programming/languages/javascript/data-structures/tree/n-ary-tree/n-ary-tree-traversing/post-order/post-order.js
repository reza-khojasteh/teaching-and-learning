// A simple class representing a n-ary tree
class nAryTree {
  constructor(data, children = []) {
    this.data = data;
    this.children = children;
  }
}

// PostOrder traversing of a n-ary tree
const postOrder = (root) => {
  if (root) {
    for (const child of root.children) {
      postOrder(child);
    }
    console.log(root.data);
  }
};
// T(n) = O(n) where n is the number of nodes in the n-ary tree
// S(n) = O(h) where h is the height of the n-ary tree (the additional space comes from the maximum call stack size)

// Testing....
const root = new nAryTree(34, [
  new nAryTree(32),
  new nAryTree(36),
  new nAryTree(30),
]);
console.log(root);

postOrder(root);
