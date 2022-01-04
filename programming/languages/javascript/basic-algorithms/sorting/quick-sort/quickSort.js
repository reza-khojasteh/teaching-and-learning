const quickSort = (array, begin, end) => {
  // Definition of a funciotn, swap, which swaps two elements in the array
  const swap = (i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  // If array has no elements or has just one element, it's already sorted!
  if (end <= begin + 1) {
    return;
  }

  // If array has exactly two elements, sort it (if needed) and return!
  if (end === begin + 2) {
    if (array[begin] > array[end - 1]) {
      swap(begin, end - 1);
    }
    return;
  }

  // Main Logic
  let left = begin + 1;
  let right = end - 1;
  let pivot = begin;

  while (left < right) {
    while (array[left] <= array[pivot] && left < end - 1) {
      left++;
    }

    while (array[right] >= array[pivot] && right > begin) {
      right--;
    }

    if (left < right) {
      swap(left, right);
    }
  }

  // Now, partition:
  swap(pivot, right);
  // And recursively sort both partiotions
  quickSort(array, begin, right);
  quickSort(array, right + 1, end);
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

array = [4, 2, 765, 12, -434, 545.7, 423.54, -454.6, 0, 34];
quickSort(array, 0, array.length);
console.log(array);

array = [4, 2, 765, 12, -434, 545.7, 423.54, -454.6, 0, 34, 500];
quickSort(array, 0, array.length);
console.log(array);
