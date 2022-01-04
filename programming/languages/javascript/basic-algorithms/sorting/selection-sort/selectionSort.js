//Selection Sort: O(n^2)
function selectionSort(array) {
  //in case array was null or undefined!
  // if(!array) {
  //     console.log('no array was passed');
  //     return;
  // }
  //else
  for (let i = 0; i < array.length - 1; i++) {
    let min = array[i];
    let minIndex = i;
    //main body/operation
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j];
        minIndex = j;
      }
    }
    swap(i, minIndex);
  }
  //swaps two elements in the array
  function swap(i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

//Test Data
const arr = [4, 2, 765, 12, -434, 545.7, 423.54, -454.6, 0, 34];
selectionSort(arr);
console.log(arr);
