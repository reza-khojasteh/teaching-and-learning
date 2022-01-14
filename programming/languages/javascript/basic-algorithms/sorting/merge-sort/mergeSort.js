// First, a function to merge two sorted arrays:
const merge = (arr1, arr2) => {
  const output = [];
  let i = 0;
  let j = 0;

  // As long as both arrays are not yet done:
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      output.push(arr1[i++]);
      output.push(arr2[j++]);
    } else if (arr1[i] < arr2[j]) output.push(arr1[i++]);
    else output.push(arr2[j++]);
  }

  // Now, fill up the rest with the one which still has some elements in, either this way:
  for (let index = i; index < arr1.length; index++) output.push(arr1[index]);
  for (let index = j; index < arr2.length; index++) output.push(arr2[index]);
  // Or this way (which needs the output array, defined above, to be 'let', not 'const'):
  //   if (i < arr1.length) output = [...output, ...arr1.slice(i)]; // OR output.concat(arr1.slice(i));
  //   else output = [...output, ...arr2.slice(j)]; // OR output.concat(arr2.slice(j));

  // Below, is yet another method which could also be used to do the same thing (replacing the whole 'while' loop above):
  // while (i < arr1.length || j < arr2.length) {
  //   if (i < arr1.length && j < arr2.length) {
  //     if (arr1[i] < arr2[j]) {
  //       output.push(arr1[i]);
  //       i++;
  //     } else {
  //       output.push(arr2[j]);
  //       j++;
  //     }
  //   } else if (i < arr1.length) {
  //     output.push(arr1[i]);
  //     i++;
  //   } else {
  //     output.push(arr2[j]);
  //     j++;
  //   }
  // }

  return output;
};

// And here comes the main function, mergeSort:
const mergeSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  } else {
    let mid = Math.floor(arr.length / 2);
    let leftPart = mergeSort(arr.slice(0, mid));
    let rightPart = mergeSort(arr.slice(mid));
    return merge(leftPart, rightPart);
  }
};

// Testing....
console.log(mergeSort([4, 2, 765, 12, -434, 545.7, 423.54, -454.6, 0, 34]));
