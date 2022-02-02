// DFS traversing of a graph
const dfs = (vertex) => {
  visited[`${vertex}`] = true;
  order.push(vertex);

  for (const neighbor of graph[vertex])
    if (!visited[`${neighbor}`]) dfs(neighbor);
};

// Testing: constructing a sample (directed) graph and calling dfs....
let n = 6; // Number of nodes in the sample graph
let edges = [
  [1, 0],
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
const order = []; // List/Order of traversed vertices by dfs

// Calling dfs and prinitng out the result
// Note that we assume that there are no isolated nodes, otherwise we should continue calling dfsCycleFinder (as opposed to calling it just once, as it is now,) until no unvisited nodes are left!
dfs(0);
console.log(order);
