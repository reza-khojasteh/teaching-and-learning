class StackNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Stack {
  constructor(val) {
    this.top = new StackNode(val);
  }

  push(val) {
    const newNode = new StackNode(val, this.top);
    this.top = newNode;
  }

  pop() {
    if (this.top !== null) {
      const prevTop = this.top;
      this.top = this.top.next;
      return prevTop.val;
    } else throw new Error("Stack is Empty");
  }

  peek() {
    if (this.top !== null) {
      return this.top.val;
    } else throw new Error("Stack is Empty");
  }
}

// Testing....
const stack = new Stack(1);

stack.push(2);
console.log(stack);

console.log(stack.peek());

let returnedValue;

try {
  while (true) {
    returnedValue = stack.pop();
    console.log(returnedValue);
  }
} catch (error) {
  console.log(error.message);
}
