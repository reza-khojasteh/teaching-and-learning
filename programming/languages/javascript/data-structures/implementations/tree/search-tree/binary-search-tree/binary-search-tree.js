class BinarySearchTreeNode {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new BinarySearchTreeNode(value);

    if (this.root === null) this.root = newNode;
    else {
      let currentNode = this.root;

      while (true) {
        if (value < currentNode.value) {
          // Go to left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // Go to right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return null;
    }

    let currentNode = this.root;

    while (currentNode)
      if (value < currentNode.value) currentNode = currentNode.left;
      else if (value > currentNode.value) currentNode = currentNode.right;
      else if (currentNode.value === value) return currentNode;

    return null;
  }

  remove(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        // We have a match, let's get to work!

        // Option 1: No right child
        if (currentNode.right === null)
          if (parentNode === null) this.root = currentNode.left;
          else {
            // If parent's value > current value, make current's left child the left child of the parent
            if (currentNode.value < parentNode.value)
              parentNode.left = currentNode.left;
            // If parent's value < current value, make current's left child the right child of the parent
            else if (currentNode.value > parentNode.value)
              parentNode.right = currentNode.left;
          }
        // Option 2: Right child which doesn't have a left child
        else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;

          if (parentNode === null) this.root = currentNode.right;
          else {
            // If parent's value > current value, make current's right child the left child of the parent
            if (currentNode.value < parentNode.value)
              parentNode.left = currentNode.right;
            // If parent's value < current value, make current's right child the right child of the parent
            else if (currentNode.value > parentNode.value)
              parentNode.right = currentNode.right;
          }
        }
        // Option 3: Right child which has a left child
        else {
          // First, find the right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          // LeftmostParent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          // And Leftmost replaces currentNode
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) this.root = leftmost;
          else {
            // If parent's value > current value, make leftmost the left child of the parent
            if (currentNode.value < parentNode.value)
              parentNode.left = leftmost;
            // If parent's value < current value, make current's right child the right child of the parent
            else if (currentNode.value > parentNode.value)
              parentNode.right = leftmost;
          }
        }
        return true;
      }
    }
    return false;
  }

  traverseByNode(node) {
    if (node === null) return {};
    else {
      const tree = { value: node.value };
      tree.left = node.left === null ? null : this.traverseByNode(node.left);
      tree.right = node.right === null ? null : this.traverseByNode(node.right);
      return tree;
    }
  }

  traverseByValue(value) {
    const node = this.lookup(value);

    if (!node) return {};
    else return this.traverseByNode(node);
  }

  traverse() {
    return this.traverseByNode(this.root);
  }
}

// Testing...
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
//     9
//  4     20
//1  6  15  170
console.log(tree.remove(9));
console.log(JSON.stringify(tree.traverseByNode(tree.root)));
console.log(JSON.stringify(tree.traverse()));
console.log(JSON.stringify(tree.traverseByValue(15)));
