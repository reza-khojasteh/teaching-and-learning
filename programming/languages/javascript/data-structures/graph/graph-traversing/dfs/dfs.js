(() => {
  // DFS traversing of a graph
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

  // Testing: constructing a sample (directed) graph and calling dfs....
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

  const graph = []; // Initializing adjacency list (to represent the graph)

  // Creating the graph's adjacency list in 3 steps:
  // 1- Determining the set of vertices in the graph
  const setOfVertices = {};
  for (const pair of edges) {
    if (!setOfVertices[pair[0]]) {
      setOfVertices[pair[0]] = true;
    }

    // There might also be nodes that don't have out-degrees
    if (!setOfVertices[pair[1]]) {
      setOfVertices[pair[1]] = true;
    }
  }

  // 2- Initializing the graph's adjacency list
  for (const key in setOfVertices) {
    graph[key] = [];
  }

  // 3- Adding the adjacents to each vertex's list
  edges.forEach((pair) => {
    graph[pair[0]].push(pair[1]);
  });

  // Initializing the visited hash/set and the order array:
  const visited = {}; // Hash/Set of visited vertices
  const order = []; // List/Order of traversed vertices by dfs

  // Calling dfs (starting from the first element in 'setOfVertices') and printing out the result
  // Note that we assume that there are no isolated nodes, otherwise we should continue calling dfsCycleFinder (as opposed to calling it just once, as it is now,) until no unvisited nodes are left!
  isNaN(Object.keys(setOfVertices)[0])
    ? dfs(Object.keys(setOfVertices)[0])
    : dfs(+Object.keys(setOfVertices)[0]);
  console.log("The vertices are visited in this order:", order);
})();
