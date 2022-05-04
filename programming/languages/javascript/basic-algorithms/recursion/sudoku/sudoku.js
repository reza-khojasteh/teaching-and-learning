const isValid = (grid, r, c, k) => {
  const notInRow = !grid[r].includes(k);

  let notInColumn = true;
  for (let i = 0; i < 9; i++) {
    if (grid[i][c] === k) {
      notInColumn = false;
    }
  }

  let notInBox = true;
  for (let i = Math.floor(r / 3) * 3; i < Math.floor(r / 3) * 3 + 3; i++) {
    for (let j = Math.floor(c / 3) * 3; j < Math.floor(c / 3) * 3 + 3; j++) {
      if (grid[i][j] === k) {
        notInBox = false;
      }
    }
  }

  return notInRow && notInColumn && notInBox;
};

const sudoku = (grid, r = 0, c = 0) => {
  if (r === 9) {
    return true;
  } else if (c === 9) {
    return sudoku(grid, r + 1, 0);
  } else if (grid[r][c] !== 0) {
    return sudoku(grid, r, c + 1);
  } else {
    for (let k = 1; k < 10; k++) {
      if (isValid(grid, r, c, k)) {
        grid[r][c] = k;
        if (sudoku(grid, r, c + 1)) return true;
      }
    }
    grid[r][c] = 0;
    return false;
  }
};

let grid = [
  [0, 0, 4, 0, 5, 0, 0, 0, 0],
  [9, 0, 0, 7, 3, 4, 6, 0, 0],
  [0, 0, 3, 0, 2, 1, 0, 4, 9],
  [0, 3, 5, 0, 9, 0, 4, 8, 0],
  [0, 9, 0, 0, 0, 0, 0, 3, 0],
  [0, 7, 6, 0, 1, 0, 9, 2, 0],
  [3, 1, 0, 9, 7, 0, 2, 0, 0],
  [0, 0, 9, 1, 8, 2, 0, 0, 3],
  [0, 0, 0, 0, 6, 0, 1, 0, 0],
];

sudoku(grid);

// Printing the grid as a table
console.table(grid);
