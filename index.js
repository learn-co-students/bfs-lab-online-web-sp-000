function findAdjacent(nodeName, vertices, edges) {
  let adjacentNames = edges.filter( (edge) => 
    edge.includes(nodeName)
  ).map( (edge) => edge.find( (name) => name !== nodeName) )

  let adjacentVertices = adjacentNames.map( (adjacent) => vertices.find( (vertice) => vertice.name === adjacent) )

  return  adjacentVertices.filter( (vertice) => vertice.distance === null )

}

function markDistanceAndPredecessor(predecessor, adjacentNodes) {
  adjacentNodes.map( (node) => { node.predecessor = predecessor; node.distance = predecessor.distance + 1 })
}

function bfs(startingNode, vertices, edges) {
  startingNode.distance = 0;
  let queue = [startingNode];
  let discovered = [startingNode];
  // mark startingNode's distance as zero
  // want to repeat from here
  while (queue.length !== 0) {
    let currentNode = queue.shift();
    let adjacentNodes = findAdjacent(currentNode.name, vertices, edges);
    markDistanceAndPredecessor(currentNode, adjacentNodes);
    adjacentNodes.map( (node) => queue.push(node) );
    discovered = discovered.concat(adjacentNodes);
  }

  return discovered;
}