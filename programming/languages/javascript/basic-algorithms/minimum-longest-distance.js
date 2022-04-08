// A function to find the block which has the minimum of the longest distances to all facilities (mentioned in the blocks as 'true' or 'false')
const MinLongestDistFinder = (blocks, reqs) => {
  // First, we go from left to right
  // And we start by initializing the first blocks longest distances...
  blocks[0]["longestDist"] = -1;

  for (let i = 0; i < reqs.length; i++) {
    if (blocks[0][reqs[i]]) blocks[0][reqs[i]] = 0;
    else blocks[0][reqs[i]] = Number.MAX_SAFE_INTEGER;

    blocks[0]["longestDist"] = Math.max(
      blocks[0]["longestDist"],
      blocks[0][reqs[i]]
    );
  }

  // Now, we continue with the second block from the left
  for (let i = 1; i < blocks.length; i++) {
    blocks[i]["longestDist"] = -1;

    for (let j = 0; j < reqs.length; j++) {
      if (blocks[i][reqs[j]]) blocks[i][reqs[j]] = 0;
      else if (blocks[i - 1][reqs[j]] !== Number.MAX_SAFE_INTEGER)
        blocks[i][reqs[j]] = blocks[i - 1][reqs[j]] + 1;
      else blocks[i][reqs[j]] = Number.MAX_SAFE_INTEGER;

      blocks[i]["longestDist"] = Math.max(
        blocks[i]["longestDist"],
        blocks[i][reqs[j]]
      );
    }
  }

  // And now, from the right
  // At the same time, we can calculate the min of the maxs!
  let result = Number.MAX_SAFE_INTEGER;
  let block;

  for (let i = blocks.length - 2; i >= 0; i--) {
    // Some of the 'blocks[i]["longestDist"]'s have turned into 'Number.MAX_SAFE_INTEGER'. Let's turn them back to -1
    blocks[i]["longestDist"] = -1;

    for (let j = 0; j < reqs.length; j++) {
      //   if (blocks[i][reqs[j]] !== 0) // Not really needed! ;-)
      blocks[i][reqs[j]] = Math.min(
        blocks[i][reqs[j]],
        blocks[i + 1][reqs[j]] + 1
      );

      blocks[i]["longestDist"] = Math.max(
        blocks[i]["longestDist"],
        blocks[i][reqs[j]]
      );
    }

    if (blocks[i]["longestDist"] < result) {
      result = blocks[i]["longestDist"];
      block = i;
    }
  }

  console.log(blocks, result, block);
};

// Testing...
const blocks = [
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: true,
    school: false,
    store: false,
  },
  {
    gym: true,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: false,
  },
  {
    gym: false,
    school: true,
    store: true,
  },
];

const reqs = ["gym", "school", "store"];

MinLongestDistFinder(blocks, reqs);
