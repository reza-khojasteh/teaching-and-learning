//Finding the longest sequence of identical consecutive integers in an array!

const longestSequence = (arr) => {
  let longestSequenceInteger = arr[0];
  let longestSequenceLength = 1;
  let currentSequenceInteger = arr[0];
  let currentSequnceLength = 1;
  arr[arr.length] = undefined;

  for (let index = 1; index <= arr.length; index++) {
    if (arr[index] === currentSequenceInteger) {
      currentSequnceLength++;
    } else {
      if (currentSequnceLength > longestSequenceLength) {
        longestSequenceLength = currentSequnceLength;
        longestSequenceInteger = currentSequenceInteger;
      }
      currentSequenceInteger = arr[index];
      currentSequnceLength = 1;
    }
  }
  // We did "arr[arr.length] = undefined;" in the beginning to skip the following at the end of our loop:
  //   if (currentSequnceLength > longestSequenceLength) {
  //     longestSequenceLength = currentSequnceLength;
  //     longestSequenceInteger = currentSequenceInteger;
  //   }

  console.log(longestSequenceInteger);
};

longestSequence([2, 3, 2, , 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4]);
