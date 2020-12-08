function findAdjacent(rootNodeName, vertices, edges) {
  //iterate through all the edges
  //find the edges that include the rootNode, get all the names
  //find the vertices that have that name--minus the original one
  const matches = edges.filter((edge) => edge.includes(rootNodeName)).flat();
  const adjacent = vertices.filter(
    (vertex) =>
      matches.includes(vertex.name) &&
      vertex.name != rootNodeName &&
      vertex.distance === null
  );
  console.log(
    `for node ${rootNodeName}, adjacent is ${JSON.stringify(adjacent)}`
  );
  debugger;
  return adjacent;
}
function markDistanceAndPredecessor(vertex, adjacentNodes) {
  if (vertex.distance === null) {
    vertex.distance = 0;
  }
  adjacentNodes.forEach((node) => {
    node.predecessor = vertex;
    node.distance = node.predecessor.distance + 1;
  });
  console.log(`after marking, vertex is ${JSON.stringify(vertex)}`);
  console.log(`adjacentNodes are ${JSON.stringify(adjacentNodes)}`);
  debugger;
}

function bfs(rootNode, vertices, edges) {
  const queue = [];
  const visited = [];

  queue.push(rootNode);
  visited.push(rootNode);
  //I need to call markDistanceAndPredecessor once with vertex as rootNode and adjacentNodes as its adjacent nodes
  //but not repeadently
  while (!(queue.length === 0)) {
    const firstNode = queue.shift();
    const adjacentVertices = findAdjacent(firstNode.name, vertices, edges);
    markDistanceAndPredecessor(firstNode, adjacentVertices);
    for (const vertex of adjacentVertices) {
      //findAdjacent seems to stop working after going too deep
      queue.push(vertex);
      visited.push(vertex);
    }
  }
  console.log(`visited notes are ${JSON.stringify(visited)}`);
  return visited;
}

// function test() {
//   let edges;
//   let vertices;
// }
