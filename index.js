function bfs(rootNode, vertices, edges)
{
  rootNode.distance = 0
  let explored = [];
  let queue = [];
  queue.push(rootNode);

  while(queue.length !== 0)
  {
    let currentNode = queue.shift();
    let adjacentVertices = findAdjacent(currentNode.name, vertices, edges);
    for( let i = 0; i < adjacentVertices.length; i++)
    {
      queue.push(adjacentVertices[i])
    }
    markDistanceAndPredecessor(currentNode, adjacentVertices);
    explored.push(currentNode);
  }
  return explored
}


function findAdjacent(node, vertices, edges)
{
  var adjArr = [];
  for(let i = 0; i < edges.length; i++)
  {
///if node is first
    if(node == edges[i][0])
    {
      let adjName = edges[i][1]
      for(let j = 0; j < vertices.length; j++)
      {
        if(adjName == vertices[j].name && vertices[j].distance === null)
        {
          adjArr.push(vertices[j])
        }
      }
    }
///else if node is second
    else if(node == edges[i][1])
    {
      let adjName = edges[i][0]
      for(let j = 0; j < vertices.length; j++)
      {
        if(adjName == vertices[j].name && vertices[j].distance === null)
        {
          adjArr.push(vertices[j])
        }
      }
    }
  }
  console.log(`returning from findAdjacent`)
  console.log(adjArr)
  return adjArr
}


function addToQueue(vertex)
{
  queue.push(vertex)
}


function markDistanceAndPredecessor(vertex, adjacentNodes)
{
  for(let i = 0; i < adjacentNodes.length; i++)
  {
    if(vertex.distance === null)
    {
      adjacentNodes[i].distance =  1
      adjacentNodes[i].predecessor = vertex
    }
    else
    {
      adjacentNodes[i].distance = (vertex.distance + 1)
      adjacentNodes[i].predecessor = vertex
    }
  }
  return adjacentNodes
}