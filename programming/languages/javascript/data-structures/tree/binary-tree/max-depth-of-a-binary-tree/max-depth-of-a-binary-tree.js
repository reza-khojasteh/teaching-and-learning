// A solution to the problem in (https://leetcode.com/problems/maximum-depth-of-binary-tree/):
// Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// A simple class representing a binary tree (or, better to say, a binary tree node)
class BinaryTreeNode {
  // The constructor to create a BinaryTreeNode
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  // A method to insert the values in an 'array' into a binary tree (root node.)
  // In this iterative one, (as opposed to the 'createBinaryTreeFromArrayR' recursive one below,) the input array doesn't need to have all the elements; it has the elements, row by row, as long as they are either non-null or they reach out to 'null' (for the first time!)
  // As an example, the following lines:
  //    const root = new BinaryTreeNode(1);
  //    root.insert([1, 1, 1, null, null, null, 1, null, 1, null, null]);
  // create a BinaryTree which is equivalent of the second to last example below (and does it with fewer nodes/nulls!)
  /**
   * @param {array} array
   * @return {BinaryTreeNode} root
   */
  insert(array) {
    const queue = [this];
    let i = 0;
    while (queue.length > 0) {
      let current = queue.shift();

      for (let side of ["left", "right"]) {
        if (!current[side]) {
          // Insert nodes in the 'array' to the BinaryTree, wherever null, in a 'BFS' manner or 'row by row' (as we are using a queue in this method.)

          if (array[i] !== null) {
            current[side] = new BinaryTreeNode(array[i]);
          }

          i++;

          if (i >= array.length) return this;
        }
        if (current[side]) queue.push(current[side]);
      }
    }
    return this;
  }
}

// Creating a binary tree from the data in an array, recursively
// Note: the input array should have all the elements in all depths (even if null,) down to the last node (in the last level that we still have (a) non-null value(s)!)
/**
 * @param {array} array
 * @return {BinaryTreeNode} root
 */
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

// Calculating the maximum depth of a binary tree by counting the number of nodes we see along the longest path (including the root)
/**
 * @param {BinaryTreeNode} root
 * @return {number} maxDepthOfBinaryTree
 */
const maxDepthOfBinaryTree = (root, currentNumberOfNodes = 0) => {
  if (root) {
    currentNumberOfNodes++;

    return Math.max(
      maxDepthOfBinaryTree(root.left, currentNumberOfNodes),
      maxDepthOfBinaryTree(root.right, currentNumberOfNodes)
    );
  } else return currentNumberOfNodes;
};

// Testing.... (some test cases)
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

root = createBinaryTreeFromArrayR([
  1,
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
  null,
  null,
  1,
]);
console.log(root, maxDepthOfBinaryTree(root));

root = createBinaryTreeFromArrayR([1, null, 2, null, null, null, 3]);
console.log(root, maxDepthOfBinaryTree(root));
