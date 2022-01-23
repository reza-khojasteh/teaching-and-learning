class BinaryMaxHeap {
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
    let largest;

    while (
      (left < len && this.heap[index] < this.heap[left]) ||
      (right < len && this.heap[index] < this.heap[right])
    ) {
      if (right >= len || this.heap[left] > this.heap[right]) largest = left;
      else largest = right;

      this.#swap(index, largest);

      index = largest;
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
const binaryMaxHeap1 = new BinaryMaxHeap();
console.log(binaryMaxHeap1.heap);

const binaryMaxHeap2 = new BinaryMaxHeap([
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
console.log(binaryMaxHeap2.heap);

const binaryMaxHeap3 = new BinaryMaxHeap(null);
console.log(binaryMaxHeap3.heap);

const binaryMaxHeap4 = new BinaryMaxHeap(undefined);
console.log(binaryMaxHeap4.heap);

const binaryMaxHeap5 = new BinaryMaxHeap(123);
console.log(binaryMaxHeap5.heap);

const binaryMaxHeap6 = new BinaryMaxHeap("abc");
console.log(binaryMaxHeap6.heap);

const binaryMaxHeap7 = new BinaryMaxHeap({ key: "value" });
console.log(binaryMaxHeap7.heap);

const binaryMaxHeap8 = new BinaryMaxHeap([
  9, 11, 18, 13, 15, 14, 7, 8, 12, 10, 4, 6, 3,
]);
console.log(binaryMaxHeap8.heap);
