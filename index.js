function bfs(startingNode, vertices, edges){
    startingNode.distance = 0
    let discovered = [startingNode]
    let discoverOrder = [startingNode]
    while(discovered.length != 0){
      let currentNode = discovered.shift()
      let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
      discoverOrder = discoverOrder.concat(adjacentNodes);
      markDistanceAndPredecessor(currentNode, adjacentNodes)
      discovered = discovered.concat(adjacentNodes)
    }
    return discoverOrder
  }

// function findVertice(name, vertices) {
//     let currentVertice = vertices[0] 
//     let newVertices = vertices.slice(1)
    
//     if (currentVertice.name === name) {
//         return currentVertice;

//     } else {
//         currentVertice = newVertices[0]
//         return findVertice(name, newVertices)
//     }
// }

function findVertice(nodeName, vertices) {
    return vertices.find((vertice) => vertice.name === nodeName)
}

// function findAdjacent(nodeName, vertices, edges) {
//     let currentEdge = edges[0];
//     let adjacentEdge = edges[1];
//     let adjacentNodes = [];

//     if (currentEdge[0] === node) {
//         adjacentNodes.push(findVertice(currentEdge[1], vertices));
//     } else if (currentEdge[1] === node) {
//         adjacentNodes.push(findVertice(currentEdge[0], vertices));
//         adjacentNodes.push(findVertice(adjacentEdge[1], vertices))
//     } else {
//         let newEdges = edges.slice(1);
//         return findAdjacent(node, vertices, newEdges)
//     }

//     let filteredNodes = adjacentNodes.filter((node) => node.distance === null )

//     return filteredNodes;
// }


function findAdjacent(nodeName,  vertices, edges){
    return edges.filter(function(edge){
      return edge.includes(nodeName)
    }).map(function(edge){
      return edge.filter(function(node){
        return (node != nodeName)
      })[0]
    }).map(function(name){
      return findVertice(name, vertices)
    }).filter(function(node){
      return node.distance == null;
    })
  }

function markDistanceAndPredecessor(predecessor, adjacentNodes) {
    for (const adjacent of adjacentNodes) {
        adjacent.distance = predecessor.distance + 1;
        adjacent.predecessor = predecessor;
    }

    return adjacentNodes;
}

