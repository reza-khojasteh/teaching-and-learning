// Definition of a function, swap, which swaps two elements in the array
const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

// First solution:

// // Definition of a function, partition, which partitions an array, based on the correct position of a pivot (which is set to the array's 'begin' at the beginning.)
// const partition = (array, begin, end) => {
//   let pivot = begin;
//   let left = begin + 1;
//   let right = end - 1;

//   while (left < right) {
//     while (array[left] <= array[pivot] && left < end - 1) {
//       left++;
//     }

//     while (array[right] >= array[pivot] && right > begin) {
//       right--;
//     }

//     if (left < right) {
//       swap(array, left, right);
//     }
//   }

//   swap(array, pivot, right);
//   return right;
// };

// // QuickSort:
// const quickSort = (array, begin, end) => {
//   // If array has no elements or has just one element, it's already sorted!
//   if (end <= begin + 1) {
//     return;
//   }

//   // If array has exactly two elements, sort it (if needed) and return!
//   if (end === begin + 2) {
//     if (array[begin] > array[end - 1]) {
//       swap(array, begin, end - 1);
//     }
//     return;
//   }

//   // Partition the array:
//   let right = partition(array, begin, end);

//   // And recursively sort both partiotions
//   quickSort(array, begin, right);
//   quickSort(array, right + 1, end);
// };

// OR a second (simpler) solution:

// Definition of a function, getPartition, which partitions an array, based on the correct position of a pivot (which is set to the array's 'last element' at the beginning.)
const getPartition = (array, left, right) => {
  const pivotElement = array[right];
  let partitionIndex = left;

  for (let j = left; j < right; j++) {
    if (array[j] < pivotElement) {
      swap(array, partitionIndex, j);
      partitionIndex++;
    }
  }

  swap(array, partitionIndex, right);

  return partitionIndex;
};

// QuickSort:
const quickSort = (array, left, right) => {
  if (left < right - 1) {
    const partitionIndex = getPartition(array, left, right - 1);
    quickSort(array, left, partitionIndex);
    quickSort(array, partitionIndex + 1, right);
  }
};

// Testing...
let array = [];
quickSort(array, 0, array.length);
console.log(array);

array = [1];
quickSort(array, 0, array.length);
console.log(array);

array = [2, 1];
quickSort(array, 0, array.length);
console.log(array);

array = [1, 2];
quickSort(array, 0, array.length);
console.log(array);

array = [2, 1, 0];
quickSort(array, 0, array.length);
console.log(array);

array = [2, 0, 1];
quickSort(array, 0, array.length);
console.log(array);

array = [0, 1, 2];
quickSort(array, 0, array.length);
console.log(array);

array = [0, 2, 1];
quickSort(array, 0, array.length);
console.log(array);

array = [1, 0, 2];
quickSort(array, 0, array.length);
console.log(array);

array = [1, 2, 0];
quickSort(array, 0, array.length);
console.log(array);

array = [4, 2, 765, 12, 4, 545.7, 4, 2, 0, 12];
quickSort(array, 0, array.length);
console.log(array);

array = [4, 2, 765, 12, -434, 545.7, 423.54, -454.6, 0, 34];
quickSort(array, 0, array.length);
console.log(array);

array = [4, 2, 765, 12, -434, 545.7, 423.54, -454.6, 0, 34, 500];
quickSort(array, 0, array.length);
console.log(array);
