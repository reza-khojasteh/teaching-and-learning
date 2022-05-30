// A simple class representing a binary tree
class BinaryTree {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// Iterative BFS traversing of a binary tree
const bfs = (root) => {
  if (root) {
    let currentNode = root;
    let queue = [];
    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      console.log(currentNode.data);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }
};
// T(n) = O(n) where n is the number of nodes in the binary tree
// S(n) = O(n) as we need to keep all the nodes in the last row in memory/queue, which for a perfect binary tree (worst case here!), is one more than the half of all the nodes (n)

// Or recursive BFS traversing of a binary tree, with the same time and space complexities...
const bfsR = (queue) => {
  if (queue.length !== 0) {
    let currentNode = queue.shift();
    console.log(currentNode.data);

    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);

    bfsR(queue);
  }
};

// Testing....
const root = new BinaryTree(34);
root.left = new BinaryTree(32);
root.right = new BinaryTree(36);
console.log(root);

bfs(root);
bfsR([root]);
