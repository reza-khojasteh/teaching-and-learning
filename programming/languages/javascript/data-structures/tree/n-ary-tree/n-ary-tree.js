// A simple class representing a n-ary tree
class nAryTree {
  constructor(data, children = []) {
    this.data = data;
    this.children = children;
  }
}

// Testing....
const root = new nAryTree(34, [
  new nAryTree(32),
  new nAryTree(36),
  new nAryTree(30),
]);
console.log(root);
