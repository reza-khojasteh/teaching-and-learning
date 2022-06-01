// A simple class representing a binary tree (node)
class BinaryTreeNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// Creating a binary tree from the data in an array, recursively
// Note: the input array should have all the elements in all depths (even if null,) down to the last level that we still have (a) non-null value(s)!
const createBinaryTreeFromArrayR = (array, i = 0) => {
  let root;

  if (i >= array.length || array[i] === null) root = null;
  else {
    root = new BinaryTreeNode(
      array[i],
      createBinaryTreeFromArrayR(array, 2 * i + 1),
      createBinaryTreeFromArrayR(array, 2 * i + 2)
    );
  }
  return root;
};

const maxDepthOfBinaryTree = (root, i = 0, max = Number.MIN_SAFE_INTEGER) => {
  if (root) {
    i++;

    return Math.max(
      maxDepthOfBinaryTree(root.left, i, max),
      maxDepthOfBinaryTree(root.right, i, max)
    );
  } else if (i > max) {
    max = i;
    return max;
  }
};

// Testing....
let root = createBinaryTreeFromArrayR([3, 9, 20, null, null, 15, 7]);
console.log(root, maxDepthOfBinaryTree(root));

root = createBinaryTreeFromArrayR([1, null, 2]);
console.log(root, maxDepthOfBinaryTree(root));

root = createBinaryTreeFromArrayR([]);
console.log(root, maxDepthOfBinaryTree(root));

root = createBinaryTreeFromArrayR([
  1,
  1,
  1,
  1,
  null,
  null,
  null,
  1,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  1,
]);
console.log(root, maxDepthOfBinaryTree(root));

root = createBinaryTreeFromArrayR([1, null, 2, null, null, null, 3]);
console.log(root, maxDepthOfBinaryTree(root));
