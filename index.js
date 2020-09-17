function bfs(/*a, b, c, d, e, f, g, */rootNode, vertices, edges){
  rootNode.distance = 0;
  let queue = [rootNode];
  let target = [rootNode];

  while(queue.length != 0) {
      let firstNode = queue.shift();
      let adjacentVertices = findAdjacent(firstNode.name, vertices, edges);

      target = target.concat(adjacentVertices);
      markDistanceAndPredecessor(firstNode, adjacentVertices);
      queue = queue.concat(adjacentVertices);
  }
  return target;
}



function markDistanceAndPredecessor(head, adjacents){
  return adjacents.map(e => {
    e.distance = head.distance + 1;
    e.predecessor = head;
  });
}

function findAdjacent(vertexName, allVertices, edges){
  const target = [];

  //traverse edges
  edges.map(vertexNamePair => {
    if (vertexNamePair.includes(vertexName)){
      const adjacent = vertexNamePair.find(e => e !== vertexName);
      const matchingVertex = allVertices.find(v => v.name === adjacent);
      if (matchingVertex.distance === null)
        target.push(matchingVertex);
    }
  });
  return target;
}
