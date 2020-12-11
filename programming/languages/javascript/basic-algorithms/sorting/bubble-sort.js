//Bubble Sort: O(n^2)
function bubbleSort(array) {
    //if case array was null or undefined!
    // if(!array) {
    //     console.log('no array was passed');
    //     return;
    // }
    //else 
    const n = array.length;
    let sorted = false;
    //main body/operation
    for (let i = 0; (i < n - 1) && !sorted; i++) {
        sorted = true;
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(j);
            }
        }
    }
    //swaps two elements in the array
    function swap(j) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        sorted = false;
    }
}
//Test Data
const a1 = [4, 2, 765, 12, -434, 545.7, 423.54, -454.6, 0, 34];
bubbleSort(a1);
console.log(a1);