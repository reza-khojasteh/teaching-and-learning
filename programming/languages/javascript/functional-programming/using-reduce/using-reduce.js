const electionVotes = [
  "Harry",
  "Rick",
  "Ben",
  "Ben",
  "Harry",
  "Ashley",
  "Connor",
  "Rick",
  "Ashley",
  "Rick",
  "Albert",
  "Ben",
  "Michael",
  "Rick",
  "Albert",
  "Karen",
  "Harry",
  "Karen",
  "Donna",
  "Ashley",
  "Albert",
  "Harry",
  "Dane",
  "Dane",
  "Rick",
  "Donna",
  "Mortimer",
];

const tallyVotes = (votes) => {
  // Solution 1:
  //   const output = {};
  //   votes.forEach((vote) => {
  //     if (output[vote]) output[vote]++;
  //     else output[vote] = 1;
  //   });
  //   return output;

  // Solution 2:
  //   return votes.reduce(
  //     (acc, person) => ({ ...acc, [person]: acc[person] ? acc[person] + 1 : 1 }),
  //     {}
  //   );

  // Solution 3:
  return votes.reduce(
    (acc, person) => ({ ...acc, [person]: ++acc[person] || 1 }),
    {}
  );
};

console.log(tallyVotes(electionVotes));
