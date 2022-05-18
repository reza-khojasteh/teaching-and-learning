//Find kth largest element through QuickSelect:

// Definition of a function, swap, which swaps two elements in the array
const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

// Definition of a function, getPartition, which partitions an array, based on the correct position of a pivot (which is set to the array's 'last element' at the beginning.)
// const getPartition = (array, left, right) => {
//   const pivotElement = array[right];
//   let partitionIndex = left;

//   for (let j = left; j < right; j++) {
//     if (array[j] < pivotElement) {
//       // Or if (array[j] <= pivotElement) {
//       swap(array, partitionIndex, j);
//       partitionIndex++;
//     }
//   }

//   swap(array, partitionIndex, right);

//   return partitionIndex;
// };

// OR
const getPartition = (array, left, right) => {
  const pivotElement = array[right];
  let partitionIndex = left;

  for (let j = left; j <= right; j++) {
    if (array[j] <= pivotElement) {
      swap(array, partitionIndex, j);
      partitionIndex++;
    }
  }

  return partitionIndex - 1;
};

// QuickSelect:
const quickSelect = (array, left, right, indexToFind) => {
  const partitionIndex = getPartition(array, left, right);

  if (partitionIndex === indexToFind) {
    return array[partitionIndex];
  } else if (indexToFind < partitionIndex) {
    return quickSelect(array, left, partitionIndex - 1, indexToFind);
  } else {
    return quickSelect(array, partitionIndex + 1, right, indexToFind);
  }
};

// findKthLargest:
const findKthLargest = (array, k) => {
  const indexToFind = array.length - k;

  return quickSelect(array, 0, array.length - 1, indexToFind);
};

const array = [5, 3, 1, 6, 4, 2];
const kthLargestIndex = 4;
console.log(findKthLargest(array, kthLargestIndex));
