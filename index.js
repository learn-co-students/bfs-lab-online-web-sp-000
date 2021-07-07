//should return an array of nodes in the order they were visited
function bfs(rootNode, vertices, edges){
  let discoveredList = [rootNode]; //this list keeps track of which vertices have been discovered (temporary array set up to iterate on)
  let discoverOrder = [rootNode];  //this list keeps track of the order in order
  rootNode.distance = 0; //sets the rootNode distance to zero
  while (discoveredList.length != 0){
    let currentNode = discoveredList.shift(); //removes first element and uses it in the current iteration

//find adjacent nodes
    let adjacentNodes = findAdjacent(currentNode.name, vertices, edges); //finds adjacent nodes to current node
    discoverOrder = discoverOrder.concat(adjacentNodes);  //adds adjacent node to discoverOrder to keep track of order found
//process adjacent nodes and adds them to temporary iteration array (discoveredList)
    markDistanceAndPredecessor(currentNode, adjacentNodes);  //maps array of the adjacent nodes to the current node with this function
    discoveredList = discoveredList.concat(adjacentNodes);  //adds adjacent nodes to the discovered list (once they've been mapped and processed)
  }
  return discoverOrder
}

//should return an array of adjacent nodes
function findAdjacent(nodeName, vertices, edges){
  //the following returns an array for all the elements that pass the test in the function (vertex is next to edge)
  return edges.filter(function(edge){return edge.includes(nodeName)}) //first filters edges that have the nodeNames in them
              .map(function(edge){return edge.filter(function(node){return (node != nodeName)})[0]}) //maps edges where nodes are not equal in name
              .map(function(name){return findNode(name, vertices)}) //maps the nodes that match vertex names
              .filter(function(node){return node.distance == null}) //filters all the ones that have null distances
}


//should return an array of adjacent nodes
function markDistanceAndPredecessor(predecessor, adjacentNodes){
  adjacentNodes.map(function(node){  //nonmutating method
    node.distance = predecessor.distance + 1;
    node.predecessor = predecessor;
  })
}


/*
function addVertexToQueue(node){
  return queue.push(node)
}
*/


//returns vertices that have the given node name
function findNode(nodeName, vertices){
  return vertices.find(function(vertex){
    return vertex.name == nodeName;
  })
}
