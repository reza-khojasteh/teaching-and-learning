// A simple class representing a binary tree
class BinaryTree {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// PostOrder traversing of a binary tree
const postOrder = (root) => {
  if (root) {
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.data);
  }
};

// Testing....
const root = new BinaryTree(34);
root.left = new BinaryTree(32);
root.right = new BinaryTree(36);
console.log(root);

postOrder(root);
