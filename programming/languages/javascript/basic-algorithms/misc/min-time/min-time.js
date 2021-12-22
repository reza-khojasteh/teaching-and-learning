const minTime = (processorTime, taskTime) => {
  let minTime = 0;
  let currentTask = 0;

  const compareFunc = (a, b) => {
    return a - b;
  };

  const compareFuncReverse = (a, b) => {
    return b - a;
  };

  processorTime.sort(compareFunc);
  taskTime.sort(compareFuncReverse);

  processorTime.forEach((time) => {
    let currentCompletionTime = taskTime[currentTask] + time;
    currentTask += 4;
    minTime = Math.max(minTime, currentCompletionTime);
  });

  return minTime;
};

// Testing...
console.log(minTime([8, 10], [2, 2, 3, 1, 8, 7, 4, 5]));
console.log(minTime([20, 10], [2, 3, 1, 2, 5, 8, 4, 3]));
console.log(minTime([10], [10, 10, 10, 10]));
