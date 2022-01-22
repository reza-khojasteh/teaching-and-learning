class BinaryMinHeap {
  constructor(arr = null) {
    this.heap = [];

    // Heapify (Building the heap based on passed-in array)
    if (arr) {
      if (!Array.isArray(arr)) {
        console.log("Your passed-in object should be an array!");
        return;
      }
      if (arr.some(isNaN)) {
        console.log(
          "Your passed-in array's elements should be (coercible to) numbers!"
        );
        return;
      }

      this.heap = [...arr];

      for (let index = this.heap.length - 1; index >= 0; index--) {
        this.#siftDown(index);
      }
    }
  }

  #siftDown(index) {
    const len = this.heap.length;
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let smallest;

    while (
      (left < len && this.heap[index] > this.heap[left]) ||
      (right < len && this.heap[index] > this.heap[right])
    ) {
      if (right >= len || this.heap[left] < this.heap[right]) smallest = left;
      else smallest = right;

      this.#swap(index, smallest);

      index = smallest;
      left = 2 * index + 1;
      right = 2 * index + 2;
    }
  }

  #swap(i, j) {
    let temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
}

// Testing....
const binaryMinHeap1 = new BinaryMinHeap();
console.log(binaryMinHeap1.heap);

const binaryMinHeap2 = new BinaryMinHeap([
  "a",
  11,
  18,
  13,
  15,
  14,
  7,
  8,
  12,
  10,
  4,
  6,
  3,
]);
console.log(binaryMinHeap2.heap);

const binaryMinHeap3 = new BinaryMinHeap(null);
console.log(binaryMinHeap3.heap);

const binaryMinHeap4 = new BinaryMinHeap(undefined);
console.log(binaryMinHeap4.heap);

const binaryMinHeap5 = new BinaryMinHeap(123);
console.log(binaryMinHeap5.heap);

const binaryMinHeap6 = new BinaryMinHeap("abc");
console.log(binaryMinHeap6.heap);

const binaryMinHeap7 = new BinaryMinHeap({ key: "value" });
console.log(binaryMinHeap7.heap);

const binaryMinHeap8 = new BinaryMinHeap([
  9, 11, 18, 13, 15, 14, 7, 8, 12, 10, 4, 6, 3,
]);
console.log(binaryMinHeap8.heap);
