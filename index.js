function bfs(rootNode, vertices, edges){
    rootNode.distance = 0
    // let currentNode = rootNode;
    let visited = [];
    let queue = [];
    queue.push(rootNode)

    while (queue.length != 0) {
        let node = queue.shift()
        visited.push(node)
        let adjacentVertices = findAdjacent(node.name, vertices, edges)
        for (let vertex of adjacentVertices) {
            markDistanceAndPredecessor(vertex, adjacentVertices)
            queue.push(vertex)
        }
    }
    return visited
}


function findAdjacent(name, vertices, edges){
    let sisters = []
    let adjacent = []
    for (let edge of edges) {
        if (edge.includes(name)) {
            for (let vertex of edge) {
                if (vertex != name) {
                    sisters.push(vertex)
                }
            }
        }
    }

    for (let vertex of vertices) {
        if (sisters.includes(vertex.name) && vertex.distance == null) {
            adjacent.push(vertex)
        }
    }

    return adjacent
}

function markDistanceAndPredecessor(vertex, array){
    for (let v of array) {
        v.distance = vertex.distance +1
        v.predecessor = vertex
    }
}

let edges = [
    ['14th&6th', '23rd&6th'],
    ['23rd&6th', '34th&6th'],
    ['34th&6th', '28th&Bwy'],
    ['28th&Bwy', '23rd&Bwy'],
    ['23rd&Bwy', '14th&Lex'],
    ['14th&Lex', '23rd&Lex']
]
 
let vertices = [
  {name: '34th&6th', distance: null, predecessor: null},
  {name: '23rd&6th', distance: null, predecessor: null},
  {name: '14th&6th', distance: null, predecessor: null},
  {name: '28th&Bwy', distance: null, predecessor: null},
  {name: '23rd&Bwy', distance: null, predecessor: null},
  {name: '14th&Lex', distance: null, predecessor: null},
  {name: '23rd&Lex', distance: null, predecessor: null},
]