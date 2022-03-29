const { remote } = require("webdriverio");

const Trie = require("./util/trie");

(async () => {
  const browser = await remote({
    capabilities: {
      browserName: "chrome",
    },
  });

  await browser.url("https://wordsearch.samsonn.com/");

  const check = (grid, trie, i, j, i_diff, j_diff, moves) => {
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
  };

  const solve = (grid, words) => {
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
            check(grid, trie, i, j, i_diff, j_diff, moves);
    return moves;
  };

  const n = 15;
  const m = 15;
  const grid = [];
  for (let i = 0; i < n; i++) {
    grid[i] = Array(m).fill("");
  }

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) {
      let cell = await browser.$(
        `//div[@class="Grid_gridCell__1L1O2" and @row=${i} and @col=${j}]`
      );
      grid[i][j] = await cell.getText();
    }

  const words = [];
  const wordList = await browser.$('//div[@class="WordList_wordList__3da04"]');
  const wordsToFind = await wordList.$$("//a");

  for (const word of wordsToFind) {
    let temp = await word.getText();
    if (temp !== "") words.push(temp);
  }

  const moves = solve(grid, words);

  // moves.forEach(async (pair) => {
  //   // console.log(pair[0][0], pair[0][1]);
  //   console.log(
  //     `going to drag and drop from @row=${pair[0][0]} and @col=${pair[0][1]} to @row=${pair[1][0]} and @col=${pair[1][1]}`
  //   );
  //   const start = await browser.$(
  //     `//div[@class="Grid_gridCell__1L1O2" and @row=${pair[0][0]} and @col=${pair[0][1]}]`
  //   );
  //   const end = await browser.$(
  //     `//div[@class="Grid_gridCell__1L1O2" and @row=${pair[1][0]} and @col=${pair[1][1]}]`
  //   );
  //   await start.dragAndDrop(end);
  //   await browser.pause(1000);
  // });

  console.log(grid, words, moves);
})();
