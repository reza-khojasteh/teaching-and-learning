class MyArray {
  constructor() {
    this.length = 0;
    // this.data = {};
  }
  get(index) {
    return this[index];
  }
  push(item) {
    this[this.length] = item;
    this.length++;
    return this;
  }
  pop() {
    const lastItem = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return lastItem;
  }
  deleteAtIndex(index) {
    const item = this[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this[i] = this[i + 1];
    }
    console.log(this[this.length - 1]);
    delete this[this.length - 1];
    this.length--;
  }
}

const myArray = new MyArray();
myArray.push("hi");
myArray.push("you");
myArray.push("!");
myArray.pop();
myArray.deleteAtIndex(0);
myArray.push("are");
myArray.push("nice");
myArray.shiftItems(0);
console.log(myArray);
