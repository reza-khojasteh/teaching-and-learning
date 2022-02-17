// A simple class representing a binary tree
class BinaryTree {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// InOrder traversing of a binary tree
const inOrder = (root) => {
  if (root) {
    inOrder(root.left);
    console.log(root.data);
    inOrder(root.right);
  }
};
// T(n) = O(n) where n is the number of nodes in the binary tree
// S(n) = O(h) where h is the height of the binary tree (the additional space comes from the maximum call stack size)

// Testing....
const root = new BinaryTree(34);
root.left = new BinaryTree(32);
root.right = new BinaryTree(36);
console.log(root);

inOrder(root);
