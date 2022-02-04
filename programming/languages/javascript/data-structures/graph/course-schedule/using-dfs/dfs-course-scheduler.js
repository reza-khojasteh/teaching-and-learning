// Finding topological sort, in case there are not any cycles in a graph using dfs traversing (by adding a hash/set named 'path' to the original dfs.)

const courseScheduler = (n, edges) => {
  // In case this function returns true, we can count on the order of traversed nodes as the topological sort (in the array named 'order'.)
  const dfsCourseScheduler = (vertex) => {
    visited[vertex] = true;
    order.push(vertex);

    path[vertex] = true; // Add the current vertex to the current path

    for (const neighbor of graph[vertex]) {
      if (path[neighbor]) return false; // Return false if cycle detected in this call,

      if (!visited[neighbor]) if (!dfsCourseScheduler(neighbor)) return false; // Or in one of the nested calls!
    }

    path[vertex] = undefined; // Remove the current vertex from the current path

    return true;
  };

  const graph = []; // Adjacency list representing graph

  // Initializing the graph's adjacency list
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }

  edges.forEach((pair) => {
    graph[pair[0]].push(pair[1]);
  });

  const visited = {}; // Hash/Set of visited vertices
  const order = []; // List/Order of traversed vertices by dfsCourseScheduler (valid just if there are no detected cycles!)
  const path = {}; // Current path we are on (used to check whether there is a cycle!)

  // Calling dfsCourseScheduler until no unvisited nodes are left!
  let cycle = false;
  for (let i = 0; i < n && !cycle; i++) {
    if (!visited[i]) {
      // console.log(dfsCourseScheduler(i));
      if (!dfsCourseScheduler(i)) {
        cycle = true;
      }
    }
  }

  if (!cycle) {
    console.log(order);
  } else {
    console.log("It won't be possible because of the presence of cycle(s).");
  }
};

// Testing: constructing a sample (directed) graph and calling dfsCourseScheduler....
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
courseScheduler(n, edges);
