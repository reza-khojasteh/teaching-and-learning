// Finding connected subgraphs using dfs traversing
const dfsConnectedSubgraphsFinder = () => {
  const connectedSubgraphs = []; // This will contain connected subgraphs

  // DFS traversing of a graph (assuming that vertices are numbered 0 to n - 1)
  /**
   * @param {number} vertex
   * @return {array} order
   */
  const dfs = (vertex) => {
    if (!graph[vertex]) {
      // Vertex is not on the graph!
      console.log(
        "This vertex is not on the graph! Please try with another vertex!"
      );
      return;
    }

    visited[vertex] = true;
    order.push(vertex);

    for (const neighbor of graph[vertex]) if (!visited[neighbor]) dfs(neighbor);
  };

  // Constructing a sample (directed) graph and calling dfs....
  let n = 11; // Number of nodes in the sample graph
  let edges = [
    [1, 0],
    [0, 3],
    [3, 1],
    [1, 2],
    [1, 4],
    [2, 4],
    [3, 5],
    [4, 5],
    [6, 9],
    [9, 7],
    [8, 10],
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
  let order = []; // List/Order of traversed vertices by dfs

  // Calling dfs until no unvisited nodes are left!
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      connectedSubgraphs.push(order);
      order = [];
    }
  }

  return connectedSubgraphs;
};

// Testing....
console.log(
  "The connected subgraphs of this graph, found by DFS traersing, are:",
  dfsConnectedSubgraphsFinder()
);
