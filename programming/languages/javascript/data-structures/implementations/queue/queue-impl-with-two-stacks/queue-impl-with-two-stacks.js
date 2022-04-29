// Our class Stack definition (based on the problem specs!)
class Stack {
  constructor() {
    this.array = [];
  }

  push(x) {
    this.array.push(x);
  }

  pop() {
    if (!this.isEmpty()) return this.array.pop();
    else return null;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.array.length;
  }

  peek() {
    if (!this.isEmpty()) return this.array[this.size() - 1];
    else return null;
  }
}
// Testing....
// const stack = new Stack();
// stack.push(1);
// let num = stack.pop();
// console.log(num);
// console.log(stack.peek());
// console.log(stack.isEmpty());
// console.log(stack.size());
// num = stack.pop();
// console.log(num);
// console.log(stack.isEmpty());
// console.log(stack.size());
// console.log(stack.peek());
// stack.push(2);
// stack.push(3);
// console.log(stack.isEmpty());
// console.log(stack.size());
// console.log(stack.peek());

// Our class Queue definition (based on the problem specs!)
class MyQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  push(x) {
    if (this.stack2.isEmpty()) this.stack2.push(x);
    else {
      while (this.stack2.peek()) this.stack1.push(this.stack2.pop());

      this.stack2.push(x);

      while (this.stack1.peek()) this.stack2.push(this.stack1.pop());
    }
  }

  pop() {
    return this.stack2.pop();
  }

  peek() {
    return this.stack2.peek();
  }

  empty() {
    return this.stack2.isEmpty();
  }
}

// Testing...
const myQueue = new MyQueue();
console.log(myQueue.push(1));
console.log(myQueue.push(2));
console.log(myQueue.peek());
console.log(myQueue.pop());
console.log(myQueue.empty());
