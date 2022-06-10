// A simple class representing a binary tree (node)
class BinaryTree {
  // The constructor to creat a BinaryTreeNode
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  // A method to insert the values in an 'array' into a binary tree (root.)
  // In this iterative one, (as opposed to the 'createBinaryTreeFromArrayR' recursive one below,) the input array should have all the elements, row by row, as long as they are either non-null or they reach to 'null' (for the first time!)
  // As an example, the following lines:
  //    const root = new TreeNode(1);
  //    root.insert([1,1,1,1,null,null,null,1,null,null,null,1,null,null]);
  // create a BinaryTree which is equivalent of the second to last example below (and does it with fewer nodes/nulls!)

  insert(array) {
    const queue = [this];
    let i = 0;
    while (queue.length > 0) {
      let current = queue.shift();

      for (let side of ["left", "right"]) {
        // if (!current[side]) {// The commented out lines in this loop should be uncommented if we want to insert nodes in the 'array' to the BinaryTree, wherever null, in a 'BFS' manner or 'row by row' (as we are using a queue in this method.)
        // Otherwise, and supposed we want to insert them as the children of the root (with 'null' left and right), should be back!
        if (array[i] !== null) {
          current[side] = new TreeNode(array[i]);
        }

        i++;

        if (i >= array.length) return this;
        // }
        /*if (current[side])*/ queue.push(current[side]);
      }
    }
    return this;
  }
}

// Creating a binary tree from the data in an array, recursively
// Note: the input array should have all the elements in all depths (even if null,) down to the last node (in the last level that we still have (a) non-null value(s)!)
const createBinaryTreeFromArrayR = (array, i = 0) => {
  let root;

  if (i >= array.length || array[i] === null) root = null;
  else {
    root = new BinaryTree(
      array[i],
      createBinaryTreeFromArrayR(array, 2 * i + 1),
      createBinaryTreeFromArrayR(array, 2 * i + 2)
    );
  }
  return root;
};

// Calculating the maximum depth of a binary tree by counting the number of nodes we see along the longest path (including the root)
/**
 * @param {BinaryTree} root
 * @return {number}
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
