function bfs(rootNode, vertices, edges){

}

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
    
