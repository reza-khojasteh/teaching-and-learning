// A class for each node
class Node {
  constructor(val, next = null, prev = null, child = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
    this.child = child;
  }
}

// Generating a multi-level doubly linked list using 'buildMultiLevelDoublyLinkedList' function
const buildMultiLevelDoublyLinkedList = function (nodes) {
  const head = new Node(nodes[0]);
  let currentNode = head;

  for (let i = 1; i < nodes.length; i++) {
    const val = nodes[i];
    let nextNode;

    if (Array.isArray(val)) {
      nextNode = buildMultiLevelDoublyLinkedList(val);
      currentNode.child = nextNode;
      continue;
    }

    nextNode = new Node(val);
    currentNode.next = nextNode;
    nextNode.prev = currentNode;
    currentNode = nextNode;
  }

  return head;
};

// Printing a multi-level linked list using 'printMultiLevelLinkedList' function
const printMultiLevelLinkedList = (head, str = "[") => {
  if (!head) {
    str += "], ";
    return str;
  }

  str += `${head.val}, `;

  if (head.child) str = printMultiLevelLinkedList(head.child, str + "[");

  str = printMultiLevelLinkedList(head.next, str);

  let temp = str.substring(str.length - 5, str.length - 2);
  if (temp === ", ]") {
    str = str.replace(str.substring(str.length - 5, str.length - 2), "]");
  }

  return str;
};

// Printing a linked list using 'printLinkedList' function
const printLinkedList = (head, str = "[") => {
  if (!head) {
    return str + "]";
  }

  if (head.next) {
    str += `${head.val}, `;
  } else {
    str += `${head.val}`;
  }

  str = printLinkedList(head.next, str);
  return str;
};

// Flattening a multi-level doubly linked list using 'flattenMultiLevelDoublyLinkedList' function
const flattenMultiLevelDoublyLinkedList = function (head) {
  if (!head) return head;

  let currentNode = head;
  while (currentNode !== null) {
    if (currentNode.child === null) {
      currentNode = currentNode.next;
    } else {
      let tail = currentNode.child;
      while (tail.next !== null) {
        tail = tail.next;
      }

      tail.next = currentNode.next;
      if (tail.next !== null) {
        tail.next.prev = tail;
      }

      currentNode.next = currentNode.child;
      currentNode.next.prev = currentNode;
      currentNode.child = null;
    }
  }

  return head;
};

// Testing...
const nodes = [1, [2, 7, [8, 10, 11], 9], 3, 4, [5, 12, 13], 6];
let multiLinkedList = buildMultiLevelDoublyLinkedList(nodes);
console.log("before flatten");
let str = printMultiLevelLinkedList(multiLinkedList);
console.log(str.substring(0, str.length - 2));
console.log("after flatten");
str = printLinkedList(flattenMultiLevelDoublyLinkedList(multiLinkedList));
console.log(str);
