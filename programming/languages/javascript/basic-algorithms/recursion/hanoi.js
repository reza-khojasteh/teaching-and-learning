function hanoi(first, second, third, number) {
  if (number <= 0) {
    console.log("At least one disk is needed!");
  } else if (number === 1) {
    console.log(`Move from ${first} to ${third}`);
  } else {
    hanoi(first, third, second, number - 1);
    console.log(`Move from ${first} to ${third}`);
    hanoi(second, first, third, number - 1);
  }
}

hanoi("f", "s", "t", 4);
