function findAdjacent(node, vertices, edges) {
  let selectEdges = edges.filter(e => {
    return e[0] === node || e[1] === node;
  });

  let newNodes = selectEdges.map(e => {
    let newNode = e[0] === node ? e[1] : e[0];
    let vertex = vertices.find(v => v.name === newNode);
    return vertex;
  });

  let undiscovered = newNodes.filter(n => n.distance === null);
  return undiscovered;
}

function markDistanceAndPredecessor(node, adjacentNodes) {
  return adjacentNodes.map(n => {
    n.distance += node.distance + 1;
    n.predecessor = node;
    return n;
  });
}

function bfs(rootNode, vertices, edges){
  rootNode.distance = 0;
  let queue = [rootNode];
  let r = [rootNode];
  while (queue.length != 0) {
    let currentNode = queue.shift();
    let adjacent = findAdjacent(currentNode.name, vertices, edges);
    let markedAdjacent = markDistanceAndPredecessor(currentNode, adjacent);
    queue = queue.concat(adjacent);
    r = r.concat(adjacent);
  }
  return r;
}
