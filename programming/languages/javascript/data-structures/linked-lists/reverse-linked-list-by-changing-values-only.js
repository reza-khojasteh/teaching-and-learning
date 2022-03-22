// Time complexity: O(n ^ 2)
// Space complexity: O(1)

// A linked list node
class ListNode {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// The LinkedList
// class LinkedList {
//   constructor(head = null) {
//     this.head = head;
//   }
// }

// Generate the linked list
const linkedList = [5, 4, 3, 2, 1].reduce(
  (acc, data) => new ListNode(data, acc),
  null // Necessary to indicate the tail!
);

// Print the linked list
const printList = (head) => {
  if (!head) {
    return;
  }

  console.log(head.data);
  printList(head.next);
};

// Reverse the linked list
/**
 * @param {object} list
 * @return {object}
 */
const reverseListByChangingValuesOnly = (list) => {
  let length = 0;
  //   let temp = list.head;
  let temp = list;

  while (temp) {
    length++;
    temp = temp.next;
  }

  let left = list;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    let right = list;

    for (let j = 0; j < length - i - 1; j++) right = right.next;

    [left.data, right.data] = [right.data, left.data];

    left = left.next;
  }

  return list;
};

// Testing....
printList(linkedList);
console.log("after reverse");
printList(reverseListByChangingValuesOnly(linkedList));
