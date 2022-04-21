// A class for the nodes of the linked list
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Generating a linked list with a cycle on the node with the value of '3'
const linkedList = [8, 7, 6, 5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc),
  null
);

let curr = linkedList,
  cycleNode;

while (curr.next !== null) {
  if (curr.val === 3) {
    cycleNode = curr;
  }

  curr = curr.next;
}

curr.next = cycleNode;

// Finding the cycle in the linked list using either this (more straightforward) algorithm:

// const findCycle = (head) => {
//     if(!head) return null;
//
//     const seenNodes = new Set();
//     let currentNode = head;
//
//     while(!seenNodes.has(currentNode)) {
//         if(currentNode.next === null) return null;
//
//         seenNodes.add(currentNode);
//
//         currentNode = currentNode.next;
//     }
//
//     return currentNode;
// }
// with T(n) = O(n) and S(n) = O(n)

// OR AN EVEN BETTER SOLUTION FROM FLOYD:
// (To get an understanding of how it works, you can check:
// 1- https://www.reddit.com/r/computerscience/comments/oip2u9/why_are_the_hare_and_tortoise_guaranteed_to_meet/
// AND
// 2- https://abhisekbunty94.medium.com/why-does-floyds-cycle-detection-algorithm-work-59f61984dc3e)

const findCycle = (head) => {
  let tortoise = head,
    hare = head;

  if (hare === null || hare.next === null || hare.next.next === null)
    return null;
  else {
    tortoise = tortoise.next;
    hare = hare.next.next;
  }

  while (tortoise !== hare) {
    tortoise = tortoise.next;
    hare = hare.next;

    if (hare === null || hare.next === null) return null;
    else hare = hare.next;
  }

  let p1 = head,
    p2 = tortoise;

  while (p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p2;
};
// with T(n) = O(n) and S(n) = O(1)

console.log(findCycle(linkedList));
