function bfs(rootNode, vertices, edges){
  rootNode.distance = 0;
  let toVisitQueue = [];
  let visited = [];

  // Start the visiting queue with the root
  toVisitQueue.push(rootNode);

  while (toVisitQueue.length !== 0) {
    let currentNode = toVisitQueue.shift();
    visited.push(currentNode);

    let adjacentNodes = findAdjacent(currentNode.name, vertices, edges);
    markDistanceAndPredecessor(currentNode, adjacentNodes);
    for (let i=0; i<adjacentNodes.length; i++) {
      toVisitQueue.push(adjacentNodes[i]);
    }
  }

  return visited;
}

function findAdjacent(nodeName, vertices, edges) {
  let adjacent = [];
  let neighbor;
  for (let i=0; i<edges.length; i++) {
    if (edges[i][0] === nodeName) {
      neighbor = vertices.find(vert => vert.name === edges[i][1]);
      if (neighbor.distance === null) {
        adjacent.push(neighbor);
      }
    } else if (edges[i][1] === nodeName) {
      neighbor = vertices.find(vert => vert.name === edges[i][0]);
      if (neighbor.distance === null) {
        adjacent.push(neighbor);
      }
    }
  }

  return adjacent;
}

function markDistanceAndPredecessor(node, adjacentNodes) {
  for (let i=0; i<adjacentNodes.length; i++) {
    let currentNeighbor = adjacentNodes[i];
    currentNeighbor.distance = node.distance + 1;
    currentNeighbor.predecessor = node;
  }

  return adjacentNodes;
}
