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

/*
    rootNode = vertices[0]
    queue = []
    addVertexToQueue(rootNode)
        // queue = [rootNode]
    while(!queue.length == 0) {
        let firstNode = queue.shift()
    adjacentVertices = findAdjacent(firstNode)
        for vertex in adjacentVertices {
            markDistanceAndPredecessor(vertex)
            addToQueue(vertex)
        }
    }

*/

function findAdjacent(node, vertices, edges) {
    let adjacents = [];
    let result = [];

    edges.forEach(edge => {
        if (edge[0] === node ) {adjacents.push(edge[1])}
        else if (edge[1] === node ) {adjacents.push(edge[0])}
    })

    vertices.forEach(node => {
        if ((node['name'] === adjacents[0] || node['name'] === adjacents[1]) && node['distance'] === null) {
            result.push(node);
        }
    });
    return result;
}

function bfs(rootNode, vertices, edges){

}
