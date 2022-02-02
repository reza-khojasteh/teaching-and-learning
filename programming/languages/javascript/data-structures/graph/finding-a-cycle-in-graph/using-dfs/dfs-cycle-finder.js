// Finding a cycle in a graph using dfstraversing (by adding a hash/set named 'path' to the original dfs.) Note that the algorithm saves the order of traversed nodes by the time the cycle was found (in the array named 'order'.)
// We also assume that there are no isolated nodes, otherwise we should continue calling dfsCycleFinder down there (as opposed to calling it just once, as it is now,) until no unvisited nodes are left!
const dfsCycleFinder = (vertex) => {
  visited[`${vertex}`] = true;
  order.push(vertex);

  path[`${vertex}`] = true; // Add the current vertex to the current path

  for (const neighbor of graph[vertex]) {
    if (path[`${neighbor}`]) return true; // Return true if cycle detected in this call

    if (!visited[`${neighbor}`]) if (dfsCycleFinder(neighbor)) return true; // Or in one of the nested calls!
  }

  path[`${vertex}`] = undefined; // Remove the current vertex from the current path

  return false;
};

// Testing: constructing a sample (directed) graph and calling dfsCycleFinder....
let n = 6; // Number of nodes in the sample graph
let edges = [
  [1, 0], // Removing/commenting out this edge causes the cycle to be removed
  [0, 3],
  [3, 1],
  [1, 2],
  [1, 4],
  [2, 4],
  [3, 5],
  [4, 5],
]; // Array of edges in the sample (directed) graph; as an example, [0, 3] means that there is an edge from vertex 0 to vertex 3
const graph = []; // Adjacency list representing graph

// Initializing the graph's adjacency list
for (let i = 0; i < n; i++) {
  graph[i] = [];
}

edges.forEach((pair) => {
  graph[pair[0]].push(pair[1]);
});

const visited = {}; // Hash/Set of visited vertices
const order = []; // List/Order of (maybe partial) traversed vertices by dfsCycleFinder

const path = {}; // Current path we are on (used to check whether there is a cycle!)

// Calling dfsCycleFinder and prinitng out the result
console.log(dfsCycleFinder(0));
console.log(order);
