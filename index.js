function bfs(rootNode, vertices, edges){

  rootNode = vertices[0]
 // console.log(rootNode)

  let visited = []
  
  rootNode.distance = 0
  
  let queue = [rootNode]
  //console.log(queue)
  
  while(queue.length !== 0)
  {


    let firstNode = queue.shift()
    console.log(firstNode)
    let adjacentVertices = findAdjacent(firstNode.name, vertices, edges)
    
    markDistanceAndPredecessor(firstNode, adjacentVertices)
    addTo(adjacentVertices, queue)  
    visited.push(firstNode)
  }

  return visited

}

function findAdjacent(node, vertices, edges)
{
  
  var adjArray = []
  var foundNode
  var adjObj
  

      
  for (var i = 0; i < edges.length; i++)
  {

    if (edges[i][0] === node )
    {
      adjObj = getObj(vertices, edges[i][1]) 
      if(adjObj.distance === null)
      {
        adjArray.push(adjObj);
      }
    }
    else if (edges[i][1] === node)
    {
      adjObj = getObj(vertices, edges[i][0]) 
      if(adjObj.distance === null)
      {
        adjArray.push(adjObj);
      }
    }
  }

  return adjArray
  
}

function getObj(vertices, name)
{

  return vertices.find(element => (element.name === name));
  
}

function markDistanceAndPredecessor(vertex, vertices)
{

  for( var i = 0; i < vertices.length; i++)
  {
    vertices[i].distance = vertex.distance + 1;
    vertices[i].predecessor = vertex;
  }

  return vertices;
  
}

function addTo(vertices, list)
{

  for (var i = 0; i < vertices.length; i++)
  {
    list.push(vertices[i])
  }
  
}