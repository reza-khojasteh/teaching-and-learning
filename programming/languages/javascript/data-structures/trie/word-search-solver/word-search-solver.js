const Trie = require("./util/trie");

// A stand-alone Puzzle (Word Search) Solver
class WordSearchSolver {
  static async check(grid, trie, i, j, i_diff, j_diff, moves) {
    const n = grid.length;
    const m = grid[0].length;
    let node = trie;
    const start_i = i;
    const start_j = j;
    let substring = "";

    while (i >= 0 && i < n && j >= 0 && j < m && node.children[grid[i][j]]) {
      substring += grid[i][j];
      node = node.children[grid[i][j]];

      if (node.isEnd) {
        moves.push([
          [start_i, start_j],
          [i, j],
        ]);

        trie.delete(substring);
      }

      i += i_diff;
      j += j_diff;
    }
  }

  static solve(grid, words) {
    const moves = [];
    const trie = new Trie();
    trie.build(words);
    const n = grid.length;
    const m = grid[0].length;

    for (let i = 0; i < n; i++)
      for (let j = 0; j < m; j++)
        if (trie.children[grid[i][j]])
          for (const [i_diff, j_diff] of [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1],
          ])
            WordSearchSolver.check(grid, trie, i, j, i_diff, j_diff, moves);
    return moves;
  }
}

// Testing...
console.log(
  WordSearchSolver.solve(
    [
      ["a", "b"],
      ["c", "d"],
    ],
    ["ab", "xy", "da"]
  )
);
